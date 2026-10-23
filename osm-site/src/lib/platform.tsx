'use client';
/**
 * Platform bindings for the Next.js build. The single-file preview build swaps this
 * module for src/spa/platform.tsx (see scripts/build-preview.mjs), so components
 * never import next/* directly.
 */
import NextLink from 'next/link';
import { usePathname } from 'next/navigation';
import type { AnchorHTMLAttributes, ReactNode } from 'react';

export type AppLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & { href: string; children?: ReactNode };

export function AppLink({ href, children, ...rest }: AppLinkProps) {
  if (/^(https?:|mailto:|tel:|sms:)/.test(href)) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" {...rest}>
        {children}
      </a>
    );
  }
  return (
    <NextLink href={href} {...rest}>
      {children}
    </NextLink>
  );
}

export function useCurrentPath(): string {
  return usePathname() || '/';
}

export type InquiryPayload = {
  name: string;
  email: string;
  phone: string;
  company: string;
  services: string[];
  budget: string;
  timeline: string;
  message: string;
  consent: boolean;
  website: string; // honeypot
};

export type InquiryResult = { ok: true } | { ok: false; reason: 'not-configured' | 'invalid' | 'error'; message?: string };

export async function submitInquiry(payload: InquiryPayload): Promise<InquiryResult> {
  try {
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    if (res.ok) return { ok: true };
    const data = (await res.json().catch(() => ({}))) as { error?: string; message?: string };
    if (res.status === 503) return { ok: false, reason: 'not-configured', message: data.message };
    if (res.status === 400) return { ok: false, reason: 'invalid', message: data.message };
    return { ok: false, reason: 'error', message: data.message };
  } catch {
    return { ok: false, reason: 'error' };
  }
}

export const isPreviewBuild = false;
