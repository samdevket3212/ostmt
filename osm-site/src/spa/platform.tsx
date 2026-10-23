/**
 * Platform bindings for the single-file preview. Routes are encoded as bare hash
 * tokens ("work.orbit", "contact.game-design") because the hosting frame only
 * passes plain #anchors through.
 */
import { useSyncExternalStore, type AnchorHTMLAttributes, type MouseEvent, type ReactNode } from 'react';
import type { InquiryPayload, InquiryResult } from '../lib/platform';
export type { InquiryPayload, InquiryResult } from '../lib/platform';

export type AppLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & { href: string; children?: ReactNode };

/** "/work/orbit" -> "work.orbit"; "/contact?service=game-design" -> "contact.game-design"; "/" -> "home" */
export function pathToToken(href: string): string {
  const [path, query = ''] = href.split('#')[0].split('?');
  const segs = path.split('/').filter(Boolean);
  const service = new URLSearchParams(query).get('service');
  if (service) segs.push(service);
  return segs.length ? segs.join('.') : 'home';
}
export function tokenToPath(token: string): { path: string; service?: string } {
  if (!token || token === 'home') return { path: '/' };
  const segs = token.split('.');
  if (segs[0] === 'contact' && segs[1]) return { path: '/contact', service: segs[1] };
  return { path: '/' + segs.join('/') };
}

let current = typeof location !== 'undefined' ? location.hash.slice(1) : '';
const listeners = new Set<() => void>();
function emit() {
  listeners.forEach((l) => l());
}
if (typeof document !== 'undefined') {
  document.addEventListener('click', (e) => {
    const a = (e.target as HTMLElement | null)?.closest?.('a[href^="#"]') as HTMLAnchorElement | null;
    if (!a || e.defaultPrevented) return;
    const id = a.getAttribute('href')!.slice(1);
    const el = id ? document.getElementById(id) : null;
    if (!el) return;
    e.preventDefault();
    el.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
    if (el.tabIndex < 0 || el.id === 'main') el.focus({ preventScroll: true });
  });
}
if (typeof window !== 'undefined') {
  window.addEventListener('hashchange', () => {
    const next = location.hash.slice(1);
    if (next !== current && !document.getElementById(next)) {
      current = next;
      emit();
    }
  });
}
const scrollBehavior = (): ScrollBehavior => (matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth');

export function navigate(href: string) {
  const token = pathToToken(href);
  const frag = href.split('#')[1];
  if (token === current || (token === 'home' && current === '')) {
    if (frag) document.getElementById(frag)?.scrollIntoView({ behavior: scrollBehavior() });
    else window.scrollTo({ top: 0, behavior: scrollBehavior() });
    return;
  }
  current = token;
  try {
    history.pushState(null, '', '#' + token);
  } catch {
    /* frames may refuse; in-page state still moves */
  }
  emit();
  if (frag) setTimeout(() => document.getElementById(frag)?.scrollIntoView({ behavior: scrollBehavior() }), 80);
}
if (typeof window !== 'undefined') {
  window.addEventListener('popstate', () => {
    current = location.hash.slice(1);
    emit();
  });
}
export function useRouteToken(): string {
  return useSyncExternalStore(
    (cb) => {
      listeners.add(cb);
      return () => listeners.delete(cb);
    },
    () => current,
  );
}

export function AppLink({ href, children, onClick, ...rest }: AppLinkProps) {
  if (/^(https?:|mailto:|tel:|sms:)/.test(href)) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" {...rest}>
        {children}
      </a>
    );
  }
  if (href.startsWith('#')) {
    return (
      <a href={href} onClick={onClick} {...rest}>
        {children}
      </a>
    );
  }
  const token = pathToToken(href);
  return (
    <a
      href={'#' + token}
      onClick={(e: MouseEvent<HTMLAnchorElement>) => {
        onClick?.(e);
        if (e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
        e.preventDefault();
        navigate(href);
      }}
      {...rest}
    >
      {children}
    </a>
  );
}

export function useCurrentPath(): string {
  return tokenToPath(useRouteToken()).path;
}

export async function submitInquiry(_payload: InquiryPayload): Promise<InquiryResult> {
  await new Promise((r) => setTimeout(r, 700));
  return { ok: false, reason: 'not-configured' };
}

export const isPreviewBuild = true;
