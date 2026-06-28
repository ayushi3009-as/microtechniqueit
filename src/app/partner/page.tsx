import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Handshake, TrendingUp, Users, Shield, Star, Zap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Partner Program — Grow Together',
  description: 'Join the Microtechnique IT Partner Program. Resellers, consultants, and agencies can unlock new revenue streams with our enterprise software solutions.',
};

const benefits = [
  { icon: TrendingUp, title: 'Revenue Share', description: 'Earn competitive commissions on every referral and resale of our products.' },
  { icon: Users, title: 'Co-Marketing', description: 'Access co-branded marketing materials, case studies, and joint campaigns.' },
  { icon: Shield, title: 'Priority Support', description: 'Dedicated partner support channel with faster response times.' },
  { icon: Star, title: 'Training & Certification', description: 'Free training and certification programs on all our products.' },
  { icon: Zap, title: 'Early Access', description: 'Be the first to access new features, products, and beta programs.' },
  { icon: Handshake, title: 'Dedicated Manager', description: 'A dedicated partner success manager to help you grow.' },
];

const partnerTypes = [
  { title: 'Referral Partner', description: 'Refer clients to Microtechnique IT and earn commissions on successful deals. Perfect for consultants and freelancers.', cta: 'Become a Referral Partner' },
  { title: 'Reseller Partner', description: 'Resell our products under your brand or alongside your services. Ideal for IT companies and system integrators.', cta: 'Become a Reseller' },
  { title: 'Technology Partner', description: 'Integrate your technology with our platform. Build extensions, plugins, or complementary solutions.', cta: 'Become a Tech Partner' },
];

export default function PartnerPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 overflow-hidden">
        
        <div className="container-custom relative z-10">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link><span>/</span><span className="text-foreground">Partner Program</span>
          </nav>
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20 mb-6"><Handshake className="h-3.5 w-3.5" />Partner Program</span>
            <h1 className="text-foreground mb-6 font-heading">Grow Your Business <span className="text-accent-gradient">With Us</span></h1>
            <p className="text-lg text-muted-foreground leading-relaxed">Join our partner ecosystem and unlock new revenue streams while delivering world-class technology solutions to your clients.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 mt-8 text-base font-semibold rounded-xl bg-primary text-primary-foreground hover:opacity-90 transition-opacity">
              Apply to Partner Program <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-foreground font-heading mb-8 text-center">Partner <span className="text-accent-gradient">Benefits</span></h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b) => (
              <div key={b.title} className="card rounded-2xl p-6 hover:border-primary/30 transition-all duration-300">
                <div className="p-3 rounded-xl bg-primary/10 text-primary w-fit mb-4"><b.icon className="h-5 w-5" /></div>
                <h3 className="text-base font-heading font-bold text-foreground mb-2">{b.title}</h3>
                <p className="text-sm text-muted-foreground">{b.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-foreground font-heading mb-8 text-center">Partnership <span className="text-accent-gradient">Types</span></h2>
          <div className="grid lg:grid-cols-3 gap-6">
            {partnerTypes.map((p) => (
              <div key={p.title} className="card rounded-2xl p-8 flex flex-col">
                <h3 className="text-xl font-heading font-bold text-foreground mb-3">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-grow">{p.description}</p>
                <Link href="/contact" className="inline-flex items-center gap-2 text-sm text-primary font-medium hover:gap-3 transition-all">
                  {p.cta} <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="relative rounded-3xl overflow-hidden bg-pastel-blue border border-primary/10 p-12 text-center">
            <h2 className="text-3xl font-heading font-bold text-foreground mb-4">Ready to Partner?</h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">Apply now and a partner manager will reach out within 48 hours.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 font-semibold rounded-xl bg-primary text-white hover:opacity-90 transition-colors">Apply Now <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>
    </>
  );
}
