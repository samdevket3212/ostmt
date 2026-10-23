import { notFound } from 'next/navigation';
import { ServicePage } from '@/components/pages/ServicePage';
import { getService, services } from '@/content/services';
import { site } from '@/content/site';
import { pageMetadata } from '@/lib/metadata';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}
export const dynamicParams = false;

export async function generateMetadata({ params }: Props) {
  const s = getService((await params).slug);
  if (!s) return {};
  return pageMetadata({ title: s.seoTitle, description: s.seoDescription, path: `/services/${s.slug}` });
}

export default async function Page({ params }: Props) {
  const s = getService((await params).slug);
  if (!s) notFound();
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: s.name,
    description: s.summary.join(' '),
    serviceType: s.name,
    provider: { '@type': 'ProfessionalService', name: site.name, legalName: site.legalName, url: site.url, telephone: site.phone.schema },
    areaServed: 'Worldwide',
  };
  return (
    <>
      <ServicePage service={s} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
