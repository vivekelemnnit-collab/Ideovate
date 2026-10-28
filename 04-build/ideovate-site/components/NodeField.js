'use client';
import { useEffect, useRef } from 'react';

// Lightweight canvas node network that reacts to the cursor. Pauses off-screen. Static when reduced motion.
export default function NodeField() {
  const ref = useRef(null);
  useEffect(() => {
    const canvas = ref.current; const ctx = canvas.getContext('2d');
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let w = 0, h = 0, raf = 0, visible = true; const mouse = { x: -999, y: -999 };
    let nodes = [];
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const init = () => {
      const r = canvas.getBoundingClientRect(); w = r.width; h = r.height;
      canvas.width = w * dpr; canvas.height = h * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const n = Math.round(Math.min(90, Math.max(28, (w * h) / 16000)));
      nodes = Array.from({ length: n }, () => ({ x: Math.random() * w, y: Math.random() * h, vx: (Math.random() - 0.5) * 0.25, vy: (Math.random() - 0.5) * 0.25, r: Math.random() * 1.6 + 0.8, hue: Math.random() }));
    };
    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      const link = Math.min(150, w / 7);
      for (const p of nodes) {
        if (!reduce) {
          p.x += p.vx; p.y += p.vy;
          if (p.x < 0 || p.x > w) p.vx *= -1; if (p.y < 0 || p.y > h) p.vy *= -1;
          const dx = p.x - mouse.x, dy = p.y - mouse.y, d = Math.hypot(dx, dy);
          if (d < 140) { p.x += (dx / d) * 1.2; p.y += (dy / d) * 1.2; }
        }
      }
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j]; const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < link) { ctx.strokeStyle = `rgba(124,92,255,${(1 - d / link) * 0.35})`; ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke(); }
        }
        const near = Math.hypot(a.x - mouse.x, a.y - mouse.y) < 160;
        ctx.fillStyle = near ? '#22D3EE' : a.hue > 0.6 ? 'rgba(124,92,255,.9)' : 'rgba(34,211,238,.75)';
        ctx.beginPath(); ctx.arc(a.x, a.y, near ? a.r + 1 : a.r, 0, 6.283); ctx.fill();
      }
      if (!reduce && visible) raf = requestAnimationFrame(draw);
    };
    const move = (e) => { const r = canvas.getBoundingClientRect(); mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top; };
    const leave = () => { mouse.x = mouse.y = -999; };
    const io = new IntersectionObserver(([en]) => { visible = en.isIntersecting; cancelAnimationFrame(raf); if (visible) draw(); });
    init(); draw(); io.observe(canvas);
    window.addEventListener('resize', init); window.addEventListener('pointermove', move); window.addEventListener('pointerleave', leave);
    return () => { cancelAnimationFrame(raf); io.disconnect(); window.removeEventListener('resize', init); window.removeEventListener('pointermove', move); window.removeEventListener('pointerleave', leave); };
  }, []);
  return <canvas ref={ref} className="nodefield" aria-hidden="true" />;
}
