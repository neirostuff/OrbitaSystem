document.addEventListener('DOMContentLoaded', () => {

    /* ---- Mobile Burger Menu ---- */
    const burgerBtn = document.getElementById('burgerBtn');
    const mainNav   = document.getElementById('mainNav');
    if (burgerBtn && mainNav) {
        burgerBtn.addEventListener('click', () => {
            const isOpen = mainNav.classList.toggle('nav--open');
            burgerBtn.classList.toggle('header__burger--active', isOpen);
            document.body.classList.toggle('no-scroll', isOpen);
        });

        // Close mobile nav when clicking any link
        mainNav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mainNav.classList.remove('nav--open');
                burgerBtn.classList.remove('header__burger--active');
                document.body.classList.remove('no-scroll');
            });
        });
    }

    /* ---- Smooth Scroll ---- */
    document.querySelectorAll('a[href^="#"]').forEach(a => {
        a.addEventListener('click', function (e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth' }); }
        });
    });

    /* ---- Cases: Show More (9-я ячейка) ---- */
    const moreBtn   = document.getElementById('casesMoreBtn');
    const extraGrid = document.getElementById('casesExtra');
    if (moreBtn && extraGrid) {
        moreBtn.addEventListener('click', () => {
            const isOpen = extraGrid.classList.toggle('cases__extra--open');
            const textEl = moreBtn.querySelector('.cases__more-text');
            if (textEl) textEl.textContent = isOpen ? 'СКРЫТЬ КЕЙСЫ' : 'ПОКАЗАТЬ ЕЩЁ 10 КЕЙСОВ';
        });
    }

    /* ---- FAQ: accordion (один открытый за раз) ---- */
    const faqs = document.querySelectorAll('.faq-item');
    faqs.forEach(item => {
        item.addEventListener('toggle', () => {
            if (item.open) {
                faqs.forEach(other => { if (other !== item) other.open = false; });
            }
        });
    });

    /* ---- Contact Form (главная) ---- */
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', e => {
            e.preventDefault();
            const btn = contactForm.querySelector('button');
            const orig = btn.textContent;
            btn.textContent = 'Отправляем…';
            btn.disabled = true;
            setTimeout(() => {
                btn.textContent = '✓ Заявка отправлена!';
                setTimeout(() => { btn.textContent = orig; btn.disabled = false; contactForm.reset(); }, 3000);
            }, 1000);
        });
    }

    /* ---- FAQ Form (мини-форма) ---- */
    const faqForm = document.getElementById('faqForm');
    if (faqForm) {
        faqForm.addEventListener('submit', e => {
            e.preventDefault();
            const btn = faqForm.querySelector('button');
            const orig = btn.textContent;
            btn.textContent = 'Отправляем…';
            btn.disabled = true;
            setTimeout(() => {
                btn.textContent = '✓ Отправлено!';
                setTimeout(() => { btn.textContent = orig; btn.disabled = false; faqForm.reset(); }, 3000);
            }, 1000);
        });
    }

    /* ---- Бесшовная бегущая строка: дублирование для seamless loop ---- */
    document.querySelectorAll('.ticker__row').forEach(row => {
        row.innerHTML += row.innerHTML; // удваиваем контент
    });

});
