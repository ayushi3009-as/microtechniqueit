import type { Metadata } from 'next';
import IndustriesClient from './industries-client';

export const metadata: Metadata = {
  title: 'Industries We Serve — Tailored Technology Solutions',
  description: 'Microtechnique IT serves healthcare, finance, education, e-commerce, logistics, retail, manufacturing, and more with industry-specific software solutions.',
};

export default function IndustriesPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://Microtechnique IT.com/',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Industries',
        item: 'https://Microtechnique IT.com/industries',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <IndustriesClient />
    </>
  );
}
