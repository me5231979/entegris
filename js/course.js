/* Entegris course: light interactivity, no dependencies.
   State (choice, reflection notes, completion) goes to the LMS through the SCORM 1.2
   wrapper in launch.html when the course runs inside it. Outside an LMS it falls back
   to localStorage so the pages still work standalone. */
(function () {
  'use strict';

  var moduleId = document.body.getAttribute('data-module-id') || '';
  var scorm = null;
  try { if (window.parent && window.parent !== window && window.parent.EntegrisScorm) { scorm = window.parent.EntegrisScorm; } } catch (e) { scorm = null; }

  function load() {
    if (scorm && moduleId) { return scorm.getModuleState(moduleId) || {}; }
    try { return JSON.parse(localStorage.getItem(moduleId || 'entegris-course') || '{}'); } catch (e) { return {}; }
  }
  function save(s) {
    if (scorm && moduleId) { scorm.setModuleState(moduleId, s); return; }
    try { localStorage.setItem(moduleId || 'entegris-course', JSON.stringify(s)); } catch (e) { /* storage unavailable */ }
  }
  function moduleStateFor(id) {
    if (scorm) { return scorm.getModuleState(id) || {}; }
    try { return JSON.parse(localStorage.getItem(id) || '{}'); } catch (e) { return {}; }
  }
  var state = load();

  /* Options */
  Array.prototype.forEach.call(document.querySelectorAll('[data-options]'), function (group) {
    var buttons = group.querySelectorAll('.option');
    var feedbacks = group.parentNode.querySelectorAll('.feedback');

    function choose(key) {
      Array.prototype.forEach.call(buttons, function (b) {
        b.setAttribute('aria-pressed', b.getAttribute('data-option') === key ? 'true' : 'false');
      });
      Array.prototype.forEach.call(feedbacks, function (f) {
        f.hidden = f.getAttribute('data-feedback') !== key;
      });
      state.choice = key;
      save(state);
    }

    Array.prototype.forEach.call(buttons, function (b) {
      b.addEventListener('click', function () {
        choose(b.getAttribute('data-option'));
        var fb = group.parentNode.querySelector('.feedback:not([hidden])');
        if (fb) { fb.setAttribute('tabindex', '-1'); fb.focus(); }
      });
    });

    if (state.choice) { choose(state.choice); }
  });

  /* Reflection persistence */
  Array.prototype.forEach.call(document.querySelectorAll('textarea[data-reflect]'), function (ta) {
    var key = ta.getAttribute('data-reflect');
    if (state.reflect && state.reflect[key]) { ta.value = state.reflect[key]; }
    var timer = null;
    ta.addEventListener('input', function () {
      state.reflect = state.reflect || {};
      state.reflect[key] = ta.value;
      clearTimeout(timer);
      timer = setTimeout(function () { save(state); }, 400);
    });
    ta.addEventListener('blur', function () { clearTimeout(timer); save(state); });
  });

  /* Progress bar */
  var bar = document.querySelector('.progress-bar span');
  var label = document.querySelector('[data-progress-label]');
  var steps = document.querySelectorAll('.step');
  function pad2(n) { return String(n).padStart(2, '0'); }
  function updateProgress() {
    if (!bar || !steps.length) { return; }
    var mid = window.scrollY + window.innerHeight * 0.5;
    var reached = 0;
    Array.prototype.forEach.call(steps, function (s, i) { if (s.offsetTop <= mid) { reached = i + 1; } });
    bar.style.width = Math.round((reached / steps.length) * 100) + '%';
    if (label) { label.textContent = 'Step ' + pad2(Math.max(reached, 1)) + ' / ' + pad2(steps.length); }
  }
  window.addEventListener('scroll', updateProgress, { passive: true });
  window.addEventListener('resize', updateProgress);
  updateProgress();

  /* Completion */
  var completeBtn = document.querySelector('[data-complete]');
  var completeStatus = document.querySelector('.status-complete');
  function showComplete() {
    if (completeStatus) { completeStatus.hidden = false; }
    if (completeBtn) { completeBtn.setAttribute('aria-disabled', 'true'); completeBtn.textContent = 'Moment 1 complete'; }
  }
  if (completeBtn) {
    completeBtn.addEventListener('click', function () {
      if (completeBtn.getAttribute('aria-disabled') === 'true') { return; }
      state.complete = true;
      save(state);
      if (scorm) { scorm.markComplete(); }
      showComplete();
    });
    if (state.complete) { showComplete(); }
  }

  /* Course home: show completed chips */
  Array.prototype.forEach.call(document.querySelectorAll('[data-module-link]'), function (a) {
    var s = moduleStateFor(a.getAttribute('data-module-link'));
    if (s.complete) {
      var chip = a.querySelector('.chip');
      if (chip) { chip.textContent = 'Complete'; chip.className = 'chip chip--done'; }
    }
  });
})();
