import { processStages } from '@/content/site';
import { CTASection } from '../shared/CTASection';
import { Tag } from '../shared/Tag';

const principles = [
  { heading: 'Clarity', body: 'We aim to make communication and creative decisions understandable.' },
  { heading: 'Collaboration', body: 'We use feedback to refine the direction and align on project goals.' },
  { heading: 'Quality', body: 'We pay attention to the visual and functional details of the finished work.' },
];

export function ProcessPage() {
  return (
    <>
      <section className="page-hero" data-theme="canvas" aria-labelledby="process-title">
        <div className="container page-hero__inner">
          <p className="eyebrow">Our Creative Process</p>
          <h1 className="page-hero__title" id="process-title">
            Big thinking. <span className="hl">Thoughtful making.</span>
          </h1>
          <p className="page-hero__lead">
            Good work is a balance of exploration, collaboration, and execution. Our process gives every idea room to develop while keeping the project focused on
            meaningful outcomes.
          </p>
        </div>
      </section>

      <section className="section process-steps" data-theme="white" aria-label="Process stages">
        <div className="container">
          <ol className="process-steps__list">
            {processStages.map((s) => (
              <li key={s.number} className="process-step" data-reveal>
                <div className="process-step__rail">
                  <span className="process-step__num">{s.number}</span>
                  <span className="process-step__name">{s.name}</span>
                </div>
                <div className="process-step__body">
                  <h2 className="process-step__heading">{s.heading}</h2>
                  <p>{s.body}</p>
                  {s.note && <p className="process-step__note">{s.note}</p>}
                  <p className="eyebrow">Potential deliverables</p>
                  <ul className="process-step__deliverables">
                    {s.deliverables.map((d) => (
                      <li key={d}>
                        <Tag>{d}</Tag>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section principles" data-theme="sand" aria-labelledby="principles-title">
        <div className="container">
          <h2 className="display-2" id="principles-title" data-reveal>
            Working principles
          </h2>
          <div className="principles__grid">
            {principles.map((p, i) => (
              <article key={p.heading} className={`principle principle--${i + 1}`} data-reveal>
                <h3>{p.heading}</h3>
                <p>{p.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection heading="Ready to see where your idea can go?" primary={{ label: 'Start a Project', href: '/contact' }} showPhone />
    </>
  );
}
