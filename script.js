(function () {
  'use strict';

  /* ── SLIDESHOW — Left panel photo carousel with Ken Burns ── */
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

    setTimeout(() => {
      slides[prev].classList.remove('slide--prev');
    }, 1200);
  }

  setInterval(nextSlide, 4500);

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
  let lastScroll = 0;
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    navbar.classList.toggle('scrolled', scrollY > 60);
    lastScroll = scrollY;
  }, { passive: true });

  /* ── MOBILE BURGER ── */
  const burger = document.getElementById('nav-burger');
  const navLinks = document.querySelector('.nav-links');
  if (burger && navLinks) {
    burger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      burger.classList.toggle('active');
    });
    navLinks.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        navLinks.classList.remove('active');
        burger.classList.remove('active');
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
  }, { threshold: 0.06, rootMargin: '0px 0px -50px 0px' });

  reveals.forEach(el => revealObserver.observe(el));

  /* ── COUNTER ANIMATION ── */
  const counters = document.querySelectorAll('.stat-num[data-count]');
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.dataset.count);
        let count = 0;
        const duration = 1200;
        const steps = 30;
        const stepTime = duration / steps;
        const stepVal = target / steps;

        const timer = setInterval(() => {
          count += stepVal;
          if (count >= target) {
            count = target;
            clearInterval(timer);
          }
          el.textContent = Math.round(count);
        }, stepTime);
        counterObserver.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(c => counterObserver.observe(c));

  /* ── HERO ENTRANCE ── */
  window.addEventListener('load', () => {
    document.querySelectorAll('.panel-content').forEach((content, i) => {
      content.style.opacity = '0';
      content.style.transform = 'translateY(25px)';
      content.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
      setTimeout(() => {
        content.style.opacity = '1';
        content.style.transform = 'translateY(0)';
      }, 350 + i * 200);
    });

    // Animate stats banner entrance
    const statsBanner = document.querySelector('.stats-banner');
    if (statsBanner) {
      statsBanner.style.opacity = '0';
      statsBanner.style.transform = 'translateY(10px)';
      statsBanner.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      setTimeout(() => {
        statsBanner.style.opacity = '1';
        statsBanner.style.transform = 'translateY(0)';
      }, 900);
    }
  });

  /* ── SMOOTH SCROLL FOR NAV LINKS ── */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        const offset = 80;
        const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
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

        projCards.forEach((card, i) => {
          const category = card.getAttribute('data-category');
          if (filter === 'all' || category === filter) {
            card.classList.remove('hidden-card');
            card.style.opacity = '0';
            card.style.transform = 'translateY(16px)';
            setTimeout(() => {
              card.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
              card.style.opacity = '1';
              card.style.transform = 'translateY(0)';
              card.classList.add('visible');
            }, i * 60);
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
