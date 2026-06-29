import type { Metadata } from 'next';
import Link from 'next/link';
import { technologyGroups } from '@/data/technologies';

export const metadata: Metadata = {
  title: 'Technologies — Our Tech Stack',
  description: 'Explore the modern technology stack used by Microtechnique IT: React, Next.js, .NET, Node.js, Flutter, AWS, Azure, Docker, and more.',
};

export default function TechnologiesPage() {
  return (
    <>
      <section className="relative pt-32 pb-16 overflow-hidden">
        
        <div className="container-custom relative z-10">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link><span>/</span><span className="text-foreground">Technologies</span>
          </nav>
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20 mb-6">Tech Stack</span>
            <h1 className="text-foreground mb-6 font-heading">Modern Stack, <span className="text-accent-gradient">Future-Ready</span></h1>
            <p className="text-lg text-muted-foreground leading-relaxed">We select the optimal technology for each project, ensuring performance, scalability, and maintainability.</p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="space-y-12">
            {technologyGroups.map((group) => (
              <div key={group.category}>
                <h2 className="text-xl font-heading font-bold text-foreground mb-6">{group.category}</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {group.technologies.map((tech) => (
                    <div key={tech.name} className="card rounded-xl p-5 text-center hover:border-primary/30 transition-all duration-300 hover:-translate-y-1">
                      <span className="text-sm font-semibold text-foreground">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="relative rounded-3xl overflow-hidden bg-pastel-blue border border-primary/10 p-12 text-center">
            <h2 className="text-3xl font-heading font-bold text-foreground mb-4">Need a Specific Technology?</h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">We continuously adopt new tools and frameworks. Let&apos;s discuss your tech requirements.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 font-semibold rounded-xl bg-primary text-white hover:opacity-90 transition-colors">Talk to Our Engineers</Link>
          </div>
        </div>
      </section>
    </>
  );
}
