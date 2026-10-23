import { getProject, type Project } from '@/content/projects';
import { getService, type Service } from '@/content/services';
import { Breadcrumbs } from '../shared/Breadcrumbs';
import { Button } from '../shared/Button';
import { CTASection } from '../shared/CTASection';
import { FAQAccordion } from '../shared/FAQAccordion';
import { ProjectCard } from '../shared/ProjectCard';
import { ServiceCard } from '../shared/ServiceCard';
import { ServiceArtwork } from '../visuals/ServiceArtwork';

export function ServicePage({ service }: { service: Service }) {
  const related = service.relatedProjects.map(getProject).filter((p): p is Project => !!p);
  const relatedServices = service.relatedServices.map(getService).filter((s): s is Service => !!s);
  const contactHref = `/contact?service=${service.slug}`;
  return (
    <>
      {/* 1. Hero */}
      <section className="svc-hero" data-theme="canvas" aria-labelledby="svc-title">
        <div className="container svc-hero__inner">
          <div className="svc-hero__copy">
            <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Services', href: '/services' }, { label: service.name }]} />
            <p className="eyebrow eyebrow--num">
              <span>{service.number}</span> / {service.eyebrow}
            </p>
            <h1 className="svc-hero__title" id="svc-title">
              {service.headline}
            </h1>
            {service.summary.map((p) => (
              <p key={p} className="svc-hero__lead">
                {p}
              </p>
            ))}
            <div className="svc-hero__actions">
              <Button href={contactHref} magnetic>
                {service.ctaLabel}
              </Button>
              <Button href="/work" variant="link">
                See Our Work
              </Button>
            </div>
          </div>
          <div className="svc-hero__art" data-theme={service.theme === 'sand' ? 'white' : service.theme}>
            <ServiceArtwork kind={service.art} />
          </div>
        </div>
      </section>

      {/* 2. Intro */}
      <section className="section svc-intro" data-theme="white" aria-labelledby="svc-intro-title">
        <div className="container svc-intro__grid">
          <p className="eyebrow">{service.sectionLabel}</p>
          <div>
            <h2 className="display-2" id="svc-intro-title" data-reveal>
              {service.sectionHeading}
            </h2>
            <div className="svc-intro__body" data-reveal>
              {service.body.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Capabilities */}
      <section className="section svc-caps" data-theme="canvas" aria-labelledby="svc-caps-title">
        <div className="container">
          <h2 className="display-3" id="svc-caps-title" data-reveal>
            Services &amp; deliverables
          </h2>
          <ul className="svc-caps__list">
            {service.deliverables.map((d, i) => (
              <li key={d} data-reveal>
                <span>{String(i + 1).padStart(2, '0')}</span>
                {d}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 4. Approach */}
      <section className="section svc-approach" data-theme="cobalt" aria-labelledby="svc-approach-title">
        <div className="container svc-approach__grid">
          <p className="eyebrow">Our approach</p>
          <div>
            <h2 className="display-2" id="svc-approach-title" data-reveal>
              {service.approachHeading}
            </h2>
            <p className="svc-approach__body" data-reveal>
              {service.approachBody}
            </p>
          </div>
        </div>
      </section>

      {/* 5. Showcase */}
      {related.length > 0 && (
        <section className="section svc-related" data-theme="ink" aria-labelledby="svc-related-title">
          <div className="container">
            <div className="section-head">
              <h2 className="display-3" id="svc-related-title">
                Related work
              </h2>
              <Button href="/work" variant="link" icon="arrow-up-right">
                View All Projects
              </Button>
            </div>
            <div className={'svc-related__grid svc-related__grid--' + related.length}>
              {related.map((p) => (
                <ProjectCard key={p.slug} project={p} shape={related.length === 1 ? 'wide' : 'standard'} showSummary={false} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 6. Related services */}
      <section className="section svc-more" data-theme="sand" aria-labelledby="svc-more-title">
        <div className="container">
          <h2 className="display-3" id="svc-more-title" data-reveal>
            Related services
          </h2>
          <div className="svc-more__grid">
            {relatedServices.map((s) => (
              <ServiceCard key={s.slug} service={s} variant="compact" />
            ))}
          </div>
        </div>
      </section>

      {/* 7. FAQ */}
      <section className="section faq-section" data-theme="white" aria-labelledby="svc-faq-title">
        <div className="container faq-section__grid">
          <h2 className="display-3 faq-section__title" id="svc-faq-title" data-reveal>
            Questions about {service.name}
          </h2>
          <FAQAccordion items={service.faqs} />
        </div>
      </section>

      {/* 8. CTA */}
      <CTASection heading={service.ctaHeading} primary={{ label: service.ctaLabel, href: contactHref }} showPhone />
    </>
  );
}
