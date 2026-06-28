import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { portfolioItems } from '@/data/portfolio';

export const metadata: Metadata = {
  title: 'Portfolio — Our Work & Projects',
  description: 'Explore Microtechnique IT portfolio of successful projects across healthcare, e-commerce, logistics, manufacturing, education, and more.',
};

export default function PortfolioPage() {
  return (
    <>
      <section className="relative pt-32 pb-16 overflow-hidden">
        
        <div className="container-custom relative z-10">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link><span>/</span><span className="text-foreground">Portfolio</span>
          </nav>
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20 mb-6">Our Work</span>
            <h1 className="text-foreground mb-6 font-heading">Projects That <span className="text-accent-gradient">Deliver Results</span></h1>
            <p className="text-lg text-muted-foreground leading-relaxed">A showcase of successful projects that have transformed businesses across industries.</p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            {portfolioItems.map((project) => (
              <div key={project.id} className="card rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 group">
                <div className="h-48 bg-pastel-blue flex items-center justify-center">
                  <span className="text-6xl font-heading font-bold text-accent-gradient opacity-20">{project.title.charAt(0)}</span>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary">{project.industry}</span>
                    <span className="text-xs text-muted-foreground">{project.timeline}</span>
                  </div>
                  <h2 className="text-xl font-heading font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{project.title}</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{project.description}</p>
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    {project.results.slice(0, 4).map((r) => (
                      <div key={r.metric} className="text-center p-2 rounded-lg bg-muted">
                        <div className="text-sm font-bold text-accent-gradient">{r.value}</div>
                        <div className="text-xs text-muted-foreground">{r.metric}</div>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.technologies.map((t) => (
                      <span key={t} className="px-2 py-0.5 rounded text-xs bg-muted border border-border text-muted-foreground">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="relative rounded-3xl overflow-hidden bg-pastel-blue border border-primary/10 p-12 text-center">
            <h2 className="text-3xl font-heading font-bold text-foreground mb-4">Have a Project in Mind?</h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">Let&apos;s discuss how we can bring your vision to life.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 font-semibold rounded-xl bg-primary text-white hover:opacity-90 transition-colors">Start Your Project <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>
    </>
  );
}
