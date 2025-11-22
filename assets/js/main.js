document.addEventListener('DOMContentLoaded', () => {
  
  // 1. Mobile Navigation Toggle
  const navToggle = document.querySelector('.nav-toggle');
  const mobileNav = document.querySelector('.mobile-nav');
  const body = document.body;

  if (navToggle && mobileNav) {
    navToggle.addEventListener('click', () => {
      const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', !isExpanded);
      mobileNav.classList.toggle('open');
      
      if (!isExpanded) {
        body.style.overflow = 'hidden';
      } else {
        body.style.overflow = '';
      }
    });
  }

  // 2. Copyright Year
  const yearSpan = document.getElementById('year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // 3. Scroll Animations (The Fix)
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // CHANGED: Select ANYTHING with the .fade-up class
  // This ensures it works on About, Shop, Science, etc. automatically.
  const animatedElements = document.querySelectorAll('.fade-up');
  
  if (animatedElements.length > 0) {
    animatedElements.forEach((el, index) => {
      observer.observe(el);
    });
  } else {
    // Fallback: If no fade-up elements found, check for legacy classes just in case
    const legacyElements = document.querySelectorAll('.hero-inner, .section-header, .card, .info-block');
    legacyElements.forEach(el => {
      el.classList.add('fade-up'); // Add the class dynamically
      observer.observe(el);
    });
  }

  // 4. Header Scroll Effect
  const header = document.querySelector('.site-header');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        header.style.background = 'rgba(249, 247, 245, 0.95)';
        header.style.boxShadow = '0 10px 30px rgba(0,0,0,0.05)';
      } else {
        header.style.background = 'rgba(249, 247, 245, 0.8)';
        header.style.boxShadow = 'none';
      }
    });
  }

});