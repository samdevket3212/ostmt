import { site } from '@/content/site';
import { CTASection } from '../shared/CTASection';
import { Icon } from '../shared/Icon';
import { Monogram } from '../shared/Logo';
import { PhoneActions } from '../shared/PhoneActions';

const beliefs = [
  { n: '01', label: 'Originality', heading: 'Create something worth noticing.', body: 'We believe distinctive ideas and thoughtful creative direction help brands and products build meaningful identities.' },
  { n: '02', label: 'Craft', heading: 'Care about every detail.', body: 'Great work is shaped by the quality of its typography, visuals, interactions, and implementation.' },
  {
    n: '03',
    label: 'Collaboration',
    heading: 'The best work starts with understanding.',
    body: 'We believe good communication and shared creative direction help transform ambitious ideas into practical outcomes.',
  },
  { n: '04', label: 'Purpose', heading: 'Design should mean something.', body: 'Visual quality matters, but every experience should also serve the people who use it.' },
];
const spectrum = ['Visual Design', 'Digital Artwork', 'Game Concepts', 'Brand Identity', 'UI/UX', 'Website Development', 'Software', 'Digital Marketing'];

export function StudioPage() {
  return (
    <>
      <section className="page-hero page-hero--studio" data-theme="canvas" aria-labelledby="studio-title">
        <div className="container page-hero__inner">
          <p className="eyebrow">Welcome to the Studio</p>
          <h1 className="page-hero__title" id="studio-title">
            We&apos;re in the business of making things <span className="hl">remarkable.</span>
          </h1>
          <p className="page-hero__lead">
            One Stop Media is a multidisciplinary creative studio based in Sheridan, Wyoming, where thoughtful design and digital technology work together to bring
            ambitious ideas to life.
          </p>
        </div>
        <div className="page-hero__mark" aria-hidden="true">
          <Monogram height={220} />
        </div>
      </section>

      <section className="section story" data-theme="white" aria-labelledby="story-title">
        <div className="container story__grid">
          <p className="eyebrow">Our Story</p>
          <div>
            <h2 className="display-2" id="story-title" data-reveal>
              Creativity doesn&apos;t belong in a single category.
            </h2>
            <div className="story__body" data-reveal>
              <p className="lead">An idea may start with a logo.</p>
              <p>It could become a complete brand, an immersive 3D world, an intuitive application, or an engaging digital experience.</p>
              <p>At One Stop Media, we believe these disciplines become more powerful when they connect.</p>
              <p>
                Our studio approach brings visual design, interactive thinking, and technical execution together around one goal: making ideas real, engaging, and
                memorable.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section beliefs" data-theme="canvas" aria-labelledby="beliefs-title">
        <div className="container">
          <h2 className="display-2" id="beliefs-title" data-reveal>
            A few things we stand for.
          </h2>
          <div className="beliefs__grid">
            {beliefs.map((b, i) => (
              <article key={b.n} className={`belief belief--${i + 1}`} data-reveal>
                <p className="belief__label">
                  <span>{b.n}</span> {b.label}
                </p>
                <h3 className="belief__heading">{b.heading}</h3>
                <p>{b.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section spectrum" data-theme="coral" aria-labelledby="spectrum-title">
        <div className="container spectrum__grid">
          <div>
            <h2 className="display-2" id="spectrum-title" data-reveal>
              An entire creative spectrum.
            </h2>
            <div className="spectrum__body" data-reveal>
              <p>One Stop Media works across visual design, digital artwork, game concepts, brand identity, UI/UX, website development, software, and digital marketing.</p>
              <p>This multidisciplinary perspective helps connect the right skills around the needs of an idea.</p>
            </div>
          </div>
          <ul className="spectrum__list">
            {spectrum.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section location" data-theme="ink" aria-labelledby="location-title">
        <div className="container location__grid">
          <div>
            <p className="eyebrow">Based in Wyoming</p>
            <h2 className="display-2" id="location-title" data-reveal>
              A creative studio in Sheridan, Wyoming.
            </h2>
          </div>
          <div className="location__body" data-reveal>
            <p>One Stop Media LLC is based in Sheridan, Wyoming, USA.</p>
            <p>Whether you&apos;re exploring a brand identity, a digital product, or a new creative concept, we&apos;re ready to hear what you&apos;re working on.</p>
            <PhoneActions variant="big" />
            {site.email && (
              <a className="location__email" href={`mailto:${site.email}`}>
                <Icon name="mail" size={20} /> {site.email}
              </a>
            )}
          </div>
        </div>
      </section>

      <CTASection heading="Great ideas are better when shared." primary={{ label: "Let's Talk About Yours", href: '/contact' }} theme="cobalt" />
    </>
  );
}
