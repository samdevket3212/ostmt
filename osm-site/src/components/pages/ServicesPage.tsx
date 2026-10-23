import { serviceCategories, servicesByCategory } from '@/content/services';
import { AppLink } from '@/lib/platform';
import { CTASection } from '../shared/CTASection';
import { Icon } from '../shared/Icon';
import { ServiceArtwork } from '../visuals/ServiceArtwork';

export function ServicesPage() {
  let row = 0;
  return (
    <>
      <section className="page-hero" data-theme="canvas" aria-labelledby="services-title">
        <div className="container page-hero__inner">
          <p className="eyebrow">What We Do</p>
          <h1 className="page-hero__title" id="services-title">
            Every idea has a next step. <span className="hl">We help you make it.</span>
          </h1>
          <p className="page-hero__lead">
            Our studio brings together visual design, interactive media, development, and digital marketing to create engaging brands, experiences, and products.
          </p>
          <nav className="page-hero__jump" aria-label="Service groups">
            {serviceCategories.map((c) => (
              <a key={c.id} href={`#${c.id}`}>
                <span>{c.number}</span> {c.label}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {serviceCategories.map((c) => (
        <section key={c.id} id={c.id} className="section svc-cat" data-theme={c.id === 'development' ? 'sand' : 'canvas'} aria-labelledby={`cat-${c.id}`}>
          <div className="container">
            <header className="svc-cat__head">
              <p className="svc-cat__num" aria-hidden="true">
                {c.number}
              </p>
              <div>
                <p className="eyebrow">{c.label}</p>
                <h2 className="display-2" id={`cat-${c.id}`} data-reveal>
                  {c.heading}
                </h2>
                <p className="svc-cat__desc" data-reveal>
                  {c.description}
                </p>
              </div>
            </header>
            <div className="svc-rows">
              {servicesByCategory(c.id).map((s) => {
                const flip = row++ % 2 === 1;
                return (
                  <article key={s.slug} className={'svc-row' + (flip ? ' svc-row--flip' : '')} data-reveal>
                    <div className="svc-row__art" data-theme={s.theme === 'sand' ? 'white' : s.theme}>
                      <ServiceArtwork kind={s.art} />
                    </div>
                    <div className="svc-row__copy">
                      <p className="svc-row__num">{s.number}</p>
                      <h3 className="svc-row__title">{s.name}</h3>
                      <p className="svc-row__headline">{s.cardHeadline}</p>
                      <p className="svc-row__desc">{s.cardText}</p>
                      <ul className="svc-row__caps" aria-label={`${s.name} capabilities`}>
                        {s.deliverables.slice(0, 6).map((d) => (
                          <li key={d}>{d}</li>
                        ))}
                      </ul>
                      <AppLink className="text-link" href={`/services/${s.slug}`}>
                        Explore {s.slug === 'branding' ? 'Branding' : s.name} <Icon name="arrow" size={18} />
                      </AppLink>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      ))}

      <section className="section cross" data-theme="ink" aria-labelledby="cross-title">
        <div className="container cross__grid">
          <h2 className="display-2" id="cross-title" data-reveal>
            Different skills. <span className="text-outline">One connected approach.</span>
          </h2>
          <div className="cross__body" data-reveal>
            <p>
              A brand identity may need a website. A game concept may need immersive art and interface design. A software product may need both development and a
              complete visual system.
            </p>
            <p>We help connect the right creative and technical capabilities around the needs of the project.</p>
          </div>
        </div>
      </section>

      <CTASection
        heading="Not sure which service fits?"
        body="Tell us what you're trying to create. We'll help explore a practical direction for your idea."
        primary={{ label: 'Tell Us About Your Project', href: '/contact', icon: 'arrow' }}
        showPhone
      />
    </>
  );
}
