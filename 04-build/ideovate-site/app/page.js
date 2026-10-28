import Header from '../components/Header';
import Mark from '../components/Logo';
import NodeField from '../components/NodeField';
import Courses from '../components/Courses';
import SmoothMotion from '../components/SmoothMotion';
import Icon from '../components/Icons';

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
        <section className="hero">
          <div className="wrap hero-grid">
            <h1 data-hero>Turning your great ideas into innovation. <span className="grad">Built well. Governed well.</span></h1>
            <div className="hero-side" data-hero>
              <p><b>Ideovate builds AI for your business,</b> then helps you put the quality systems around it so it can be trusted. One Winnipeg team. Since 2014.</p>
              <div className="cta-row">
                <a className="btn btn-fill" href="/book/">Book a free consultation</a>
                <a className="btn btn-line" href="#iso">Explore ISO readiness</a>
              </div>
              <p className="trust">On-site across Canada and the US. Remote anywhere.</p>
            </div>
          </div>
        </section>

        <div className="wrap" data-reveal-group>
          <section className="band" data-reveal>
            <div><h2>Build well. Govern well.</h2><p>Tell us the idea. In a free consultation we listen, ask questions and tell you honestly what we would do.</p></div>
            <a className="btn btn-white" href="/book/">Book now &rarr;</a>
          </section>
        </div>

        <section className="split" id="about" data-reveal-group>
          <div className="split-txt" data-reveal>
            <span className="eyebrow">About Ideovate</span>
            <h2>Two founders. <span className="grad">One idea: build it well.</span></h2>
            <p className="lead">Ideovate Quality Solutions Inc. was founded in Winnipeg in 2014 by Vivek Singh and Mamta Sharma. We build AI, then help you govern it with ISO-ready systems, so one team covers the engineering and the discipline around it.</p>
            <a className="btn btn-line" href="/book/">Talk to the founders</a>
          </div>
          <div className="panel" data-reveal>
            <NodeField />
            <div className="founders">
              <figure><img src="/vivek-singh.jpg" alt="Vivek Singh, co-founder of Ideovate" width="220" height="220" /><figcaption><b>Vivek Singh</b><span>Co-founder</span></figcaption></figure>
              <figure><div className="ph" aria-hidden="true"><Mark id="about" bare className="panel-mark" /></div><figcaption><b>Mamta Sharma</b><span>Co-founder</span></figcaption></figure>
            </div>
          </div>
        </section>

        <div className="wrap">
          <section className="services-intro" data-reveal-group>
            <div data-reveal>
              <h2>Everything between <span className="grad">the idea and the audit.</span></h2>
              <p className="lead">We build AI with you, then prepare your organisation for ISO 9001, 14001, 45001, 27001 and 42001. Ideovate prepares and supports; accredited registrars make the final decision.</p>
              <a className="btn btn-fill" href="#services">Explore our services</a>
            </div>
            <div className="tiles">
              <a className="tile t1" href="#services" data-reveal><span className="arrow">&rarr;</span><h3>Build AI</h3><p>From a first prototype to production systems.</p></a>
              <a className="tile t2" href="#iso" data-reveal><span className="arrow">&rarr;</span><h3>Get ISO ready</h3><p>From gap assessment to audit day.</p></a>
              <a className="tile t3" href="#training" data-reveal><span className="arrow">&rarr;</span><h3>Train your team</h3><p>Practical courses online, in person or hybrid.</p></a>
            </div>
          </section>

          <section className="services">
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
          </section>
        </div>

        <section className="story" data-reveal-group>
          <div className="wrap story-grid">
            <div data-reveal>
              <h2>Most firms build AI. Most firms handle ISO. <span className="grad">We do both.</span></h2>
              <p className="lead">The team that builds your chatbot can also prepare your organisation for ISO 42001, the international standard for managing AI responsibly. You get one plan, one team and no handover gaps between the people who build and the people who govern.</p>
            </div>
            <dl className="points">
              <div data-reveal><dt>Faster delivery.</dt><dd>One team from idea to audit.</dd></div>
              <div data-reveal><dt>Fewer surprises at audit.</dt><dd>Controls are designed in, not bolted on.</dd></div>
              <div data-reveal><dt>AI people can trust.</dt><dd>Customers and regulators can see how it is governed.</dd></div>
            </dl>
          </div>
        </section>

        <section className="process" data-process>
          <div className="wrap">
            <h2>A clear path, <span className="grad">in four steps.</span></h2>
            <div className="timeline">
              <span className="line" aria-hidden="true"><i data-progress /></span>
              <ol>{steps.map(([t, d], i) => (<li key={t}><span className="num">{i + 1}</span><div><h3>{t}</h3><p>{d}</p></div></li>))}</ol>
            </div>
          </div>
        </section>

        <Courses />

        <section className="industries" id="industries">
          <div className="wrap">
            <h2>Built around <span className="grad">how your industry works.</span></h2>
            <ul className="chips">{industries.map((i) => <li key={i}>{i}</li>)}</ul>
          </div>
        </section>

        <section className="final" data-reveal-group>
          <div className="wrap">
            <div className="band" data-reveal>
              <div><h2>Have an idea worth building?</h2><p>Tell us. We will tell you how to make it real.</p></div>
              <a className="btn btn-white" href="/book/">Book a free consultation &rarr;</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="wrap foot-grid">
          <div><b>Ideovate Quality Solutions Inc.</b><p>Turning your great ideas into innovation.</p><p>101 Greenwood Avenue, Winnipeg, Manitoba</p></div>
          <div><b>Contact</b><p>204-590-5053<br />204-999-0880<br /><a href="mailto:hello@ideovate.ca">hello@ideovate.ca</a><br /><a href="mailto:viveksingh@ideovate.ca">viveksingh@ideovate.ca</a></p></div>
          <div><b>Serving</b><p>Organisations across Canada and the United States, on-site and remote.</p></div>
        </div>
        <div className="wrap legal"><span>&copy; 2026 Ideovate Quality Solutions Inc.</span><span>Privacy &middot; Terms &middot; Accessibility &middot; Cookie preferences</span></div>
      </footer>
    </>
  );
}
