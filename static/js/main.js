/* UniMPA project page — tabs, nav highlighting, copy button */
(function () {
  'use strict';

  /* ---- result tabs ---- */
  var tabs = document.querySelectorAll('.tab');
  Array.prototype.forEach.call(tabs, function (tab) {
    tab.addEventListener('click', function () {
      var target = tab.getAttribute('data-tab');
      Array.prototype.forEach.call(tabs, function (t) { t.classList.remove('is-active'); });
      Array.prototype.forEach.call(document.querySelectorAll('.tab-panel'), function (p) {
        p.classList.remove('is-active');
      });
      tab.classList.add('is-active');
      var panel = document.getElementById(target);
      if (panel) panel.classList.add('is-active');
    });
  });

  /* ---- copy BibTeX ---- */
  Array.prototype.forEach.call(document.querySelectorAll('.copy-btn'), function (btn) {
    btn.addEventListener('click', function () {
      var el = document.querySelector(btn.getAttribute('data-copy'));
      if (!el) return;
      var done = function () {
        var old = btn.textContent;
        btn.textContent = 'Copied';
        setTimeout(function () { btn.textContent = old; }, 1600);
      };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(el.textContent).then(done);
      } else {
        var ta = document.createElement('textarea');
        ta.value = el.textContent;
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
        done();
      }
    });
  });

  /* ---- active nav link on scroll ---- */
  var links = Array.prototype.slice.call(document.querySelectorAll('.nav-links a'));
  var sections = links
    .map(function (a) { return document.querySelector(a.getAttribute('href')); })
    .filter(Boolean);

  if ('IntersectionObserver' in window && sections.length) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        links.forEach(function (a) {
          a.classList.toggle('active', a.getAttribute('href') === '#' + entry.target.id);
        });
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    sections.forEach(function (s) { observer.observe(s); });
  }

  /* ---- pause offscreen videos so many clips stay cheap ---- */
  if ('IntersectionObserver' in window) {
    var vidObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        var v = entry.target;
        if (entry.isIntersecting) {
          if (v.hasAttribute('data-autoplay') || v.hasAttribute('loop')) {
            var p = v.play();
            if (p && p.catch) p.catch(function () {});
          }
        } else if (!v.paused) {
          v.pause();
        }
      });
    }, { threshold: 0.25 });
    Array.prototype.forEach.call(document.querySelectorAll('.video-frame video'), function (v) {
      vidObserver.observe(v);
    });
  }
})();
