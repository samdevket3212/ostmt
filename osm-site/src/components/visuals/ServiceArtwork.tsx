import type { ServiceArtKind } from '@/content/services';

/*
 * One original, animated composition per service, built from the OSM shape
 * system. Fills use --sa-a / --sa-b / --sa-paper, which each card theme sets, so
 * the same artwork works on canvas, coral, cobalt, mint and ink.
 */
export function ServiceArtwork({ kind, className }: { kind: ServiceArtKind; className?: string }) {
  const cls = ['sa', `sa--${kind}`, className].filter(Boolean).join(' ');
  switch (kind) {
    case '2d-3d':
      return (
        <svg className={cls} viewBox="0 0 400 300" aria-hidden="true" focusable="false">
          <rect x="40" y="96" width="96" height="96" className="sa-a" />
          <path d="M150 144h44m-10-10l10 10-10 10" className="sa-line" />
          <g className="sa-spin" style={{ transformOrigin: '290px 144px' }}>
            <path d="M290 74l62 36v72l-62 36-62-36v-72z" className="sa-paper sa-stroke" />
            <path d="M228 110l62 36 62-36M290 146v72" className="sa-line" />
          </g>
          <circle cx="338" cy="236" r="28" className="sa-b" />
          <ellipse cx="338" cy="272" rx="26" ry="5" className="sa-shadow" />
        </svg>
      );
    case 'game':
      return (
        <svg className={cls} viewBox="0 0 400 300" aria-hidden="true" focusable="false">
          <path d="M40 40h120l20 20h180v180l-20 20H40z" className="sa-paper sa-stroke" />
          <rect x="60" y="62" width="100" height="10" className="sa-faint" />
          <rect x="60" y="62" width="70" height="10" className="sa-a sa-bar" />
          <rect x="60" y="80" width="100" height="6" className="sa-faint" />
          <rect x="60" y="80" width="44" height="6" className="sa-b" />
          <g className="sa-pulse" style={{ transformOrigin: '210px 160px' }}>
            <circle cx="210" cy="160" r="38" className="sa-line" />
            <path d="M210 112v20M210 188v20M162 160h20M238 160h20" className="sa-line" />
            <circle cx="210" cy="160" r="5" className="sa-a" />
          </g>
          <g className="sa-hop">
            <rect x="290" y="176" width="34" height="46" rx="17" className="sa-b" />
            <circle cx="307" cy="164" r="13" className="sa-a" />
          </g>
          {[0, 1, 2, 3].map((i) => (
            <rect key={i} x={60 + i * 34} y={214} width="26" height="26" className={i === 1 ? 'sa-a' : 'sa-line'} />
          ))}
        </svg>
      );
    case 'brand':
      return (
        <svg className={cls} viewBox="0 0 400 300" aria-hidden="true" focusable="false">
          <g className="sa-grid">
            {[80, 140, 200, 260, 320].map((x) => (
              <path key={x} d={`M${x} 30v240`} />
            ))}
            {[60, 120, 180, 240].map((y) => (
              <path key={y} d={`M40 ${y}h320`} />
            ))}
          </g>
          <circle cx="110" cy="150" r="50" className="sa-ring-a" />
          <g className="sa-morph">
            <rect x="160" y="100" width="100" height="100" className="sa-b" />
          </g>
          <path d="M280 200V100h20l20 30 20-30h20v100h-20v-55l-20 28-20-28v55z" className="sa-ink-fill" />
          <text x="40" y="272" className="sa-caption">
            MODULE 40 / 3 FORMS
          </text>
        </svg>
      );
    case 'uiux':
      return (
        <svg className={cls} viewBox="0 0 400 300" aria-hidden="true" focusable="false">
          <g className="sa-screen sa-screen--a">
            <rect x="60" y="40" width="210" height="160" rx="14" className="sa-paper sa-stroke" />
            <rect x="80" y="62" width="80" height="10" rx="5" className="sa-ink-fill" />
            <rect x="80" y="82" width="140" height="6" rx="3" className="sa-faint" />
            <rect x="80" y="150" width="90" height="30" rx="15" className="sa-a" />
          </g>
          <g className="sa-screen sa-screen--b">
            <rect x="130" y="90" width="210" height="160" rx="14" className="sa-paper sa-stroke" />
            <rect x="150" y="110" width="170" height="70" rx="8" className="sa-b" />
            <rect x="150" y="196" width="100" height="8" rx="4" className="sa-ink-fill" />
            <rect x="150" y="212" width="140" height="6" rx="3" className="sa-faint" />
          </g>
          <circle cx="300" cy="62" r="16" className="sa-a sa-tap" />
        </svg>
      );
    case 'web':
      return (
        <svg className={cls} viewBox="0 0 400 300" aria-hidden="true" focusable="false">
          <rect x="30" y="40" width="250" height="180" rx="10" className="sa-paper sa-stroke" />
          <path d="M30 66h250" className="sa-line" />
          <circle cx="46" cy="53" r="4" className="sa-ink-fill" />
          <circle cx="60" cy="53" r="4" className="sa-ink-fill" />
          <g className="sa-reflow">
            <rect className="sa-r1 sa-a" x="46" y="82" width="130" height="80" rx="4" />
            <rect className="sa-r2 sa-b" x="186" y="82" width="78" height="38" rx="4" />
            <rect className="sa-r3 sa-faint" x="186" y="124" width="78" height="38" rx="4" />
            <rect x="46" y="176" width="218" height="8" rx="4" className="sa-faint" />
            <rect x="46" y="192" width="150" height="8" rx="4" className="sa-faint" />
          </g>
          <rect x="296" y="96" width="76" height="150" rx="14" className="sa-paper sa-stroke" />
          <rect x="306" y="116" width="56" height="40" rx="4" className="sa-a" />
          <rect x="306" y="162" width="56" height="24" rx="4" className="sa-b" />
          <rect x="306" y="192" width="56" height="6" rx="3" className="sa-faint" />
          <text x="30" y="266" className="sa-caption">
            {'360 / 768 / 1440'}
          </text>
        </svg>
      );
    case 'software':
      return (
        <svg className={cls} viewBox="0 0 400 300" aria-hidden="true" focusable="false">
          <rect x="30" y="34" width="70" height="232" rx="12" className="sa-paper sa-stroke" />
          {[0, 1, 2, 3, 4].map((i) => (
            <rect key={i} x="46" y={62 + i * 28} width={i === 2 ? 38 : 28} height="7" rx="3.5" className={i === 2 ? 'sa-a' : 'sa-faint'} />
          ))}
          <rect x="112" y="34" width="258" height="120" rx="12" className="sa-paper sa-stroke" />
          <path className="sa-draw" d="M132 126l36-24 30 12 34-36 32 18 34-30 50 10" />
          <circle cx="348" cy="66" r="6" className="sa-a" />
          <rect x="112" y="166" width="124" height="100" rx="12" className="sa-paper sa-stroke" />
          {[34, 56, 42, 70, 50].map((h, i) => (
            <rect key={i} className={'sa-grow ' + (i === 3 ? 'sa-b' : 'sa-faint')} style={{ animationDelay: `${i * 120}ms` }} x={128 + i * 20} y={252 - h} width="12" height={h} rx="3" />
          ))}
          <rect x="246" y="166" width="124" height="100" rx="12" className="sa-paper sa-stroke" />
          <circle cx="292" cy="216" r="26" className="sa-track" />
          <circle cx="292" cy="216" r="26" className="sa-progress" transform="rotate(-90 292 216)" />
          <rect x="328" y="206" width="30" height="7" rx="3.5" className="sa-ink-fill" />
          <rect x="328" y="220" width="20" height="6" rx="3" className="sa-faint" />
        </svg>
      );
    case 'marketing':
    default:
      return (
        <svg className={cls} viewBox="0 0 400 300" aria-hidden="true" focusable="false">
          <g className="sa-tilt">
            <rect x="46" y="30" width="160" height="230" className="sa-b" />
            <text x="62" y="92" className="sa-poster">
              SAY IT
            </text>
            <text x="62" y="140" className="sa-poster">
              BIG.
            </text>
            <circle cx="160" cy="214" r="30" className="sa-a" />
          </g>
          <g className="sa-tiles">
            <rect x="226" y="60" width="62" height="62" className="sa-a" />
            <rect x="296" y="60" width="62" height="62" className="sa-paper sa-stroke" />
            <rect x="226" y="130" width="62" height="62" className="sa-paper sa-stroke" />
            <rect x="296" y="130" width="62" height="62" className="sa-ink-fill" />
          </g>
          <path d="M226 246l30-20 26 10 34-28 42 16" className="sa-draw sa-draw--short" />
        </svg>
      );
  }
}
