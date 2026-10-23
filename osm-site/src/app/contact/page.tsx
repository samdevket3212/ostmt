import { ContactPage } from '@/components/pages/ContactPage';
import { pageMetadata } from '@/lib/metadata';

export const metadata = pageMetadata({
  title: 'Contact One Stop Media | Start a Creative Project',
  absoluteTitle: true,
  description: 'Get in touch with One Stop Media LLC in Sheridan, Wyoming. Call +1 (307) 200-4559 or send an inquiry about branding, design, development, or digital marketing.',
  path: '/contact',
});

type Props = { searchParams: Promise<{ service?: string | string[] }> };

export default async function Page({ searchParams }: Props) {
  const s = (await searchParams).service;
  return <ContactPage serviceSlug={typeof s === 'string' ? s : undefined} />;
}
