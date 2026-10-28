export const metadata = { title: 'Book a Free Consultation | Ideovate', description: 'Book a free 30-minute consultation with the Ideovate team in Winnipeg.' };
export default function Book() {
  return (
    <main style={{ minHeight: '100vh', background: '#0A0B14', color: '#F4F6FB', display: 'grid', placeItems: 'center', padding: '48px 24px', fontFamily: 'Inter, system-ui, sans-serif' }}>
      <div style={{ maxWidth: 560 }}>
        <p style={{ color: '#22D3EE', letterSpacing: '.2em', textTransform: 'uppercase', fontSize: 13 }}>Booking opens soon</p>
        <h1 style={{ fontFamily: 'Sora, system-ui, sans-serif', fontSize: 'clamp(2rem,6vw,3rem)', lineHeight: 1.1 }}>A free consultation. No pressure.</h1>
        <p style={{ color: '#A9B0C6', lineHeight: 1.6 }}>The online calendar is being connected. Until then, call 204-590-5053 or email hello@ideovate.ca and we'll find a time.</p>
        <p><a href="/" style={{ color: '#22D3EE' }}>← Back to home</a></p>
      </div>
    </main>
  );
}
