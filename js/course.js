/* Entegris course: light interactivity, no dependencies.
   - Option selection reveals feedback.
   - Reflection answers persist per browser in localStorage (best effort).
   - Progress bar tracks how far the learner has scrolled through the steps.
   - Module completion is stored per browser. Replace with an LMS/SCORM call if needed. */
(function () {
  'use strict';

  var storageKey = document.body.getAttribute('data-module-id') || 'entegris-course';

  function load() {
    try { return JSON.parse(localStorage.getItem(storageKey) || '{}'); } catch (e) { return {}; }
  }
  function save(state) {
    try { localStorage.setItem(storageKey, JSON.stringify(state)); } catch (e) { /* storage unavailable */ }
  }
  var state = load();

  /* Options */
  var optionGroups = document.querySelectorAll('[data-options]');
  Array.prototype.forEach.call(optionGroups, function (group) {
    var buttons = group.querySelectorAll('.option');
    var feedbacks = group.parentNode.querySelectorAll('.feedback');
    var nextBtn = group.parentNode.querySelector('[data-requires-choice]');

    function choose(key) {
      Array.prototype.forEach.call(buttons, function (b) {
        b.setAttribute('aria-pressed', b.getAttribute('data-option') === key ? 'true' : 'false');
      });
      Array.prototype.forEach.call(feedbacks, function (f) {
        var show = f.getAttribute('data-feedback') === key;
        if (show) { f.removeAttribute('hidden'); } else { f.setAttribute('hidden', ''); }
      });
      if (nextBtn) { nextBtn.removeAttribute('aria-disabled'); }
      state.choice = key;
      save(state);
    }

    Array.prototype.forEach.call(buttons, function (b) {
      b.addEventListener('click', function () {
        choose(b.getAttribute('data-option'));
        var fb = group.parentNode.querySelector('.feedback:not([hidden])');
        if (fb) { fb.setAttribute('tabindex', '-1'); fb.focus({ preventScroll: false }); }
      });
    });

    if (state.choice) { choose(state.choice); }
  });

  /* Reflection persistence */
  var areas = document.querySelectorAll('textarea[data-reflect]');
  Array.prototype.forEach.call(areas, function (ta) {
    var key = ta.getAttribute('data-reflect');
    if (state.reflect && state.reflect[key]) { ta.value = state.reflect[key]; }
    ta.addEventListener('input', function () {
      state.reflect = state.reflect || {};
      state.reflect[key] = ta.value;
      save(state);
    });
  });

  /* Progress bar */
  var bar = document.querySelector('.progress-bar span');
  var label = document.querySelector('[data-progress-label]');
  var steps = document.querySelectorAll('.step');
  function updateProgress() {
    if (!bar || !steps.length) { return; }
    var mid = window.scrollY + window.innerHeight * 0.5;
    var reached = 0;
    Array.prototype.forEach.call(steps, function (s, i) {
      if (s.offsetTop <= mid) { reached = i + 1; }
    });
    var pct = Math.round((reached / steps.length) * 100);
    bar.style.width = pct + '%';
    if (label) { label.textContent = 'Step ' + Math.max(reached, 1) + ' of ' + steps.length; }
  }
  window.addEventListener('scroll', updateProgress, { passive: true });
  window.addEventListener('resize', updateProgress);
  updateProgress();

  /* Completion */
  var completeBtn = document.querySelector('[data-complete]');
  var completeStatus = document.querySelector('.status-complete');
  function markComplete() {
    state.complete = true;
    save(state);
    if (completeStatus) { completeStatus.removeAttribute('hidden'); }
    if (completeBtn) { completeBtn.setAttribute('aria-disabled', 'true'); completeBtn.textContent = 'Completed'; }
  }
  if (completeBtn) {
    completeBtn.addEventListener('click', function () {
      if (completeBtn.getAttribute('aria-disabled') === 'true') { return; }
      markComplete();
    });
    if (state.complete) { markComplete(); }
  }

  /* Course home: show completed badges */
  var links = document.querySelectorAll('[data-module-link]');
  Array.prototype.forEach.call(links, function (a) {
    var id = a.getAttribute('data-module-link');
    try {
      var s = JSON.parse(localStorage.getItem(id) || '{}');
      if (s.complete) {
        var m = a.querySelector('.meta');
        if (m) { m.textContent = 'Completed'; m.style.color = 'var(--color-success)'; }
      }
    } catch (e) { /* ignore */ }
  });
})();
