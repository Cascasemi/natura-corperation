import { useEffect } from 'react';

export function useAnimations() {
  useEffect(() => {
    // ── 1. Scroll Progress Bar ─────────────────────────────────────────────
    const progressBar = document.getElementById('scroll-progress');

    // ── 3. Scroll Reveal ──────────────────────────────────────────────────
    // Observe explicit reveal classes AND auto-reveal glass-cards below fold
    const setupReveal = () => {
      const revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const el = entry.target as HTMLElement;
              el.classList.add('visible');
              revealObserver.unobserve(el);
            }
          });
        },
        { threshold: 0.15 }
      );

      // Explicit reveal classes
      document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale').forEach(
        (el) => revealObserver.observe(el)
      );

      // Auto-reveal glass-cards that start below the initial viewport
      document.querySelectorAll('.glass-card').forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top > window.innerHeight) {
          el.classList.add('reveal');
          revealObserver.observe(el);
        }
      });

      // Stagger child cards inside grid containers
      document.querySelectorAll('.stagger-children').forEach((parent) => {
        Array.from(parent.children).forEach((child, i) => {
          (child as HTMLElement).style.transitionDelay = `${i * 0.1}s`;
          child.classList.add('reveal');
          revealObserver.observe(child);
        });
      });

      return revealObserver;
    };

    // ── 5. Hero Image Parallax ────────────────────────────────────────────
    const heroSection = document.querySelector<HTMLElement>('.hero-section');
    const heroImg = document.querySelector<HTMLElement>('.hero-parallax');

    // ── Unified Scroll Handler ────────────────────────────────────────────
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        const total = document.documentElement.scrollHeight - window.innerHeight;

        // Progress bar
        if (progressBar && total > 0) {
          progressBar.style.transform = `scaleX(${scrollY / total})`;
        }

        // Parallax
        if (heroImg && heroSection) {
          const heroBottom = heroSection.getBoundingClientRect().bottom + scrollY;
          if (scrollY < heroBottom) {
            heroImg.style.transform = `translateY(${scrollY * 0.12}px)`;
          }
        }

        ticking = false;
      });
    };

    // ── 9. Ripple on Button Click ─────────────────────────────────────────
    const handleClick = (e: MouseEvent) => {
      const btn = (e.target as HTMLElement).closest(
        '.btn-primary, .btn-accent, .btn-outline, .btn-ghost'
      ) as HTMLElement | null;
      if (!btn) return;

      const rect = btn.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const ripple = document.createElement('span');
      ripple.className = 'ripple';
      ripple.style.cssText = `
        width: ${size}px;
        height: ${size}px;
        left: ${e.clientX - rect.left - size / 2}px;
        top: ${e.clientY - rect.top - size / 2}px;
      `;
      btn.appendChild(ripple);
      ripple.addEventListener('animationend', () => ripple.remove(), { once: true });
    };

    // ── 7. Icon Bounce on Hover ───────────────────────────────────────────
    const handleMouseEnter = (e: MouseEvent) => {
      const icon = (e.target as HTMLElement).closest('.bounce-icon') as HTMLElement | null;
      if (!icon || icon.classList.contains('bouncing')) return;
      icon.classList.add('bouncing');
      icon.addEventListener('animationend', () => icon.classList.remove('bouncing'), { once: true });
    };

    // ── Init ──────────────────────────────────────────────────────────────
    // Small delay so React has finished rendering the DOM
    const initTimer = setTimeout(() => {
      setupReveal();
    }, 100);

    window.addEventListener('scroll', onScroll, { passive: true });
    document.addEventListener('click', handleClick);
    document.addEventListener('mouseenter', handleMouseEnter, true);

    return () => {
      clearTimeout(initTimer);
      window.removeEventListener('scroll', onScroll);
      document.removeEventListener('click', handleClick);
      document.removeEventListener('mouseenter', handleMouseEnter, true);
    };
  }, []);
}
