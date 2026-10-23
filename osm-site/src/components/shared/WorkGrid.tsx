'use client';
import { useState, type CSSProperties } from 'react';
import { projects, workFilters, type WorkFilter } from '@/content/projects';
import { ProjectCard } from './ProjectCard';

/** Editorial layout for the full set: a full-width highlight, a tall + landscape split, then a landscape. */
const FULL_SET: ('full' | 'tall' | 'wide')[] = ['full', 'tall', 'wide', 'wide'];

export function WorkGrid() {
  const [filter, setFilter] = useState<WorkFilter>('all');
  const shown = projects.filter((p) => filter === 'all' || p.filters.includes(filter));
  const isAll = shown.length === projects.length;
  return (
    <div className="work-grid-wrap">
      <div className="work-filters" role="group" aria-label="Filter projects by discipline">
        {workFilters.map((f) => {
          const count = f.id === 'all' ? projects.length : projects.filter((p) => p.filters.includes(f.id as Exclude<WorkFilter, 'all'>)).length;
          return (
            <button key={f.id} type="button" className={'work-filter' + (filter === f.id ? ' is-active' : '')} aria-pressed={filter === f.id} onClick={() => setFilter(f.id)}>
              {f.label}
              <sup className="work-filter__count">{count}</sup>
            </button>
          );
        })}
      </div>
      <p className="gg-visually-hidden" aria-live="polite">
        {shown.length} {shown.length === 1 ? 'project' : 'projects'} shown
      </p>
      <div className={'work-grid' + (isAll ? '' : ' work-grid--filtered')} key={filter}>
        {shown.map((p, i) => {
          const shape = isAll ? FULL_SET[i] : shown.length === 1 ? 'full' : 'wide';
          return (
            <div key={p.slug} className={`work-grid__item work-grid__item--${shape} work-grid__item--n${i + 1}`} style={{ '--i': i } as CSSProperties}>
              <ProjectCard project={p} shape={shape} headingLevel={2} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
