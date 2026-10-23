import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';
import { SiteShell } from '@/components/layout/SiteShell';
import { site } from '@/content/site';
import '@/styles/tokens.css';
import '@/styles/globals.css';

const display = localFont({
  src: './fonts/Archivo-Variable.woff2',
  variable: '--ff-display',
  weight: '100 900',
  display: 'swap',
  declarations: [{ prop: 'font-stretch', value: '62% 125%' }],
});
const sans = localFont({ src: './fonts/DMSans-Variable.woff2', variable: '--ff-sans', weight: '100 1000', display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: 'One Stop Media | Creative Design & Digital Studio in Sheridan, WY', template: '%s | One Stop Media' },
  description: site.description,
  applicationName: site.name,
  openGraph: { type: 'website', siteName: site.name, locale: 'en_US' },
  twitter: { card: 'summary_large_image' },
};

export const viewport: Viewport = { themeColor: '#F7F4EE', colorScheme: 'light', viewportFit: 'cover' };

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: site.name,
  legalName: site.legalName,
  description: site.description,
  url: site.url,
  slogan: site.tagline,
  telephone: site.phone.schema,
  address: { '@type': 'PostalAddress', addressLocality: site.locality, addressRegion: site.region, addressCountry: site.country },
  knowsAbout: ['2D and 3D design', 'Game design', 'Logo and brand identity', 'UI/UX design', 'Web development', 'Software development', 'Digital marketing'],
  ...(site.email ? { email: site.email } : {}),
  ...(site.social.length ? { sameAs: site.social.map((s) => s.href) } : {}),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body>
        <SiteShell>{children}</SiteShell>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />
      </body>
    </html>
  );
}
