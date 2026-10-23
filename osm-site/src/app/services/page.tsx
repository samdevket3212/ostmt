import { ServicesPage } from '@/components/pages/ServicesPage';
import { pageMetadata } from '@/lib/metadata';

export const metadata = pageMetadata({
  title: 'Creative Design & Development Services',
  description: "Explore One Stop Media's services in 2D/3D design, game design, logo and brand identity, UI/UX, website development, software development, and digital marketing.",
  path: '/services',
});

export default function Page() {
  return <ServicesPage />;
}
