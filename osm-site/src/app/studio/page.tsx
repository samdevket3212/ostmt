import { StudioPage } from '@/components/pages/StudioPage';
import { pageMetadata } from '@/lib/metadata';

export const metadata = pageMetadata({
  title: 'About Our Creative Studio',
  description: 'Learn about One Stop Media, a multidisciplinary design and creative technology studio based in Sheridan, Wyoming.',
  path: '/studio',
});

export default function Page() {
  return <StudioPage />;
}
