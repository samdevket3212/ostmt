import type { CSSProperties } from 'react';
import { AppLink } from '@/lib/platform';

/** OSM monogram: an outlined O, a structural S and a solid geometric M on a 40px module. */
export function Monogram({ height = 32, className, animate = false }: { height?: number; className?: string; animate?: boolean }) {
  return (
    <svg
      className={['osm-mark', animate && 'osm-mark--animate', className].filter(Boolean).join(' ')}
      viewBox="-2 -2 132 44"
      height={height}
      width={(height * 132) / 44}
      aria-hidden="true"
      focusable="false"
    >
      <circle className="osm-mark__o" cx="20" cy="20" r="16.5" pathLength={100} />
      <path className="osm-mark__s" d="M77.5 3.5H62A8 8 0 0 0 62 19.5H66A8 8 0 0 1 66 35.5H50.5" pathLength={100} />
      <path className="osm-mark__m" d="M88 40V0h10l10 16 10-16h10v40h-10V18l-10 14-10-14v22z" />
    </svg>
  );
}

export function Logo({ size = 30, href, variant = 'wordmark', className, animate = false }: { size?: number; href?: string; variant?: 'wordmark' | 'monogram'; className?: string; animate?: boolean }) {
  const content = (
    <>
      <Monogram height={size} animate={animate} />
      {variant === 'wordmark' && (
        <span className="osm-logo__text" aria-hidden="true">
          One Stop Media
        </span>
      )}
      <span className="gg-visually-hidden">One Stop Media</span>
    </>
  );
  const cls = ['osm-logo', className].filter(Boolean).join(' ');
  const style = { '--logo-size': size + 'px' } as CSSProperties;
  return href ? (
    <AppLink href={href} className={cls} style={style}>
      {content}
    </AppLink>
  ) : (
    <span className={cls} style={style}>
      {content}
    </span>
  );
}
