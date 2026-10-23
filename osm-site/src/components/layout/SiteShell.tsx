import type { ReactNode } from 'react';
import { Effects } from '../shared/Effects';
import { Footer } from './Footer';
import { Header } from './Header';

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main" tabIndex={-1}>
        {children}
      </main>
      <Footer />
      <Effects />
    </>
  );
}
