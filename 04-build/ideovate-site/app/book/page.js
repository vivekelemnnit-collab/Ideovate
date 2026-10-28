export const metadata = { title: 'Book a Free Consultation | Ideovate', description: 'Book a free 30-minute consultation with the Ideovate team in Winnipeg.' };
export default function Book() {
  return (
    <main style={{ minHeight: '100vh', background: '#fff', color: '#0B4468', display: 'grid', placeItems: 'center', padding: '48px 24px', fontFamily: 'Poppins, system-ui, sans-serif' }}>
      <div style={{ maxWidth: 560 }}>
        <p style={{ color: '#0A8BFF', textTransform: 'uppercase', fontSize: 13, fontWeight: 600 }}>Booking opens soon</p>
        <h1 style={{ color: '#0E1B31', fontSize: 'clamp(2rem,6vw,3rem)', lineHeight: 1.15, margin: '8px 0 16px' }}>A free consultation. No pressure.</h1>
        <p style={{ lineHeight: 1.7 }}>The online calendar is being connected. Until then, call 204-590-5053 or email <a href="mailto:viveksingh@ideovate.ca" style={{ color: '#0A6FD0', fontWeight: 600 }}>viveksingh@ideovate.ca</a> and we will find a time.</p>
        <p style={{ marginTop: 24 }}><a href="/" style={{ color: '#0A6FD0', fontWeight: 600 }}>&larr; Back to home</a></p>
      </div>
    </main>
  );
}
