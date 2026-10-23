import { HomePage } from '@/components/pages/HomePage';
import { site } from '@/content/site';
import { pageMetadata } from '@/lib/metadata';

export const metadata = pageMetadata({
  title: 'One Stop Media | Creative Design & Digital Studio in Sheridan, WY',
  absoluteTitle: true,
  description: site.description,
  path: '/',
});

export default function Page() {
  return <HomePage />;
}
