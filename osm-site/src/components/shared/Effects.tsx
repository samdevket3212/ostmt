'use client';
import { useEffect } from 'react';
import { useCurrentPath } from '@/lib/platform';

/**
 * Scroll reveals, the project-card cursor and magnetic CTAs. Everything is a
 * progressive enhancement: content is visible at rest, and nothing runs under
 * prefers-reduced-motion or on touch devices where it would not help.
 */
export function Effects() {
  const path = useCurrentPath();

  // Scroll reveals (only for elements below the first screen).
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce || !('IntersectionObserver' in window)) return;
    const els = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]:not(.is-revealed)'));
    const vh = window.innerHeight;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const el = e.target as HTMLElement;
          el.classList.add('is-revealed');
          el.classList.remove('is-pending');
          io.unobserve(el);
        });
      },
      { rootMargin: '0px 0px -8% 0px' },
    );
    els.forEach((el) => {
      if (el.getBoundingClientRect().top < vh * 0.95) {
        el.classList.add('is-revealed');
        return;
      }
      const siblings = el.parentElement ? Array.from(el.parentElement.children).filter((c) => c.hasAttribute('data-reveal')) : [];
      el.style.setProperty('--reveal-delay', `${Math.min(Math.max(0, siblings.indexOf(el)), 5) * 90}ms`);
      el.classList.add('is-pending');
      io.observe(el);
    });
    return () => io.disconnect();
  }, [path]);

  // Circular arrow cursor on project cards (desktop pointer only).
  useEffect(() => {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
    const dot = document.createElement('div');
    dot.className = 'osm-cursor';
    dot.setAttribute('aria-hidden', 'true');
    dot.innerHTML =
      '<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17L17 7M8 7h9v9"/></svg>';
    document.body.appendChild(dot);
    let raf = 0;
    const move = (e: PointerEvent) => {
      const t = (e.target as HTMLElement | null)?.closest?.('[data-cursor]');
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        dot.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
        dot.classList.toggle('is-on', !!t);
      });
    };
    const leave = () => dot.classList.remove('is-on');
    window.addEventListener('pointermove', move, { passive: true });
    document.addEventListener('pointerleave', leave);
    return () => {
      window.removeEventListener('pointermove', move);
      document.removeEventListener('pointerleave', leave);
      dot.remove();
    };
  }, []);

  // Magnetic CTAs: a gentle pull toward the pointer.
  useEffect(() => {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const onMove = (e: PointerEvent) => {
      const el = (e.target as HTMLElement | null)?.closest?.('[data-magnetic]') as HTMLElement | null;
      document.querySelectorAll<HTMLElement>('[data-magnetic].is-magnet').forEach((m) => {
        if (m !== el) {
          m.classList.remove('is-magnet');
          m.style.translate = '';
        }
      });
      if (!el) return;
      const r = el.getBoundingClientRect();
      const x = (e.clientX - (r.left + r.width / 2)) * 0.18;
      const y = (e.clientY - (r.top + r.height / 2)) * 0.28;
      el.classList.add('is-magnet');
      el.style.translate = `${x.toFixed(1)}px ${y.toFixed(1)}px`;
    };
    window.addEventListener('pointermove', onMove, { passive: true });
    return () => window.removeEventListener('pointermove', onMove);
  }, [path]);

  return null;
}
