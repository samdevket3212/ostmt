import { WorkPage } from '@/components/pages/WorkPage';
import { pageMetadata } from '@/lib/metadata';

export const metadata = pageMetadata({
  title: 'Our Work & Creative Explorations',
  description: 'Explore creative projects, design concepts, brand identities, game interfaces, and digital experiences from One Stop Media.',
  path: '/work',
});

export default function Page() {
  return <WorkPage />;
}
