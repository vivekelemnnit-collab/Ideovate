'use client';
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

// One component runs all page motion. Content is visible without JS; motion only enhances it.
export default function SmoothMotion() {
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    gsap.registerPlugin(ScrollTrigger);
    if (reduce) {
      document.querySelectorAll('[data-count]').forEach((el) => (el.textContent = el.dataset.count));
      return;
    }
    const lenis = new Lenis({ duration: 1.1, easing: (t) => 1 - Math.pow(1 - t, 4) });
    lenis.on('scroll', ScrollTrigger.update);
    const tick = (t) => lenis.raf(t * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    const ease = 'expo.out';
    const ctx = gsap.context(() => {
      // Hero lines
      gsap.from('[data-hero] > *', { y: 32, opacity: 0, duration: 0.9, ease, stagger: 0.09, delay: 0.15 });
      // Hero mark: orbit and annotations arrive after the spark
      gsap.from('.legend span', { opacity: 0, y: 8, duration: 0.8, ease, stagger: 0.2, delay: 1.5 });
      // Service rows: the hairline draws across, then the icon draws itself
      gsap.utils.toArray('.svc').forEach((row) => {
        const tl = gsap.timeline({ scrollTrigger: { trigger: row, start: 'top 90%', once: true } });
        tl.fromTo(row.querySelector('.svc-line'), { scaleX: 0 }, { scaleX: 1, duration: 0.9, ease })
          .fromTo(row.querySelectorAll('.icon .d'), { strokeDashoffset: 1 }, { strokeDashoffset: 0, duration: 1, ease: 'power2.out', stagger: 0.08 }, 0.1)
          .from(row.querySelector('div'), { opacity: 0, y: 10, duration: 0.6, ease }, 0.2);
      });
      // Process line grows with scroll
      const line = document.querySelector('[data-progress]');
      if (line) gsap.fromTo(line, { scaleY: 0 }, { scaleY: 1, ease: 'none', scrollTrigger: { trigger: '[data-process]', start: 'top 70%', end: 'bottom 70%', scrub: true } });
      // Header gets a background after scrolling
      ScrollTrigger.create({ start: 80, onUpdate: (s) => document.querySelector('.site-header')?.classList.toggle('scrolled', s.scroll() > 80) });
    });

    // Smooth anchor links
    const onClick = (e) => {
      const a = e.target.closest('a[href^="#"]');
      if (!a) return;
      const target = document.querySelector(a.getAttribute('href'));
      if (target) { e.preventDefault(); lenis.scrollTo(target, { offset: -70 }); }
    };
    document.addEventListener('click', onClick);

    return () => {
      document.removeEventListener('click', onClick);
      gsap.ticker.remove(tick); lenis.destroy(); ctx.revert();
    };
  }, []);
  return null;
}
