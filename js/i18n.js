/* Language registry, detection, and font loading. Course text lives in js/content/<code>.js.
   ENTG_I18N.apply(code) switches the language and dispatches 'entg:lang'; js/app.js re-renders. */
(function (global) {
  'use strict';

  var LANGS = [
    { code: 'en',      name: 'English',        dir: 'ltr' },
    { code: 'zh-Hans', name: '简体中文',         dir: 'ltr', font: 'Noto+Sans+SC:wght@300;400;600;700' },
    { code: 'zh-Hant', name: '繁體中文',         dir: 'ltr', font: 'Noto+Sans+TC:wght@300;400;600;700' },
    { code: 'fr',      name: 'Français',       dir: 'ltr' },
    { code: 'de',      name: 'Deutsch',        dir: 'ltr' },
    { code: 'he',      name: 'עברית',          dir: 'rtl', font: 'Noto+Sans+Hebrew:wght@300;400;600;700' },
    { code: 'ms',      name: 'Bahasa Melayu',  dir: 'ltr' },
    { code: 'ja',      name: '日本語',          dir: 'ltr', font: 'Noto+Sans+JP:wght@300;400;600;700' },
    { code: 'ko',      name: '한국어',          dir: 'ltr', font: 'Noto+Sans+KR:wght@300;400;600;700' }
  ];
  var KEY = 'entg-lang';
  var cur = 'en';

  function has(code) { return !!(global.ENTG_CONTENT && global.ENTG_CONTENT[code]); }
  function byCode(code) { for (var i = 0; i < LANGS.length; i++) { if (LANGS[i].code === code) { return LANGS[i]; } } return LANGS[0]; }

  function detect() {
    var cfg = global.ENTG_CONFIG || {};
    if (cfg.lockLang && cfg.defaultLang && has(cfg.defaultLang)) { return cfg.defaultLang; }
    var q = null;
    try { q = new URLSearchParams(global.location.search).get('lang'); } catch (e) { /* ignore */ }
    if (q && has(q)) { return q; }
    try { var saved = localStorage.getItem(KEY); if (saved && has(saved)) { return saved; } } catch (e) { /* ignore */ }
    var nav = String(navigator.language || 'en').toLowerCase();
    if (nav.indexOf('zh') === 0) { var zh = (/tw|hk|mo|hant/.test(nav)) ? 'zh-Hant' : 'zh-Hans'; return has(zh) ? zh : 'en'; }
    if (cfg.defaultLang && has(cfg.defaultLang)) { return cfg.defaultLang; }
    for (var i = 0; i < LANGS.length; i++) { if (nav.indexOf(LANGS[i].code.toLowerCase()) === 0 && has(LANGS[i].code)) { return LANGS[i].code; } }
    return 'en';
  }

  function loadFont(code) {
    var l = byCode(code);
    if (!l.font || document.getElementById('font-' + l.code)) { return; }
    var link = document.createElement('link');
    link.rel = 'stylesheet'; link.id = 'font-' + l.code;
    link.href = 'https://fonts.googleapis.com/css2?family=' + l.font + '&display=swap';
    document.head.appendChild(link);
  }

  function content() { return (global.ENTG_CONTENT && (global.ENTG_CONTENT[cur] || global.ENTG_CONTENT.en)) || { ui: {}, home: {}, lessons: [] }; }
  function fmt(str, vars) { return String(str || '').replace(/\{(\w+)\}/g, function (m, k) { return vars && vars[k] != null ? vars[k] : m; }); }

  function apply(code, silent) {
    if (!has(code)) { code = 'en'; }
    cur = code;
    var l = byCode(code);
    document.documentElement.setAttribute('lang', code);
    document.documentElement.setAttribute('dir', l.dir);
    Array.prototype.forEach.call(document.querySelectorAll('select[data-lang-select]'), function (sel) { sel.value = code; });
    loadFont(code);
    try { localStorage.setItem(KEY, code); } catch (e) { /* ignore */ }
    if (!silent) { try { document.dispatchEvent(new CustomEvent('entg:lang', { detail: { lang: code } })); } catch (e) { /* old browsers */ } }
  }

  function buildSelects() {
    var cfg = global.ENTG_CONFIG || {};
    if (cfg.lockLang) { Array.prototype.forEach.call(document.querySelectorAll('.lang'), function (l) { l.hidden = true; }); }
    Array.prototype.forEach.call(document.querySelectorAll('select[data-lang-select]'), function (sel) {
      if (sel.options.length) { return; }
      LANGS.forEach(function (l) {
        if (!has(l.code)) { return; }
        var o = document.createElement('option');
        o.value = l.code; o.textContent = l.name; o.setAttribute('lang', l.code);
        sel.appendChild(o);
      });
      sel.addEventListener('change', function () { apply(sel.value); });
    });
  }

  global.ENTG_I18N = {
    LANGS: LANGS, apply: apply, content: content, fmt: fmt,
    current: function () { return cur; }, dir: function () { return byCode(cur).dir; },
    init: function () { buildSelects(); apply(detect(), true); }
  };
})(window);
