/* SCORM 1.2 wrapper for the Entegris course.
   Loaded by launch.html, which owns the LMS session. Course pages run inside its iframe
   and talk to window.parent.EntegrisScorm. Without an LMS every call is a safe no-op
   and the pages fall back to localStorage. */
(function (global) {
  'use strict';

  var api = null;
  var initialised = false;
  var startTime = Date.now();
  var state = { modules: {}, complete: false };

  /* Walk up the window chain (and the opener) looking for window.API, per the SCORM 1.2 RTE. */
  function findApi(win) {
    var tries = 0;
    while (win && !win.API && win.parent && win.parent !== win && tries < 10) {
      win = win.parent; tries++;
    }
    return win && win.API ? win.API : null;
  }
  function locate() {
    var found = findApi(window);
    if (!found && window.opener && !window.opener.closed) { found = findApi(window.opener); }
    return found;
  }

  function get(name) {
    if (!initialised) { return ''; }
    try { return String(api.LMSGetValue(name)); } catch (e) { return ''; }
  }
  function set(name, value) {
    if (!initialised) { return false; }
    try { return api.LMSSetValue(name, String(value)) === 'true'; } catch (e) { return false; }
  }
  function commit() {
    if (!initialised) { return false; }
    try { return api.LMSCommit('') === 'true'; } catch (e) { return false; }
  }

  /* cmi.core.session_time wants HHHH:MM:SS.SS */
  function sessionTime() {
    var s = Math.floor((Date.now() - startTime) / 1000);
    var h = Math.floor(s / 3600), m = Math.floor((s % 3600) / 60), sec = s % 60;
    function pad(n) { return (n < 10 ? '0' : '') + n; }
    return pad(h) + ':' + pad(m) + ':' + pad(sec) + '.00';
  }

  function loadState() {
    var raw = get('cmi.suspend_data');
    if (raw) {
      try { var parsed = JSON.parse(raw); if (parsed && typeof parsed === 'object') { state = parsed; state.modules = state.modules || {}; } } catch (e) { /* keep default */ }
    }
    if (get('cmi.core.lesson_status') === 'completed') { state.complete = true; }
  }

  /* SCORM 1.2 caps suspend_data at 4096 characters. Trim reflection text if needed. */
  function serialise() {
    var json = JSON.stringify(state);
    if (json.length <= 4000) { return json; }
    var copy = JSON.parse(json);
    Object.keys(copy.modules).forEach(function (id) {
      var r = copy.modules[id].reflect || {};
      Object.keys(r).forEach(function (k) { r[k] = String(r[k]).slice(0, 600); });
    });
    json = JSON.stringify(copy);
    return json.length <= 4000 ? json : json.slice(0, 4000);
  }
  function saveState() {
    set('cmi.suspend_data', serialise());
    set('cmi.core.exit', 'suspend');
    commit();
  }

  var scorm = {
    connected: false,

    init: function () {
      api = locate();
      if (!api) { return false; }
      try { initialised = api.LMSInitialize('') === 'true'; } catch (e) { initialised = false; }
      if (!initialised) { return false; }
      scorm.connected = true;
      loadState();
      if (get('cmi.core.lesson_status') === 'not attempted') { set('cmi.core.lesson_status', 'incomplete'); }
      commit();
      return true;
    },

    learnerName: function () { return get('cmi.core.student_name'); },

    getModuleState: function (id) { return state.modules[id] || {}; },
    setModuleState: function (id, moduleState) {
      state.modules[id] = moduleState;
      saveState();
    },

    /* Course completion. With one live module, completing it completes the course.
       When more moments are added, call this only once every module reports complete. */
    markComplete: function () {
      state.complete = true;
      set('cmi.core.lesson_status', 'completed');
      set('cmi.core.score.raw', '100');
      set('cmi.core.score.min', '0');
      set('cmi.core.score.max', '100');
      saveState();
    },
    isComplete: function () { return !!state.complete; },

    finish: function () {
      if (!initialised) { return; }
      set('cmi.core.session_time', sessionTime());
      saveState();
      try { api.LMSFinish(''); } catch (e) { /* ignore */ }
      initialised = false;
    }
  };

  global.EntegrisScorm = scorm;
})(window);
