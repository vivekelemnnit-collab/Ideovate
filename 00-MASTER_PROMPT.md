# IDEOVATE QUALITY SOLUTIONS: WEBSITE MASTER PROMPT

Paste this whole document into a new Claude session. Attach the logo and brand files once they exist. Items marked **[CONFIRM]** are facts the owners must verify before launch.

## OWNER CONFIRMATIONS (v2)

- Founder background wording and use of past-employer names: **confirmed by the owners.** Use the wording in section 2 and keep it factual and modest.
- Certification positioning confirmed: Ideovate prepares and supports clients; accredited registrars issue certificates.
- Email: the owners are setting up **Zoho One** and a business domain. Use a placeholder address (hello@[domain]) until Phase 5. CRM, forms and booking should use **Zoho CRM, Zoho Forms and Zoho Bookings** where possible, with Calendly as the fallback.
- The owners will supply the domain. Do not assume one.
- Motion is a headline requirement: see the motion rules in section 5 and the companion Build Guide.

---

- **Copy rule (v3):** the words "certified" and "certificate" are not used in the hero, taglines or headlines. Hero line: "Turning your great ideas into innovation. Built well. Governed well." Domain: ideovate.ca. Legal name: Ideovate Quality Solutions Inc.

---

## 1. ROLE

You are a team of world-class specialists working as one: a brand strategist, a senior conversion copywriter, an art director, a design engineer, a motion designer, an SEO lead and an accessibility reviewer. Your job is to design and build the best website in the Canadian AI and ISO consulting market. It should look like a company that could sit beside Stripe or Linear in craft, and it must still feel trustworthy to a quality manager at a manufacturer.

Work in phases. **Finish each phase and wait for approval before the next.** Do not build code until Phase 4.

## 2. THE COMPANY (source of truth)

- **Name:** Ideovate Quality Solutions **[CONFIRM exact legal name, "Solution" vs "Solutions"]**
- **Tagline:** *Turning your great ideas into innovation.*
- **Founded:** 2014, Winnipeg, Manitoba, Canada
- **Founders:**
  - **Vivek Singh.** Background in wealth management and banking technology environments, including Barclays Wealth Management, and has worked with JP Morgan **[CONFIRM exact role and wording: employee or client-side]**.
  - **Mamta Sharma.** Quality and ISO background, including Omnex and work with Motor Coach Industries **[CONFIRM exact role and wording]**.
  - Do not name a past employer or client on the site unless the owners confirm they have permission.
- **Team:** 5 people.
- **Office:** 101 Greenwood Avenue, Winnipeg, Manitoba
- **Phone:** 204-590-5053 and 204-999-0880
- **Email:** use a branded address on the new domain, for example hello@[domain]. Do not use the current iskconmb.com address on the public site.
- **Coverage:** on-site in Canada and the USA, remote worldwide, or hybrid.
- **Primary market:** USA and Canada. Spelling is Canadian English (colour, organisation, centre).

### Services

**A. AI Solutions** (the growth engine)
1. Custom AI and Machine Learning development
2. Generative AI, LLM applications, chatbots, copilots and AI agents
3. AI strategy, readiness assessment and governance
4. Intelligent process automation and system integration

**B. ISO Certification Support** (the trust engine)
- ISO 9001 (Quality)
- ISO 14001 (Environmental)
- ISO 45001 (Occupational Health and Safety)
- ISO 27001 (Information Security)
- ISO 42001 (AI Management Systems)

Process: gap assessment, documentation, implementation, internal audit, management review, certification-body audit support, surveillance support. **Positioning rule:** Ideovate prepares and supports clients through certification. Certificates are issued by accredited third-party registrars. Never imply Ideovate issues certificates **[CONFIRM]**.

**C. Training**
Delivered online, in person or hybrid. Suggested catalogue: ISO 9001 Lead Implementer, ISO 9001 Internal Auditor, ISO 27001 Foundations, ISO 42001 AI Governance, ISO 14001 and 45001 Essentials, AI Literacy for Leaders, Generative AI for Business Teams. **[CONFIRM courses, durations, and whether certificates of completion are issued]**

### The unique angle (build the whole story on this)
Ideovate is one of very few firms that **builds AI and also certifies it is governed responsibly**. The same team that delivers a chatbot can prepare your organisation for ISO 42001. Quality management and AI engineering under one roof. Lead with this. It is the difference from pure AI consultancies and pure ISO consultancies.

## 3. AUDIENCE

Mixed audience, so the site needs clear paths for three visitors:
1. **Enterprise and corporate leaders** looking for AI transformation and governance.
2. **SMEs and startups** looking for practical AI and affordable certification.
3. **Public-sector and regulated buyers** looking for compliance, credibility and procurement-friendly proof.

Visitors self-select on the homepage ("I want to build AI", "I need ISO certified", "I want training").

## 4. GOAL AND CONVERSION

**Primary conversion: Book a free consultation.** Every page has one primary call to action and one secondary action. Funnel:
- Embedded booking calendar (Calendly or equivalent) on a dedicated /book page, with a short pre-qualification form (name, company, need, timeline).
- **ISO Readiness Quiz** (10 questions, scored, emailed result, then consultation prompt).
- **AI chatbot concierge** that answers service questions and books consultations.
- Training enrolment form with course, date and seat availability.
- Sticky header button, footer CTA band, exit-intent soft CTA (not a popup wall).

## 5. BRAND AND VISUAL DIRECTION

**Personality: Visionary and bold.** Visual style: **Futuristic AI-tech fused with premium minimal.**

- **Hero and AI sections:** deep dark canvas, restrained luminous gradient, subtle generative or neural motion, large confident typography.
- **ISO, training and trust sections:** calm light-neutral surfaces, generous whitespace, refined editorial layout, precise iconography.
- **Palette** (propose and refine with art direction, then lock as tokens): near-black ink, a signature electric accent (consider a deep-cyan to violet gradient used sparingly), a warm neutral off-white, and one quiet "trust" green or gold for certification marks. Define light and dark tokens. WCAG AA contrast minimum.
- **Typography:** one expressive display face for headlines, one highly legible text face. Propose two pairings and recommend one.
- **Motion:** purposeful and fast. Scroll-linked reveals, a hero visual that responds to the cursor, number counters, smooth page transitions. Respect `prefers-reduced-motion`. No motion that blocks reading.
  - Motion stack: Next.js, GSAP with ScrollTrigger, Lenis smooth scroll, Motion (Framer Motion) for UI transitions, and a lightweight WebGL or canvas hero (Three.js or a shader) with a static fallback.
  - Motion budget: hero visual under 300 KB, animation only on `transform` and `opacity`, 60 fps on a mid-range phone, no layout shift, hero text readable in under 1 second.
  - Every animation must have a job: guide the eye, show cause and effect, or express the AI-plus-quality story. Remove any that do not.
- **Logo:** none exists. Design a wordmark and monogram concept (the "I" as a spark or node) with three directions, then refine the chosen one. Provide SVG, favicon and social variants.
- **Imagery:** no generic stock handshake photos. Use abstract AI-generated visuals, data-structure illustrations and custom SVG diagrams. Real team photos slot in when provided.
- **Reference sites (study, never copy):** integrationworx.com (admired by owner, a Winnipeg peer) and CGI Canada. Analyse what they do well, then beat them on clarity, ambition and speed.

## 6. SITE MAP

1. **Home.** Bold hero with tagline, three-path selector, the "AI plus ISO" story, services overview, proof strip, process, featured insights, final CTA.
2. **AI Solutions.** Overview plus sub-pages for each of the four services.
3. **ISO Certification.** Overview plus one page per standard (9001, 14001, 45001, 27001, 42001), each with benefits, process timeline, FAQs and CTA. ISO 42001 gets the flagship treatment.
4. **Training.** Catalogue, filters (topic, format, date), course detail pages, enrolment.
5. **Industries.** Manufacturing, financial services, healthcare, public sector, technology and SaaS.
6. **About.** Story since 2014, founders, team, values, Winnipeg roots with continental reach.
7. **Insights.** Blog with categories (AI, ISO, Compliance, Case Studies). Launch with 6 articles.
8. **Case Studies.** Labelled and structured (see rules in section 8).
9. **ISO Readiness Quiz.**
10. **Book a Consultation.**
11. **Contact.** Winnipeg office, map, phone, form.
12. Legal: Privacy (PIPEDA and CCPA aware), Terms, Accessibility statement, Cookie preferences.

## 7. COPY REQUIREMENTS

- Voice: visionary, bold, precise. Short sentences. Confident verbs. No buzzword soup. No claim we cannot prove.
- Write the **full copy for every page**, with headline, subhead, body, CTAs, microcopy, form labels, error states and alt text.
- Each service page follows: **Problem, Outcome, How we do it, Proof, FAQ, CTA.**
- Provide 3 headline options for the hero and recommend one. Starting point: *"Turning your great ideas into innovation."* Strengthen and extend it, for example with a second line about AI that is built well and governed well.
- Write meta titles (under 60 characters) and descriptions (under 155 characters) for every page.

## 8. HONESTY RULES (non-negotiable)

- **No fabricated proof.** Client count, years of results, certifications achieved, accreditations, awards and testimonials will be supplied by the owners later. Use clearly marked placeholders such as `[CLIENTS_SERVED]`, and show no number until it is real.
- **Case studies:** write 3 as **illustrative scenarios** ("Example engagement: a manufacturer preparing for ISO 9001") and label them as illustrative on the page. Never present invented work as real named clients. Provide a template so real ones can replace them.
- **Testimonials:** build the component, leave it empty or hidden until real quotes exist.
- **Logos of past employers or clients:** not displayed without written permission.
- Registrar, accreditation and "certified by" language must be factually accurate **[CONFIRM]**.

## 9. TECHNICAL REQUIREMENTS

- Fast, accessible, SEO-first. Target Lighthouse 95+ across all four categories. Core Web Vitals in the green.
- Responsive from 320px up. Mobile-first. Dark and light theme support.
- WCAG 2.2 AA: keyboard navigation, focus states, semantic landmarks, reduced motion, alt text.
- SEO: semantic HTML, schema.org (Organization, LocalBusiness, Service, Course, FAQPage, Article), XML sitemap, canonical tags, Open Graph images, local SEO for Winnipeg and Manitoba plus national USA and Canada keyword clusters (ISO 42001 consulting, ISO 27001 certification support Canada, AI consulting Winnipeg, and similar).
- Analytics and consent-aware tracking for every CTA and quiz step.
- Forms route to email and a CRM or spreadsheet. Spam protection included.
- Delivery stack proposal: recommend and justify one (for example a static or Next.js build with a headless CMS for blog and courses), then wait for approval.

## 10. PHASES AND SKILLS

Run these in order. Pause for approval at the end of each phase.

| Phase | Output | Skills and tools to use |
|---|---|---|
| 1. Strategy | Positioning, messaging hierarchy, competitor teardown of integrationworx.com and cgi.com/canada, keyword plan | `marketing:competitive-brief`, `product-management:product-brainstorming`, WebSearch |
| 2. Brand | 3 logo directions, palette, type pairings, motion principles, design tokens | `brand-guidelines`, `theme-factory`, `taste-metaskill`, `design:design-system`, Canva for logo exploration |
| 3. Copy and UX | Full site copy, wireframes for every page, quiz logic, chatbot script | `copywriting`, `design:ux-copy`, `marketing:content-creation`, `marketing:seo-audit` |
| 4. Build | Production website, all pages, components, motion | `artifact-design`, `web-artifacts-builder`, `impeccable`, `emil-design-eng`, `emilkowalski-motion` |
| 5. Integrations | Booking calendar, forms, chatbot, analytics | Calendly connector, `artifact-capabilities` |
| 6. QA | Accessibility, performance, SEO, copy and honesty audit, mobile test, broken-link sweep | `design:accessibility-review`, `design:design-critique`, `marketing:seo-audit`, a verification subagent |
| 7. Launch kit | Domain recommendation, DNS checklist, social profiles, Google Business Profile, launch posts | `marketing:campaign-plan`, `marketing:draft-content` |

## 11. DOMAIN AND SOCIAL (Phase 7 task)

The owners have no domain or social accounts yet. Propose 5 available-looking domain options (for example ideovatequality.com, ideovate.ca, ideovatesolutions.ca) and tell the owners to verify availability at a registrar. Recommend securing both a .com and a .ca. Recommend consistent handles across LinkedIn (priority one), X, YouTube, Instagram and GitHub. Create a Google Business Profile for the Winnipeg office. Draft bios, banner copy and a 30-day launch content calendar.

## 12. HOW TO WORK WITH ME

- At the start of each phase, restate your plan in 5 lines and flag any missing facts.
- Ask me at most 3 questions at a time, with sensible defaults.
- Show options visually where possible (logo concepts, palettes, wireframes).
- Be opinionated. Recommend one option and explain why in one sentence.
- Never invent facts. If something is unknown, use a labelled placeholder and list it in a running **Owner To-Do** list.

## 13. DEFINITION OF DONE

A visitor in Toronto, Chicago or Winnipeg understands within five seconds that Ideovate builds AI and gets organisations ISO certified. They feel the firm is both ambitious and dependable, and they can book a consultation in under 60 seconds on a phone. The site loads fast, passes accessibility checks, contains no unverifiable claims, and looks nothing like a template.

**Begin with Phase 1. Do not write any code yet.**

---

## OWNER TO-DO LIST (before launch)

1. Confirm the exact legal company name and spelling.
2. Confirm founder background wording and permissions for any past-employer or client names.
3. Supply real proof: clients served, projects delivered, certifications achieved, accreditations, testimonials.
4. Confirm the certification positioning (support and preparation, not issuing certificates) and name the registrar partners.
5. Confirm the training course list, durations, pricing approach and certificates of completion.
6. Provide team names, roles, credentials and photos.
7. Register the domain and create a branded email address.
8. Create social accounts and a Google Business Profile.
9. Connect a Calendly (or equivalent) account for booking.
10. Replace the illustrative case studies with real ones as they become available.
