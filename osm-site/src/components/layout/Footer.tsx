import { footerExplore, site } from '@/content/site';
import { services } from '@/content/services';
import { AppLink } from '@/lib/platform';
import { Button } from '../shared/Button';
import { Monogram } from '../shared/Logo';
import { PhoneActions } from '../shared/PhoneActions';

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer" data-theme="ink">
      <div className="container">
        <div className="site-footer__top">
          <div className="site-footer__statement">
            <p className="site-footer__headline">
              <span className="kinetic-line">Something good</span> <span className="kinetic-line">starts here.</span>
            </p>
            <p className="site-footer__sub">Let&apos;s make it remarkable.</p>
            <Button href="/contact" size="lg" magnetic>
              Start a Project
            </Button>
          </div>
          <div className="site-footer__cols">
            <nav aria-label="Explore">
              <h2 className="site-footer__h">Explore</h2>
              <ul>
                {footerExplore.map((l) => (
                  <li key={l.href}>
                    <AppLink href={l.href}>{l.label}</AppLink>
                  </li>
                ))}
              </ul>
            </nav>
            <nav aria-label="Services">
              <h2 className="site-footer__h">Services</h2>
              <ul>
                {services.map((s) => (
                  <li key={s.slug}>
                    <AppLink href={`/services/${s.slug}`}>{s.slug === 'ui-ux-design' ? 'UI/UX' : s.shortName}</AppLink>
                  </li>
                ))}
              </ul>
            </nav>
            <div>
              <h2 className="site-footer__h">Contact</h2>
              <address>
                <span>{site.legalName}</span>
                <span>{site.location}</span>
                <PhoneActions variant="compact" />
                {site.email && <a href={`mailto:${site.email}`}>{site.email}</a>}
              </address>
            </div>
          </div>
        </div>
        <div className="site-footer__mark" aria-hidden="true">
          <Monogram height={120} />
        </div>
        <div className="site-footer__bottom">
          <p>
            © {year} {site.legalName}. All rights reserved.
          </p>
          <ul>
            <li>
              <AppLink href="/privacy">Privacy Policy</AppLink>
            </li>
            <li>
              <AppLink href="/terms">Terms of Use</AppLink>
            </li>
          </ul>
          <p className="site-footer__closing">{site.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
