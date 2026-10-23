import { getProject, projects, type Project } from '@/content/projects';
import { getService } from '@/content/services';
import { AppLink } from '@/lib/platform';
import { Breadcrumbs } from '../shared/Breadcrumbs';
import { CTASection } from '../shared/CTASection';
import { Icon } from '../shared/Icon';
import { ProjectCard } from '../shared/ProjectCard';
import { Tag } from '../shared/Tag';
import { ProjectArtwork } from '../visuals/ProjectArtwork';

export function ProjectPage({ project }: { project: Project }) {
  const i = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(i + 1) % projects.length];
  const related = project.relatedProjects.map(getProject).filter((p): p is Project => !!p);
  const isConcept = project.type === 'Studio Concept';
  const frame = (k: number) => <ProjectArtwork tone={project.tone} variant={k} alt={`${project.name}: ${project.gallery[k]}. Concept frame.`} />;

  return (
    <article className={`case case--${project.tone}`}>
      {/* 1. Hero */}
      <header className="case-hero" data-theme="canvas">
        <div className="container">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Work', href: '/work' }, { label: project.name }]} />
          <div className="case-hero__head">
            <div>
              <p className="eyebrow eyebrow--num">
                <span>{project.index}</span> / {project.name}
              </p>
              <h1 className="case-hero__title">{project.title}</h1>
            </div>
            <div className="case-hero__meta">
              <Tag kind={isConcept ? 'concept' : 'default'}>{project.type}</Tag>
              <dl>
                <div>
                  <dt>Category</dt>
                  <dd>{project.categories.join(' / ')}</dd>
                </div>
                <div>
                  <dt>Disciplines</dt>
                  <dd>{project.disciplines.join(' / ')}</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
        <div className="case-hero__media">{frame(0)}</div>
      </header>

      {/* 2. Overview + 3. Direction */}
      <section className="section case-story" data-theme="canvas" aria-label="Overview">
        <div className="container case-story__grid">
          <div className="case-story__block" data-reveal>
            <h2 className="case-h">The Big Idea</h2>
            {project.overview.map((p) => (
              <p key={p}>{p}</p>
            ))}
            {isConcept && (
              <p className="case-story__note">
                {project.name} is an independent studio concept. It has no client, timeline or results attached.
              </p>
            )}
          </div>
          <div className="case-story__block" data-reveal>
            <h2 className="case-h">Finding the Right Visual Language</h2>
            <p>{project.direction}</p>
          </div>
        </div>
      </section>

      {/* 4. Exploration */}
      <section className="section case-explore" data-theme="sand" aria-labelledby="explore-title">
        <div className="container">
          <h2 className="display-3" id="explore-title" data-reveal>
            Exploring the Possibilities
          </h2>
          <div className="case-explore__grid">
            {[1, 2].map((k) => (
              <figure key={k} className="case-figure" data-reveal>
                <div className="case-figure__media">{frame(k)}</div>
                <figcaption>
                  <span>0{k + 1}</span> {project.gallery[k]}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Details */}
      <section className="section case-details" data-theme="canvas" aria-labelledby="details-title">
        <div className="container case-details__grid">
          <div>
            <h2 className="display-3" id="details-title" data-reveal>
              It&apos;s All in the Details
            </h2>
            <p className="case-details__text" data-reveal>
              {project.details}
            </p>
          </div>
          <div data-reveal>
            <p className="eyebrow">Focus</p>
            <ul className="case-details__focus">
              {project.focusAreas.map((f, k) => (
                <li key={f}>
                  <span>{String(k + 1).padStart(2, '0')}</span>
                  {f}
                </li>
              ))}
            </ul>
            <p className="eyebrow case-details__svc-label">Related services</p>
            <ul className="case-details__svcs">
              {project.relatedServices.map((slug) => {
                const s = getService(slug);
                return s ? (
                  <li key={slug}>
                    <AppLink href={`/services/${slug}`}>
                      {s.name} <Icon name="arrow" size={16} />
                    </AppLink>
                  </li>
                ) : null;
              })}
            </ul>
          </div>
        </div>
      </section>

      {/* 6. Gallery, alternating */}
      <section className="case-gallery" data-theme="ink" aria-label="Gallery">
        {[3, 4].map((k, n) => (
          <figure key={k} className={'case-gallery__row' + (n % 2 ? ' case-gallery__row--inset' : '')} data-reveal>
            <div className="case-gallery__media">{frame(k)}</div>
            <figcaption className="container">
              <span>0{k + 1}</span> {project.gallery[k]}
            </figcaption>
          </figure>
        ))}
      </section>

      {/* 7. Related work */}
      <section className="section case-related" data-theme="canvas" aria-labelledby="related-title">
        <div className="container">
          <h2 className="display-3" id="related-title">
            More from the studio
          </h2>
          <div className="case-related__grid">
            {related.map((p) => (
              <ProjectCard key={p.slug} project={p} showSummary={false} />
            ))}
          </div>
        </div>
      </section>

      {/* 8. Next project */}
      <section className="next-project" data-theme="ink" aria-label="Next project">
        <AppLink href={`/work/${next.slug}`} className="next-project__link" data-cursor>
          <div className="next-project__media">
            <ProjectArtwork tone={next.tone} alt={next.coverAlt} />
          </div>
          <div className="container next-project__copy">
            <span className="eyebrow">Next Project</span>
            <span className="next-project__title">
              {next.name} <Icon name="arrow" size={56} strokeWidth={1.5} />
            </span>
            <span className="next-project__sub">{next.title}</span>
          </div>
        </AppLink>
      </section>

      {/* 9. CTA */}
      <CTASection heading="Have a project in mind? Let's make it happen." primary={{ label: 'Start a Project', href: '/contact' }} showPhone />
    </article>
  );
}
