(function () {
  'use strict';

  /* ── SLIDESHOW — Left panel photo carousel with 3D Ken Burns ── */
  const slides = document.querySelectorAll('.slide');
  let current = 0;

  function nextSlide() {
    if (slides.length < 2) return;
    const prev = current;
    current = (current + 1) % slides.length;

    slides[prev].classList.remove('slide--active');
    slides[prev].classList.add('slide--prev');

    slides[current].classList.add('slide--active');
    slides[current].classList.remove('slide--prev');

    // Clean prev class after transition
    setTimeout(() => {
      slides[prev].classList.remove('slide--prev');
    }, 1000);
  }

  setInterval(nextSlide, 1200);

  /* ── DIVIDER TRACKING ── */
  const divider = document.querySelector('.divider');
  const panels = document.querySelectorAll('.panel');

  function repositionDivider() {
    if (!panels.length || !divider) return;
    const left = panels[0].getBoundingClientRect();
    divider.style.left = left.right + 'px';
  }

  if (window.ResizeObserver) {
    const ro = new ResizeObserver(repositionDivider);
    panels.forEach(p => ro.observe(p));
  }
  panels.forEach(p => p.addEventListener('transitionend', repositionDivider));
  window.addEventListener('resize', repositionDivider);
  window.addEventListener('load', repositionDivider);

  /* ── NAVBAR SCROLL STATE ── */
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });

  /* ── MOBILE BURGER ── */
  const burger = document.getElementById('nav-burger');
  const navLinks = document.querySelector('.nav-links');
  if (burger && navLinks) {
    burger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      burger.classList.toggle('active');
    });
    // Close on link click
    navLinks.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        navLinks.classList.remove('active');
      });
    });
  }

  /* ── SCROLL REVEAL ── */
  const reveals = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.05, rootMargin: '0px 0px -40px 0px' });

  reveals.forEach(el => revealObserver.observe(el));

  /* ── COUNTER ANIMATION ── */
  const counters = document.querySelectorAll('.stat-num[data-count]');
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.dataset.count);
        let count = 0;
        const step = Math.max(1, Math.floor(target / 40));
        const timer = setInterval(() => {
          count += step;
          if (count >= target) { count = target; clearInterval(timer); }
          el.textContent = count;
        }, 40);
        counterObserver.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(c => counterObserver.observe(c));

  /* ── HERO ENTRANCE ── */
  window.addEventListener('load', () => {
    document.querySelectorAll('.panel-content').forEach((content, i) => {
      content.style.opacity = '0';
      content.style.transform = 'translateY(30px)';
      content.style.transition = 'opacity 1s ease, transform 1s ease';
      setTimeout(() => {
        content.style.opacity = '1';
        content.style.transform = 'translateY(0)';
      }, 400 + i * 250);
    });
  });

  /* ── SMOOTH SCROLL FOR NAV LINKS ── */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  /* ── PROJECT FILTERING LOGIC ── */
  const tabBtns = document.querySelectorAll('.tab-btn');
  const projCards = document.querySelectorAll('.proj-card');

  if (tabBtns.length && projCards.length) {
    tabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        tabBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.getAttribute('data-filter');

        projCards.forEach(card => {
          const category = card.getAttribute('data-category');
          if (filter === 'all' || category === filter) {
            card.classList.remove('hidden-card');
            // Re-trigger intersection observer logic/reveal class if needed
            card.classList.add('visible');
          } else {
            card.classList.add('hidden-card');
          }
        });
      });
    });
  }

  /* ── EMAIL COPY TO CLIPBOARD ── */
  const copyBtn = document.getElementById('copy-email-btn');
  const tooltip = document.getElementById('copy-tooltip');

  if (copyBtn && tooltip) {
    copyBtn.addEventListener('click', () => {
      const email = 'nidhiatwork.01@gmail.com';
      navigator.clipboard.writeText(email).then(() => {
        tooltip.textContent = 'Copied!';
        tooltip.classList.add('copied');
        
        setTimeout(() => {
          tooltip.textContent = 'Click to Copy';
          tooltip.classList.remove('copied');
        }, 2000);
      }).catch(err => {
        console.error('Failed to copy text: ', err);
      });
    });
  }

  /* ── CUSTOM CURSOR LOGIC ── */
  const cursor = document.querySelector('.cursor');
  if (cursor) {
    document.addEventListener('mousemove', (e) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
    });
    document.querySelectorAll('a, button, .panel, .proj-card, .exp-card, .ach-card, .gallery-item').forEach(el => {
      el.addEventListener('mouseenter', () => cursor.classList.add('hovered'));
      el.addEventListener('mouseleave', () => cursor.classList.remove('hovered'));
    });
  }

})();

