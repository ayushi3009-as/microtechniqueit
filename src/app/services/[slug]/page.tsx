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
      <div className="min-h-screen flex items-center justify-center bg-[#FAFAFC]">
        <div className="text-center">
          <h1 className="text-4xl font-heading font-bold text-[#0f172a] mb-4">Service Not Found</h1>
          <Link href="/services" className="text-[#4f46e5] hover:underline">View all services</Link>
        </div>
      </div>
    );
  }

  const relatedServices = services.filter((s) => s.slug !== slug).slice(0, 3);
  const ext = getServiceExtension(slug);

  return (
    <div className="bg-[#FAFAFC] min-h-screen text-[#0f172a] font-sans">
      {/* 1. HERO - Split Layout */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-white">
        {/* Subtle mesh background */}
        <div className="absolute inset-0 z-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(at 0% 0%, #4f46e5 0px, transparent 50%), radial-gradient(at 100% 100%, #3b82f6 0px, transparent 50%)' }} />
        
        <div className="max-w-[1320px] mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Content */}
            <div className="max-w-full lg:max-w-[650px]">
              <nav className="flex items-center gap-2 text-sm text-[#64748b] mb-8 font-medium">
                <Link href="/" className="hover:text-[#0f172a] transition-colors">Home</Link>
                <span>/</span>
                <Link href="/services" className="hover:text-[#0f172a] transition-colors">Services</Link>
                <span>/</span>
                <span className="text-[#0f172a]">{service.shortTitle}</span>
              </nav>

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold bg-[#eef2ff] text-[#4f46e5] mb-6">
                Enterprise Grade
              </div>
              
              <h1 className="text-[clamp(3rem,5vw,4.5rem)] font-extrabold leading-[1.1] text-[#0f172a] mb-6 tracking-tight">
                {service.title}
              </h1>
              
              <p className="text-xl text-[#475569] leading-relaxed mb-10 max-w-[600px]">
                {service.description}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link href="/contact" className="premium-btn-primary flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-white font-semibold text-lg transition-all hover:-translate-y-1">
                  Get Started <ArrowRight className="w-5 h-5" />
                </Link>
                <Link href="/portfolio" className="premium-btn-secondary flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white border border-[#e2e8f0] text-[#0f172a] font-semibold text-lg transition-all hover:bg-[#f8fafc] hover:-translate-y-1 shadow-sm">
                  View Portfolio
                </Link>
              </div>

              <div className="flex flex-wrap items-center gap-6 text-sm font-semibold text-[#64748b]">
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#10b981]" /> 200+ Projects</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#10b981]" /> 150+ Clients</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#10b981]" /> 99.9% SLA</div>
              </div>
            </div>

            {/* Right Illustration */}
            <div className="relative hidden lg:flex justify-end items-center h-[600px] w-full">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#eef2ff] to-[#f8fafc] rounded-full blur-[100px] opacity-60 z-0"></div>
              <div className="relative z-10 w-[90%] max-w-[500px] h-auto aspect-square illustration-hover">
                <img src={ext.heroIllustration} alt={service.title} className="w-full h-full object-contain drop-shadow-2xl" />
                
                {/* Floating UI Elements */}
                {ext.floatingLabels.map((label: string, i: number) => (
                  <div key={i} className={`absolute bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-[#f1f5f9] font-semibold text-[#0f172a] text-sm floating-element delay-` + (i*200)}
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
      <section className="py-12 bg-white border-b border-[#f1f5f9]">
        <div className="max-w-[1320px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-[#f1f5f9]">
            <div className="text-center px-4">
              <div className="text-4xl font-extrabold text-[#0f172a] mb-2">200+</div>
              <div className="text-[#64748b] font-medium uppercase tracking-wider text-sm">Projects</div>
            </div>
            <div className="text-center px-4">
              <div className="text-4xl font-extrabold text-[#0f172a] mb-2">150+</div>
              <div className="text-[#64748b] font-medium uppercase tracking-wider text-sm">Clients</div>
            </div>
            <div className="text-center px-4">
              <div className="text-4xl font-extrabold text-[#0f172a] mb-2">99.9%</div>
              <div className="text-[#64748b] font-medium uppercase tracking-wider text-sm">SLA Uptime</div>
            </div>
            <div className="text-center px-4">
              <div className="text-4xl font-extrabold text-[#0f172a] mb-2">5+</div>
              <div className="text-[#64748b] font-medium uppercase tracking-wider text-sm">Years Exp.</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHAT WE DELIVER (Features) */}
      <section className="py-20 lg:py-[140px] bg-[#FAFAFC]">
        <div className="max-w-[1320px] mx-auto px-6">
          <div className="text-center max-w-[700px] mx-auto mb-16">
            <h2 className="text-[clamp(2.5rem,4vw,3.5rem)] font-extrabold text-[#0f172a] mb-6 tracking-tight">What We Deliver</h2>
            <p className="text-xl text-[#64748b]">{service.longDescription}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.features.map((feature, i) => (
              <div key={i} className="premium-card bg-white p-8 rounded-[24px] border border-[#ECECEC] shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] hover:border-[#4f46e5]/30 group">
                <div className="w-14 h-14 rounded-2xl bg-[#f8fafc] flex items-center justify-center mb-6 group-hover:bg-[#eef2ff] transition-colors border border-[#f1f5f9]">
                  <Check className="w-6 h-6 text-[#4f46e5]" />
                </div>
                <h3 className="text-xl font-bold text-[#0f172a] mb-3 leading-snug">{feature}</h3>
                <p className="text-[#64748b] leading-relaxed">Enterprise-grade capabilities ensuring high performance and scalability.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE & TECH STACK */}
      <section className="py-20 lg:py-[140px] bg-white">
        <div className="max-w-[1320px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Left: Why Choose */}
            <div>
              <h2 className="text-[clamp(2.5rem,4vw,3.5rem)] font-extrabold text-[#0f172a] mb-8 tracking-tight">Why Choose Us</h2>
              <div className="space-y-6">
                {service.benefits.map((benefit, i) => (
                  <div key={i} className="flex gap-5 p-6 rounded-[24px] bg-[#FAFAFC] border border-[#f1f5f9] transition-all hover:bg-white hover:shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:border-[#4f46e5]/20">
                    <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center shrink-0 border border-[#f1f5f9]">
                      <Zap className="w-5 h-5 text-[#4f46e5]" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-[#0f172a] mb-2">{benefit}</h4>
                      <p className="text-[#64748b]">Strategic advantages designed to give your business a competitive edge.</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Tech Stack */}
            <div>
              <h2 className="text-[clamp(2.5rem,4vw,3.5rem)] font-extrabold text-[#0f172a] mb-8 tracking-tight">Technology Stack</h2>
              <div className="space-y-8">
                {ext.techStackGroups.map((group: any, i: number) => (
                  <div key={i} className="bg-[#FAFAFC] p-8 rounded-[24px] border border-[#f1f5f9]">
                    <h4 className="text-sm font-bold uppercase tracking-widest text-[#64748b] mb-6 flex items-center gap-2">
                      <Code2 className="w-4 h-4" /> {group.category}
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {group.items.map((tech: string, j: number) => (
                        <span key={j} className="px-4 py-2 bg-white rounded-xl text-sm font-bold text-[#0f172a] border border-[#e2e8f0] shadow-sm hover:border-[#4f46e5] hover:shadow-[0_4px_15px_rgba(79,70,229,0.15)] transition-all cursor-default">
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
      <section className="py-20 lg:py-[140px] bg-[#FAFAFC]">
        <div className="max-w-[1320px] mx-auto px-6">
          <div className="text-center max-w-[700px] mx-auto mb-20">
            <h2 className="text-[clamp(2.5rem,4vw,3.5rem)] font-extrabold text-[#0f172a] mb-6 tracking-tight">Our Process</h2>
            <p className="text-xl text-[#64748b]">A battle-tested methodology ensuring predictable delivery and enterprise quality.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative process-grid">
            {ext.process.slice(0,4).map((step: any, i: number) => (
              <div key={i} className="relative z-10 bg-white p-8 rounded-[24px] border border-[#ECECEC] shadow-sm hover:shadow-[0_15px_35px_rgba(0,0,0,0.06)] hover:-translate-y-2 transition-all">
                <div className="text-6xl font-extrabold text-[#f1f5f9] absolute top-4 right-6 -z-10">{step.id}</div>
                <h4 className="text-xl font-bold text-[#0f172a] mb-3">{step.title}</h4>
                <p className="text-[#64748b]">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. COMPARISON TABLE */}
      <section className="py-20 lg:py-[140px] bg-white">
        <div className="max-w-[1000px] mx-auto px-6">
          <h2 className="text-[clamp(2.5rem,4vw,3.5rem)] font-extrabold text-center text-[#0f172a] mb-16 tracking-tight">Why Choose Us vs Others</h2>
          
          <div className="bg-white rounded-[24px] border border-[#ECECEC] shadow-[0_20px_40px_rgba(0,0,0,0.03)] overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#FAFAFC] border-b border-[#ECECEC]">
                  <th className="p-6 text-[#64748b] font-semibold text-lg w-1/3">Feature</th>
                  <th className="p-6 text-[#4f46e5] font-bold text-xl w-1/3">Microtechnique</th>
                  <th className="p-6 text-[#94a3b8] font-semibold text-lg w-1/3">Standard Agencies</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#f1f5f9]">
                {ext.comparison.map((comp: any, i: number) => (
                  <tr key={i} className="hover:bg-[#FAFAFC]/50 transition-colors">
                    <td className="p-6 font-semibold text-[#0f172a]">{comp.feature}</td>
                    <td className="p-6 font-bold text-[#10b981] flex items-center gap-2"><Check className="w-5 h-5" /> {comp.us}</td>
                    <td className="p-6 text-[#64748b]">{comp.others}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 7. TESTIMONIAL & CLIENTS */}
      <section className="py-20 lg:py-[140px] bg-[#0f172a] text-white">
        <div className="max-w-[1320px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex gap-2 mb-8">
                {[1,2,3,4,5].map(star => <Star key={star} className="w-6 h-6 fill-[#fbbf24] text-[#fbbf24]" />)}
              </div>
              <h3 className="text-3xl lg:text-4xl font-bold leading-tight mb-10 text-[#f8fafc]">
                "{ext.testimonial.quote}"
              </h3>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full border-2 border-[#334155] bg-gradient-to-tr from-[#4f46e5] to-[#9333ea] flex items-center justify-center text-xl font-bold text-white shadow-lg">
                  {ext.testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-lg">{ext.testimonial.name}</div>
                  <div className="text-[#94a3b8]">{ext.testimonial.role}, {ext.testimonial.company}</div>
                </div>
              </div>
            </div>

            <div className="bg-[#1e293b] p-10 rounded-[32px] border border-[#334155]">
              <h4 className="text-center text-[#94a3b8] font-semibold tracking-widest uppercase mb-10 text-sm">Trusted by Industry Leaders</h4>
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
      <section className="py-20 lg:py-[140px] bg-white">
        <div className="max-w-[800px] mx-auto px-6">
          <h2 className="text-[clamp(2.5rem,4vw,3.5rem)] font-extrabold text-center text-[#0f172a] mb-16 tracking-tight">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {ext.faqs.map((faq: any, i: number) => (
              <details key={i} className="group bg-[#FAFAFC] rounded-[24px] border border-[#ECECEC] open:border-[#4f46e5]/30 transition-colors">
                <summary className="flex justify-between items-center font-bold text-lg text-[#0f172a] cursor-pointer list-none p-6 md:p-8">
                  {faq.q}
                  <span className="transition group-open:rotate-180">
                    <ChevronDown className="w-5 h-5 text-[#64748b]" />
                  </span>
                </summary>
                <div className="text-[#64748b] px-6 pb-6 md:px-8 md:pb-8 leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 9. RELATED SERVICES */}
      <section className="py-20 lg:py-[140px] bg-[#FAFAFC]">
        <div className="max-w-[1320px] mx-auto px-6">
          <h2 className="text-[clamp(2.5rem,4vw,3.5rem)] font-extrabold text-[#0f172a] mb-12 tracking-tight">Related Services</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedServices.map((s) => (
              <Link key={s.slug} href={'/services/' + s.slug} className="bg-white p-8 rounded-[24px] border border-[#ECECEC] shadow-sm hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] hover:-translate-y-2 hover:border-[#4f46e5]/30 transition-all group">
                <div className="w-14 h-14 rounded-2xl bg-[#f8fafc] flex items-center justify-center mb-6 border border-[#f1f5f9]">
                  <Monitor className="w-6 h-6 text-[#0f172a] group-hover:text-[#4f46e5] transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-[#0f172a] mb-3">{s.title}</h3>
                <p className="text-[#64748b] mb-6 line-clamp-2">{s.description}</p>
                <span className="inline-flex items-center gap-2 text-[#4f46e5] font-bold">Explore Service <ArrowRight className="w-4 h-4" /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 10. FINAL CTA */}
      <section className="py-20 lg:py-[140px] bg-white">
        <div className="max-w-[1320px] mx-auto px-6">
          <div className="relative rounded-[40px] overflow-hidden bg-[#0f172a] p-12 lg:p-20 text-center border border-[#1e293b] shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-[#4f46e5]/20 to-[#9333ea]/20"></div>
            <div className="relative z-10">
              <h2 className="text-[clamp(2.5rem,4vw,3.5rem)] font-extrabold text-white mb-6 tracking-tight">Ready to Build Your Next Project?</h2>
              <p className="text-xl text-[#94a3b8] max-w-[600px] mx-auto mb-10">Book a Free Consultation today and let's turn your vision into an enterprise-grade reality.</p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/contact" className="premium-btn-primary flex items-center justify-center gap-2 px-10 py-5 rounded-2xl text-white font-bold text-lg transition-all hover:-translate-y-1 shadow-[0_10px_20px_rgba(79,70,229,0.3)]">
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
