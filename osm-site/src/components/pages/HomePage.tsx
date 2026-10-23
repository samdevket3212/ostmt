import { homeFaqs, processPreview, site } from '@/content/site';
import { projects } from '@/content/projects';
import { services } from '@/content/services';
import { AppLink } from '@/lib/platform';
import { Button } from '../shared/Button';
import { CTASection } from '../shared/CTASection';
import { FAQAccordion } from '../shared/FAQAccordion';
import { Icon } from '../shared/Icon';
import { Marquee } from '../shared/Marquee';
import { PhoneActions } from '../shared/PhoneActions';
import { ProjectCard } from '../shared/ProjectCard';
import { ServiceCard } from '../shared/ServiceCard';
import { HeroArtwork } from '../visuals/HeroArtwork';

const panels = [
  {
    label: 'Design',
    heading: 'Make it impossible to ignore.',
    body: 'We shape ideas into compelling visuals, memorable identities, and experiences that stand apart.',
    related: ['2D/3D', 'Game Design', 'Branding', 'UI/UX'],
    href: '/services#design',
    theme: 'coral',
  },
  {
    label: 'Build',
    heading: 'Bring the vision to life.',
    body: 'We turn thoughtful designs into modern websites, applications, and functional digital products.',
    related: ['Web Development', 'Software Development'],
    href: '/services#development',
    theme: 'white',
  },
  {
    label: 'Grow',
    heading: 'Take the story further.',
    body: 'We connect creative thinking with content and marketing that help good ideas reach the right people.',
    related: ['Digital Marketing'],
    href: '/services#marketing',
    theme: 'cobalt',
  },
];

const SERVICE_LAYOUT: ('feature' | 'standard' | 'wide' | 'compact')[] = ['feature', 'standard', 'standard', 'feature', 'compact', 'compact', 'wide'];

export function HomePage() {
  const [modulo, nextLevel, formFn, openspace] = projects;
  return (
    <>
      {/* 1. Hero */}
      <section className="hero" data-theme="canvas" aria-labelledby="hero-title">
        <div className="container hero__inner">
          <p className="eyebrow hero__eyebrow">Independent Creative Studio / Sheridan, Wyoming</p>
          <h1 className="hero__title" id="hero-title">
            <span className="hero__line">We make</span>
            <span className="hero__line">ideas look</span>
            <span className="hero__line hero__line--accent">
              <span className="hero__mark">extraordinary.</span>
            </span>
          </h1>
          <div className="hero__art">
            <HeroArtwork />
          </div>
          <div className="hero__copy">
            <p className="hero__lead">
              One Stop Media is where visual creativity meets digital possibility. We create bold identities, imaginative 2D and 3D artwork, interactive experiences,
              and thoughtfully designed digital products.
            </p>
            <div className="hero__actions">
              <Button href="/work" variant="secondary">
                Explore Our Work
              </Button>
              <Button href="/contact" magnetic>
                Start a Project
              </Button>
            </div>
          </div>
          <div className="hero__foot">
            <a className="hero__scroll" href="#the-studio">
              Scroll to explore <span aria-hidden="true">↓</span>
            </a>
            <p className="hero__detail">Design / Digital / Everything Between</p>
          </div>
        </div>
      </section>

      {/* 2. Marquee */}
      <Marquee />

      {/* 3. Who we are */}
      <section className="section studio-intro" data-theme="canvas" id="the-studio" aria-labelledby="intro-title">
        <div className="container studio-intro__grid">
          <p className="eyebrow eyebrow--num" data-reveal>
            <span>01</span> / The Studio
          </p>
          <div className="studio-intro__main">
            <h2 className="display-2" id="intro-title" data-reveal>
              All things creative. <span className="text-outline">All in one place.</span>
            </h2>
            <div className="studio-intro__body" data-reveal>
              <p className="lead">Great ideas rarely fit into one box.</p>
              <p>They can start as a sketch, become a brand, turn into an immersive digital world, or grow into a product people use every day.</p>
              <p>At One Stop Media, we connect creative thinking, design, and technology to bring these possibilities together.</p>
              <p>We believe the best work happens when every detail belongs to the same bigger idea.</p>
              <Button href="/studio" variant="link" icon="arrow-up-right">
                Meet One Stop Media
              </Button>
            </div>
          </div>
          <div className="studio-intro__art" aria-hidden="true">
            <span className="si-shape si-shape--quarter" />
            <span className="si-shape si-shape--circle" />
            <span className="si-shape si-shape--block" />
            <span className="si-shape si-shape--bar" />
          </div>
        </div>
      </section>

      {/* 4. Selected work */}
      <section className="section work-preview" data-theme="ink" aria-labelledby="work-title">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="eyebrow eyebrow--num" data-reveal>
                <span>02</span> / The Work
              </p>
              <h2 className="display-2" id="work-title" data-reveal>
                Less ordinary. More unforgettable.
              </h2>
            </div>
            <p className="section-head__lead" data-reveal>
              Explore visual worlds, brand identities, interactive ideas, and digital products shaped through our design-first approach.
            </p>
          </div>
          <div className="work-preview__grid">
            <div className="wp-a">
              <ProjectCard project={modulo} shape="wide" />
            </div>
            <div className="wp-b">
              <ProjectCard project={nextLevel} shape="tall" />
            </div>
            <div className="wp-c">
              <ProjectCard project={formFn} shape="tall" />
            </div>
            <div className="wp-d">
              <ProjectCard project={openspace} shape="wide" />
            </div>
          </div>
          <div className="work-preview__cta">
            <Button href="/work" icon="arrow-up-right">
              View All Projects
            </Button>
          </div>
        </div>
      </section>

      {/* 5. What we do */}
      <section className="section services-preview" data-theme="canvas" aria-labelledby="services-title">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="eyebrow eyebrow--num" data-reveal>
                <span>03</span> / Our Capabilities
              </p>
              <h2 className="display-2" id="services-title" data-reveal>
                One creative partner. Endless possibilities.
              </h2>
            </div>
            <p className="section-head__lead" data-reveal>
              From visual identity and digital art to intuitive interfaces and fully developed platforms, our work connects the disciplines that shape how people see,
              interact, and engage.
            </p>
          </div>
          <div className="services-preview__grid">
            {services.map((s, i) => (
              <div key={s.slug} className={`sp-cell sp-cell--${i + 1}`}>
                <ServiceCard service={s} variant={SERVICE_LAYOUT[i]} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Big typography moment */}
      <section className="section big-type" data-theme="cobalt" aria-labelledby="big-type-title">
        <div className="container">
          <h2 className="big-type__lines" id="big-type-title">
            <span className="big-type__line" data-reveal>
              Think big.
            </span>
            <span className="big-type__line big-type__line--2" data-reveal>
              Make bold.
            </span>
            <span className="big-type__line big-type__line--3" data-reveal>
              Stay original.
            </span>
          </h2>
          <p className="big-type__body" data-reveal>
            Because great work should do more than fill a screen. It should leave an impression.
          </p>
        </div>
      </section>

      {/* 7. Design / Build / Grow */}
      <section className="section dbg" data-theme="canvas" aria-label="Design, build, grow">
        <div className="container dbg__grid">
          {panels.map((p, i) => (
            <AppLink key={p.label} href={p.href} className={`dbg-panel dbg-panel--${i + 1}`} data-theme={p.theme} data-reveal>
              <span className="dbg-panel__label">{p.label}</span>
              <span className="dbg-panel__heading">{p.heading}</span>
              <span className="dbg-panel__body">{p.body}</span>
              <span className="dbg-panel__related">{p.related.join(' · ')}</span>
              <span className="dbg-panel__arrow" aria-hidden="true">
                <Icon name="arrow-up-right" size={22} />
              </span>
            </AppLink>
          ))}
        </div>
      </section>

      {/* 8. Process preview */}
      <section className="section process-preview" data-theme="sand" aria-labelledby="process-title">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="eyebrow eyebrow--num" data-reveal>
                <span>04</span> / How We Work
              </p>
              <h2 className="display-2" id="process-title" data-reveal>
                From &ldquo;what if&rdquo; to &ldquo;what&apos;s next.&rdquo;
              </h2>
            </div>
            <p className="section-head__lead" data-reveal>
              Every great project starts with a question. Our process turns that first idea into a clear direction, then into something real.
            </p>
          </div>
          <ol className="process-preview__steps">
            {processPreview.map((s) => (
              <li key={s.number} className="pp-step" data-reveal>
                <span className="pp-step__num">{s.number}</span>
                <h3 className="pp-step__name">{s.name}</h3>
                <p>{s.summary}</p>
              </li>
            ))}
          </ol>
          <Button href="/process" variant="secondary">
            See Our Process
          </Button>
        </div>
      </section>

      {/* 9. Studio statement */}
      <section className="section statement" data-theme="canvas" aria-labelledby="statement-title">
        <div className="container statement__grid">
          <h2 className="display-2 statement__title" id="statement-title" data-reveal>
            Good design is good business. <span className="hl">Great design is unforgettable.</span>
          </h2>
          <div className="statement__body" data-reveal>
            <p>
              The right visual direction makes a brand recognizable. The right interface makes a product easier to use. The right technology helps a good idea become
              something valuable.
            </p>
            <p>We connect these pieces because the experience is stronger when they work together.</p>
          </div>
        </div>
      </section>

      {/* 10. FAQ */}
      <section className="section faq-section" data-theme="white" aria-labelledby="faq-title">
        <div className="container faq-section__grid">
          <div>
            <p className="eyebrow" data-reveal>
              Common Questions
            </p>
            <h2 className="display-2 faq-section__title" id="faq-title" data-reveal>
              Curious? Good.
            </h2>
            <PhoneActions variant="pill" />
            {site.email && (
              <a className="faq-section__email" href={`mailto:${site.email}`}>
                <Icon name="mail" size={18} /> {site.email}
              </a>
            )}
          </div>
          <FAQAccordion items={homeFaqs} />
        </div>
      </section>

      {/* 11. Final CTA */}
      <CTASection
        heading="The next big thing starts with one idea."
        body="Have something in mind? Whether it's a brand, a game, a website, or a product idea, we'd love to hear what you're imagining."
        primary={{ label: "Let's Make It Happen", href: '/contact' }}
        showPhone
      />
    </>
  );
}
