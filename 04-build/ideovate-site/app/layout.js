import './globals.css';

export const metadata = {
  metadataBase: new URL('https://ideovate.ca'),
  title: 'Ideovate | AI Solutions and ISO Readiness, Winnipeg',
  description: 'Ideovate builds AI and prepares organisations for ISO 9001, 27001, 42001 and more. One Winnipeg team serving Canada and the US.',
  icons: { icon: '/favicon.svg' },
  openGraph: {
    title: 'Ideovate | Turning your great ideas into innovation',
    description: 'AI engineering and ISO readiness from one Winnipeg team. Built well. Governed well.',
    url: 'https://ideovate.ca', siteName: 'Ideovate Quality Solutions Inc.', locale: 'en_CA', type: 'website'
  }
};

const jsonLd = {
  '@context': 'https://schema.org', '@type': 'ProfessionalService',
  name: 'Ideovate Quality Solutions Inc.', url: 'https://ideovate.ca', foundingDate: '2014',
  slogan: 'Turning your great ideas into innovation.',
  telephone: '+1-204-590-5053',
  address: { '@type': 'PostalAddress', streetAddress: '101 Greenwood Avenue', addressLocality: 'Winnipeg', addressRegion: 'MB', addressCountry: 'CA' },
  areaServed: ['Canada', 'United States'],
  knowsAbout: ['Artificial intelligence', 'ISO 9001', 'ISO 14001', 'ISO 45001', 'ISO 27001', 'ISO 42001']
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-CA">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Sora:wght@500;600;700&display=swap" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>
        <div hidden dangerouslySetInnerHTML={{ __html: `<!--
THESIS: AI built well and governed well by one team; refuses the generic "AI agency" hero of floating chips and a card grid.
OWN-WORLD: Ink #0A0B14 night with Spark cyan #22D3EE and Pulse violet #7C5CFF, giving way to warm Paper #F7F5F0 for ISO and trust. Sora headlines, Inter text, ruled rows not cards, hairlines, one cursor-reactive node field.
STORY: Visitor sees the idea (spark) held inside governance (orbit), believes one team does both, and books a free consultation.
FIRST VIEWPORT: Left, headline at 5.6rem max with "Built well. Governed well." and two actions; right, the Spark Orbit mark bare on the node field with two annotations, "the idea" and "the governance around it".
FORM: Owner-pinned world (brand brief wins, no roll; the concept-seed script was unavailable in this session). Seed key: owner-pinned.
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, and DESIGN.md
-->` }} />
        {children}
      </body>
    </html>
  );
}
