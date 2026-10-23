import type { MetadataRoute } from 'next';
import { projects } from '@/content/projects';
import { services } from '@/content/services';
import { site } from '@/content/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ['/', '/work', '/services', '/studio', '/process', '/contact', ...services.map((s) => `/services/${s.slug}`), ...projects.map((p) => `/work/${p.slug}`)];
  return paths.map((p) => ({ url: new URL(p, site.url).toString(), changeFrequency: 'monthly', priority: p === '/' ? 1 : p.split('/').length > 2 ? 0.7 : 0.8 }));
}
