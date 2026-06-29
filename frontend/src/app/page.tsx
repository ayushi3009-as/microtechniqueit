import { HeroSection } from '@/components/home/hero';
import { TrustedClients } from '@/components/home/trusted-clients';
import { ProductsShowcase } from '@/components/home/products-showcase';
import { AISolutions } from '@/components/home/ai-solutions';
import { IndustrySolutions } from '@/components/home/industry-solutions';
import { DashboardShowcase } from '@/components/home/dashboard-showcase';
import { WhyChooseUs } from '@/components/home/why-choose-us';
import { ProcessSection } from '@/components/home/process-section';
import { CaseStudiesPreview } from '@/components/home/case-studies-preview';
import { Testimonials } from '@/components/home/testimonials';
import { TechStack } from '@/components/home/tech-stack';
import { ContactSection } from '@/components/home/contact-section';
import { ContactCta } from '@/components/home/contact-cta';
import { FloatingWhatsApp } from '@/components/home/floating-whatsapp';
import { AIAssistantPopup } from '@/components/home/ai-assistant-popup';

export default function HomePage() {
  return (
    <>
      {/* 1. Hero - 100vh with AI network + 3D laptop */}
      <HeroSection />

      {/* 2. Trusted By - Client logos + Stats */}
      <TrustedClients />

      {/* 3. Our Products - 8 product cards */}
      <ProductsShowcase />

      {/* 4. AI Solutions - 6 premium AI cards */}
      <AISolutions />

      {/* 5. Industries We Serve - 8 industries */}
      <IndustrySolutions />

      {/* 6. Dashboard Showcase - Laptop mockups */}
      <DashboardShowcase />

      {/* 7. Why Choose Microtechnique IT */}
      <WhyChooseUs />

      {/* 8. Development Process - 7-step timeline */}
      <ProcessSection />

      {/* 9. Client Success Stories */}
      <CaseStudiesPreview />

      {/* 10. Testimonials */}
      <Testimonials />

      {/* 11. Technology Stack */}
      <TechStack />

      {/* 12. Contact Section - Form + Map */}
      <ContactSection />

      {/* CTA Banner */}
      <ContactCta />

      {/* Premium Features - Floating Elements */}
      <FloatingWhatsApp />
      <AIAssistantPopup />
    </>
  );
}
