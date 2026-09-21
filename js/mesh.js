/* Generative network-wave background, drawn once per resize on any canvas.mesh.
   Stands in for the faded photography on entegris.com until real imagery is supplied.
   Colours: deep blue to teal ground, light cyan lines and nodes, a few brand-red nodes.
   Static by design: no animation, so it respects reduced-motion preferences by default. */
(function () {
  'use strict';

  function draw(canvas) {
    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    var w = canvas.clientWidth, h = canvas.clientHeight;
    if (!w || !h) { return; }
    canvas.width = Math.round(w * dpr); canvas.height = Math.round(h * dpr);
    var ctx = canvas.getContext('2d');
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    var tone = canvas.getAttribute('data-tone') || 'blue';
    var g = ctx.createLinearGradient(0, 0, w, h);
    if (tone === 'teal') { g.addColorStop(0, '#1F6A86'); g.addColorStop(0.6, '#2A7A97'); g.addColorStop(1, '#154D74'); }
    else { g.addColorStop(0, '#12285E'); g.addColorStop(0.55, '#1D4A9C'); g.addColorStop(1, '#2A7A97'); }
    ctx.fillStyle = g; ctx.fillRect(0, 0, w, h);

    /* Deterministic pseudo-random so the picture is stable across redraws. */
    var seed = parseInt(canvas.getAttribute('data-seed') || '7', 10) || 7;
    function rnd() { seed = (seed * 16807) % 2147483647; return (seed - 1) / 2147483646; }

    var baseY = h * 0.58, amp = h * 0.16;
    function wave(x, k) { return baseY + Math.sin(x / w * Math.PI * 2 * 1.3 + k) * amp + Math.sin(x / w * Math.PI * 6 + k * 2) * amp * 0.25; }

    /* Flowing ribbon lines */
    ctx.lineWidth = 0.6;
    for (var i = 0; i < 46; i++) {
      var k = i * 0.09;
      var red = i % 11 === 0;
      ctx.strokeStyle = red ? 'rgba(232,90,110,0.35)' : 'rgba(120,200,255,' + (0.10 + (i % 5) * 0.03) + ')';
      ctx.beginPath();
      for (var x = -20; x <= w + 20; x += 8) {
        var y = wave(x, k) + (i - 23) * 1.6;
        if (x === -20) { ctx.moveTo(x, y); } else { ctx.lineTo(x, y); }
      }
      ctx.stroke();
    }

    /* Nodes along the wave with vertical stems and neighbour links */
    var nodes = [];
    var count = Math.max(28, Math.round(w / 34));
    for (var n = 0; n < count; n++) {
      var nx = (n + rnd() * 0.8) * (w / count);
      var ny = wave(nx, 1.2) + (rnd() - 0.5) * h * 0.28;
      nodes.push({ x: nx, y: ny, r: 2 + rnd() * 2.5, red: rnd() < 0.08, stem: rnd() < 0.35 ? 40 + rnd() * 80 : 0 });
    }
    ctx.lineWidth = 0.8;
    for (var a = 0; a < nodes.length; a++) {
      for (var b = a + 1; b < nodes.length; b++) {
        var dx = nodes[a].x - nodes[b].x, dy = nodes[a].y - nodes[b].y, d = Math.sqrt(dx * dx + dy * dy);
        if (d < w / 9) {
          ctx.strokeStyle = 'rgba(140,215,255,' + (0.35 * (1 - d / (w / 9))).toFixed(3) + ')';
          ctx.beginPath(); ctx.moveTo(nodes[a].x, nodes[a].y); ctx.lineTo(nodes[b].x, nodes[b].y); ctx.stroke();
        }
      }
    }
    nodes.forEach(function (p) {
      if (p.stem) {
        ctx.strokeStyle = p.red ? 'rgba(232,90,110,0.6)' : 'rgba(140,215,255,0.5)';
        ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(p.x, p.y - p.stem); ctx.stroke();
        ctx.fillStyle = p.red ? '#E85A6E' : '#9ADCFF';
        ctx.beginPath(); ctx.arc(p.x, p.y - p.stem, p.r * 0.9, 0, Math.PI * 2); ctx.fill();
      }
      ctx.fillStyle = p.red ? '#E85A6E' : '#7FD0FF';
      ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2); ctx.fill();
    });

    /* Soft light bloom */
    var bloom = ctx.createRadialGradient(w * 0.8, h * 0.3, 0, w * 0.8, h * 0.3, w * 0.5);
    bloom.addColorStop(0, 'rgba(90,170,230,0.35)'); bloom.addColorStop(1, 'rgba(90,170,230,0)');
    ctx.fillStyle = bloom; ctx.fillRect(0, 0, w, h);
  }

  function drawAll() { Array.prototype.forEach.call(document.querySelectorAll("canvas.mesh"), draw); }
  window.ENTG_MESH = { draw: draw, drawAll: drawAll };
  var timer = null;
  window.addEventListener('resize', function () { clearTimeout(timer); timer = setTimeout(drawAll, 120); });
  if (document.readyState === 'loading') { document.addEventListener('DOMContentLoaded', drawAll); } else { drawAll(); }
})();
