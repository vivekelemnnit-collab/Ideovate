import Header from '../components/Header';
import Mark from '../components/Logo';
import NodeField from '../components/NodeField';
import SmoothMotion from '../components/SmoothMotion';
import Icon from '../components/Icons';

const paths = [
  ['Build AI', 'From a first prototype to production systems.', '#services'],
  ['Get ISO ready', 'ISO 9001, 14001, 45001, 27001 and 42001, from gap assessment to audit day.', '#iso'],
  ['Train your team', 'Practical courses online, in person or hybrid.', '#training'],
];
const services = [
  { group: 'Build AI', id: 'services', blurb: 'From a first prototype to production, connected to the systems you already run.', items: [
    ['ml', 'Custom AI and machine learning', 'Models that predict, classify and spot patterns in your own data.'],
    ['chat', 'Generative AI and assistants', 'Chatbots, copilots and agents grounded in your knowledge.'],
    ['road', 'AI strategy and readiness', 'A clear roadmap, a use-case shortlist and governance from day one.'],
    ['flow', 'Process automation', 'Remove repetitive work by connecting AI to the systems you already use.'],
  ]},
  { group: 'Get ISO ready', id: 'iso', blurb: 'From gap assessment to audit day, with the paperwork kept in proportion.', items: [
    ['q', 'ISO 9001 Quality', 'A system that makes good work repeatable.'],
    ['env', 'ISO 14001 Environmental', 'Manage environmental risk and obligations with structure.'],
    ['safe', 'ISO 45001 Health and Safety', 'Build a safety system people actually use.'],
    ['lock', 'ISO 27001 Information Security', 'Protect the data customers entrust to you.'],
    ['ai', 'ISO 42001 AI Management', 'Show that your AI is accountable, fair and controlled.'],
  ]},
  { group: 'Train your team', id: 'training', blurb: 'Practical courses, delivered online, in person or hybrid.', items: [
    ['train', 'Courses for every level', 'Implementer, auditor and awareness courses for ISO and AI.'],
  ]},
];
const steps = [
  ['Listen', 'A free consultation to understand the idea, the risks and the goal.'],
  ['Plan', 'A scoped plan with milestones, owners and measures of success.'],
  ['Build and implement', 'We build the solution and the systems around it, with your team beside us.'],
  ['Support', 'We stay for audits, go-live and improvement.'],
];
const industries = ['Manufacturing', 'Financial services', 'Healthcare', 'Public sector', 'Technology and SaaS'];

export default function Home() {
  return (
    <>
      <SmoothMotion />
      <Header />
      <main id="top">
        {/* HERO: the idea (spark) held inside governance (orbit) */}
        <section className="hero dark">
          <NodeField />
          <div className="wrap hero-grid">
            <div data-hero className="hero-copy">
              <h1>Turning your great ideas into <em>innovation.</em></h1>
              <p className="hero-sub">Built well. Governed well.</p>
              <p className="lead">Ideovate designs and builds AI for your business, then helps you put the quality systems around it so it can be trusted. One Winnipeg team. Since 2014.</p>
              <div className="cta-row">
                <a className="btn" href="/book/">Book a free consultation</a>
                <a className="btn btn-ghost" href="#iso">Take the ISO readiness quiz</a>
              </div>
              <p className="trust">On-site across Canada and the US. Remote anywhere.</p>
            </div>
            <div className="hero-mark">
              <Mark id="hero" bare />
              <p className="legend"><span><i className="sw-dot" />The idea</span><span><i className="sw-ring" />The governance around it</span></p>
            </div>
          </div>
        </section>

        {/* PATHS: ruled rows, hover wipes to ink */}
        <section className="paths light">
          <div className="wrap">
            <h2>Where do you want to start?</h2>
            <ul className="rows">
              {paths.map(([t, d, h]) => (
                <li key={t}><a className="row" href={h}><span className="row-t">{t}</span><span className="row-d">{d}</span><span className="row-a" aria-hidden="true">→</span></a></li>
              ))}
            </ul>
          </div>
        </section>

        {/* STORY */}
        <section className="story dark">
          <div className="wrap split">
            <div>
              <h2>Most firms build AI. Most firms handle ISO. We do both.</h2>
              <p className="lead">The team that builds your chatbot can also prepare your organisation for ISO 42001, the international standard for managing AI responsibly. You get one plan, one team and no handover gaps between the people who build and the people who govern.</p>
            </div>
            <dl className="points">
              <div><dt>Faster delivery.</dt><dd>One team from idea to audit.</dd></div>
              <div><dt>Fewer surprises at audit.</dt><dd>Controls are designed in, not bolted on.</dd></div>
              <div><dt>AI people can trust.</dt><dd>Customers and regulators can see how it is governed.</dd></div>
            </dl>
          </div>
        </section>

        {/* SERVICES: grouped, ruled, no card grid */}
        <section className="services light">
          <div className="wrap">
            <h2>Everything between the idea and the audit.</h2>
            {services.map((g) => (
              <div className="group" id={g.id} key={g.group}>
                <div className="group-head"><h3>{g.group}</h3><p>{g.blurb}</p></div>
                <ul className="svc-list">
                  {g.items.map(([ic, t, d]) => (
                    <li className="svc" key={t}><span className="svc-line" aria-hidden="true" /><Icon name={ic} /><div><h4>{t}</h4><p>{d}</p></div></li>
                  ))}
                </ul>
              </div>
            ))}
            <p className="note">Ideovate prepares and supports your organisation. Independent, accredited registrars carry out the final audit and decide on registration.</p>
          </div>
        </section>

        {/* PROCESS (scroll-scrubbed line) */}
        <section className="process dark" data-process>
          <div className="wrap">
            <h2>A clear path, in four steps.</h2>
            <div className="timeline">
              <span className="line" aria-hidden="true"><i data-progress /></span>
              <ol>{steps.map(([t, d], i) => (<li key={t}><span className="num">{i + 1}</span><div><h3>{t}</h3><p>{d}</p></div></li>))}</ol>
            </div>
          </div>
        </section>

        {/* INDUSTRIES */}
        <section className="industries light" id="industries">
          <div className="wrap">
            <h2>Built around how your industry works.</h2>
            <ul className="chips">{industries.map((i) => <li key={i}>{i}</li>)}</ul>
          </div>
        </section>

        {/* CLOSE */}
        <section className="final dark">
          <div className="wrap">
            <h2>Have an idea worth building?</h2>
            <p className="lead">Tell us. We'll tell you how to make it real.</p>
            <a className="btn" href="/book/">Book a free consultation</a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="wrap foot-grid">
          <div><b>Ideovate Quality Solutions Inc.</b><p>Turning your great ideas into innovation.</p><p>101 Greenwood Avenue, Winnipeg, Manitoba</p></div>
          <div><b>Contact</b><p>204-590-5053<br />204-999-0880<br />hello@ideovate.ca</p></div>
          <div><b>Serving</b><p>Organisations across Canada and the United States, on-site and remote.</p></div>
        </div>
        <div className="wrap legal"><span>© 2026 Ideovate Quality Solutions Inc.</span><span>Privacy · Terms · Accessibility · Cookie preferences</span></div>
      </footer>
    </>
  );
}
