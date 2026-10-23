import { ProcessPage } from '@/components/pages/ProcessPage';
import { pageMetadata } from '@/lib/metadata';

export const metadata = pageMetadata({
  title: 'Our Creative Process',
  description: 'How One Stop Media takes creative and technical projects from discovery and imagination through design, build and launch.',
  path: '/process',
});

export default function Page() {
  return <ProcessPage />;
}
