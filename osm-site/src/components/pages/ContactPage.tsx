import { site } from '@/content/site';
import { getService } from '@/content/services';
import { BrandShapes } from '../visuals/BrandShapes';
import { ContactForm } from '../shared/ContactForm';
import { CopyContact } from '../shared/CopyContact';
import { Icon } from '../shared/Icon';
import { PhoneActions } from '../shared/PhoneActions';

export function ContactPage({ serviceSlug }: { serviceSlug?: string }) {
  const initial = serviceSlug ? getService(serviceSlug)?.contactLabels : undefined;
  return (
    <section className="contact" data-theme="canvas" aria-labelledby="contact-title">
      <div className="container contact__grid">
        <div className="contact__intro">
          <p className="eyebrow">Let&apos;s Get Creative</p>
          <h1 className="contact__title" id="contact-title">
            Tell us your <span className="hl">big idea.</span>
          </h1>
          <p className="contact__lead">A brand. A game. A new digital product. A website. Something entirely different.</p>
          <p className="contact__lead">Whatever you&apos;re imagining, we&apos;d love to learn more.</p>
          <ul className="contact__details">
            <li>
              <strong>{site.legalName}</strong>
            </li>
            <li>
              <Icon name="pin" size={20} /> {site.location}
            </li>
            <li>
              <Icon name="phone" size={20} />
              <span>
                Call or text: <CopyContact href={`tel:${site.phone.tel}`} value={site.phone.display} label="phone number" />
              </span>
            </li>
            {site.email && (
              <li>
                <Icon name="mail" size={20} /> <CopyContact href={`mailto:${site.email}`} value={site.email} label="email address" />
              </li>
            )}
          </ul>
          <div className="contact__call" data-theme="ink">
            <p className="contact__call-q">Prefer a conversation?</p>
            <PhoneActions variant="big" />
          </div>
          <BrandShapes className="contact__shapes" />
        </div>
        <div className="contact__form">
          <ContactForm initialServices={initial} key={(initial ?? []).join('|') || 'none'} />
        </div>
      </div>
    </section>
  );
}
