// main.js - общие утилиты для всех страниц
// Переводы и setLanguage определены в каждой странице отдельно

function applyTranslations(lang) {
  // Переопределяется каждой страницей через pageTranslations
  // Этот fallback ничего не делает - страницы сами управляют переводами
}

function initReveal() {
  var reveals = document.querySelectorAll('.reveal');
  if (!reveals.length) return;
  reveals.forEach(function(el) { el.classList.add('visible'); });
  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(e) {
      if (e.isIntersecting) e.target.classList.add('visible');
    });
  }, { threshold: 0 });
  reveals.forEach(function(r) { observer.observe(r); });
}
