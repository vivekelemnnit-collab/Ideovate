'use client';
import { useEffect, useRef, useState } from 'react';

const navLinks = [
  ['AI Solutions', '#ai'],
  ['ISO Readiness', '#iso'],
  ['Training', '#training'],
  ['Industries', '#industries'],
  ['About', '#about'],
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [photoFailed, setPhotoFailed] = useState(false);
  const [sent, setSent] = useState(false);
  const [copied, setCopied] = useState('');
  const trackRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
      document.querySelectorAll('.pre').forEach((el) => { el.style.opacity = '1'; el.style.transform = 'none'; });
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en, i) => {
        if (en.isIntersecting) {
          setTimeout(() => { en.target.style.opacity = '1'; en.target.style.transform = 'none'; }, i * 70);
          io.unobserve(en.target);
        }
      });
    }, { threshold: 0.2 });
    document.querySelectorAll('.pre').forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  function scrollCourses(dir) {
    trackRef.current?.scrollBy({ left: dir * 310, behavior: 'smooth' });
  }

  function copyText(text, key) {
    const done = (ok) => { setCopied(ok ? key : ''); setTimeout(() => setCopied(''), 1600); };
    try { navigator.clipboard.writeText(text).then(() => done(true)).catch(() => done(false)); }
    catch (e) { done(false); }
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <>
      <header className="site">
        <div className="wrap bar">
          <a className="brand" href="#top" aria-label="Ideovate Quality Solutions home">
            <svg viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="18" stroke="url(#g1)" strokeWidth="2" /><circle cx="20" cy="7" r="3.4" fill="#0098F2" /><circle cx="31" cy="27" r="2.2" fill="#6C56FC" /><defs><linearGradient id="g1" x1="2" y1="2" x2="38" y2="38"><stop stopColor="#0098F2" /><stop offset="1" stopColor="#6C56FC" /></linearGradient></defs></svg>
            Ideovate
          </a>
          <nav className="links" aria-label="Primary">
            {navLinks.map(([label, href]) => <a key={label} href={href}>{label}</a>)}
          </nav>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <a className="btn btn-dark btn-sm" href="#book">Book a free consultation</a>
            <button className="burger" aria-label="Menu" aria-expanded={menuOpen} onClick={() => setMenuOpen((o) => !o)}>
              <span /><span /><span />
            </button>
          </div>
        </div>
        <nav className={`mnav${menuOpen ? ' open' : ''}`} aria-label="Mobile">
          {navLinks.map(([label, href]) => <a key={label} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}
          <a href="#book" onClick={() => setMenuOpen(false)}>Book a free consultation</a>
        </nav>
      </header>

      <main id="top">

        <section className="hero">
          <div className="wrap">
            <div>
              <span className="eyebrow">Winnipeg &middot; since 2014</span>
              <h1 style={{ marginTop: 16 }}>Turning your great ideas into <span className="grad">innovation.</span></h1>
              <p className="sub">Built well. Governed well. Ideovate designs and builds AI for your business, then puts the quality systems around it so it can be trusted &mdash; one Winnipeg team, from first prototype to audit day.</p>
              <div className="cta-row">
                <a className="btn btn-dark" href="#book">Book a free consultation</a>
                <a className="btn btn-line" href="#iso">Explore ISO readiness</a>
              </div>
              <div className="trust">
                <span>On-site across Canada &amp; the US</span>
                <span>Remote worldwide</span>
                <span>AI engineering + ISO 42001 in one team</span>
              </div>
            </div>
            <div className="stage" aria-hidden="true">
              <div className="blob" style={{ width: 220, height: 220, left: -30, top: -20, background: 'var(--blue)' }} />
              <div className="blob" style={{ width: 160, height: 160, right: 10, bottom: -20, background: 'var(--gold)' }} />
              <div className="card-report">
                <div className="rep-top"><span>Readiness report<b>ISO 42001 &middot; AI Mgmt</b></span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="4" y="3" width="16" height="18" rx="2" /><path d="M8 8h8M8 12h8M8 16h5" /></svg>
                </div>
                <div className="avatar-row">
                  <div className="avatar blue"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3" /><circle cx="5" cy="6" r="2" /><circle cx="19" cy="6" r="2" /><circle cx="5" cy="18" r="2" /><circle cx="19" cy="18" r="2" /></svg></div>
                  <div className="avatar violet"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 12l2 2 4-4" /><circle cx="12" cy="12" r="9" /></svg></div>
                </div>
                <div className="rep-ring">
                  <svg viewBox="0 0 80 80"><circle cx="40" cy="40" r="34" stroke="#F2F1EC" strokeWidth="8" fill="none" /><circle cx="40" cy="40" r="34" stroke="url(#g2)" strokeWidth="8" fill="none" strokeLinecap="round" strokeDasharray="213.6" strokeDashoffset="72" /><defs><linearGradient id="g2" x1="0" y1="0" x2="80" y2="80"><stop stopColor="#0098F2" /><stop offset="1" stopColor="#6C56FC" /></linearGradient></defs></svg>
                  <span className="val">66%</span>
                </div>
                <p className="rep-label">Building momentum</p>
                <div className="rep-rows">
                  <div className="rep-row"><svg viewBox="0 0 24 24" fill="none" stroke="#3F9142" strokeWidth="2"><path d="M5 13l4 4L19 7" /></svg> Scope &amp; leadership defined</div>
                  <div className="rep-row"><svg viewBox="0 0 24 24" fill="none" stroke="#3F9142" strokeWidth="2"><path d="M5 13l4 4L19 7" /></svg> Risk register in place</div>
                  <div className="rep-row pending"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="8" /></svg> Internal audit &mdash; scheduled</div>
                </div>
              </div>
              <div className="card-chat">
                <div className="chat-top">
                  <div className="dot"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 3v3M12 18v3M3 12h3M18 12h3" /><circle cx="12" cy="12" r="4" /></svg></div>
                  <div><b>Ideovate Assistant</b><span>AI + ISO concierge</span></div>
                </div>
                <div className="bub in">Can you build our support chatbot and get us ISO 42001 ready?</div>
                <div className="bub out">Yes &mdash; one plan, one team. We build the assistant, then prepare the governance around it.</div>
                <div className="chat-input">Ask about AI or ISO readiness&hellip;<span className="send"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M5 12h14M13 6l6 6-6 6" /></svg></span></div>
              </div>
            </div>
          </div>
        </section>

        <section className="wrap">
          <div className="paths-head">
            <div>
              <span className="eyebrow">Where to start</span>
              <h2 style={{ marginTop: 14, fontSize: 'clamp(1.7rem,3vw,2.3rem)' }}>Three paths. One free consultation.</h2>
            </div>
            <p className="lede">Tell us the idea. We listen, ask questions and tell you honestly what we&rsquo;d do &mdash; no pressure, no jargon.</p>
          </div>
          <div className="paths">
            <a className="path-card p1 pre" data-reveal href="#ai">
              <div className="path-arrow"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6" /></svg></div>
              <div className="path-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="3" /><circle cx="5" cy="6" r="2" /><circle cx="19" cy="6" r="2" /><circle cx="5" cy="18" r="2" /><circle cx="19" cy="18" r="2" /><path d="M9.5 10.2L6.5 7.3M14.5 10.2l3-2.9M9.5 13.8l-3 2.9M14.5 13.8l3 2.9" /></svg></div>
              <h3>Build AI</h3>
              <p>From a first prototype to production systems, connected to what you already run.</p>
            </a>
            <a className="path-card p2 pre" data-reveal href="#iso">
              <div className="path-arrow"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6" /></svg></div>
              <div className="path-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z" /><path d="M9 12l2 2 4-4" /></svg></div>
              <h3>Get ISO ready</h3>
              <p>9001, 14001, 45001, 27001 and 42001 &mdash; gap assessment to audit day.</p>
            </a>
            <a className="path-card p3 pre" data-reveal href="#training">
              <div className="path-arrow"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6" /></svg></div>
              <div className="path-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M2 8l10-4 10 4-10 4-10-4z" /><path d="M6 10.5V16c0 1.4 2.7 3 6 3s6-1.6 6-3v-5.5" /></svg></div>
              <h3>Train your team</h3>
              <p>Practical ISO and AI courses, delivered online, in person or hybrid.</p>
            </a>
          </div>
        </section>

        <section className="thesis">
          <div className="wrap">
            <div className="pre" data-reveal>
              <span className="eyebrow">The unique angle</span>
              <h2 style={{ marginTop: 16 }}>Most firms build AI. Most firms handle ISO. <span className="grad">We do both.</span></h2>
              <p className="lede">The team that builds your chatbot can also prepare your organisation for ISO 42001, the international standard for managing AI responsibly. One plan, one team, no handover gap between the people who build and the people who govern.</p>
            </div>
            <div className="loop" aria-hidden="true">
              <svg viewBox="0 0 320 260">
                <defs><linearGradient id="loopg" x1="0" y1="0" x2="320" y2="260"><stop stopColor="#0098F2" /><stop offset="1" stopColor="#6C56FC" /></linearGradient></defs>
                <path d="M60 180 C 20 120, 60 40, 160 40 C 260 40, 300 120, 260 180" stroke="url(#loopg)" strokeWidth="2.5" fill="none" strokeDasharray="6 7" opacity=".8" />
                <circle cx="60" cy="180" r="34" fill="#fff" stroke="#0098F2" strokeWidth="1.5" />
                <text x="60" y="176" textAnchor="middle" fill="#1E1E1E" fontSize="11" fontFamily="Plus Jakarta Sans" fontWeight="700">Build</text>
                <text x="60" y="190" textAnchor="middle" fill="#6B6F76" fontSize="9" fontFamily="Plus Jakarta Sans">AI systems</text>
                <circle cx="160" cy="40" r="26" fill="#fff" stroke="#C8A24A" strokeWidth="1.5" />
                <text x="160" y="36" textAnchor="middle" fill="#1E1E1E" fontSize="10" fontFamily="Plus Jakarta Sans" fontWeight="700">ISO 42001</text>
                <text x="160" y="49" textAnchor="middle" fill="#6B6F76" fontSize="8" fontFamily="Plus Jakarta Sans">governance</text>
                <circle cx="260" cy="180" r="34" fill="#fff" stroke="#6C56FC" strokeWidth="1.5" />
                <text x="260" y="176" textAnchor="middle" fill="#1E1E1E" fontSize="11" fontFamily="Plus Jakarta Sans" fontWeight="700">Govern</text>
                <text x="260" y="190" textAnchor="middle" fill="#6B6F76" fontSize="9" fontFamily="Plus Jakarta Sans">&amp; support</text>
              </svg>
            </div>
            <dl className="points">
              <div className="pre" data-reveal><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z" /></svg><div><dt>Faster delivery.</dt><dd>One team, one plan, from idea to audit.</dd></div></div>
              <div className="pre" data-reveal><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="9" /><path d="M12 8v4l3 2" /></svg><div><dt>Fewer surprises at audit.</dt><dd>Controls are designed in, not bolted on afterward.</dd></div></div>
              <div className="pre" data-reveal><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 3l8 4v5c0 5-3.4 8.4-8 9-4.6-.6-8-4-8-9V7z" /></svg><div><dt>AI people can trust.</dt><dd>Customers and regulators can see how it&rsquo;s governed.</dd></div></div>
            </dl>
          </div>
        </section>

        <section className="wrap">
          <div className="services-head">
            <span className="eyebrow">Services</span>
            <h2 style={{ marginTop: 14, fontSize: 'clamp(1.7rem,3vw,2.3rem)' }}>Everything between the idea and the audit.</h2>
            <p className="lede" style={{ marginTop: 10 }}>We build AI with you, then prepare your organisation for the ISO standards that make it dependable. Ideovate prepares and supports &mdash; accredited registrars issue the certificate.</p>
          </div>

          <div className="grp" id="ai">
            <div className="grp-top"><h3>Build AI</h3><span>From a first prototype to production, connected to the systems you already run.</span></div>
            <div className="svc-grid">
              <div className="svc"><div className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="3" /><circle cx="5" cy="6" r="2" /><circle cx="19" cy="6" r="2" /><circle cx="5" cy="18" r="2" /><circle cx="19" cy="18" r="2" /><path d="M9.5 10.2L6.5 7.3M14.5 10.2l3-2.9M9.5 13.8l-3 2.9M14.5 13.8l3 2.9" /></svg></div><h4>Custom AI &amp; machine learning</h4><p>Models that predict, classify and spot patterns in your own data.</p></div>
              <div className="svc"><div className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M4 5h16v11H9l-5 4z" /><path d="M8 9h8M8 12h5" /></svg></div><h4>Generative AI &amp; assistants</h4><p>Chatbots, copilots and agents grounded in your own knowledge.</p></div>
              <div className="svc"><div className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M4 18L10 8l4 5 3-4 3 9" /><circle cx="19" cy="6" r="2" /></svg></div><h4>AI strategy &amp; readiness</h4><p>A clear roadmap, a use-case shortlist and governance from day one.</p></div>
              <div className="svc"><div className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="7" cy="7" r="3" /><circle cx="17" cy="17" r="3" /><path d="M9.5 8.5l5 5M10 7h8v4M14 17H6v-4" /></svg></div><h4>Process automation</h4><p>Remove repetitive work by connecting AI to the systems you already use.</p></div>
            </div>
          </div>

          <div className="grp" id="iso">
            <div className="grp-top"><h3>Get ISO ready</h3><span>Gap assessment, documentation, implementation, audit support.</span></div>
            <div className="svc-grid cols-5">
              <div className="svc"><div className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M9 12l2 2 4-4" /><circle cx="12" cy="12" r="9" /></svg></div><h4>ISO 9001 Quality</h4><p>A system that makes good work repeatable.</p></div>
              <div className="svc"><div className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 2l3 2h4v4l2 3-2 3v4h-4l-3 2-3-2H5v-4l-2-3 2-3V4h4z" /></svg></div><h4>ISO 14001 Environmental</h4><p>Manage environmental risk and obligations with structure.</p></div>
              <div className="svc"><div className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 2l3 2h4v4l2 3-2 3v4h-4l-3 2-3-2H5v-4l-2-3 2-3V4h4z" /></svg></div><h4>ISO 45001 Health &amp; Safety</h4><p>Build a safety system people actually use.</p></div>
              <div className="svc"><div className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="5" y="11" width="14" height="9" rx="1.5" /><path d="M8 11V8a4 4 0 018 0v3" /></svg></div><h4>ISO 27001 Information Security</h4><p>Protect the data customers entrust to you.</p></div>
              <div className="svc feat"><div className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="3" /><circle cx="5" cy="6" r="2" /><circle cx="19" cy="6" r="2" /><circle cx="5" cy="18" r="2" /><circle cx="19" cy="18" r="2" /><path d="M9.5 10.2L6.5 7.3M14.5 10.2l3-2.9M9.5 13.8l-3 2.9M14.5 13.8l3 2.9" /></svg></div><h4>ISO 42001 AI Management</h4><p>Show that your AI is accountable, fair and controlled.</p></div>
            </div>
            <div className="note"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="9" /><path d="M12 8h.01M11 11h1v5h1" /></svg> Ideovate prepares and supports your organisation. Independent, accredited registrars carry out the final audit and decide on registration.</div>
          </div>
        </section>

        <section>
          <div className="wrap">
            <span className="eyebrow">How we work</span>
            <h2 style={{ marginTop: 14, fontSize: 'clamp(1.7rem,3vw,2.3rem)' }}>A clear path, in four steps.</h2>
            <div className="timeline">
              <div className="tl-line"><i /></div>
              <div className="tl-step pre" data-reveal><span className="tl-num">01</span><h4>Listen</h4><p>A free consultation to understand the idea, the risks and the goal.</p></div>
              <div className="tl-step pre" data-reveal><span className="tl-num">02</span><h4>Plan</h4><p>A scoped plan with milestones, owners and measures of success.</p></div>
              <div className="tl-step pre" data-reveal><span className="tl-num">03</span><h4>Build &amp; implement</h4><p>We build the solution and the systems around it, with your team beside us.</p></div>
              <div className="tl-step pre" data-reveal><span className="tl-num">04</span><h4>Support</h4><p>We stay for audits, go-live and continual improvement.</p></div>
            </div>
          </div>
        </section>

        <div className="proof">
          <div className="wrap">
            <div className="item"><b>2014</b><span>Founded in Winnipeg</span></div>
            <div className="item"><b>5</b><span>Senior team members</span></div>
            <div className="item"><b>2</b><span>Disciplines, one roof &mdash; AI &amp; ISO</span></div>
            <div className="item"><b>CA &amp; US</b><span>On-site coverage, remote anywhere</span></div>
          </div>
        </div>

        <section className="wrap" id="training">
          <div className="course-head">
            <div>
              <span className="eyebrow">Training</span>
              <h2 style={{ marginTop: 14, fontSize: 'clamp(1.7rem,3vw,2.3rem)' }}>Teams that know how, delivered your way.</h2>
            </div>
            <div className="arrows">
              <button className="arrow-btn" aria-label="Previous courses" onClick={() => scrollCourses(-1)}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 6l-6 6 6 6" /></svg></button>
              <button className="arrow-btn" aria-label="Next courses" onClick={() => scrollCourses(1)}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 6l6 6-6 6" /></svg></button>
            </div>
          </div>
          <div className="track" ref={trackRef}>
            {[
              ['iso', 'ISO 42001 AI Governance', 'Learn what responsible AI management requires in practice.'],
              ['iso', 'ISO 9001 Lead Implementer', 'Plan and lead a quality management system from start to audit.'],
              ['iso', 'ISO 9001 Internal Auditor', 'Audit with confidence and report findings that drive improvement.'],
              ['iso', 'ISO 27001 Foundations', 'Understand information security controls and how to apply them.'],
              ['iso', 'ISO 14001 & 45001 Essentials', 'Understand environmental and safety management in one course.'],
              ['ai', 'AI Literacy for Leaders', 'Make smart decisions about AI without the jargon.'],
              ['ai', 'Generative AI for Business Teams', 'Use AI tools safely and productively, every day.'],
            ].map(([tag, title, desc]) => (
              <div className="ccard" key={title}>
                <span className={`ctag ${tag}`}>{tag}</span>
                <h4>{title}</h4>
                <p>{desc}</p>
                <div className="fmt"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M3 9h18" /></svg> Online, in person or hybrid</div>
              </div>
            ))}
          </div>
          <p className="course-note">Course durations and dates are being confirmed. Training a whole team? Ask about private sessions at the consultation below.</p>
        </section>

        <section className="wrap" id="industries">
          <span className="eyebrow">Industries</span>
          <h2 style={{ marginTop: 14, fontSize: 'clamp(1.7rem,3vw,2.3rem)' }}>Built around how your industry works.</h2>
          <div className="ind-grid">
            <div className="ind"><div className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M3 20V9l6 4V9l6 4V9l6 4v7z" /></svg></div><h4>Manufacturing</h4><p>Quality, traceability and less downtime.</p></div>
            <div className="ind"><div className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="4" y="10" width="16" height="10" rx="1" /><path d="M8 10V7a4 4 0 018 0v3" /></svg></div><h4>Financial services</h4><p>Security, model risk and compliance.</p></div>
            <div className="ind"><div className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 21s-7-4.5-7-10a7 7 0 0114 0c0 5.5-7 10-7 10z" /><path d="M9 11h6M12 8v6" /></svg></div><h4>Healthcare</h4><p>Privacy, safety and accuracy.</p></div>
            <div className="ind"><div className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 3l8 4v5c0 5-3.4 8.4-8 9-4.6-.6-8-4-8-9V7z" /></svg></div><h4>Public sector</h4><p>Accountability and procurement readiness.</p></div>
            <div className="ind"><div className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="4" width="18" height="13" rx="2" /><path d="M9 21h6M12 17v4" /></svg></div><h4>Technology &amp; SaaS</h4><p>Security assurance and AI governance for customers.</p></div>
          </div>
        </section>

        <section className="about" id="about">
          <div className="wrap">
            <div>
              <span className="eyebrow">About Ideovate</span>
              <h2 style={{ marginTop: 16 }}>Two founders. <span className="grad">One idea: build it well.</span></h2>
              <p className="lede" style={{ marginTop: 14 }}>Ideovate Quality Solutions Inc. was founded in Winnipeg in 2014 by Vivek Singh and Mamta Sharma. We build AI, then help you govern it with ISO-ready systems &mdash; one team covering the engineering and the discipline around it.</p>
              <div className="values">
                <span>Build it right.</span><span>Say what&rsquo;s true.</span><span>Leave you stronger.</span>
              </div>
              <a className="btn btn-dark" style={{ marginTop: 28 }} href="#book">Talk to the founders</a>
            </div>
            <div className="founders">
              <div className="f-card">
                {photoFailed ? (
                  <div className="f-photo ph"><svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8"><circle cx="12" cy="8" r="4" /><path d="M4 20c0-4 4-6 8-6s8 2 8 6" /></svg></div>
                ) : (
                  <img className="f-photo" src="/vivek-singh.jpg" alt="Vivek Singh, co-founder of Ideovate" width="84" height="84" onError={() => setPhotoFailed(true)} />
                )}
                <b>Vivek Singh</b><span>Co-founder &middot; AI &amp; technology</span>
                <p>Background spanning wealth management and banking technology environments.</p>
              </div>
              <div className="f-card">
                <div className="f-photo ph"><svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8"><circle cx="12" cy="8" r="4" /><path d="M4 20c0-4 4-6 8-6s8 2 8 6" /></svg></div>
                <b>Mamta Sharma</b><span>Co-founder &middot; ISO &amp; quality</span>
                <p>Background in quality management systems and ISO implementation.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="book" id="book">
          <div className="wrap">
            <div className="book-info">
              <span className="eyebrow">Book a free consultation</span>
              <h2 style={{ marginTop: 14 }}>A free consultation. No pressure.</h2>
              <p className="lede" style={{ marginTop: 12 }}>We listen, ask questions and tell you honestly what we&rsquo;d do &mdash; whether that&rsquo;s an AI build, an ISO readiness plan, or training for your team.</p>
              <div className="contact-list">
                <div className="row">
                  <div className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M3 5c0 9 7 16 16 16l2-5-6-2-2 2c-2-1-4-3-5-5l2-2-2-6z" /></svg></div>
                  <div><b>Phone</b><a className="val val-link" href="tel:+12045905053">204-590-5053</a></div>
                  <button className="copy-btn" onClick={() => copyText('204-590-5053', 'phone')}>{copied === 'phone' ? 'Copied' : 'Copy'}</button>
                </div>
                <div className="row">
                  <div className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M4 6h16v12H4z" /><path d="M4 7l8 6 8-6" /></svg></div>
                  <div><b>Email</b><a className="val val-link" href="mailto:hello@ideovate.ca">hello@ideovate.ca</a></div>
                  <button className="copy-btn" onClick={() => copyText('hello@ideovate.ca', 'email')}>{copied === 'email' ? 'Copied' : 'Copy'}</button>
                </div>
                <div className="row">
                  <div className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 21s-7-4.5-7-10a7 7 0 0114 0c0 5.5-7 10-7 10z" /><circle cx="12" cy="11" r="2.4" /></svg></div>
                  <div><b>Office</b><span className="val" style={{ fontFamily: 'var(--font)' }}>101 Greenwood Ave, Winnipeg, MB</span></div>
                </div>
              </div>
            </div>
            <div className="form-card">
              {sent ? (
                <div className="success">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="9" /><path d="M8 12l3 3 5-6" /></svg>
                  <h3>You&rsquo;re on the list.</h3>
                  <p style={{ color: 'var(--muted)', marginTop: 8 }}>We&rsquo;ll be in touch within one business day to find a time.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="form-grid">
                    <div className="field"><label htmlFor="fName">Name</label><input id="fName" required placeholder="Jordan Lee" /></div>
                    <div className="field"><label htmlFor="fCompany">Company</label><input id="fCompany" required placeholder="Your organisation" /></div>
                    <div className="field full"><label htmlFor="fNeed">What do you need?</label>
                      <select id="fNeed"><option>Build AI</option><option>Get ISO ready</option><option>Training</option><option>Not sure yet</option></select>
                    </div>
                    <div className="field full"><label htmlFor="fTimeline">Timeline</label><input id="fTimeline" placeholder="e.g. next quarter" /></div>
                    <div className="field full"><label htmlFor="fMsg">A few details</label><textarea id="fMsg" placeholder="Tell us about the idea&hellip;" /></div>
                  </div>
                  <button className="btn btn-dark" type="submit">Request a consultation</button>
                  <p className="form-note">We&rsquo;ll reply within one business day. We never share your details.</p>
                </form>
              )}
            </div>
          </div>
        </section>

        <section className="close-band">
          <div className="wrap">
            <div><h2>Have an idea worth building?</h2><p>Tell us. We&rsquo;ll tell you how to make it real.</p></div>
            <a className="btn btn-white" href="#book">Book a free consultation &rarr;</a>
          </div>
        </section>

      </main>

      <footer>
        <div className="wrap foot-grid">
          <div>
            <b>Ideovate Quality Solutions Inc.</b>
            <p style={{ marginBottom: 10 }}>Turning your great ideas into innovation.</p>
            <p style={{ fontSize: '.84rem' }}>101 Greenwood Avenue, Winnipeg, Manitoba</p>
          </div>
          <div>
            <b>Services</b>
            <a href="#ai">AI Solutions</a><a href="#iso">ISO Readiness</a><a href="#training">Training</a>
          </div>
          <div>
            <b>Company</b>
            <a href="#about">About</a><a href="#industries">Industries</a><a href="#book">Book a consultation</a>
          </div>
          <div>
            <b>Contact</b>
            <a href="tel:+12045905053">204-590-5053</a>
            <a href="tel:+12049990880">204-999-0880</a>
            <a href="mailto:hello@ideovate.ca">hello@ideovate.ca</a>
            <span style={{ display: 'block', marginTop: 4 }}>Serving Canada &amp; the US, on-site and remote.</span>
          </div>
        </div>
        <div className="wrap foot-legal">
          <span>&copy; 2026 Ideovate Quality Solutions Inc.</span>
          <span>Privacy &middot; Terms &middot; Accessibility &middot; Cookie preferences</span>
        </div>
      </footer>
    </>
  );
}
