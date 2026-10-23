import type { Metadata } from 'next';
import { site } from '@/content/site';

export function pageMetadata({ title, description, path, absoluteTitle = false }: { title: string; description: string; path: string; absoluteTitle?: boolean }): Metadata {
  const fullTitle = absoluteTitle ? title : `${title} | ${site.name}`;
  return {
    title: { absolute: fullTitle },
    description,
    alternates: { canonical: path },
    openGraph: { type: 'website', url: path, siteName: site.name, title: fullTitle, description, locale: 'en_US' },
    twitter: { card: 'summary_large_image', title: fullTitle, description },
  };
}
