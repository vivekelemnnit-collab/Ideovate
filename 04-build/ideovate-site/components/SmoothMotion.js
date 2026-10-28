'use client';
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import { animate, inView, stagger } from 'motion';

// Content is visible without JS; motion only enhances it.
export default function SmoothMotion() {
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return;
    gsap.registerPlugin(ScrollTrigger);
    const lenis = new Lenis({ duration: 1.1, easing: (t) => 1 - Math.pow(1 - t, 4) });
    lenis.on('scroll', ScrollTrigger.update);
    const tick = (t) => lenis.raf(t * 1000);
    gsap.ticker.add(tick); gsap.ticker.lagSmoothing(0);

    // Hero entrance (Motion)
    animate('[data-hero]', { opacity: [0, 1], transform: ['translateY(28px)', 'none'] }, { duration: 0.9, delay: stagger(0.1), ease: [0.22, 1, 0.36, 1] });

    // Scroll reveals (Motion): groups stagger inside their parent
    document.querySelectorAll('[data-reveal]').forEach((el) => { el.style.opacity = 0; });
    const stops = inView('[data-reveal-group]', (group) => {
      const items = group.querySelectorAll('[data-reveal]');
      animate(items, { opacity: [0, 1], transform: ['translateY(24px)', 'none'] }, { duration: 0.8, delay: stagger(0.08), ease: [0.22, 1, 0.36, 1] });
    }, { margin: '0px 0px -12% 0px' });

    const ctx = gsap.context(() => {
      gsap.utils.toArray('.svc').forEach((row) => {
        const tl = gsap.timeline({ scrollTrigger: { trigger: row, start: 'top 92%', once: true } });
        tl.fromTo(row.querySelector('.svc-line'), { scaleX: 0 }, { scaleX: 1, duration: 0.9, ease: 'expo.out' })
          .fromTo(row.querySelectorAll('.icon .d'), { strokeDashoffset: 1 }, { strokeDashoffset: 0, duration: 1, ease: 'power2.out', stagger: 0.08 }, 0.1);
      });
      const line = document.querySelector('[data-progress]');
      if (line) gsap.fromTo(line, { scaleY: 0 }, { scaleY: 1, ease: 'none', scrollTrigger: { trigger: '[data-process]', start: 'top 70%', end: 'bottom 70%', scrub: true } });
      ScrollTrigger.create({ start: 10, onUpdate: (s) => document.querySelector('.site-header')?.classList.toggle('scrolled', s.scroll() > 10) });
    });

    const onClick = (e) => {
      const a = e.target.closest('a[href^="#"]');
      if (!a) return;
      const target = document.querySelector(a.getAttribute('href'));
      if (target) { e.preventDefault(); lenis.scrollTo(target, { offset: -90 }); }
    };
    document.addEventListener('click', onClick);
    return () => { document.removeEventListener('click', onClick); stops && stops(); gsap.ticker.remove(tick); lenis.destroy(); ctx.revert(); };
  }, []);
  return null;
}
