import type { ReactNode } from 'react';
import { site } from '@/content/site';
import { BrandShapes } from '../visuals/BrandShapes';
import { Button } from './Button';
import { PhoneActions } from './PhoneActions';
import { Icon } from './Icon';

export function CTASection({
  heading,
  body,
  primary,
  secondary,
  showPhone = false,
  theme = 'coral',
}: {
  heading: ReactNode;
  body?: ReactNode;
  primary: { label: string; href: string; icon?: 'arrow' | 'arrow-up-right' | 'none' };
  secondary?: { label: string; href: string };
  showPhone?: boolean;
  theme?: 'coral' | 'cobalt' | 'ink';
}) {
  return (
    <section className={`cta-section cta-section--${theme}`} data-theme={theme} aria-labelledby="cta-heading">
      <BrandShapes className="cta-section__shapes" />
      <div className="container cta-section__inner">
        <h2 className="cta-section__title" id="cta-heading" data-reveal>
          {heading}
        </h2>
        {body && (
          <p className="cta-section__body" data-reveal>
            {body}
          </p>
        )}
        <div className="cta-section__actions" data-reveal>
          <Button href={primary.href} size="lg" icon={primary.icon} magnetic>
            {primary.label}
          </Button>
          {secondary && (
            <Button href={secondary.href} variant="link">
              {secondary.label}
            </Button>
          )}
          {showPhone && <PhoneActions className="cta-section__phone" />}
          {showPhone && site.email && (
            <a className="cta-section__email" href={`mailto:${site.email}`}>
              <Icon name="mail" size={18} />
              {site.email}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
