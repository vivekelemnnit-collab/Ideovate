# IDEOVATE: STEP-BY-STEP GUIDE TO BUILD A WORLD-CLASS MOTION WEBSITE

Companion to `Ideovate_Website_Master_Prompt.md`. Each step says what to do, why, and what you do versus what Claude does.

---

## Before you start (you, about 1 hour)

**Step 0. Get the domain ready.**
- Buy a .com and a .ca (for example ideovatequality.com and ideovate.ca) from a registrar such as Cloudflare, Namecheap or Google Domains successor registrars.
- *Why:* the domain is the one unavoidable cost, and Zoho, the booking calendar and email all need it. The .ca builds trust with Canadian buyers; the .com protects you for the US.
- Turn on registrar lock and auto-renew so the domain is never lost.

**Step 0b. Finish Zoho.** Add the domain in Zoho, create hello@ and one mailbox per team member, and add SPF, DKIM and DMARC records.
- *Why:* without these records your proposals can land in spam.

---

## Phase 1. Strategy (1 session)

1. Paste the master prompt into a new Claude session. Say: "Start Phase 1."
2. Claude studies integrationworx.com and cgi.com/canada, then writes positioning and a keyword plan.
3. **You approve:** the one-sentence positioning ("We build AI and get it ISO-ready").

*Why first:* design and motion made before positioning are decoration. Strategy decides what the motion needs to say.

## Phase 2. Brand identity (1 to 2 sessions)

1. Claude proposes 3 logo directions, 2 palettes, 2 font pairings and motion principles.
2. You pick one of each. Do not blend all three.
3. Claude locks these as design tokens (colours, type scale, spacing, easing curves, durations).

*Why:* tokens make every page consistent and let you change the whole look in one place later.
*Motion principle to decide here:* one easing curve and 3 durations (fast 150 ms, normal 300 ms, slow 700 ms). Consistent timing is what makes motion feel expensive.

## Phase 3. Copy and wireframes (2 sessions)

1. Claude writes all page copy and simple wireframes.
2. You correct facts only (names, services, claims). Mark anything unverifiable as a placeholder.
3. Claude writes the ISO readiness quiz questions and scoring.

*Why before build:* copy changes layout. Changing words after building animations wastes the animation work.

## Phase 4. Build with motion (3 to 5 sessions)

Build in this order. Each layer is tested before the next.

| Layer | What | Why |
|---|---|---|
| 1. Static site | Next.js pages, tokens, responsive layout, no animation | A site that is fast and readable without motion is the safe foundation |
| 2. Smooth scroll | Lenis | Gives the premium glide; load it only once layout is stable |
| 3. Scroll reveals | GSAP ScrollTrigger: headlines, cards, number counters | Guides attention down the page in the order you want it read |
| 4. Hero visual | Three.js or a shader (neural network or flowing particles) reacting to the cursor | This is the first-five-seconds "AI" signal; keep it light, with a static image fallback |
| 5. UI transitions | Motion (Framer Motion) for menus, tabs, page transitions | Makes interactions feel responsive and connected |
| 6. Signature moment | One memorable sequence, for example the "I" logo forming from nodes | Visitors remember one thing; do one thing brilliantly |
| 7. Accessibility pass | `prefers-reduced-motion` alternatives, keyboard focus, pause control | Required for WCAG, and it protects people with vestibular sensitivity |

**Motion rules (give these to Claude every time):**
1. Animate only `transform` and `opacity`. Other properties cause jank.
2. Nothing hides content from search engines or screen readers. Text exists in the HTML before any animation runs.
3. One hero effect, one signature moment. Everything else is subtle.
4. Test on a mid-range phone, not only your laptop.
5. If an animation does not guide, explain or delight, delete it.

## Phase 5. Integrations (1 to 2 sessions)

1. Connect Zoho Bookings (or Calendly) to /book.
2. Connect forms and the quiz to Zoho CRM so every lead lands with its source.
3. Add the chatbot concierge last, since it needs your confirmed services text.
4. Add analytics with consent.

*Why late:* integrations need the real domain and mailboxes, which you are preparing now.

## Phase 6. QA (1 session)

Run in order: Lighthouse (aim 95+), accessibility audit, mobile test on a real phone, SEO check, then a honesty audit confirming no unverified claim remains.
*Why:* a beautiful site that fails accessibility or speed loses both Google ranking and enterprise trust.

## Phase 7. Launch (1 session)

1. Point the domain, enable HTTPS, submit the sitemap to Google Search Console.
2. Create LinkedIn first, then the other social accounts, and a Google Business Profile for 101 Greenwood Avenue.
3. Post the launch content from the 30-day calendar.

---

## Your running checklist

- [ ] Domain bought, Zoho mailboxes live
- [ ] Logo direction chosen
- [ ] Real proof supplied (clients, certifications, testimonials, team photos)
- [ ] Course list, durations and pricing approach confirmed
- [ ] Each phase approved before the next begins

## Rule of thumb

Strategy first, then identity, then words, then structure, then motion, then wiring. Motion is the last layer of polish, which is why it looks effortless.
