import { CTASection } from '../shared/CTASection';
import { WorkGrid } from '../shared/WorkGrid';

export function WorkPage() {
  return (
    <>
      <section className="page-hero" data-theme="canvas" aria-labelledby="work-title">
        <div className="container page-hero__inner">
          <p className="eyebrow">The Creative Archive</p>
          <h1 className="page-hero__title" id="work-title">
            Proof that ideas can go <span className="hl">anywhere.</span>
          </h1>
          <p className="page-hero__lead">
            Visual experiments, interactive concepts, digital identities, and design explorations from the One Stop Media creative universe.
          </p>
          <p className="page-hero__note">
            <span className="osm-tag__dot" aria-hidden="true" /> All four projects shown are original studio concepts, not client commissions.
          </p>
        </div>
      </section>
      <section className="section section--tight-top" data-theme="canvas" aria-label="Projects">
        <div className="container">
          <WorkGrid />
        </div>
      </section>
      <CTASection
        heading="Have a project in mind? Let's make it happen."
        primary={{ label: 'Start a Project', href: '/contact' }}
        secondary={{ label: 'Explore Our Services', href: '/services' }}
        showPhone
      />
    </>
  );
}
