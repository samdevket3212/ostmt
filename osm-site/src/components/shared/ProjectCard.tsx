import { AppLink } from '@/lib/platform';
import type { Project } from '@/content/projects';
import { ProjectArtwork } from '../visuals/ProjectArtwork';
import { Icon } from './Icon';
import { Tag } from './Tag';

export function ProjectCard({
  project,
  shape = 'standard',
  headingLevel = 3,
  showSummary = true,
}: {
  project: Project;
  shape?: 'standard' | 'tall' | 'wide' | 'full';
  headingLevel?: 2 | 3;
  showSummary?: boolean;
}) {
  const H = `h${headingLevel}` as 'h2' | 'h3';
  return (
    <article className={`osm-project osm-project--${shape}`} data-reveal>
      <AppLink href={`/work/${project.slug}`} className="osm-project__link" data-cursor>
        <div className="osm-project__media">
          <ProjectArtwork tone={project.tone} alt={project.coverAlt} />
          {project.type === 'Studio Concept' && <Tag kind="concept" className="osm-project__concept" />}
          <span className="osm-project__hover-cat" aria-hidden="true">
            {project.categories.join(' / ')}
          </span>
          <span className="osm-project__arrow" aria-hidden="true">
            <Icon name="arrow-up-right" size={24} />
          </span>
        </div>
        <div className="osm-project__meta">
          <p className="osm-project__index">
            {project.index} · {project.name}
          </p>
          <H className="osm-project__title">{project.title}</H>
          {showSummary && <p className="osm-project__desc">{project.summary}</p>}
          <p className="osm-project__cats">{project.categories.join(' / ')}</p>
        </div>
      </AppLink>
    </article>
  );
}
