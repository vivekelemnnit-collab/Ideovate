export const metadata = { title: 'Book a Free Consultation | Ideovate', description: 'Book a free 30-minute consultation with the Ideovate team in Winnipeg.' };
export default function Book() {
  return (
    <main style={{ minHeight: '100vh', background: '#FAFAF8', color: '#1E1E1E', display: 'grid', placeItems: 'center', padding: '48px 24px', fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>
      <div style={{ maxWidth: 560, background: '#fff', border: '1px solid #E7E4DC', borderRadius: 26, padding: '40px clamp(24px,5vw,48px)', boxShadow: '0 18px 40px rgba(20,20,20,.08)' }}>
        <p style={{ color: '#06639E', textTransform: 'uppercase', fontSize: 13, fontWeight: 700, letterSpacing: '.06em' }}>Booking opens soon</p>
        <h1 style={{ color: '#15171C', fontWeight: 700, letterSpacing: '-.02em', fontSize: 'clamp(2rem,6vw,3rem)', lineHeight: 1.1, margin: '10px 0 16px' }}>A free consultation. No pressure.</h1>
        <p style={{ lineHeight: 1.7, color: '#6B6F76' }}>The online calendar is being connected. Until then, call <a href="tel:+12045905053" style={{ color: '#15171C', fontWeight: 600 }}>204-590-5053</a> or email <a href="mailto:viveksingh@ideovate.ca" style={{ color: '#15171C', fontWeight: 600 }}>viveksingh@ideovate.ca</a> and we will find a time.</p>
        <p style={{ marginTop: 28 }}><a href="/" style={{ color: '#06639E', fontWeight: 600, textDecoration: 'none' }}>&larr; Back to home</a></p>
      </div>
    </main>
  );
}
