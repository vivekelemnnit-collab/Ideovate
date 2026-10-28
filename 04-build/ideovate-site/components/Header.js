'use client';
import { useState } from 'react';
import Mark from './Logo';

const links = [['AI Solutions', '#services'], ['ISO Readiness', '#iso'], ['Training', '#training'], ['About', '#about'], ['Industries', '#industries']];
export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="bar-row wrap">
        <a className="brand" href="#top" aria-label="Ideovate Quality Solutions home">
          <Mark id="hdr" small className="brand-mark" />
          <span className="brand-word"><b>IDEO</b>VATE</span>
        </a>
        <nav className={`nav ${open ? 'open' : ''}`} aria-label="Main">
          {links.map(([t, h]) => <a key={t} href={h} onClick={() => setOpen(false)}>{t}</a>)}
          <a className="btn btn-fill btn-sm" href="/book/">Book a free consultation</a>
        </nav>
        <button className="burger" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)}><span /><span /></button>
      </div>
    </header>
  );
}
