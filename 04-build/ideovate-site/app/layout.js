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
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
