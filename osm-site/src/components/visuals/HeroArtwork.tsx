'use client';
import { useEffect, useRef } from 'react';

/*
 * Hero graphic: a coral arch, a glossy cobalt sphere, a cream block and a few
 * floating modules from the OSM shape system. Each layer moves a different
 * distance with the pointer, so the composition feels dimensional without WebGL.
 */
export function HeroArtwork() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
    let raf = 0;
    const onMove = (e: PointerEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        el.style.setProperty('--px', (e.clientX / window.innerWidth - 0.5).toFixed(3));
        el.style.setProperty('--py', (e.clientY / window.innerHeight - 0.5).toFixed(3));
      });
    };
    window.addEventListener('pointermove', onMove, { passive: true });
    return () => {
      window.removeEventListener('pointermove', onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="hero-art" ref={ref} role="img" aria-label="A sculptural composition: a coral arch, a glossy cobalt sphere, a cream block and small floating shapes.">
      <svg viewBox="0 0 640 620" className="hero-art__svg" aria-hidden="true" focusable="false">
        <defs>
          <linearGradient id="ha-arch" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#FF8A6E" />
            <stop offset="0.45" stopColor="#FF6545" />
            <stop offset="1" stopColor="#E2472A" />
          </linearGradient>
          <linearGradient id="ha-arch-side" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#C93A1E" />
            <stop offset="1" stopColor="#A42E17" />
          </linearGradient>
          <radialGradient id="ha-sphere" cx="34%" cy="30%" r="75%">
            <stop offset="0" stopColor="#D6DEFF" />
            <stop offset="0.18" stopColor="#7D95FF" />
            <stop offset="0.55" stopColor="#345BFF" />
            <stop offset="1" stopColor="#1A2C99" />
          </radialGradient>
          <radialGradient id="ha-small" cx="35%" cy="30%" r="75%">
            <stop offset="0" stopColor="#FFD3C7" />
            <stop offset="0.35" stopColor="#FF6545" />
            <stop offset="1" stopColor="#B83A1F" />
          </radialGradient>
          <linearGradient id="ha-pill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#6F88FF" />
            <stop offset="1" stopColor="#2342D6" />
          </linearGradient>
          <filter id="ha-shadow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="14" />
          </filter>
        </defs>

        <g className="hero-art__layer hero-art__layer--1">
          <ellipse cx="330" cy="560" rx="240" ry="26" fill="#17191D" opacity="0.14" filter="url(#ha-shadow)" />
          {/* arch: side (depth) then front face */}
          <path d="M150 548V330a180 180 0 0 1 360 0v218h-92V330a88 88 0 0 0-176 0v218z" fill="url(#ha-arch-side)" transform="translate(22 -14)" />
          <path d="M150 548V330a180 180 0 0 1 360 0v218h-92V330a88 88 0 0 0-176 0v218z" fill="url(#ha-arch)" />
          <path d="M160 330a170 170 0 0 1 120-162" fill="none" stroke="#fff" strokeOpacity="0.45" strokeWidth="6" strokeLinecap="round" />
        </g>

        <g className="hero-art__layer hero-art__layer--2">
          {/* cream block, isometric */}
          <g transform="translate(398 382)">
            <path d="M0 40l80-40 80 40-80 40z" fill="#FFFFFF" />
            <path d="M0 40v96l80 40V80z" fill="#EAE5DD" />
            <path d="M160 40v96l-80 40V80z" fill="#D8D2C6" />
          </g>
        </g>

        <g className="hero-art__layer hero-art__layer--3">
          <ellipse cx="330" cy="540" rx="96" ry="14" fill="#17191D" opacity="0.25" filter="url(#ha-shadow)" />
          <circle cx="330" cy="430" r="104" fill="url(#ha-sphere)" />
          <ellipse cx="296" cy="378" rx="34" ry="20" fill="#fff" opacity="0.55" transform="rotate(-28 296 378)" />
        </g>

        <g className="hero-art__layer hero-art__layer--4">
          <g className="hero-art__float hero-art__float--a">
            <circle cx="548" cy="150" r="34" fill="url(#ha-small)" />
          </g>
          <g className="hero-art__float hero-art__float--b">
            <rect x="60" y="160" width="132" height="44" rx="22" fill="url(#ha-pill)" transform="rotate(-24 126 182)" />
          </g>
          <g className="hero-art__float hero-art__float--c">
            <circle cx="96" cy="470" r="30" fill="none" stroke="#17191D" strokeWidth="12" />
          </g>
          <g className="hero-art__float hero-art__float--d">
            <path d="M520 60h44v44h-44z" fill="#17191D" transform="rotate(18 542 82)" />
          </g>
        </g>
      </svg>
    </div>
  );
}
