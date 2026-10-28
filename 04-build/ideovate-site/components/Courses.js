'use client';
import { useRef } from 'react';

const courses = [
  ['ISO 42001 AI Governance', 'Learn what responsible AI management requires in practice.', 'ISO'],
  ['ISO 9001 Lead Implementer', 'Plan and lead a quality management system from start to audit.', 'ISO'],
  ['ISO 9001 Internal Auditor', 'Audit with confidence and report findings that drive improvement.', 'ISO'],
  ['ISO 27001 Foundations', 'Understand information security controls and how to apply them.', 'ISO'],
  ['ISO 14001 and 45001 Essentials', 'Understand environmental and safety management in one course.', 'ISO'],
  ['AI Literacy for Leaders', 'Make smart decisions about AI without the jargon.', 'AI'],
  ['Generative AI for Business Teams', 'Use AI tools safely and productively every day.', 'AI'],
];
export default function Courses() {
  const ref = useRef(null);
  const go = (dir) => ref.current?.scrollBy({ left: dir * 340, behavior: 'smooth' });
  return (
    <section className="courses" id="training">
      <div className="wrap">
        <div className="courses-head">
          <h2>Teams that know how, <span className="grad">delivered your way.</span></h2>
          <div className="arrows">
            <button className="arrow-btn" aria-label="Previous courses" onClick={() => go(-1)}>←</button>
            <button className="arrow-btn" aria-label="Next courses" onClick={() => go(1)}>→</button>
          </div>
        </div>
        <div className="track" ref={ref} tabIndex={0} aria-label="Training courses">
          {courses.map(([t, d, tag]) => (
            <article className="card" key={t}><h3>{t}</h3><p>{d}</p><span className="tag">{tag} · Online, in person or hybrid</span></article>
          ))}
        </div>
        <p className="fine">Course durations and dates are being confirmed. Ask us about private sessions for a whole team.</p>
      </div>
    </section>
  );
}
