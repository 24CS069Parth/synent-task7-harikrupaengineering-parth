/* ============================================================
   HARI KRUPA ENGINEERING — Main JavaScript
   Premium Corporate Website
   ============================================================ */

'use strict';

/* ============================================================
   1. PAGE TRANSITION
   ============================================================ */
const transition = document.getElementById('page-transition');

function navigateTo(url) {
  if (transition) {
    transition.classList.add('active');
    setTimeout(() => { window.location.href = url; }, 500);
  } else {
    window.location.href = url;
  }
}

window.addEventListener('load', () => {
  if (transition) {
    transition.style.transform = 'translateY(-100%)';
    setTimeout(() => {
      transition.style.transition = 'transform 0.5s cubic-bezier(0.4,0,0.2,1)';
    }, 100);
  }
});

// Intercept internal nav links for smooth transitions
document.querySelectorAll('a[href]').forEach(link => {
  const href = link.getAttribute('href');
  if (
    href &&
    !href.startsWith('#') &&
    !href.startsWith('http') &&
    !href.startsWith('mailto') &&
    !href.startsWith('tel') &&
    link.target !== '_blank'
  ) {
    link.addEventListener('click', e => {
      e.preventDefault();
      navigateTo(href);
    });
  }
});

/* ============================================================
   2. NAVBAR
   ============================================================ */
const navbar = document.querySelector('.navbar');
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');

// Scroll effect
window.addEventListener('scroll', () => {
  if (navbar) {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  }
  // Back to top visibility
  const btt = document.getElementById('back-to-top');
  if (btt) btt.classList.toggle('visible', window.scrollY > 400);
}, { passive: true });

// Mobile hamburger
if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open');
  });
  // Close on link click
  mobileMenu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      hamburger.classList.remove('open');
      mobileMenu.classList.remove('open');
    });
  });
}

// Active nav link
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-link').forEach(link => {
  const linkPage = link.getAttribute('href');
  if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
    link.classList.add('active');
  }
});

/* ============================================================
   3. DARK MODE
   ============================================================ */
const darkToggle = document.getElementById('dark-toggle');
const darkToggleMobile = document.getElementById('dark-toggle-mobile');
const DARK_KEY = 'hke-dark-mode';

function applyDarkMode(isDark) {
  document.body.classList.toggle('dark-mode', isDark);
  const icon = isDark
    ? `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 0 1-4.4 2.26 5.403 5.403 0 0 1-3.14-9.8c-.44-.06-.9-.1-1.36-.1z"/></svg>`
    : `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 7a5 5 0 1 1 0 10A5 5 0 0 1 12 7zm0-5a1 1 0 0 1 1 1v1a1 1 0 0 1-2 0V3a1 1 0 0 1 1-1zm0 17a1 1 0 0 1 1 1v1a1 1 0 0 1-2 0v-1a1 1 0 0 1 1-1zM4.22 5.64a1 1 0 0 1 1.42-1.42l.7.71a1 1 0 0 1-1.41 1.41l-.71-.7zm13.14 12.72a1 1 0 0 1 1.41 1.41l-.7.71a1 1 0 1 1-1.42-1.42l.71-.7zM3 12a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2H3zm17 0a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2h-1zM5.64 19.78a1 1 0 0 1-1.42-1.42l.71-.7a1 1 0 0 1 1.41 1.41l-.7.71zm12.72-13.14a1 1 0 0 1 1.41-1.41l.71.7a1 1 0 0 1-1.42 1.42l-.7-.71z"/></svg>`;
  if (darkToggle) darkToggle.innerHTML = icon;
  if (darkToggleMobile) darkToggleMobile.innerHTML = icon;
}

const savedDark = localStorage.getItem(DARK_KEY);
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
applyDarkMode(savedDark !== null ? savedDark === 'true' : prefersDark);

function toggleDark() {
  const isDark = !document.body.classList.contains('dark-mode');
  localStorage.setItem(DARK_KEY, isDark);
  applyDarkMode(isDark);
}
if (darkToggle) darkToggle.addEventListener('click', toggleDark);
if (darkToggleMobile) darkToggleMobile.addEventListener('click', toggleDark);

/* ============================================================
   4. SCROLL REVEAL
   ============================================================ */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => {
  revealObserver.observe(el);
});

/* ============================================================
   5. COUNTER ANIMATION
   ============================================================ */
function animateCounter(el) {
  const target = parseInt(el.dataset.target, 10);
  const duration = 2000;
  const step = Math.ceil(target / (duration / 16));
  let current = 0;
  const suffix = el.querySelector('.suffix')?.textContent || '';

  // Clear suffix from counting
  const suffixEl = el.querySelector('.suffix');
  const timer = setInterval(() => {
    current = Math.min(current + step, target);
    if (suffixEl) {
      el.childNodes[0].textContent = current;
    } else {
      el.textContent = current + suffix;
    }
    if (current >= target) clearInterval(timer);
  }, 16);
}

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounter(entry.target);
      counterObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-number[data-target]').forEach(el => {
  counterObserver.observe(el);
});

/* ============================================================
   6. HERO PARTICLES
   ============================================================ */
function createParticles() {
  const container = document.querySelector('.hero-particles');
  if (!container) return;

  const colors = ['rgba(34,197,94,.5)', 'rgba(22,163,74,.4)', 'rgba(134,239,172,.3)'];
  const sizes = [3, 4, 6, 8];

  for (let i = 0; i < 20; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    const size = sizes[Math.floor(Math.random() * sizes.length)];
    p.style.cssText = `
      width: ${size}px; height: ${size}px;
      left: ${Math.random() * 100}%;
      top: ${Math.random() * 100}%;
      background: ${colors[Math.floor(Math.random() * colors.length)]};
      --dur: ${3 + Math.random() * 4}s;
      --delay: ${Math.random() * 4}s;
    `;
    container.appendChild(p);
  }
}
createParticles();

/* ============================================================
   7. BACK TO TOP
   ============================================================ */
const bttBtn = document.getElementById('back-to-top');
if (bttBtn) {
  bttBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ============================================================
   8. CONTACT FORM VALIDATION
   ============================================================ */
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  const successMsg = document.getElementById('form-success');

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function validatePhone(phone) {
    return /^[\+]?[\d\s\-\(\)]{7,15}$/.test(phone);
  }

  function showError(input, msg) {
    input.classList.add('error');
    const errEl = input.parentElement.querySelector('.form-error');
    if (errEl) { errEl.textContent = msg; errEl.classList.add('visible'); }
  }

  function clearError(input) {
    input.classList.remove('error');
    const errEl = input.parentElement.querySelector('.form-error');
    if (errEl) errEl.classList.remove('visible');
  }

  // Live validation on blur
  contactForm.querySelectorAll('input, textarea, select').forEach(field => {
    field.addEventListener('blur', () => validateField(field));
    field.addEventListener('input', () => { if (field.classList.contains('error')) clearError(field); });
  });

  function validateField(field) {
    const value = field.value.trim();
    const name = field.name;
    clearError(field);

    if (field.required && !value) {
      showError(field, 'This field is required.');
      return false;
    }
    if (name === 'email' && value && !validateEmail(value)) {
      showError(field, 'Please enter a valid email address.');
      return false;
    }
    if (name === 'phone' && value && !validatePhone(value)) {
      showError(field, 'Please enter a valid phone number.');
      return false;
    }
    return true;
  }

  contactForm.addEventListener('submit', e => {
    e.preventDefault();
    let isValid = true;

    contactForm.querySelectorAll('input, textarea, select').forEach(field => {
      if (!validateField(field)) isValid = false;
    });

    if (isValid) {
      const submitBtn = contactForm.querySelector('.btn-submit');
      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending...';

      // Simulate API call
      setTimeout(() => {
        contactForm.reset();
        submitBtn.disabled = false;
        submitBtn.textContent = 'Send Message';
        if (successMsg) successMsg.classList.add('visible');
        setTimeout(() => successMsg && successMsg.classList.remove('visible'), 6000);
      }, 1500);
    }
  });
}

/* ============================================================
   9. SMOOTH SCROLL FOR HASH LINKS
   ============================================================ */
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      const offset = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--navbar-h')) || 76;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

/* ============================================================
   10. HERO SCROLL INDICATOR
   ============================================================ */
const heroScroll = document.querySelector('.hero-scroll');
if (heroScroll) {
  heroScroll.addEventListener('click', () => {
    const nextSection = document.querySelector('.stats-section') || document.querySelector('section:nth-child(2)');
    if (nextSection) nextSection.scrollIntoView({ behavior: 'smooth' });
  });
}

/* ============================================================
   11. TESTIMONIAL AUTO-ROTATION (Mobile)
   ============================================================ */
// Only activate on small screens if testimonials exist
if (window.innerWidth < 768) {
  const testimonials = document.querySelectorAll('.testimonial-card');
  let activeIdx = 0;
  if (testimonials.length > 1) {
    testimonials.forEach((t, i) => { if (i > 0) t.style.display = 'none'; });
    setInterval(() => {
      testimonials[activeIdx].style.display = 'none';
      activeIdx = (activeIdx + 1) % testimonials.length;
      testimonials[activeIdx].style.display = 'block';
    }, 4000);
  }
}

/* ============================================================
   12. SERVICE CARD ICONS - dynamic color assignment
   ============================================================ */
const serviceIconColors = [
  { bg: '#DCFCE7', color: '#16A34A' },
  { bg: '#DBEAFE', color: '#2563EB' },
  { bg: '#FEF3C7', color: '#D97706' },
  { bg: '#F3E8FF', color: '#9333EA' },
  { bg: '#FFE4E6', color: '#E11D48' },
  { bg: '#E0F2FE', color: '#0284C7' },
];
document.querySelectorAll('.service-icon-wrap, .service-card-icon').forEach((el, i) => {
  const palette = serviceIconColors[i % serviceIconColors.length];
  el.style.background = palette.bg;
  el.style.color = palette.color;
});

console.log('%c🏗 Hari Krupa Engineering', 'color:#16A34A;font-size:18px;font-weight:bold');
console.log('%cEngineering Excellence Since 2009', 'color:#22C55E;font-size:12px');
