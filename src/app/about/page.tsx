import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Target,
  Eye,
  Lightbulb,
  Award,
  Shield,
  Users,
  ArrowRight,
  Briefcase,
  Calendar,
  MapPin,
  Zap,
  Heart,
  Code2,
  TrendingUp,
  Globe,
} from 'lucide-react';

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

const values = [
  {
    icon: Lightbulb,
    title: 'Innovation First',
    description: 'We stay ahead of industry trends, leveraging cutting-edge technologies and best practices to deliver solutions that define the future.',
  },
  {
    icon: Shield,
    title: 'Quality & Reliability',
    description: 'Every line of code undergoes rigorous quality assurance. We don\'t just build software — we engineer dependable systems.',
  },
  {
    icon: Users,
    title: 'Client Partnership',
    description: 'We operate as an extension of your team, not just a vendor. Your success metrics become our success metrics.',
  },
  {
    icon: Zap,
    title: 'Agile Delivery',
    description: 'Our agile methodology ensures rapid iteration, transparent communication, and on-time delivery of every milestone.',
  },
  {
    icon: Heart,
    title: 'People-Centered',
    description: 'Great software is built by great people. We invest in our team\'s growth and foster a culture of continuous learning.',
  },
  {
    icon: Globe,
    title: 'Global Standards',
    description: 'While rooted in India, we build to international quality standards, serving clients across industries and geographies.',
  },
];

const timeline = [
  {
    year: '2020',
    title: 'Founded in Surat',
    description: 'Microtechnique IT was born with a vision to democratize enterprise technology for Indian businesses.',
  },
  {
    year: '2021',
    title: 'First Enterprise Product',
    description: 'Launched Microtechnique Accounts — our flagship GST-compliant ERP solution for Indian businesses.',
  },
  {
    year: '2022',
    title: 'Team & Service Expansion',
    description: 'Expanded to 30+ engineers and launched full-service digital marketing and cloud consulting.',
  },
  {
    year: '2023',
    title: 'Product Suite Growth',
    description: 'Launched Payroll Software and Billing & Inventory solutions. Crossed 100+ active client deployments.',
  },
  {
    year: '2024',
    title: 'AI & Automation',
    description: 'Integrated AI/OCR capabilities into our products. Began offering AI consulting and custom automation.',
  },
  {
    year: '2025',
    title: '200+ Projects Delivered',
    description: 'Reached 200+ successful project deliveries, expanded to 50+ team members and 10+ industry verticals.',
  },
];

const team = [
  {
    name: 'Mr. Garvit Dubey',
    role: 'Chief Technology Officer',
    bio: 'Leading the technical vision and architecture across all product lines and client engagements. Garvit brings deep expertise in enterprise software design and scalable system architecture.',
  },
  {
    name: 'Mrs. Varsha Pandey',
    role: 'Head of Human Resources',
    bio: 'Building and nurturing the team that powers Microtechnique IT. Varsha oversees talent acquisition, culture development, and employee growth programs.',
  },
];

const stats = [
  { value: '200+', label: 'Projects Delivered', icon: Briefcase },
  { value: '150+', label: 'Happy Clients', icon: Users },
  { value: '5+', label: 'Years of Innovation', icon: Calendar },
  { value: '50+', label: 'Expert Engineers', icon: Code2 },
  { value: '10+', label: 'Industry Verticals', icon: TrendingUp },
  { value: '99.9%', label: 'Uptime SLA', icon: Shield },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden" style={{ paddingTop: '128px', paddingBottom: '80px', overflow: 'hidden', position: 'relative' }}>
        
        <div className="container-custom relative z-10">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8" aria-label="Breadcrumb" style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '32px' }}>
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <span className="text-foreground">About</span>
          </nav>
          <div className="max-w-4xl" style={{ maxWidth: '896px' }}>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20 mb-6" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 16px', borderRadius: '9999px', marginBottom: '24px', border: '1px solid rgba(79, 70, 229, 0.2)' }}>
              Our Story
            </span>
            <h1 className="text-foreground mb-6 font-heading" style={{ marginBottom: '24px' }}>
              Empowering Businesses Through{' '}
              <span className="text-accent-gradient">Digital Excellence</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
              Founded in 2020, Microtechnique IT & Communication Solutions is a full-service
              technology company headquartered in Surat, Gujarat. We partner with organizations
              across industries to design, build, and scale software solutions that drive
              measurable business outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
            <div className="card rounded-2xl p-8 lg:p-10" style={{ padding: '40px', backgroundColor: '#ffffff', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
              <div className="p-3 rounded-xl bg-primary/10 text-primary w-fit mb-6">
                <Target className="h-6 w-6" />
              </div>
              <h2 className="text-2xl font-heading font-bold text-foreground mb-4">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                To empower organizations with the tools necessary to streamline operations,
                enhance productivity, and drive sustainable growth. We believe technology should
                act as an enabler — not a barrier — to success. Every solution we build is
                designed to deliver tangible ROI and long-term competitive advantage.
              </p>
            </div>
            <div className="card rounded-2xl p-8 lg:p-10" style={{ padding: '40px', backgroundColor: '#ffffff', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
              <div className="p-3 rounded-xl bg-accent/10 text-accent w-fit mb-6">
                <Eye className="h-6 w-6" />
              </div>
              <h2 className="text-2xl font-heading font-bold text-foreground mb-4">Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed">
                To become India&apos;s most trusted technology partner for businesses of all sizes,
                known for engineering excellence, innovative thinking, and transformational impact.
                We envision a future where every business — from startups to enterprises — has
                access to world-class software solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '24px' }}>
            {stats.map((stat) => (
              <div key={stat.label} className="text-center p-6 rounded-2xl border border-border hover:border-primary/30 transition-colors" style={{ padding: '24px', textAlign: 'center', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
                <stat.icon className="h-5 w-5 text-primary mx-auto mb-3" />
                <div className="text-2xl font-bold font-heading text-accent-gradient mb-1">{stat.value}</div>
                <div className="text-xs text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20 mb-6">
              Our Values
            </span>
            <h2 className="text-foreground font-heading mb-4">
              Principles That <span className="text-accent-gradient">Guide Us</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These core values shape every decision we make, every solution we build,
              and every relationship we nurture.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            {values.map((value) => (
              <div
                key={value.title}
                className="card rounded-2xl p-8 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
                style={{ padding: '32px', backgroundColor: '#ffffff', borderRadius: '16px', border: '1px solid #e2e8f0' }}
              >
                <div className="p-3 rounded-xl bg-primary/10 text-primary w-fit mb-5">
                  <value.icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-heading font-bold text-foreground mb-3">{value.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20 mb-6">
              Our Journey
            </span>
            <h2 className="text-foreground font-heading mb-4">
              Milestones That <span className="text-accent-gradient">Define Us</span>
            </h2>
          </div>
          <div className="max-w-3xl mx-auto">
            {timeline.map((item, index) => (
              <div key={item.year} className="relative flex gap-6 pb-12 last:pb-0">
                {/* Line */}
                {index < timeline.length - 1 && (
                  <div className="absolute left-[19px] top-10 bottom-0 w-px bg-border" />
                )}
                {/* Dot */}
                <div className="relative shrink-0">
                  <div className="h-10 w-10 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center">
                    <Calendar className="h-4 w-4 text-primary" />
                  </div>
                </div>
                {/* Content */}
                <div className="pt-1">
                  <span className="text-sm font-mono text-primary font-semibold">{item.year}</span>
                  <h3 className="text-lg font-heading font-bold text-foreground mt-1 mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20 mb-6">
              Leadership
            </span>
            <h2 className="text-foreground font-heading mb-4">
              Meet Our <span className="text-accent-gradient">Team</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '32px', maxWidth: '896px', margin: '0 auto' }}>
            {team.map((member) => (
              <div key={member.name} className="card rounded-2xl p-8 text-center" style={{ padding: '32px', textAlign: 'center', backgroundColor: '#ffffff', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
                <div className="h-20 w-20 rounded-full bg-gradient-to-br from-primary to-accent mx-auto mb-5 flex items-center justify-center">
                  <span className="text-2xl font-bold text-foreground">
                    {member.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                  </span>
                </div>
                <h3 className="text-lg font-heading font-bold text-foreground mb-1">{member.name}</h3>
                <p className="text-sm text-primary font-medium mb-4">{member.role}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
              </div>
            ))}
            {/* Join Us Card */}
            <div className="card rounded-2xl p-8 text-center border-dashed border-2 border-border flex flex-col items-center justify-center" style={{ padding: '32px', textAlign: 'center', border: '2px dashed #e2e8f0', borderRadius: '16px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <div className="h-20 w-20 rounded-full bg-muted mx-auto mb-5 flex items-center justify-center">
                <Users className="h-8 w-8 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-heading font-bold text-foreground mb-2">Join Our Team</h3>
              <p className="text-sm text-muted-foreground mb-5">
                We&apos;re always looking for talented engineers and creative minds.
              </p>
              <Link
                href="/careers"
                className="inline-flex items-center gap-2 text-primary text-sm font-medium hover:gap-3 transition-all"
              >
                View Open Positions <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="card rounded-3xl p-8 lg:p-12" style={{ padding: '48px', backgroundColor: '#ffffff', borderRadius: '24px', border: '1px solid #e2e8f0' }}>
            <div className="grid lg:grid-cols-2 gap-12 items-center" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '48px', alignItems: 'center' }}>
              <div>
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20 mb-6">
                  Why Choose Us
                </span>
                <h2 className="text-foreground font-heading mb-6">
                  Your Technology Partner, <span className="text-accent-gradient">Not Just a Vendor</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  We don&apos;t just write code — we engineer solutions that align with your
                  business goals. Our multi-industry expertise, commitment to quality, and
                  agile delivery methodology set us apart from traditional IT service providers.
                </p>
                <div className="flex flex-col sm:flex-row gap-4" style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold rounded-xl bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
                    style={{ padding: '12px 24px', borderRadius: '12px', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
                  >
                    Start a Project
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/portfolio"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold rounded-xl border border-border text-foreground hover:bg-muted transition-colors"
                    style={{ padding: '12px 24px', borderRadius: '12px', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
                  >
                    View Our Work
                  </Link>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '16px' }}>
                {[
                  { icon: Award, label: 'GST Certified', value: 'Compliant' },
                  { icon: Shield, label: 'Udyam Registered', value: 'MSME' },
                  { icon: MapPin, label: 'Based in', value: 'Surat, India' },
                  { icon: Calendar, label: 'Established', value: 'Since 2020' },
                ].map((item) => (
                  <div key={item.label} className="rounded-xl border border-border p-5 text-center" style={{ padding: '20px', textAlign: 'center', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                    <item.icon className="h-5 w-5 text-primary mx-auto mb-2" />
                    <div className="text-sm font-semibold text-foreground">{item.value}</div>
                    <div className="text-xs text-muted-foreground mt-1">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="relative rounded-3xl overflow-hidden bg-pastel-blue border border-primary/10 p-12 lg:p-16 text-center" style={{ padding: '64px', textAlign: 'center', backgroundColor: '#eff6ff', borderRadius: '24px', border: '1px solid rgba(79, 70, 229, 0.1)' }}>
            <div className="relative z-10">
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-4">
                Ready to Start Your Project?
              </h2>
              <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8">
                Let&apos;s discuss how we can help transform your business with technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '16px' }}>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold rounded-xl bg-primary text-white hover:opacity-90 transition-colors"
                  style={{ padding: '16px 32px', borderRadius: '12px', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
                >
                  Book a Consultation
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold rounded-xl border-2 border-border text-foreground hover:bg-muted transition-colors"
                  style={{ padding: '16px 32px', borderRadius: '12px', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
                >
                  Explore Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
