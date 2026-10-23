import { site } from '@/content/site';

const privacySections = [
  {
    h: 'Who we are',
    p: [`This website is operated by ${site.legalName}, based in ${site.location}. Phone (call or text): ${site.phone.display}. Email: ${site.email}. [Insert registered business address once verified.]`],
  },
  {
    h: 'What we collect',
    p: [
      'When you send a project inquiry we collect the details you enter: your name and email address, and optionally your phone number, company, the services you are interested in, an estimated budget and timeline, and your project description.',
      '[Confirm whether analytics, server logs, or cookies are used and list them here.]',
    ],
  },
  { h: 'How we use it', p: ['We use inquiry details only to respond to you and to discuss a potential project. We do not sell your information.'] },
  {
    h: 'Where it is processed',
    p: ['[List the email delivery service, hosting provider and any other processors that handle form submissions, with links to their privacy policies.]'],
  },
  { h: 'How long we keep it', p: ['[State the retention period for inquiries that do and do not become projects.]'] },
  {
    h: 'Your choices',
    p: [
      `You can ask us to access, correct or delete the information you sent by emailing ${site.email} or calling or texting ${site.phone.display}. [Add any rights required under applicable law.]`,
    ],
  },
  { h: 'Changes', p: ['We will update this page if our practices change. [Add the effective date once the policy is approved.]'] },
];

const termsSections = [
  { h: 'Using this website', p: [`This website presents the services and creative work of ${site.legalName}. By using it you agree to these terms.`] },
  {
    h: 'Studio concepts',
    p: ['Projects labeled Studio Concept are original explorations created by the studio. They are not client commissions and do not describe results for any client.'],
  },
  {
    h: 'Intellectual property',
    p: [`Unless stated otherwise, the content, artwork and design of this website belong to ${site.legalName}. [Confirm ownership and licensing language.]`],
  },
  { h: 'No offer or guarantee', p: ['Information on this website is general. Project scope, pricing and timelines are agreed separately in writing.'] },
  { h: 'Governing law', p: ['[Insert governing law and jurisdiction after legal review.]'] },
];

export function LegalPage({ kind }: { kind: 'privacy' | 'terms' }) {
  const isPrivacy = kind === 'privacy';
  const sections = isPrivacy ? privacySections : termsSections;
  return (
    <>
      <section className="page-hero page-hero--legal" data-theme="canvas" aria-labelledby="legal-title">
        <div className="container page-hero__inner">
          <p className="eyebrow">Legal</p>
          <h1 className="page-hero__title" id="legal-title">
            {isPrivacy ? 'Privacy Policy' : 'Terms of Use'}
          </h1>
        </div>
      </section>
      <section className="section legal" data-theme="white">
        <div className="container legal__grid">
          <aside className="legal__notice" role="note">
            <strong>Draft for review.</strong> This page has not been reviewed by a lawyer. Bracketed items need verified business details before launch.
          </aside>
          <div className="legal__body">
            {sections.map((s) => (
              <section key={s.h}>
                <h2>{s.h}</h2>
                {s.p.map((t) => (
                  <p key={t}>{t}</p>
                ))}
              </section>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
