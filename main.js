// Данные для перевода (согласно техзаданию)
const translations = {
  ru: {
    nav_cases: "Кейсы",
    nav_about: "Обо мне",
    hero_badge: "1 из 7 Мастеров Бизнес-ТРИЗ в мире",
    hero_name: "Аскар Бапен",
    hero_sub: "Нахожу решения там, где привычные методы заводят в тупик. Производство, медицина, IT, HoReCa, логистика, образование, связь и другие отрасли.",
    fork_question: "Что вам нужно?",
    fork_1_title: "Бизнес-решения",
    fork_1_desc: "Работаем вместе над конкретной задачей. Результат - под ключ.",
    fork_2_title: "Бизнес-обучение",
    fork_2_desc: "Обучаем руководителей и команды. Инструменты остаются внутри компании.",
    footer_copy: "© 2026 Аскар Бапен. KAIZEN-TRIZ PARTNERS"
  },
  kz: {
    nav_cases: "Жобалар",
    nav_about: "Мен туралы",
    hero_badge: "Әлемдегі 7 Бизнес-ТРИЗ Мастерлерінің бірі",
    hero_name: "Асқар Бапен",
    hero_sub: "Дәстүрлі тәсілдер жұмыс істемеген жерде жолын табамыз. Өндіріс, медицина, IT, HoReCa, логистика, білім беру, байланыс және басқа салалар.",
    fork_question: "Мәселеңіз қандай?",
    fork_1_title: "Бизнес-шешімдер",
    fork_1_desc: "Нақты мәселемен бірге жұмыс істеп, нәтижеге дейін жеткіземіз.",
    fork_2_title: "Бизнес-тренинг",
    fork_2_desc: "Басшылар мен командаларды оқытамыз. Үйреткен білім мен құралдар компания ішінде қалады.",
    footer_copy: "© 2026 Асқар Бапен. KAIZEN-TRIZ PARTNERS"
  },
  en: {
    nav_cases: "Cases",
    nav_about: "About",
    hero_badge: "1 of 7 Masters of Business TRIZ in the world",
    hero_name: "Askar Bapen",
    hero_sub: "We find solutions where conventional methods fail. Manufacturing, healthcare, IT, HoReCa, logistics, education, telecoms and more.",
    fork_question: "What is your challenge?",
    fork_1_title: "Business Solutions",
    fork_1_desc: "We work alongside you on a specific challenge. Full turnkey delivery.",
    fork_2_title: "Business Training",
    fork_2_desc: "We develop managers and teams. The knowledge and tools remain within your organisation.",
    footer_copy: "© 2026 Askar Bapen. KAIZEN-TRIZ PARTNERS"
  },
  ar: {
    ar_placeholder: "هذه الصفحة قيد الإنشاء"
  }
};

// Функция смены языка
function setLanguage(lang) {
    localStorage.setItem('preferredLang', lang);
    document.body.className = `lang-${lang}`;
    
    // Установка направления текста для арабского
    if (lang === 'ar') {
        document.documentElement.setAttribute('dir', 'rtl');
    } else {
        document.documentElement.setAttribute('dir', 'ltr');
    }

    // Обновление всех текстов с атрибутом data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });

    // Подсветка активной кнопки языка
    document.querySelectorAll('.lang-switcher button').forEach(btn => {
        btn.classList.remove('active');
    });
    const activeBtn = document.getElementById(`btn-${lang}`);
    if (activeBtn) activeBtn.classList.add('active');
}

// Инициализация при загрузке
window.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('preferredLang') || 'ru';
    setLanguage(savedLang);

    // Логика анимации появления (Reveal)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
});
