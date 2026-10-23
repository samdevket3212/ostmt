import type { ReactNode } from 'react';
import type { ProjectTone } from '@/content/projects';

/*
 * Original concept artwork for the four studio explorations. Frame 0 is the cover;
 * frames 1-4 follow the gallery list in the brief. Drawn as SVG so nothing is a
 * stock image and nothing can break.
 */
const INK = '#17191D';
const CANVAS = '#F7F4EE';
const SAND = '#EAE5DD';
const CORAL = '#FF6545';
const COBALT = '#345BFF';
const MINT = '#C9F2CF';
const WHITE = '#FFFFFF';
const D = 'var(--font-display)';
const S = 'var(--font-sans)';
const fitFor = (v: number): 'slice' | 'meet' => (v === 0 ? 'slice' : 'meet');

function Frame({ children, bg, label, fit = 'slice' }: { children: ReactNode; bg: string; label: string; fit?: 'slice' | 'meet' }) {
  return (
    <svg className="pa" viewBox="0 0 1600 1000" preserveAspectRatio={`xMidYMid ${fit}`} role="img" aria-label={label} style={{ background: bg }}>
      <rect width="1600" height="1000" fill={bg} />
      {children}
    </svg>
  );
}

function Shade({ id }: { id: string }) {
  return (
    <defs>
      <radialGradient id={`${id}-sph`} cx="34%" cy="30%" r="75%">
        <stop offset="0" stopColor="#DCE3FF" />
        <stop offset="0.2" stopColor="#7D95FF" />
        <stop offset="0.6" stopColor={COBALT} />
        <stop offset="1" stopColor="#1A2C99" />
      </radialGradient>
      <radialGradient id={`${id}-csph`} cx="34%" cy="30%" r="75%">
        <stop offset="0" stopColor="#FFD8CC" />
        <stop offset="0.35" stopColor={CORAL} />
        <stop offset="1" stopColor="#A9341B" />
      </radialGradient>
      <linearGradient id={`${id}-arc`} x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#FF8E73" />
        <stop offset="1" stopColor="#D9452A" />
      </linearGradient>
      <linearGradient id={`${id}-sky`} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#1B1E3F" />
        <stop offset="0.55" stopColor="#3B2A5C" />
        <stop offset="1" stopColor="#F07A57" />
      </linearGradient>
      <filter id={`${id}-blur`} x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="18" />
      </filter>
    </defs>
  );
}

/* ---------------- MODULO ---------------- */
function Modulo({ v, label }: { v: number; label: string }) {
  const id = `mod${v}`;
  if (v === 1) {
    const cells: [string, ReactNode][] = [
      [SAND, <circle key="a" cx="200" cy="170" r="110" fill={`url(#${id}-sph)`} />],
      [CORAL, <path key="b" d="M90 290V170a110 110 0 0 1 220 0v120h-60V170a50 50 0 0 0-100 0v120z" fill={CANVAS} />],
      [INK, <g key="c"><rect x="110" y="80" width="180" height="180" fill={CORAL} /><circle cx="290" cy="80" r="50" fill={COBALT} /></g>],
      [COBALT, <path key="d" d="M90 290A200 200 0 0 1 290 90v200z" fill={CORAL} />],
      [CANVAS, <g key="e"><circle cx="160" cy="180" r="80" fill={`url(#${id}-csph)`} /><rect x="230" y="120" width="90" height="140" fill={INK} /></g>],
      [MINT, <g key="f"><path d="M80 280L200 80l120 200z" fill={COBALT} /><circle cx="200" cy="230" r="40" fill={CANVAS} /></g>],
    ];
    return (
      <Frame bg={CANVAS} label={label} fit={fitFor(v)}>
        <Shade id={id} />
        {cells.map(([bg, art], i) => (
          <g key={i} transform={`translate(${60 + (i % 3) * 500} ${80 + Math.floor(i / 3) * 440})`}>
            <rect width="460" height="400" rx="20" fill={bg} />
            <g transform="translate(30 30)">{art}</g>
            <text x="28" y="378" fill={bg === INK || bg === COBALT ? CANVAS : INK} fontFamily={S} fontSize="22" letterSpacing="3">
              STUDY 0{i + 1}
            </text>
          </g>
        ))}
      </Frame>
    );
  }
  if (v === 2) {
    return (
      <Frame bg={INK} label={label} fit={fitFor(v)}>
        <Shade id={id} />
        <defs>
          <pattern id={`${id}-rib`} width="28" height="28" patternUnits="userSpaceOnUse" patternTransform="rotate(-30)">
            <rect width="14" height="28" fill="#ffffff" opacity="0.12" />
          </pattern>
        </defs>
        <circle cx="560" cy="520" r="420" fill={`url(#${id}-sph)`} />
        <circle cx="560" cy="520" r="420" fill={`url(#${id}-rib)`} />
        <path d="M1000 1000V600a300 300 0 0 1 600 0v400z" fill={`url(#${id}-arc)`} />
        <ellipse cx="420" cy="330" rx="120" ry="60" fill="#fff" opacity="0.35" filter={`url(#${id}-blur)`} />
        <text x="1060" y="200" fill={CANVAS} fontFamily={S} fontSize="30" letterSpacing="5">
          GLOSS 80 · RIBBED SATIN
        </text>
        <text x="1060" y="250" fill="#A3A39C" fontFamily={S} fontSize="26" letterSpacing="4">
          COBALT 345BFF / CORAL FF6545
        </text>
      </Frame>
    );
  }
  if (v === 3) {
    return (
      <Frame bg={SAND} label={label} fit={fitFor(v)}>
        <Shade id={id} />
        <g transform="translate(440 60)">
          <rect width="720" height="880" fill={CORAL} />
          <text x="40" y="250" fill={INK} fontFamily={D} fontWeight="900" fontSize="230" letterSpacing="-10" style={{ fontVariationSettings: '"wdth" 125' }}>
            MOD
          </text>
          <text x="40" y="460" fill={INK} fontFamily={D} fontWeight="900" fontSize="230" letterSpacing="-10" style={{ fontVariationSettings: '"wdth" 125' }}>
            ULO
          </text>
          <circle cx="520" cy="680" r="140" fill={`url(#${id}-sph)`} />
          <path d="M60 840V720a100 100 0 0 1 200 0v120z" fill={CANVAS} />
          <text x="40" y="560" fill={INK} fontFamily={S} fontSize="26" letterSpacing="4">
            SHAPE A DIFFERENT PERSPECTIVE
          </text>
        </g>
      </Frame>
    );
  }
  if (v === 4) {
    return (
      <Frame bg="#E1DBD0" label={label} fit={fitFor(v)}>
        <Shade id={id} />
        <rect x="170" y="90" width="1260" height="820" rx="24" fill={CANVAS} stroke="#CFC9BE" strokeWidth="3" />
        <rect x="170" y="90" width="1260" height="60" rx="24" fill={WHITE} />
        {[0, 1, 2].map((i) => (
          <circle key={i} cx={214 + i * 28} cy="120" r="8" fill="#CFC9BE" />
        ))}
        <text x="250" y="400" fill={INK} fontFamily={D} fontWeight="900" fontSize="110" letterSpacing="-4" style={{ fontVariationSettings: '"wdth" 120' }}>
          SHAPE A
        </text>
        <text x="250" y="510" fill={INK} fontFamily={D} fontWeight="900" fontSize="110" letterSpacing="-4" style={{ fontVariationSettings: '"wdth" 120' }}>
          DIFFERENT
        </text>
        <rect x="250" y="580" width="230" height="64" rx="32" fill={CORAL} />
        <path d="M900 860V620a200 200 0 0 1 400 0v240h-110V620a90 90 0 0 0-180 0v240z" fill={`url(#${id}-arc)`} />
        <circle cx="1100" cy="680" r="110" fill={`url(#${id}-sph)`} />
      </Frame>
    );
  }
  return (
    <Frame bg={CANVAS} label={label} fit={fitFor(v)}>
      <Shade id={id} />
      <rect x="0" y="760" width="1600" height="240" fill={SAND} />
      <ellipse cx="820" cy="790" rx="520" ry="40" fill={INK} opacity="0.12" filter={`url(#${id}-blur)`} />
      <path d="M380 790V500a300 300 0 0 1 600 0v290H820V500a140 140 0 0 0-280 0v290z" fill="#B83A1F" transform="translate(26 -18)" />
      <path d="M380 790V500a300 300 0 0 1 600 0v290H820V500a140 140 0 0 0-280 0v290z" fill={`url(#${id}-arc)`} />
      <circle cx="680" cy="620" r="170" fill={`url(#${id}-sph)`} />
      <g transform="translate(1000 520)">
        <path d="M0 70l140-70 140 70-140 70z" fill={WHITE} />
        <path d="M0 70v170l140 70V140z" fill={SAND} />
        <path d="M280 70v170l-140 70V140z" fill="#D2CBBE" />
      </g>
      <circle cx="1300" cy="230" r="60" fill={`url(#${id}-csph)`} />
      <rect x="180" y="220" width="200" height="66" rx="33" fill={COBALT} transform="rotate(-20 280 253)" />
      <path d="M1360 640h120v120h-120z" fill={INK} transform="rotate(14 1420 700)" />
    </Frame>
  );
}

/* ---------------- NEXT LEVEL ---------------- */
function NextLevel({ v, label }: { v: number; label: string }) {
  const id = `nl${v}`;
  const hud = (x: number, y: number, w: number, h: number, children?: ReactNode, fill = 'rgba(23,25,29,0.72)') => (
    <g transform={`translate(${x} ${y})`}>
      <path d={`M0 0H${w - 30}L${w} 30V${h}H30L0 ${h - 30}Z`} fill={fill} stroke={CORAL} strokeWidth="3" />
      {children}
    </g>
  );
  const world = (
    <>
      <rect width="1600" height="1000" fill={`url(#${id}-sky)`} />
      <circle cx="1100" cy="560" r="170" fill={CORAL} opacity="0.95" />
      <path d="M0 640L180 520 320 600 520 430 700 580 900 470 1100 600 1300 480 1600 600V1000H0z" fill="#2A2350" />
      <path d="M0 760L240 640 460 720 700 610 960 740 1220 650 1600 760V1000H0z" fill="#17153A" />
      <g stroke={COBALT} strokeOpacity="0.55" strokeWidth="2">
        {Array.from({ length: 17 }, (_, i) => (
          <line key={i} x1="800" y1="760" x2={-800 + i * 200} y2="1000" />
        ))}
        {[800, 850, 920].map((y) => (
          <line key={y} x1="0" y1={y} x2="1600" y2={y} />
        ))}
      </g>
    </>
  );
  if (v === 1) {
    const items = ['NEW GAME', 'CONTINUE', 'LOADOUT', 'OPTIONS', 'QUIT'];
    return (
      <Frame bg="#1B1E3F" label={label} fit={fitFor(v)}>
        <Shade id={id} />
        {world}
        <rect width="1600" height="1000" fill="#0E0F22" opacity="0.55" />
        <text x="140" y="250" fill={CANVAS} fontFamily={D} fontWeight="900" fontSize="120" letterSpacing="-2" style={{ fontVariationSettings: '"wdth" 125' }}>
          NEXT LEVEL
        </text>
        {items.map((t, i) =>
          hud(140, 320 + i * 104, 560, 80, <text x="40" y="54" fill={i === 1 ? INK : CANVAS} fontFamily={D} fontWeight="700" fontSize="40" letterSpacing="4">{t}</text>, i === 1 ? CORAL : 'rgba(23,25,29,0.72)'),
        )}
      </Frame>
    );
  }
  if (v === 2) {
    return (
      <Frame bg="#1B1E3F" label={label} fit={fitFor(v)}>
        <Shade id={id} />
        {world}
        {hud(
          80,
          70,
          520,
          130,
          <>
            <rect x="34" y="34" width="440" height="22" fill="#3A3D52" />
            <rect x="34" y="34" width="300" height="22" fill={CORAL} />
            <rect x="34" y="74" width="440" height="14" fill="#3A3D52" />
            <rect x="34" y="74" width="180" height="14" fill={COBALT} />
          </>,
        )}
        <circle cx="800" cy="500" r="80" fill="none" stroke={CANVAS} strokeWidth="4" />
        <path d="M800 390v50M800 560v50M690 500h50M860 500h50" stroke={CANVAS} strokeWidth="4" />
        <circle cx="800" cy="500" r="6" fill={CORAL} />
        {hud(1260, 700, 260, 220, <><path d="M40 170l60-50 50 30 70-80" stroke={CORAL} strokeWidth="4" fill="none" /><circle cx="210" cy="60" r="10" fill={COBALT} /></>)}
        {hud(80, 820, 420, 100, <text x="34" y="64" fill={CANVAS} fontFamily={D} fontWeight="700" fontSize="38" letterSpacing="3">AMMO 24 / 120</text>)}
      </Frame>
    );
  }
  if (v === 3) {
    return (
      <Frame bg="#141631" label={label} fit={fitFor(v)}>
        <Shade id={id} />
        <text x="120" y="150" fill={CANVAS} fontFamily={D} fontWeight="900" fontSize="64" letterSpacing="4" style={{ fontVariationSettings: '"wdth" 125' }}>
          INVENTORY
        </text>
        {Array.from({ length: 18 }, (_, i) => {
          const x = 120 + (i % 6) * 150;
          const y = 220 + Math.floor(i / 6) * 150;
          const sel = i === 8;
          return (
            <g key={i} transform={`translate(${x} ${y})`}>
              <path d="M0 0H110L130 20V130H20L0 110Z" fill={sel ? CORAL : '#24274A'} stroke={sel ? CORAL : '#3B3F6E'} strokeWidth="3" />
              {i % 5 !== 4 && <rect x="42" y="42" width="46" height="46" rx={i % 2 ? 23 : 4} fill={sel ? INK : i % 3 === 0 ? COBALT : i % 3 === 1 ? CORAL : CANVAS} transform={`rotate(${i % 2 ? 0 : 45} 65 65)`} />}
            </g>
          );
        })}
        {hud(
          1060,
          220,
          420,
          430,
          <>
            <text x="40" y="80" fill={CANVAS} fontFamily={D} fontWeight="700" fontSize="44">
              Pulse Core
            </text>
            <rect x="40" y="130" width="320" height="16" fill="#3A3D52" />
            <rect x="40" y="130" width="230" height="16" fill={CORAL} />
            <rect x="40" y="170" width="320" height="16" fill="#3A3D52" />
            <rect x="40" y="170" width="140" height="16" fill={COBALT} />
          </>,
          '#1B1E3F',
        )}
      </Frame>
    );
  }
  if (v === 4) {
    return (
      <Frame bg={CORAL} label={label} fit={fitFor(v)}>
        <Shade id={id} />
        <text x="100" y="300" fill={INK} fontFamily={D} fontWeight="900" fontSize="210" letterSpacing="-6" style={{ fontVariationSettings: '"wdth" 125' }}>
          NEXT
        </text>
        <text x="100" y="480" fill={CANVAS} fontFamily={D} fontWeight="900" fontSize="210" letterSpacing="-6" style={{ fontVariationSettings: '"wdth" 125' }}>
          LEVEL
        </text>
        {Array.from({ length: 6 }, (_, i) => (
          <g key={i} transform={`translate(${100 + i * 240} 600)`} fill="none" stroke={INK} strokeWidth="10" strokeLinejoin="round">
            <path d="M0 0H150L180 30V180H30L0 150Z" fill={i === 2 ? INK : CANVAS} stroke="none" />
            {i === 0 && <path d="M50 130L90 50l40 80z" />}
            {i === 1 && <circle cx="90" cy="90" r="40" />}
            {i === 2 && <path d="M60 90h60M90 60v60" stroke={CORAL} />}
            {i === 3 && <rect x="55" y="55" width="70" height="70" />}
            {i === 4 && <path d="M50 120l40-60 40 60" />}
            {i === 5 && <path d="M50 90h80M100 60l30 30-30 30" />}
          </g>
        ))}
      </Frame>
    );
  }
  return (
    <Frame bg="#1B1E3F" label={label} fit={fitFor(v)}>
      <Shade id={id} />
      {world}
      {hud(110, 100, 440, 140, <><rect x="34" y="40" width="260" height="18" fill={CORAL} /><rect x="34" y="78" width="370" height="10" fill={CANVAS} opacity="0.5" /></>)}
      <circle cx="800" cy="470" r="72" fill="none" stroke={COBALT} strokeWidth="6" />
      <circle cx="800" cy="470" r="130" fill="none" stroke={COBALT} strokeOpacity="0.3" strokeWidth="24" />
      <circle cx="800" cy="470" r="7" fill={CORAL} />
    </Frame>
  );
}

/* ---------------- FORM & FUNCTION ---------------- */
function FormFunction({ v, label }: { v: number; label: string }) {
  const symbol = (x: number, y: number, s: number, fg: string, accent: string, mode = 0) => (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      {mode === 0 && (
        <>
          <rect x="0" y="0" width="100" height="100" fill={fg} />
          <circle cx="100" cy="100" r="50" fill={accent} />
        </>
      )}
      {mode === 1 && (
        <>
          <rect x="0" y="0" width="100" height="100" fill={fg} />
          <circle cx="150" cy="50" r="50" fill={accent} />
        </>
      )}
      {mode === 2 && (
        <>
          <rect x="25" y="0" width="100" height="100" fill="none" stroke={fg} strokeWidth="14" />
          <circle cx="75" cy="50" r="38" fill={accent} />
        </>
      )}
      {mode === 3 && (
        <>
          <path d="M0 0h100v100A100 100 0 0 1 0 0z" fill={fg} />
          <circle cx="100" cy="0" r="30" fill={accent} />
        </>
      )}
    </g>
  );
  if (v === 1) {
    return (
      <Frame bg={CANVAS} label={label} fit={fitFor(v)}>
        {[0, 1, 2, 3].map((m) => (
          <g key={m}>
            <rect x={80 + m * 370} y="200" width="330" height="440" fill={m === 1 ? INK : m === 2 ? CORAL : WHITE} stroke={m === 0 || m === 3 ? '#D8D6D0' : 'none'} strokeWidth="3" />
            {symbol(80 + m * 370 + 80, 300, 1.1, m === 1 ? CANVAS : INK, m === 2 ? CANVAS : CORAL, m)}
            <text x={80 + m * 370 + 30} y="600" fill={m === 1 ? CANVAS : INK} fontFamily={S} fontSize="24" letterSpacing="3">
              {['PRIMARY', 'REVERSED', 'COLOR', 'COMPACT'][m]}
            </text>
          </g>
        ))}
        <text x="80" y="780" fill={INK} fontFamily={D} fontWeight="900" fontSize="96" letterSpacing="-3" style={{ fontVariationSettings: '"wdth" 110' }}>
          FORM &amp; FUNCTION
        </text>
      </Frame>
    );
  }
  if (v === 2) {
    return (
      <Frame bg={INK} label={label} fit={fitFor(v)}>
        <text x="100" y="420" fill={CANVAS} fontFamily={D} fontWeight="900" fontSize="380" letterSpacing="-16" style={{ fontVariationSettings: '"wdth" 125' }}>
          Aa
        </text>
        <text x="100" y="560" fill={CORAL} fontFamily={D} fontWeight="900" fontSize="64" style={{ fontVariationSettings: '"wdth" 125' }}>
          ARCHITECTURAL 900
        </text>
        <text x="100" y="640" fill="#A3A39C" fontFamily={S} fontSize="36">
          ABCDEFGHIJKLMNOPQRSTUVWXYZ 0123456789
        </text>
        {[100, 300, 500, 700, 900].map((w, i) => (
          <text key={w} x={900} y={180 + i * 150} fill={CANVAS} fontFamily={D} fontSize="110" fontWeight={w} style={{ fontVariationSettings: `"wdth" ${62 + i * 15}` }}>
            Form
          </text>
        ))}
      </Frame>
    );
  }
  if (v === 3) {
    return (
      <Frame bg={SAND} label={label} fit={fitFor(v)}>
        {[0, 1, 2].map((i) => (
          <g key={i} transform={`translate(${240 + i * 400} ${i === 1 ? 70 : 140})`}>
            <rect width="330" height="700" rx="46" fill={INK} />
            <rect x="16" y="16" width="298" height="668" rx="32" fill={[CANVAS, CORAL, WHITE][i]} />
            {symbol(80, 120, 1.3, INK, i === 1 ? CANVAS : CORAL, i)}
            <rect x="48" y="460" width="200" height="22" fill={INK} />
            <rect x="48" y="500" width="234" height="14" fill={INK} opacity="0.4" />
            <rect x="48" y="580" width="140" height="50" rx="25" fill={INK} />
          </g>
        ))}
      </Frame>
    );
  }
  if (v === 4) {
    return (
      <Frame bg={CANVAS} label={label} fit={fitFor(v)}>
        {[0, 1, 2, 3, 4].map((k) => {
          const t = k / 4;
          return (
            <g key={k} transform={`translate(${80 + k * 300} 330)`}>
              <rect width="260" height="260" fill={WHITE} stroke="#D8D6D0" strokeWidth="3" />
              <rect x="40" y="40" width="120" height="120" fill={INK} />
              <circle cx={100 + t * 60} cy={100 + t * 60} r="60" fill={CORAL} opacity={0.9} />
              <text x="20" y="300" fill={INK} fontFamily={S} fontSize="24" letterSpacing="3">
                {`0.${k * 2}S`}
              </text>
            </g>
          );
        })}
        <text x="80" y="220" fill={INK} fontFamily={D} fontWeight="900" fontSize="72" style={{ fontVariationSettings: '"wdth" 120' }}>
          MOTION: SEPARATE, OVERLAP, MERGE
        </text>
      </Frame>
    );
  }
  return (
    <Frame bg={CANVAS} label={label} fit={fitFor(v)}>
      <rect x="560" y="0" width="480" height="1000" fill={INK} />
      {symbol(640, 300, 2.2, CANVAS, CORAL, 0)}
      <text x="800" y="150" textAnchor="middle" fill={CANVAS} fontFamily={D} fontWeight="900" fontSize="64" letterSpacing="-1" style={{ fontVariationSettings: '"wdth" 120' }}>
        FORM &amp; FUNCTION
      </text>
      <text x="800" y="880" textAnchor="middle" fill="#A3A39C" fontFamily={S} fontSize="26" letterSpacing="5">
        AN IDENTITY THAT SPEAKS
      </text>
      <rect x="140" y="260" width="300" height="300" fill={CORAL} />
      <circle cx="1310" cy="640" r="170" fill={COBALT} />
      <path d="M140 760h300M140 800h220M1160 220h300M1240 260h220" stroke={INK} strokeWidth="10" />
    </Frame>
  );
}

/* ---------------- OPENSPACE ---------------- */
function OpenSpace({ v, label }: { v: number; label: string }) {
  const panel = (x: number, y: number, w: number, h: number, children?: ReactNode, fill = WHITE) => (
    <g transform={`translate(${x} ${y})`}>
      <rect width={w} height={h} rx="22" fill={fill} stroke="#E2DED6" strokeWidth="2" />
      {children}
    </g>
  );
  const bars = (n: number, w: number, h: number) =>
    Array.from({ length: n }, (_, i) => {
      const bh = h * (0.3 + ((i * 37) % 60) / 100);
      return <rect key={i} x={i * (w / n) + 8} y={h - bh} width={w / n - 16} height={bh} rx="6" fill={i === n - 3 ? COBALT : '#D9DFFF'} />;
    });
  const nav = (
    <>
      {['Home', 'Projects', 'Tasks', 'Files', 'Team'].map((t, i) => (
        <g key={t} transform={`translate(28 ${90 + i * 74})`}>
          {i === 2 && <rect x="-12" y="-40" width="236" height="58" rx="12" fill="#E8EDFF" />}
          <rect y="-26" width="26" height="26" rx="7" fill={i === 2 ? COBALT : '#CFCCC4'} />
          <text x="44" y="-6" fill={INK} fontFamily={S} fontSize="26" fontWeight={i === 2 ? 600 : 400}>
            {t}
          </text>
        </g>
      ))}
    </>
  );
  if (v === 1) {
    return (
      <Frame bg="#ECE7DE" label={label} fit={fitFor(v)}>
        <rect x="260" y="140" width="900" height="600" rx="30" fill={INK} />
        <rect x="280" y="160" width="860" height="560" rx="16" fill={CANVAS} />
        <path d="M180 760h1060l-60 40H240z" fill="#C9C3B8" />
        {panel(300, 180, 820, 520, <><rect x="30" y="30" width="200" height="22" rx="11" fill={INK} /><g transform="translate(30 120)">{bars(10, 760, 340)}</g></>)}
        <rect x="1180" y="300" width="250" height="500" rx="40" fill={INK} />
        <rect x="1192" y="312" width="226" height="476" rx="30" fill={CANVAS} />
        <rect x="1214" y="370" width="150" height="16" rx="8" fill={INK} />
        <rect x="1214" y="410" width="180" height="120" rx="14" fill={COBALT} />
        <rect x="1214" y="550" width="180" height="60" rx="12" fill={WHITE} />
        <rect x="1214" y="624" width="180" height="60" rx="12" fill={WHITE} />
      </Frame>
    );
  }
  if (v === 2) {
    return (
      <Frame bg={CANVAS} label={label} fit={fitFor(v)}>
        <g transform="translate(160 160)">
          <rect width="300" height="96" rx="48" fill={COBALT} />
          <text x="150" y="60" textAnchor="middle" fill={WHITE} fontFamily={S} fontSize="32" fontWeight="600">
            Create task
          </text>
          <rect x="340" width="300" height="96" rx="48" fill="none" stroke={INK} strokeWidth="3" />
          <text x="490" y="60" textAnchor="middle" fill={INK} fontFamily={S} fontSize="32" fontWeight="600">
            Share
          </text>
          <rect x="680" y="14" width="140" height="70" rx="35" fill={COBALT} />
          <circle cx="785" cy="49" r="27" fill={WHITE} />
          <rect x="860" y="14" width="140" height="70" rx="35" fill="#D8D6D0" />
          <circle cx="895" cy="49" r="27" fill={WHITE} />
          {[0, 1, 2].map((i) => panel(i * 430, 180, 400, 420, <><rect x="34" y="40" width={[180, 240, 140][i]} height="22" rx="11" fill={INK} /><rect x="34" y="84" width="300" height="14" rx="7" fill="#CFCCC4" /><rect x="34" y="320" width="120" height="44" rx="22" fill={i === 1 ? CORAL : '#E8EDFF'} /></>))}
        </g>
      </Frame>
    );
  }
  if (v === 3) {
    return (
      <Frame bg="#ECE7DE" label={label} fit={fitFor(v)}>
        {panel(140, 100, 300, 800, nav)}
        {panel(480, 100, 980, 160, <><text x="40" y="96" fill={INK} fontFamily={D} fontWeight="800" fontSize="54">Tasks</text><rect x="760" y="50" width="180" height="60" rx="30" fill={COBALT} /></>)}
        {panel(480, 300, 980, 600, <>{[0, 1, 2, 3, 4].map((r) => <g key={r} transform={`translate(40 ${50 + r * 104})`}><rect width="900" height="80" rx="16" fill={r === 1 ? '#E8EDFF' : CANVAS} /><circle cx="44" cy="40" r="16" fill={r === 3 ? CORAL : r === 1 ? COBALT : '#CFCCC4'} /><rect x="84" y="32" width={260 + r * 50} height="16" rx="8" fill="#9C9A93" /></g>)}</>)}
      </Frame>
    );
  }
  if (v === 4) {
    return (
      <Frame bg={MINT} label={label} fit={fitFor(v)}>
        {[0, 1, 2].map((i) => (
          <g key={i} transform={`translate(${310 + i * 360} ${120 + (i === 1 ? -30 : 30)})`}>
            <rect width="300" height="640" rx="48" fill={INK} />
            <rect x="14" y="14" width="272" height="612" rx="36" fill={CANVAS} />
            <rect x="36" y="80" width="140" height="18" rx="9" fill={INK} />
            {i === 0 && <g transform="translate(36 130)">{bars(6, 228, 200)}</g>}
            {i === 1 && [0, 1, 2, 3].map((r) => <rect key={r} x="36" y={130 + r * 100} width="228" height="80" rx="16" fill={r === 1 ? '#E8EDFF' : WHITE} />)}
            {i === 2 && (
              <>
                <circle cx="150" cy="240" r="90" fill="none" stroke="#E8EDFF" strokeWidth="26" />
                <circle cx="150" cy="240" r="90" fill="none" stroke={COBALT} strokeWidth="26" strokeDasharray="380 566" transform="rotate(-90 150 240)" />
                <rect x="36" y="400" width="228" height="60" rx="30" fill={CORAL} />
              </>
            )}
          </g>
        ))}
      </Frame>
    );
  }
  return (
    <Frame bg="#ECE7DE" label={label} fit={fitFor(v)}>
      {panel(120, 110, 260, 780, nav)}
      {panel(410, 110, 700, 470, <><text x="40" y="76" fill={INK} fontFamily={D} fontWeight="800" fontSize="40">Overview</text><g transform="translate(40 130)">{bars(9, 620, 300)}</g></>)}
      {panel(410, 610, 340, 280, <><text x="34" y="70" fill="#62646C" fontFamily={S} fontSize="24">Open tasks</text><text x="34" y="170" fill={INK} fontFamily={D} fontWeight="800" fontSize="96">24</text></>)}
      {panel(770, 610, 340, 280, <><circle cx="170" cy="140" r="80" fill="none" stroke="#E8EDFF" strokeWidth="24" /><circle cx="170" cy="140" r="80" fill="none" stroke={COBALT} strokeWidth="24" strokeDasharray="330 503" transform="rotate(-90 170 140)" /></>)}
      {panel(1140, 110, 340, 780, <>{[0, 1, 2, 3, 4, 5].map((r) => <g key={r} transform={`translate(30 ${60 + r * 116})`}><rect width="280" height="92" rx="16" fill={r === 0 ? '#FFE6DF' : CANVAS} /><circle cx="40" cy="46" r="16" fill={r === 0 ? CORAL : '#CFCCC4'} /><rect x="74" y="38" width={120 + (r % 3) * 30} height="14" rx="7" fill="#9C9A93" /></g>)}</>)}
    </Frame>
  );
}

export function ProjectArtwork({ tone, variant = 0, alt }: { tone: ProjectTone; variant?: number; alt: string }) {
  const p = { v: variant, label: alt };
  switch (tone) {
    case 'modulo':
      return <Modulo {...p} />;
    case 'next-level':
      return <NextLevel {...p} />;
    case 'form-and-function':
      return <FormFunction {...p} />;
    default:
      return <OpenSpace {...p} />;
  }
}
