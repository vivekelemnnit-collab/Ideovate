// Spark Orbit mark (A+C). Pass small={true} for the simplified favicon-style mark (no ring).
export default function Mark({ id = 'm', small = false, animate = true, bare = false, className = '' }) {
  if (small) {
    return (
      <svg className={className} viewBox="0 0 120 120" aria-hidden="true">
        <defs><linearGradient id={`g-${id}`} x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#22D3EE" /><stop offset="1" stopColor="#7C5CFF" /></linearGradient></defs>
        <rect width="120" height="120" rx="26" fill="#0A0B14" />
        <rect x="48" y="52" width="24" height="52" rx="12" fill={`url(#g-${id})`} />
        <circle cx="60" cy="30" r="14" fill="#22D3EE" />
      </svg>
    );
  }
  return (
    <svg className={`mark ${animate ? 'mark-anim' : ''} ${className}`} viewBox="0 0 120 120" aria-hidden="true">
      <defs>
        <linearGradient id={`g-${id}`} x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#22D3EE" /><stop offset="1" stopColor="#7C5CFF" /></linearGradient>
        <path id={`o-${id}`} d="M 16 66 A 44 15 0 1 0 104 66 A 44 15 0 1 0 16 66" />
      </defs>
      {!bare && <rect width="120" height="120" rx="26" fill="#0A0B14" />}
      <g transform="rotate(-32 60 66)"><ellipse className="m-ring" cx="60" cy="66" rx="44" ry="15" fill="none" stroke={`url(#g-${id})`} strokeWidth="3.5" /></g>
      <rect className="m-bar" x="52" y="50" width="16" height="48" rx="8" fill={`url(#g-${id})`} />
      <g transform="rotate(-32 60 66)"><path d="M 16 66 A 44 15 0 0 0 104 66" fill="none" stroke={`url(#g-${id})`} strokeWidth="3.5" /></g>
      <circle className="m-dot" cx="60" cy="33" r="9" fill="#22D3EE" />
      <g className="m-rays" stroke="#7C5CFF" strokeWidth="4" strokeLinecap="round"><path d="M60 14v4M43 22l3 3M77 22l-3 3" /></g>
      {animate && (
        <g transform="rotate(-32 60 66)"><circle r="4" fill="#C8A24A"><animateMotion dur="9s" repeatCount="indefinite"><mpath href={`#o-${id}`} /></animateMotion></circle></g>
      )}
    </svg>
  );
}
