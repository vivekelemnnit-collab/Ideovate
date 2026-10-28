// Line icons. Each path has pathLength=1 so the scroll "draw" animation works with one dash value.
const P = (d, k) => <path key={k} className="d" pathLength="1" d={d} />;
const sets = {
  ml: ['M6 38 L16 26 L24 32 L34 16 L42 22', 'M6 42 H42', 'M34 16 m-2 0 a2 2 0 1 0 4 0 a2 2 0 1 0 -4 0'],
  chat: ['M8 10 H40 V32 H22 L14 40 V32 H8 Z', 'M16 18 H32', 'M16 24 H26'],
  road: ['M8 40 C8 28 20 30 24 22 C28 14 40 16 40 8', 'M6 40 m-2 0 a2 2 0 1 0 4 0 a2 2 0 1 0 -4 0', 'M40 8 m-2 0 a2 2 0 1 0 4 0 a2 2 0 1 0 -4 0'],
  flow: ['M10 14 H20 V24 H10 Z', 'M30 24 H40 V34 H30 Z', 'M20 19 H28 V29 H30', 'M10 34 H18'],
  q: ['M24 6 L40 12 V24 C40 33 33 39 24 42 C15 39 8 33 8 24 V12 Z', 'M16 24 L22 30 L33 18'],
  env: ['M12 38 C8 22 18 10 40 8 C42 28 32 38 12 38 Z', 'M12 38 C18 28 24 22 32 18'],
  safe: ['M10 30 C10 18 16 12 24 12 C32 12 38 18 38 30 Z', 'M6 34 H42 V38 H6 Z', 'M24 12 V6'],
  lock: ['M12 22 H36 V40 H12 Z', 'M17 22 V16 C17 11 20 8 24 8 C28 8 31 11 31 16 V22', 'M24 29 V34'],
  ai: ['M14 14 H34 V34 H14 Z', 'M20 20 H28 V28 H20 Z', 'M20 8 V14 M28 8 V14 M20 34 V40 M28 34 V40 M8 20 H14 M8 28 H14 M34 20 H40 M34 28 H40'],
  train: ['M4 18 L24 8 L44 18 L24 28 Z', 'M12 23 V32 C12 35 18 38 24 38 C30 38 36 35 36 32 V23', 'M44 18 V30'],
};
export default function Icon({ name }) {
  return (
    <svg className="icon" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {sets[name].map(P)}
    </svg>
  );
}
