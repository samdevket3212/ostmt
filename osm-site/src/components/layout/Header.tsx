'use client';
import { useEffect, useState, type CSSProperties } from 'react';
import { navigation, site } from '@/content/site';
import { AppLink, useCurrentPath } from '@/lib/platform';
import { Button } from '../shared/Button';
import { Icon } from '../shared/Icon';
import { Logo } from '../shared/Logo';
import { PhoneActions } from '../shared/PhoneActions';

export function Header() {
  const path = useCurrentPath();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  useEffect(() => setOpen(false), [path]);
  useEffect(() => {
    document.documentElement.classList.toggle('menu-open', open);
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const isActive = (href: string) => path === href || path.startsWith(href + '/');

  return (
    <header className={'site-header' + (scrolled ? ' is-scrolled' : '') + (open ? ' is-open' : '')} data-theme="canvas">
      <div className="site-header__bar">
        <Logo href="/" className="site-header__logo" animate />
        <nav className="site-header__nav" aria-label="Main">
          {navigation.map((l) => (
            <AppLink key={l.href} href={l.href} className="site-header__link" aria-current={isActive(l.href) ? 'page' : undefined}>
              {l.label}
            </AppLink>
          ))}
        </nav>
        <Button href="/contact" className="site-header__cta">
          Let&apos;s Talk
        </Button>
        <button type="button" className="site-header__toggle" aria-expanded={open} aria-controls="mobile-nav" onClick={() => setOpen((o) => !o)}>
          <span className="gg-visually-hidden">{open ? 'Close menu' : 'Open menu'}</span>
          <span className="site-header__toggle-label" aria-hidden="true">
            {open ? 'Close' : 'Menu'}
          </span>
          <Icon name={open ? 'close' : 'menu'} size={20} />
        </button>
      </div>
      <div id="mobile-nav" className="mobile-nav" hidden={!open} data-theme="ink">
        <nav aria-label="Mobile">
          {navigation.map((l, i) => (
            <AppLink key={l.href} href={l.href} className="mobile-nav__link" style={{ '--i': i } as CSSProperties} aria-current={isActive(l.href) ? 'page' : undefined}>
              <span className="mobile-nav__num">0{i + 1}</span>
              {l.label}
            </AppLink>
          ))}
        </nav>
        <div className="mobile-nav__foot">
          <Button href="/contact" size="lg">
            Start a Project
          </Button>
          <PhoneActions variant="pill" />
          {site.email && (
            <a className="mobile-nav__email" href={`mailto:${site.email}`}>
              <Icon name="mail" size={18} /> {site.email}
            </a>
          )}
          <p>{site.location}</p>
        </div>
      </div>
    </header>
  );
}
