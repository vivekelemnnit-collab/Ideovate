'use client';
import { useState } from 'react';
import Mark from './Logo';

const links = [
  ['AI Solutions', '#services'], ['ISO Readiness', '#iso'], ['Training', '#training'], ['Industries', '#industries'],
];
export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="util"><span>204-590-5053</span><span>hello@ideovate.ca</span><span>Winnipeg, Manitoba</span></div>
      <div className="bar-row wrap">
        <a className="brand" href="#top" aria-label="Ideovate Quality Solutions home">
          <Mark id="hdr" small className="brand-mark" />
          <span><b>Ideovate</b><i>Quality Solutions</i></span>
        </a>
        <nav className={`nav ${open ? 'open' : ''}`} aria-label="Main">
          {links.map(([t, h]) => <a key={t} href={h} onClick={() => setOpen(false)}>{t}</a>)}
          <a className="btn btn-sm nav-cta" href="/book/">Book a free consultation</a>
        </nav>
        <button className="burger" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)}><span /><span /></button>
      </div>
    </header>
  );
}
