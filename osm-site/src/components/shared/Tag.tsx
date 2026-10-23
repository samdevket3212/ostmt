import type { ReactNode } from 'react';
export function Tag({ kind = 'default', children, className }: { kind?: 'default' | 'concept' | 'accent'; children?: ReactNode; className?: string }) {
  return (
    <span className={['osm-tag', `osm-tag--${kind}`, className].filter(Boolean).join(' ')}>
      {kind === 'concept' && <span className="osm-tag__dot" aria-hidden="true" />}
      {children ?? (kind === 'concept' ? 'Studio Concept' : null)}
    </span>
  );
}
