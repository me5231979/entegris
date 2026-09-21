/* Course app: hash router, block renderer, progress, and interactions.
   Content comes from ENTG_CONTENT (js/content/*.js) via ENTG_I18N.
   Progress goes to the SCORM wrapper in launch.html when framed by it, else localStorage. */
(function () {
  'use strict';

  var I = window.ENTG_I18N;
  var scorm = null;
  try { if (window.parent && window.parent !== window && window.parent.EntegrisScorm) { scorm = window.parent.EntegrisScorm; } } catch (e) { scorm = null; }

  /* ---------- State ---------- */
  var STORE = 'entg-glp-course';
  function loadAll() {
    if (scorm) { return scorm.getModuleState('course') || {}; }
    try { return JSON.parse(localStorage.getItem(STORE) || '{}'); } catch (e) { return {}; }
  }
  function saveAll(s) {
    if (scorm) { scorm.setModuleState('course', s); return; }
    try { localStorage.setItem(STORE, JSON.stringify(s)); } catch (e) { /* unavailable */ }
  }
  var state = loadAll();
  state.lessons = state.lessons || {};
  function ls(id) { state.lessons[id] = state.lessons[id] || {}; return state.lessons[id]; }
  function persist() { saveAll(state); }

  /* ---------- Helpers ---------- */
  function el(tag, attrs, children) {
    var n = document.createElement(tag);
    if (attrs) { Object.keys(attrs).forEach(function (k) {
      if (k === 'html') { n.innerHTML = attrs[k]; }
      else if (k === 'text') { n.textContent = attrs[k]; }
      else if (k === 'class') { n.className = attrs[k]; }
      else { n.setAttribute(k, attrs[k]); }
    }); }
    (children || []).forEach(function (c) { if (c) { n.appendChild(typeof c === 'string' ? document.createTextNode(c) : c); } });
    return n;
  }
  function svg(markup) { var d = document.createElement('div'); d.innerHTML = markup.trim(); return d.firstChild; }
  function pad2(n) { return String(n).padStart(2, '0'); }
  function ui(k) { return (I.content().ui || {})[k] || ''; }
  function lessons() { return I.content().lessons || []; }
  function pctComplete() {
    var L = lessons(); if (!L.length) { return 0; }
    var done = L.filter(function (l) { return ls(l.id).complete; }).length;
    return Math.round(done / L.length * 100);
  }
  function drawMeshes(root) { if (window.ENTG_MESH) { Array.prototype.forEach.call(root.querySelectorAll('canvas.mesh'), window.ENTG_MESH.draw); } }

  var WATERMARK = '<svg class="watermark" viewBox="0 0 1200 600" preserveAspectRatio="xMaxYMid slice" aria-hidden="true"><ellipse cx="880" cy="300" rx="330" ry="170" transform="rotate(-24 880 300)"/><ellipse cx="1010" cy="380" rx="330" ry="170" transform="rotate(-24 1010 380)"/></svg>';
  var PLAY = '<svg viewBox="0 0 72 72" aria-hidden="true"><circle cx="36" cy="36" r="34"/><path d="M29 23l20 13-20 13z"/></svg>';
  var ICONS = {
    talent: '<svg viewBox="0 0 48 48"><circle cx="18" cy="14" r="5"/><path d="M8 34c0-6 4-10 10-10s10 4 10 10"/><path d="M34 12l6 6-6 6M40 18h-12"/><path d="M30 34h12v8H30z"/></svg>',
    globe: '<svg viewBox="0 0 48 48"><circle cx="24" cy="24" r="12"/><path d="M12 24h24M24 12c5 6 5 18 0 24M24 12c-5 6-5 18 0 24"/><circle cx="8" cy="10" r="3"/><circle cx="40" cy="10" r="3"/><circle cx="8" cy="38" r="3"/><circle cx="40" cy="38" r="3"/></svg>',
    bulb: '<svg viewBox="0 0 48 48"><path d="M17 30a10 10 0 1 1 14 0c-2 2-3 4-3 6H20c0-2-1-4-3-6z"/><path d="M20 40h8M22 44h4"/><path d="M24 4v4M8 14l3 2M40 14l-3 2"/></svg>',
    shield: '<svg viewBox="0 0 48 48"><path d="M24 6l14 5v12c0 9-6 15-14 19-8-4-14-10-14-19V11z"/><path d="M17 24l5 5 9-10"/></svg>',
    flag: '<svg viewBox="0 0 48 48"><path d="M14 44V8"/><path d="M14 10h20l-4 6 4 6H14"/><circle cx="14" cy="6" r="2"/><path d="M8 44h12"/></svg>',
    hand: '<svg viewBox="0 0 48 48"><circle cx="24" cy="12" r="5"/><path d="M6 32c6-4 10-4 14-2l6 2c2 1 2 4 0 4h-8"/><path d="M18 36l10 2c4 0 8-2 14-6"/></svg>',
    gauge: '<svg viewBox="0 0 48 48"><path d="M8 32a16 16 0 0 1 32 0"/><path d="M24 32l8-10"/><circle cx="24" cy="32" r="2"/><path d="M6 40h36M10 44h28"/></svg>'
  };

  /* ---------- Rendering ---------- */
  var main = document.getElementById('main');
  var sidebarNav = document.getElementById('lesson-nav');

  function renderSidebar(activeId) {
    var C = I.content(); var L = lessons();
    document.getElementById('sb-title').textContent = C.ui.courseTitle;
    document.getElementById('sb-subtitle').textContent = C.ui.courseSubtitle;
    document.getElementById('sb-pct').textContent = I.fmt(C.ui.percentComplete, { p: pctComplete() });
    document.getElementById('sb-bar').style.width = pctComplete() + '%';
    document.getElementById('sb-home').textContent = C.ui.home;
    document.getElementById('menu-label').textContent = C.ui.menu;
    document.getElementById('lang-label').textContent = C.ui.language;
    document.getElementById('skip-link').textContent = C.ui.skip;
    document.getElementById('ftr-copy').textContent = C.ui.footerCopy;
    document.getElementById('ftr-internal').textContent = C.ui.footerInternal;
    sidebarNav.innerHTML = '';
    L.forEach(function (l, i) {
      var s = ls(l.id);
      var a = el('a', { href: '#/lesson/' + (i + 1), class: (l.id === activeId ? 'is-active ' : '') + (s.complete ? 'is-complete' : (s.started ? 'is-started' : '')) }, [
        el('span', { class: 'num', text: pad2(i + 1) }),
        el('span', { class: 'label', text: l.title }),
        svg('<svg class="status" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><circle class="arc" cx="12" cy="12" r="9"/><circle class="check" cx="12" cy="12" r="10"/><path class="tick" d="M7.5 12.5l3 3 6-7"/></svg>')
      ]);
      a.setAttribute('aria-current', l.id === activeId ? 'page' : 'false');
      a.setAttribute('aria-label', I.fmt(C.ui.lessonOf, { a: i + 1, b: L.length }) + ': ' + l.title + (s.complete ? ' (' + C.ui.complete + ')' : ''));
      sidebarNav.appendChild(el('li', null, [a]));
    });
  }

  function renderHome() {
    var C = I.content(); var H = C.home; var L = lessons();
    var anyStarted = L.some(function (l) { return ls(l.id).started || ls(l.id).complete; });
    var firstOpen = L.findIndex(function (l) { return !ls(l.id).complete; });
    var startHref = '#/lesson/' + ((firstOpen === -1 ? 0 : firstOpen) + 1);

    var hero = el('section', { class: 'hero', 'aria-labelledby': 'home-title' }, [
      svg('<canvas class="mesh" data-tone="blue" aria-hidden="true"></canvas>'),
      el('div', { class: 'fade' }),
      el('div', { class: 'wrap' }, [
        el('span', { class: 'eyebrow cond', text: C.ui.heroEyebrow }),
        el('h1', { id: 'home-title', text: H.title }),
        el('p', { class: 'sub', text: H.subtitle }),
        el('p', { class: 'lede', text: H.tagline }),
        el('div', { class: 'hero-actions' }, [
          el('a', { class: 'btn btn--dark', href: startHref, text: anyStarted ? C.ui.resumeCourse : C.ui.startCourse }),
          el('a', { class: 'btn btn--outline', href: '#outline', text: C.ui.outline })
        ])
      ]),
      svg('<svg class="slash" viewBox="0 0 1200 70" preserveAspectRatio="none" aria-hidden="true"><polygon points="0,70 1200,10 1200,70"/></svg>')
    ]);

    var intro = el('section', { class: 'band' }, [
      el('div', { class: 'wrap narrow section-title' }, [
        el('h2', { text: H.subtitle }),
        el('span', { class: 'rule rule--center' }),
        el('p', { class: 'lede', text: H.intro }),
        el('ul', { class: 'facts' }, (H.facts || []).map(function (f) { return el('li', null, [el('span', { class: 'k cond', text: f.k }), el('span', { class: 'v', text: f.v })]); }))
      ])
    ]);

    var outlineBand = el('section', { class: 'band band--teal notch', id: 'outline' }, [
      svg(WATERMARK),
      el('div', { class: 'wrap section-title', style: 'position:relative' }, [
        el('h2', { text: C.ui.outline }),
        el('span', { class: 'rule rule--center' }),
        el('p', { class: 'lede', text: I.fmt(C.ui.percentComplete, { p: pctComplete() }) })
      ])
    ]);

    var cards = el('section', { class: 'band band--warm' }, [
      el('div', { class: 'wrap' }, [
        el('ol', { class: 'cards' }, L.map(function (l, i) {
          var s = ls(l.id);
          var chip = s.complete ? 'complete' : (s.started ? 'started' : 'none');
          var chipText = s.complete ? C.ui.complete : (s.started ? C.ui.inProgress : C.ui.notStarted);
          return el('li', null, [el('a', { class: 'card', href: '#/lesson/' + (i + 1) }, [
            el('div', { class: 'card-img' }, [svg('<canvas class="mesh" data-tone="' + (i % 2 ? 'teal' : 'blue') + '" data-seed="' + (i + 3) + '" aria-hidden="true"></canvas>'), el('span', { class: 'ribbon', text: I.fmt(C.ui.lessonOf, { a: i + 1, b: L.length }) }), el('span', { class: 'num', text: pad2(i + 1), 'aria-hidden': 'true' })]),
            el('div', { class: 'card-body' }, [el('h3', { text: l.title })]),
            el('div', { class: 'card-foot' }, [el('span', { class: 'status-chip cond status-chip--' + chip, text: chipText })])
          ])]);
        }))
      ])
    ]);

    main.innerHTML = '';
    main.appendChild(hero); main.appendChild(intro); main.appendChild(outlineBand); main.appendChild(cards);
    if (pctComplete() === 100) {
      main.appendChild(el('section', { class: 'band band--red' }, [svg(WATERMARK), el('div', { class: 'wrap complete-band', style: 'position:relative' }, [el('h2', { text: C.ui.courseCompleted }), el('span', { class: 'rule rule--center' }), el('p', { class: 'lede', text: C.ui.thatsAWrap })])]));
    }
    document.title = C.home.title;
    drawMeshes(main);
  }

  function blockVideo(b, C) {
    return el('div', { class: 'block block--video' }, [el('div', { class: 'video', 'data-video': b.id, role: 'img', 'aria-label': C.ui.videoPlaceholder + ': ' + b.title }, [
      svg('<canvas class="mesh" data-tone="teal" data-seed="11" aria-hidden="true"></canvas>'),
      el('span', { class: 'ribbon', text: C.ui.videoPlaceholder + ' · ' + b.id }),
      el('div', { class: 'play' }, [svg(PLAY), el('span', { class: 'vt', text: b.title }), el('span', { class: 'vn cond', text: C.ui.captions })])
    ])]);
  }

  function blockCharacteristics(b) {
    var W = 1000, H = 740, cx = 500, cy = 370, R = 190, LD = 262, LH = 16, ICO = 48;
    function esc(t) { return String(t).replace(/&/g, '&amp;').replace(/</g, '&lt;'); }
    var parts = ['<svg viewBox="0 0 ' + W + ' ' + H + '" role="img" aria-label="' + esc(b.center) + ': ' + esc(b.sub) + '">'];
    parts.push('<circle class="dots" cx="' + cx + '" cy="' + cy + '" r="' + R + '"/>');
    b.items.forEach(function (it, i) {
      var ang = -Math.PI / 2 + i * (Math.PI * 2 / b.items.length);
      var c = Math.cos(ang), sn = Math.sin(ang);
      var nx = cx + c * R, ny = cy + sn * R, lx = cx + c * LD, ly = cy + sn * LD;
      var anchor = Math.abs(c) < 0.25 ? 'middle' : (c > 0 ? 'start' : 'end');
      var tx = anchor === 'middle' ? lx : (anchor === 'start' ? lx + 12 : lx - 12);
      var words = it.name.split(' '), lines = [], line = '';
      words.forEach(function (w) { if ((line + ' ' + w).trim().length > 22) { lines.push(line.trim()); line = w; } else { line += ' ' + w; } });
      lines.push(line.trim());
      var n = lines.length, firstY, iy;
      if (sn < -0.3) { firstY = ly - 6 - (n - 1) * LH; iy = firstY - 14 - ICO; }
      else if (sn > 0.3) { firstY = ly + 20; iy = firstY + (n - 1) * LH + 12; }
      else { firstY = ly - (n - 1) * LH / 2 + 5; iy = firstY - 14 - ICO; }
      var ix = anchor === 'middle' ? lx - ICO / 2 : (anchor === 'start' ? tx : tx - ICO);
      parts.push('<line class="spoke" x1="' + nx + '" y1="' + ny + '" x2="' + lx + '" y2="' + ly + '"/>');
      parts.push('<circle class="node" cx="' + nx + '" cy="' + ny + '" r="13"/>');
      parts.push('<text class="lbl" x="' + tx + '" y="' + firstY + '" text-anchor="' + anchor + '">' + lines.map(function (l, j) { return '<tspan x="' + tx + '" dy="' + (j ? LH : 0) + '">' + esc(l) + '</tspan>'; }).join('') + '</text>');
      parts.push('<g class="ico" transform="translate(' + ix + ' ' + iy + ')">' + (ICONS[it.icon] || '').replace('<svg viewBox="0 0 48 48">', '').replace('</svg>', '') + '</g>');
    });
    parts.push('<circle class="center" cx="' + cx + '" cy="' + cy + '" r="92"/>');
    parts.push('<text class="center-word" x="' + cx + '" y="' + (cy + 8) + '" text-anchor="middle">' + esc(b.center) + '</text>');
    parts.push('<text class="center-sub" x="' + cx + '" y="' + (cy + 34) + '" text-anchor="middle">' + esc(b.sub) + '</text>');
    parts.push('</svg>');
    var diagram = el('div', { class: 'chars-diagram', html: parts.join('') });
    var list = el('ul', { class: 'chars-list' }, b.items.map(function (it) { return el('li', null, [svg(ICONS[it.icon] || ICONS.shield), el('div', null, [el('span', { class: 'name cond', text: it.name }), el('span', { class: 'desc', text: it.desc })])]); }));
    return el('div', { class: 'block block--chars chars' }, [diagram, list]);
  }

  function blockFlashcards(b, lesson, C) {
    var src = b.items || ((lesson.blocks.filter(function (x) { return x.type === 'characteristics'; })[0] || {}).items) || [];
    return el('div', { class: 'block' }, [el('ul', { class: 'flashcards' }, src.map(function (it) {
      var li = el('li', { class: 'flashcard' });
      var btn = el('button', { type: 'button', 'aria-pressed': 'false', 'aria-label': it.name + '. ' + C.ui.flip }, [
        el('span', { class: 'face face--front' }, [svg('<svg class="flip" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 12a8 8 0 0 1 14-5l2 2M20 12a8 8 0 0 1-14 5l-2-2"/><path d="M20 4v5h-5M4 20v-5h5"/></svg>'), el('span', { class: 'name', text: it.name })]),
        el('span', { class: 'face face--back' }, [svg('<svg class="flip" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 12a8 8 0 0 1 14-5l2 2M20 12a8 8 0 0 1-14 5l-2-2"/><path d="M20 4v5h-5M4 20v-5h5"/></svg>'), el('span', { class: 'desc', text: it.desc })])
      ]);
      btn.addEventListener('click', function () { var on = li.classList.toggle('is-flipped'); btn.setAttribute('aria-pressed', on ? 'true' : 'false'); });
      li.appendChild(btn); return li;
    }))]);
  }

  function blockScenario(b, lesson, C) {
    var s = ls(lesson.id); s.choices = s.choices || {};
    var wrap = el('div', { class: 'block scenario' }, [
      el('span', { class: 'eyebrow cond', text: C.ui.yourChoice }),
      el('p', { class: 'prompt', text: b.prompt }),
      el('p', { class: 'muted', text: C.ui.pickClosest })
    ]);
    var list = el('ul', { class: 'options', 'aria-label': C.ui.chooseResponse });
    var fbs = {};
    b.options.forEach(function (o) {
      var btn = el('button', { class: 'option', type: 'button', 'data-key': o.key, 'aria-pressed': 'false' }, [
        el('span', { class: 'ribbon', text: o.key.toUpperCase() }),
        el('span', { class: 'ot', text: o.title }),
        el('p', { text: o.text }),
        el('span', { class: 'pick cond', text: I.fmt(C.ui.select, { x: o.key.toUpperCase() }) })
      ]);
      btn.addEventListener('click', function () { choose(o.key); fbs[o.key].setAttribute('tabindex', '-1'); fbs[o.key].focus(); });
      list.appendChild(el('li', null, [btn]));
      fbs[o.key] = el('div', { class: 'feedback', hidden: '' }, [svg(WATERMARK), el('span', { class: 'tag cond' + (o.good ? ' tag--good' : ''), text: o.key.toUpperCase() + ' · ' + o.tag }), el('h3', { text: o.title }), el('p', { text: o.feedback })]);
    });
    wrap.appendChild(list);
    Object.keys(fbs).forEach(function (k) { wrap.appendChild(fbs[k]); });
    function choose(key) {
      Array.prototype.forEach.call(list.querySelectorAll('.option'), function (btn) {
        var on = btn.getAttribute('data-key') === key;
        btn.setAttribute('aria-pressed', on ? 'true' : 'false');
        btn.querySelector('.pick').textContent = on ? C.ui.selected : I.fmt(C.ui.select, { x: btn.getAttribute('data-key').toUpperCase() });
      });
      Object.keys(fbs).forEach(function (k) { fbs[k].hidden = k !== key; });
      s.choices[b.id] = key; s.started = true; persist();
    }
    if (s.choices[b.id]) { choose(s.choices[b.id]); }
    return wrap;
  }

  function blockReflect(b, lesson, C) {
    var s = ls(lesson.id); s.notes = s.notes || {};
    var list = el('ol', { class: 'qlist' }, b.questions.map(function (q, i) {
      var id = 'q-' + b.id + '-' + i;
      var ta = el('textarea', { id: id, 'data-note': b.id + '-' + i });
      ta.value = s.notes[b.id + '-' + i] || '';
      var timer = null;
      ta.addEventListener('input', function () { s.notes[b.id + '-' + i] = ta.value; s.started = true; clearTimeout(timer); timer = setTimeout(persist, 400); });
      ta.addEventListener('blur', function () { clearTimeout(timer); persist(); });
      return el('li', null, [el('label', { for: id, text: q.q }), ta, el('p', { class: 'hint', text: q.hint })]);
    }));
    return el('div', { class: 'block reflect' }, [el('span', { class: 'eyebrow cond', text: C.ui.reflect }), el('h2', { text: b.title }), el('p', { text: b.intro }), el('p', { class: 'muted', text: C.ui.notesLocal }), list, printButton(C)]);
  }

  function blockGodo(b, lesson, C) {
    var s = ls(lesson.id); s.notes = s.notes || {};
    var list = el('ol', { class: 'qlist' }, b.labels.map(function (label, i) {
      var id = 'godo-' + i;
      var inp = el('input', { type: 'text', id: id, placeholder: b.placeholders[i] || '' });
      inp.value = s.notes['godo-' + i] || '';
      inp.addEventListener('input', function () { s.notes['godo-' + i] = inp.value; s.started = true; persist(); });
      return el('li', null, [el('label', { for: id, text: label }), inp]);
    }));
    return el('div', { class: 'block reflect' }, [el('span', { class: 'eyebrow cond', text: C.ui.reflect }), el('h2', { text: b.title }), el('p', { text: b.intro }), list, printButton(C)]);
  }

  /* ---------- Print my notes ---------- */
  function printButton(C) {
    var btn = el('button', { class: 'btn btn--outline btn--small', type: 'button' }, [
      svg('<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 9V3h12v6M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><path d="M6 14h12v7H6z"/></svg>'),
      el('span', { text: C.ui.printNotes })
    ]);
    btn.addEventListener('click', function () { printNotes(); });
    return el('div', { class: 'actions' }, [btn]);
  }

  function printNotes() {
    var C = I.content(); var L = lessons();
    var box = document.getElementById('print-notes');
    if (!box) { box = el('section', { id: 'print-notes', 'aria-hidden': 'true' }); document.body.appendChild(box); }
    box.innerHTML = '';
    var logo = document.querySelector('.logo img');
    if (logo) { box.appendChild(el('img', { src: logo.getAttribute('src'), alt: 'Entegris' })); }
    box.appendChild(el('h1', { text: C.ui.printTitle }));
    box.appendChild(el('p', { class: 'sub', text: C.ui.courseTitle + ' · ' + C.ui.courseSubtitle }));
    var learner = scorm && scorm.learnerName ? scorm.learnerName() : '';
    box.appendChild(el('p', { class: 'meta', text: (learner ? learner + ' · ' : '') + new Date().toLocaleDateString(I.current()) }));
    function answer(v) { return v && String(v).trim() ? el('p', { class: 'answer', text: v }) : el('p', { class: 'answer empty', text: C.ui.noAnswer }); }
    L.forEach(function (lesson, i) {
      var s = ls(lesson.id); var notes = s.notes || {}; var choices = s.choices || {};
      var parts = [];
      lesson.blocks.forEach(function (b) {
        if (b.type === 'scenario') {
          var key = choices[b.id]; var opt = null;
          b.options.forEach(function (o) { if (o.key === key) { opt = o; } });
          parts.push(el('div', { class: 'label', text: C.ui.myChoice }));
          parts.push(el('h3', { text: b.prompt }));
          parts.push(opt ? el('p', { class: 'answer', text: opt.key.toUpperCase() + ' · ' + opt.title + ': ' + opt.feedback }) : el('p', { class: 'answer empty', text: C.ui.noAnswer }));
        }
        if (b.type === 'reflect') {
          parts.push(el('div', { class: 'label', text: C.ui.reflect }));
          parts.push(el('h3', { text: b.title }));
          b.questions.forEach(function (q, qi) { parts.push(el('p', { html: '<strong>' + String(qi + 1) + '. </strong>' + q.q.replace(/</g, '&lt;') })); parts.push(answer(notes[b.id + '-' + qi])); });
        }
        if (b.type === 'godo') {
          parts.push(el('div', { class: 'label', text: C.ui.reflect }));
          parts.push(el('h3', { text: b.title }));
          b.labels.forEach(function (label, li) { parts.push(el('p', { html: '<strong>' + label.replace(/</g, '&lt;') + '</strong>' })); parts.push(answer(notes['godo-' + li])); });
        }
      });
      if (parts.length) {
        var sec = el('div', { class: 'print-lesson' }, [el('h2', { text: I.fmt(C.ui.lessonOf, { a: i + 1, b: L.length }) + ' · ' + lesson.title })]);
        parts.forEach(function (x) { sec.appendChild(x); });
        box.appendChild(sec);
      }
    });
    var prev = document.title; document.title = C.ui.printTitle + ' · ' + C.ui.courseTitle;
    window.print();
    setTimeout(function () { document.title = prev; }, 1000);
  }

  function renderBlock(b, lesson, C) {
    switch (b.type) {
      case 'heading': return el('div', { class: 'block block--heading' }, [el('h2', { text: b.text }), el('span', { class: 'rule' })]);
      case 'text': return el('div', { class: 'block block--text' }, [el('p', { html: b.html })]);
      case 'video': return blockVideo(b, C);
      case 'objectives': return el('div', { class: 'block' }, [el('ol', { class: 'objectives', 'aria-label': C.ui.objectives }, b.items.map(function (t) { return el('li', null, [el('span', { text: t })]); }))]);
      case 'accordion': return el('div', { class: 'block accordion' }, b.items.map(function (it) { return el('details', null, [el('summary', { text: it.title }), el('div', { class: 'acc-body', html: it.html })]); }));
      case 'download': return el('div', { class: 'block' }, [el('a', { class: 'download', href: b.href, download: '' }, [el('span', { class: 'ico', text: 'PPTX', 'aria-hidden': 'true' }), el('span', null, [el('span', { class: 'name', text: b.name }), el('span', { class: 'meta', text: b.meta })]), svg('<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4v11M7 11l5 5 5-5M5 20h14"/></svg>'), el('span', { class: 'sr-only', text: C.ui.download })])]);
      case 'characteristics': return blockCharacteristics(b);
      case 'flashcards': return blockFlashcards(b, lesson, C);
      case 'scenario': return blockScenario(b, lesson, C);
      case 'reflect': return blockReflect(b, lesson, C);
      case 'godo': return blockGodo(b, lesson, C);
      case 'quote': return el('div', { class: 'block quote' }, [el('span', { class: 'rule rule--center' }), el('p', { text: b.text })]);
      default: return el('div', { class: 'block', text: '' });
    }
  }

  function renderLesson(n) {
    var C = I.content(); var L = lessons();
    var idx = Math.min(Math.max(n, 1), L.length) - 1; var lesson = L[idx];
    if (!lesson) { location.hash = '#/'; return; }
    var s = ls(lesson.id); if (!s.started) { s.started = true; persist(); }

    var article = el('article', { class: 'lesson' }, [el('div', { class: 'wrap' })]);
    var w = article.firstChild;
    w.appendChild(el('div', { class: 'lesson-head' }, [
      el('span', { class: 'eyebrow cond', text: I.fmt(C.ui.lessonOf, { a: idx + 1, b: L.length }) }),
      el('h1', { id: 'lesson-title', tabindex: '-1', text: lesson.title }),
      el('span', { class: 'rule' })
    ]));
    if (C.ui.translationNote) { w.appendChild(el('p', { class: 'translation-note', text: C.ui.translationNote })); }
    lesson.blocks.forEach(function (b) { w.appendChild(renderBlock(b, lesson, C)); });

    var isLast = idx === L.length - 1;
    var nav = el('div', { class: 'lesson-nav-btns' });
    var btn = (isLast && s.complete)
      ? el('a', { class: 'btn btn--red btn--block', href: '#/', text: C.ui.backToOutline })
      : el('button', { class: 'btn btn--red btn--block', type: 'button', text: isLast ? C.ui.completeCourse : C.ui.continueBtn });
    btn.addEventListener('click', function () {
      if (btn.tagName === 'A') { return; }
      s.complete = true; persist();
      if (scorm && pctComplete() === 100) { scorm.markComplete(); }
      if (isLast) { location.hash = '#/'; } else { location.hash = '#/lesson/' + (idx + 2); }
    });
    nav.appendChild(btn);
    if (s.complete) { nav.appendChild(el('span', { class: 'done-note', text: '✓ ' + C.ui.complete })); }
    var row = el('div', { class: 'row' }, [
      idx > 0 ? el('a', { href: '#/lesson/' + idx, text: '‹ ' + C.ui.prev }) : el('a', { href: '#/', text: '‹ ' + C.ui.home }),
      !isLast ? el('a', { href: '#/lesson/' + (idx + 2), text: C.ui.next + ' ›' }) : el('a', { href: '#/', text: C.ui.backToOutline + ' ›' })
    ]);
    nav.appendChild(row);
    w.appendChild(nav);

    main.innerHTML = ''; main.appendChild(article);
    document.title = lesson.short + ' · ' + C.ui.courseTitle;
    drawMeshes(main);
  }

  /* ---------- Router ---------- */
  var lastRoute = null;
  function route() {
    var h = location.hash || '#/';
    var m = h.match(/^#\/lesson\/(\d+)/);
    var active = null;
    if (m) { var n = parseInt(m[1], 10); renderLesson(n); active = (lessons()[n - 1] || {}).id; }
    else if (h === '#outline') { renderHome(); }
    else { renderHome(); }
    renderSidebar(active);
    closeSidebar();
    if (h !== lastRoute) {
      if (h === '#outline') { var o = document.getElementById('outline'); if (o) { o.scrollIntoView(); } }
      else { window.scrollTo(0, 0); var t = document.getElementById('lesson-title'); if (t) { t.focus({ preventScroll: true }); } }
    }
    lastRoute = h;
  }

  /* ---------- Sidebar toggle (mobile) ---------- */
  var sidebar = document.getElementById('sidebar');
  var menuBtn = document.getElementById('menu-btn');
  function closeSidebar() { sidebar.classList.remove('is-open'); menuBtn.setAttribute('aria-expanded', 'false'); }
  menuBtn.addEventListener('click', function () { var open = sidebar.classList.toggle('is-open'); menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false'); if (open) { sidebar.querySelector('a').focus(); } });
  document.getElementById('sb-close').addEventListener('click', closeSidebar);
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') { closeSidebar(); } });

  document.addEventListener('entg:lang', function () { lastRoute = null; route(); });
  window.addEventListener('hashchange', route);
  I.init();
  route();
})();
