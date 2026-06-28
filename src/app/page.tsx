import { HeroSection } from '@/components/home/hero';
import { TrustedClients } from '@/components/home/trusted-clients';
import { StatsSection } from '@/components/home/stats-section';
import { ServicesBento } from '@/components/home/services-bento';
import { IndustrySolutions } from '@/components/home/industry-solutions';
import { ProductsShowcase } from '@/components/home/products-showcase';
import { ProcessSection } from '@/components/home/process-section';
import { TechStack } from '@/components/home/tech-stack';
import { CaseStudiesPreview } from '@/components/home/case-studies-preview';
import { Testimonials } from '@/components/home/testimonials';
import { AwardsSection } from '@/components/home/awards-section';
import { FaqSection } from '@/components/home/faq-section';
import { ContactCta } from '@/components/home/contact-cta';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustedClients />
      <StatsSection />
      <ServicesBento />
      <IndustrySolutions />
      <ProductsShowcase />
      <ProcessSection />
      <TechStack />
      <CaseStudiesPreview />
      <Testimonials />
      <AwardsSection />
      <FaqSection />
      <ContactCta />
    </>
  );
}
