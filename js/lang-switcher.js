(function () {
  var DEFAULT_LANG = 'ru';
  var SUPPORTED = ['ru', 'de'];

  function getLang() {
    return localStorage.getItem('sb-lang') || DEFAULT_LANG;
  }

  function setLang(lang) {
    if (!SUPPORTED.includes(lang)) return;
    localStorage.setItem('sb-lang', lang);
    applyLang(lang);
  }

  function applyLang(lang) {
    var t = TRANSLATIONS[lang];
    if (!t) return;

    document.documentElement.lang = lang;
    if (t['page.title']) document.title = t['page.title'];

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (t[key] !== undefined) el.textContent = t[key];
    });

    document.querySelectorAll('[data-i18n-ph]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-ph');
      if (t[key] !== undefined) el.placeholder = t[key];
    });

    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });
  }

  function initLangSwitcher() {
    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.addEventListener('click', function () { setLang(btn.dataset.lang); });
    });
    applyLang(getLang());
  }

  window.setLang = setLang;
  window.getLang = getLang;

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLangSwitcher);
  } else {
    initLangSwitcher();
  }
})();
