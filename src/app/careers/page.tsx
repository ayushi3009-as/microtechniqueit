import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, MapPin, Clock, Briefcase } from 'lucide-react';
import { careers } from '@/data/careers';

export const metadata: Metadata = {
  title: 'Careers — Join Our Team',
  description: 'Explore career opportunities at Microtechnique IT. Join a team of passionate engineers, designers, and digital experts in Surat, Gujarat.',
};

export default function CareersPage() {
  return (
    <>
      <section className="relative pt-32 pb-16 overflow-hidden">
        
        <div className="container-custom relative z-10">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link><span>/</span><span className="text-foreground">Careers</span>
          </nav>
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20 mb-6">We&apos;re Hiring</span>
            <h1 className="text-foreground mb-6 font-heading">Build Your Career at <span className="text-accent-gradient">Microtechnique IT</span></h1>
            <p className="text-lg text-muted-foreground leading-relaxed">Join a team of passionate engineers, designers, and digital experts who are building the future of enterprise technology.</p>
          </div>
        </div>
      </section>

      {/* Why Join */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-foreground font-heading mb-8 text-center">Why Join <span className="text-accent-gradient">Us?</span></h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { title: 'Growth', desc: 'Clear career progression with learning budgets and mentorship programs.' },
              { title: 'Innovation', desc: 'Work with cutting-edge technologies and build products that matter.' },
              { title: 'Culture', desc: 'Collaborative, inclusive team with open communication and mutual respect.' },
              { title: 'Balance', desc: 'Flexible hours, team outings, and a focus on work-life balance.' },
            ].map((item) => (
              <div key={item.title} className="card rounded-2xl p-6 text-center">
                <h3 className="text-lg font-heading font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Open Positions */}
          <h2 className="text-foreground font-heading mb-8 text-center">Open <span className="text-accent-gradient">Positions</span></h2>
          <div className="space-y-4 max-w-4xl mx-auto">
            {careers.map((career) => (
              <div key={career.id} className="card rounded-2xl p-6 lg:p-8 hover:border-primary/30 transition-all duration-300">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-heading font-bold text-foreground mb-2">{career.title}</h3>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1"><Briefcase className="h-3.5 w-3.5" />{career.department}</span>
                      <span className="flex items-center gap-1"><MapPin className="h-3.5 w-3.5" />{career.location}</span>
                      <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" />{career.type}</span>
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-primary/10 text-primary">{career.experience}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-3">{career.description}</p>
                  </div>
                  <Link href={`/careers/${career.slug}`} className="shrink-0 inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-xl bg-primary text-primary-foreground hover:opacity-90 transition-opacity">
                    Apply Now <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* No matching position? */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="card rounded-3xl p-8 lg:p-12 text-center max-w-3xl mx-auto">
            <h2 className="text-2xl font-heading font-bold text-foreground mb-4">Don&apos;t See a Match?</h2>
            <p className="text-muted-foreground mb-6">We&apos;re always looking for talented people. Send us your resume and we&apos;ll keep you in mind for future openings.</p>
            <a href="mailto:hr@microtechniqueit.com" className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-xl bg-primary text-primary-foreground hover:opacity-90 transition-opacity">
              Send Resume <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
