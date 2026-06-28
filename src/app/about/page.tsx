import type { Metadata } from 'next';
import AboutClient from './about-client';

export const metadata: Metadata = {
  title: 'About Us — Our Story & Mission',
  description:
    'Learn about Microtechnique IT, a leading software development company in Surat, India. Founded in 2020, we empower businesses with innovative digital solutions.',
  keywords: [
    'about microtechnique IT',
    'software company Surat',
    'IT company India',
    'digital transformation partner',
    'enterprise software company',
  ],
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Microtechnique IT",
            "url": "https://microtechniqueit.com",
            "logo": "https://microtechniqueit.com/logo.jpeg",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+91-6355997080",
              "contactType": "customer service"
            }
          }),
        }}
      />
      <AboutClient />
    </>
  );
}
