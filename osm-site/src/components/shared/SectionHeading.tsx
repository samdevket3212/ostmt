import type { ReactNode } from 'react';

type Props = {
  eyebrow?: ReactNode;
  title: ReactNode;
  intro?: ReactNode;
  action?: ReactNode;
  size?: 'hero' | 'section' | 'card';
  layout?: 'stack' | 'split';
  level?: 1 | 2 | 3;
  className?: string;
  id?: string;
};

export function SectionHeading({ eyebrow, title, intro, action, size = 'section', layout = 'stack', level, className, id }: Props) {
  const H = (`h${level ?? (size === 'hero' ? 1 : 2)}`) as 'h1' | 'h2' | 'h3';
  return (
    <header className={['gg-sh', `gg-sh--${layout}`, `gg-sh--${size}`, className].filter(Boolean).join(' ')}>
      {eyebrow && <p className="gg-sh__eyebrow" data-reveal>{eyebrow}</p>}
      <div className="gg-sh__body">
        <H className="gg-sh__title" id={id} data-reveal>
          {title}
        </H>
        {intro && <div className="gg-sh__intro" data-reveal>{typeof intro === 'string' ? <p>{intro}</p> : intro}</div>}
        {action && <div className="gg-sh__action" data-reveal>{action}</div>}
      </div>
    </header>
  );
}
