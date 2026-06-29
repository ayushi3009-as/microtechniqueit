import type { Metadata } from 'next';
import { Inter, DM_Sans, Space_Grotesk } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-dm-sans' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-heading' });
import { Providers } from '@/components/providers';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://microtechniqueit.com'),
  title: {
    default: 'Microtechnique IT — Enterprise Software Development & Digital Transformation',
    template: '%s | Microtechnique IT',
  },
  description:
    'Microtechnique IT is a leading software development company in Surat, India. We build enterprise software, web & mobile apps, ERP, CRM, AI solutions, and drive digital transformation for businesses worldwide.',
  keywords: [
    'software development company',
    'enterprise software',
    'web development',
    'mobile app development',
    'digital transformation',
    'ERP solutions',
    'CRM solutions',
    'cloud services',
    'AI solutions',
    'SEO services',
    'digital marketing',
    'Surat',
    'India',
    'Microtechnique IT',
  ],
  authors: [{ name: 'Microtechnique IT & Communication Solutions' }],
  creator: 'Microtechnique IT',
  publisher: 'Microtechnique IT & Communication Solutions',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://microtechniqueit.com',
    siteName: 'Microtechnique IT',
    title: 'Microtechnique IT — Enterprise Software Development & Digital Transformation',
    description:
      'Building premium software solutions that transform businesses. Custom software, web & mobile apps, ERP, CRM, cloud, AI, and digital marketing.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Microtechnique IT — Engineering Tomorrow\'s Digital Infrastructure',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Microtechnique IT — Enterprise Software & Digital Transformation',
    description:
      'Building premium software solutions that transform businesses. Custom software, web & mobile apps, ERP, CRM, cloud, AI.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://microtechniqueit.com',
  },
  icons: {
    icon: '/logo.jpeg',
    apple: '/logo.jpeg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${dmSans.variable} ${spaceGrotesk.variable}`}>
      <body className="min-h-screen bg-background text-foreground antialiased flex flex-col">
        <Providers>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
          {/* Organization Schema */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'Organization',
                name: 'Microtechnique IT & Communication Solutions',
                alternateName: 'Microtechnique IT',
                url: 'https://microtechniqueit.com',
                logo: 'https://microtechniqueit.com/logo.jpeg',
                foundingDate: '2020',
                contactPoint: {
                  '@type': 'ContactPoint',
                  telephone: '+91-6355997080',
                  contactType: 'customer service',
                  email: 'info@microtechniqueit.com',
                  areaServed: 'IN',
                  availableLanguage: ['English', 'Hindi'],
                },
                address: {
                  '@type': 'PostalAddress',
                  streetAddress: 'Office No. G-40, Star World Complex, Green City Road',
                  addressLocality: 'Surat',
                  addressRegion: 'Gujarat',
                  postalCode: '394510',
                  addressCountry: 'IN',
                },
                sameAs: [],
              }),
            }}
          />
        </Providers>
      </body>
    </html>
  );
}
