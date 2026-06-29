import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Check, ChevronDown, Monitor, Code2, Database, Cloud, Zap, Shield, Star, CheckCircle2 } from 'lucide-react';
import { services } from '@/data/services';
import { getServiceExtension } from '@/data/service-extensions';

export async function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return { title: 'Service Not Found' };
  return {
    title: service.seo.metaTitle,
    description: service.seo.metaDescription,
    keywords: [...service.seo.keywords],
  };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-section-alt">
        <div className="text-center">
          <h1 className="text-4xl font-heading font-bold text-foreground mb-4">Service Not Found</h1>
          <Link href="/services" className="text-primary hover:underline">View all services</Link>
        </div>
      </div>
    );
  }

  const relatedServices = services.filter((s) => s.slug !== slug).slice(0, 3);
  const ext = getServiceExtension(slug);

  return (
    <div className="bg-section-alt min-h-screen text-foreground font-sans">
      {/* 1. HERO - Split Layout */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-background">
        {/* Subtle mesh background */}
        <div className="absolute inset-0 z-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(at 0% 0%, #4f46e5 0px, transparent 50%), radial-gradient(at 100% 100%, #3b82f6 0px, transparent 50%)' }} />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Content */}
            <div className="max-w-full lg:max-w-2xl">
              <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8 font-medium">
                <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
                <span>/</span>
                <Link href="/services" className="hover:text-foreground transition-colors">Services</Link>
                <span>/</span>
                <span className="text-foreground">{service.shortTitle}</span>
              </nav>

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold bg-primary/10 text-primary mb-6">
                Enterprise Grade
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl break-words font-extrabold leading-[1.1] text-foreground mb-6 tracking-tight text-balance">
                {service.title}
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed mb-10 max-w-xl">
                {service.description}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link href="/contact" className="premium-btn-primary flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-white font-semibold text-lg transition-all hover:-translate-y-1">
                  Get Started <ArrowRight className="w-5 h-5" />
                </Link>
                <Link href="/portfolio" className="premium-btn-secondary flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-background border border-border text-foreground font-semibold text-lg transition-all hover:bg-section-alt hover:-translate-y-1 shadow-sm">
                  View Portfolio
                </Link>
              </div>

              <div className="flex flex-wrap items-center gap-6 text-sm font-semibold text-muted-foreground">
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#10b981]" /> 200+ Projects</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#10b981]" /> 150+ Clients</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#10b981]" /> 99.9% SLA</div>
              </div>
            </div>

            {/* Right Illustration */}
            <div className="relative hidden lg:flex justify-end items-center h-[600px] w-full">
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-50 to-slate-50 rounded-full blur-3xl opacity-60 z-0"></div>
              <div className="relative z-10 w-[90%] max-w-lg h-auto aspect-square illustration-hover">
                <img src={ext.heroIllustration} alt={service.title} className="w-full h-full object-contain drop-shadow-2xl" />
                
                {/* Floating UI Elements */}
                {ext.floatingLabels.map((label: string, i: number) => (
                  <div key={i} className={`absolute bg-background/90 backdrop-blur-md px-4 py-2 rounded-xl shadow-xl border border-border font-semibold text-foreground text-sm floating-element delay-` + (i*200)}
                       style={{ 
                         top: (20 + i*25) + '%', 
                         [i%2===0 ? 'left' : 'right']: i%2===0 ? '-10%' : '-5%' 
                       }}>
                    ✨ {label}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SUCCESS METRICS */}
      <section className="py-12 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-border">
            <div className="text-center px-4">
              <div className="text-4xl font-extrabold text-foreground mb-2">200+</div>
              <div className="text-muted-foreground font-medium uppercase tracking-wider text-sm">Projects</div>
            </div>
            <div className="text-center px-4">
              <div className="text-4xl font-extrabold text-foreground mb-2">150+</div>
              <div className="text-muted-foreground font-medium uppercase tracking-wider text-sm">Clients</div>
            </div>
            <div className="text-center px-4">
              <div className="text-4xl font-extrabold text-foreground mb-2">99.9%</div>
              <div className="text-muted-foreground font-medium uppercase tracking-wider text-sm">SLA Uptime</div>
            </div>
            <div className="text-center px-4">
              <div className="text-4xl font-extrabold text-foreground mb-2">5+</div>
              <div className="text-muted-foreground font-medium uppercase tracking-wider text-sm">Years Exp.</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHAT WE DELIVER (Features) */}
      <section className="py-20 lg:py-32 bg-section-alt">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-6 tracking-tight">What We Deliver</h2>
            <p className="text-xl text-muted-foreground">{service.longDescription}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.features.map((feature, i) => (
              <div key={i} className="premium-card bg-background p-8 rounded-3xl border border-border shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-indigo-600/30 group">
                <div className="w-14 h-14 rounded-2xl bg-section-alt flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors border border-border">
                  <Check className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 leading-snug">{feature}</h3>
                <p className="text-muted-foreground leading-relaxed">Enterprise-grade capabilities ensuring high performance and scalability.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE & TECH STACK */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Left: Why Choose */}
            <div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-8 tracking-tight">Why Choose Us</h2>
              <div className="space-y-6">
                {service.benefits.map((benefit, i) => (
                  <div key={i} className="flex gap-5 p-6 rounded-3xl bg-section-alt border border-border transition-all hover:bg-background hover:shadow-lg hover:border-indigo-600/20">
                    <div className="w-12 h-12 rounded-xl bg-background shadow-sm flex items-center justify-center shrink-0 border border-border">
                      <Zap className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-foreground mb-2">{benefit}</h4>
                      <p className="text-muted-foreground">Strategic advantages designed to give your business a competitive edge.</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Tech Stack */}
            <div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-8 tracking-tight">Technology Stack</h2>
              <div className="space-y-8">
                {ext.techStackGroups.map((group: any, i: number) => (
                  <div key={i} className="bg-section-alt p-8 rounded-3xl border border-border">
                    <h4 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-6 flex items-center gap-2">
                      <Code2 className="w-4 h-4" /> {group.category}
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {group.items.map((tech: string, j: number) => (
                        <span key={j} className="px-4 py-2 bg-background rounded-xl text-sm font-bold text-foreground border border-border shadow-sm hover:border-indigo-600 hover:shadow-indigo-500/20 shadow-lg transition-all cursor-default">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PROCESS TIMELINE */}
      <section className="py-20 lg:py-32 bg-section-alt">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-6 tracking-tight">Our Process</h2>
            <p className="text-xl text-muted-foreground">A battle-tested methodology ensuring predictable delivery and enterprise quality.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative process-grid">
            {ext.process.slice(0,4).map((step: any, i: number) => (
              <div key={i} className="relative z-10 bg-background p-8 rounded-3xl border border-border shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all">
                <div className="text-6xl font-extrabold text-muted absolute top-4 right-6 -z-10">{step.id}</div>
                <h4 className="text-xl font-bold text-foreground mb-3">{step.title}</h4>
                <p className="text-muted-foreground">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. COMPARISON TABLE */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center text-foreground mb-16 tracking-tight">Why Choose Us vs Others</h2>
          
          <div className="bg-background rounded-3xl border border-border shadow-2xl overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-section-alt border-b border-border">
                  <th className="p-6 text-muted-foreground font-semibold text-lg w-1/3">Feature</th>
                  <th className="p-6 text-primary font-bold text-xl w-1/3">Microtechnique</th>
                  <th className="p-6 text-muted-foreground font-semibold text-lg w-1/3">Standard Agencies</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {ext.comparison.map((comp: any, i: number) => (
                  <tr key={i} className="hover:bg-section-alt/50 transition-colors">
                    <td className="p-6 font-semibold text-foreground">{comp.feature}</td>
                    <td className="p-6 font-bold text-[#10b981] flex items-center gap-2"><Check className="w-5 h-5" /> {comp.us}</td>
                    <td className="p-6 text-muted-foreground">{comp.others}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 7. TESTIMONIAL & CLIENTS */}
      <section className="py-20 lg:py-32 bg-section-alt text-foreground">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex gap-2 mb-8">
                {[1,2,3,4,5].map(star => <Star key={star} className="w-6 h-6 fill-amber-400 text-amber-400" />)}
              </div>
              <h3 className="text-3xl lg:text-4xl font-bold leading-tight mb-10 text-foreground">
                "{ext.testimonial.quote}"
              </h3>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full border-2 border-border bg-gradient-to-tr from-indigo-600 to-purple-600 flex items-center justify-center text-xl font-bold text-white shadow-lg">
                  {ext.testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-lg">{ext.testimonial.name}</div>
                  <div className="text-muted-foreground">{ext.testimonial.role}, {ext.testimonial.company}</div>
                </div>
              </div>
            </div>

            <div className="bg-card p-10 rounded-3xl border border-border">
              <h4 className="text-center text-muted-foreground font-semibold tracking-widest uppercase mb-10 text-sm">Trusted by Industry Leaders</h4>
              <div className="grid grid-cols-2 gap-8 items-center justify-items-center opacity-60">
                {/* Generic Logos */}
                <div className="text-2xl font-bold tracking-tighter">ACME Corp</div>
                <div className="text-2xl font-bold tracking-tighter">GlobalTech</div>
                <div className="text-2xl font-bold tracking-tighter">Nexus Labs</div>
                <div className="text-2xl font-bold tracking-tighter">Vertex Inc</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FAQ */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center text-foreground mb-16 tracking-tight">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {ext.faqs.map((faq: any, i: number) => (
              <details key={i} className="group bg-section-alt rounded-3xl border border-border open:border-indigo-600/30 transition-colors">
                <summary className="flex justify-between items-center font-bold text-lg text-foreground cursor-pointer list-none p-6 md:p-8">
                  {faq.q}
                  <span className="transition group-open:rotate-180">
                    <ChevronDown className="w-5 h-5 text-muted-foreground" />
                  </span>
                </summary>
                <div className="text-muted-foreground px-6 pb-6 md:px-8 md:pb-8 leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 9. RELATED SERVICES */}
      <section className="py-20 lg:py-32 bg-section-alt">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-12 tracking-tight">Related Services</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedServices.map((s) => (
              <Link key={s.slug} href={'/services/' + s.slug} className="bg-background p-8 rounded-3xl border border-border shadow-sm hover:shadow-2xl hover:-translate-y-2 hover:border-indigo-600/30 transition-all group">
                <div className="w-14 h-14 rounded-2xl bg-section-alt flex items-center justify-center mb-6 border border-border">
                  <Monitor className="w-6 h-6 text-foreground group-hover:text-primary transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{s.title}</h3>
                <p className="text-muted-foreground mb-6 line-clamp-2">{s.description}</p>
                <span className="inline-flex items-center gap-2 text-primary font-bold">Explore Service <ArrowRight className="w-4 h-4" /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 10. FINAL CTA */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-blue-700 to-indigo-950 p-12 lg:p-20 text-center border border-white/10 shadow-[0_20px_50px_rgba(29,78,216,0.3)]" style={{ padding: '5rem' }}>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.1)_0%,transparent_70%)]"></div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">Ready to Build Your Next Project?</h2>
              <p className="text-xl text-white/80 max-w-xl mx-auto mb-10">Book a Free Consultation today and let's turn your vision into an enterprise-grade reality.</p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/contact" className="premium-btn-primary flex items-center justify-center gap-2 px-10 py-5 rounded-2xl text-white font-bold text-lg transition-all hover:-translate-y-1 shadow-indigo-500/30 shadow-lg">
                  Schedule Consultation <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CSS Styles for Micro-animations and Gradients */}
      <style dangerouslySetInnerHTML={{__html: `
        .premium-btn-primary {
          background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
        }
        .illustration-hover img {
          transition: transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        .illustration-hover:hover img {
          transform: scale(1.05) rotate(2deg);
        }
        .floating-element {
          animation: float 6s ease-in-out infinite;
        }
        .delay-200 { animation-delay: 0.2s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-600 { animation-delay: 0.6s; }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        details > summary::-webkit-details-marker {
          display: none;
        }
      `}} />
    </div>
  );
}
