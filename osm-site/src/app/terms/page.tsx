import { LegalPage } from '@/components/pages/LegalPage';
import { pageMetadata } from '@/lib/metadata';

export const metadata = { ...pageMetadata({ title: 'Terms of Use', description: 'Terms of use for the One Stop Media website.', path: '/terms' }), robots: { index: false } };

export default function Page() {
  return <LegalPage kind="terms" />;
}
