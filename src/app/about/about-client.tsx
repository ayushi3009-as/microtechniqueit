'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
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
  CheckCircle2
} from 'lucide-react';

const values = [
  {
    icon: Lightbulb,
    title: 'Innovation First',
    description: 'We stay ahead of industry trends, leveraging cutting-edge technologies and best practices to deliver solutions that define the future.',
    size: 'large'
  },
  {
    icon: Shield,
    title: 'Quality & Reliability',
    description: 'Every line of code undergoes rigorous quality assurance. We don\'t just build software — we engineer dependable systems.',
    size: 'small'
  },
  {
    icon: Users,
    title: 'Client Partnership',
    description: 'We operate as an extension of your team, not just a vendor. Your success metrics become our success metrics.',
    size: 'small'
  },
  {
    icon: Zap,
    title: 'Agile Delivery',
    description: 'Our agile methodology ensures rapid iteration, transparent communication, and on-time delivery of every milestone.',
    size: 'small'
  },
  {
    icon: Heart,
    title: 'People-Centered',
    description: 'Great software is built by great people. We invest in our team\'s growth and foster a culture of continuous learning.',
    size: 'small'
  },
  {
    icon: Globe,
    title: 'Global Standards',
    description: 'While rooted in India, we build to international quality standards, serving clients across industries and geographies.',
    size: 'large'
  },
];

const timeline = [
  { year: '2020', title: 'Founded in Surat', description: 'Microtechnique IT was born with a vision to democratize enterprise technology.' },
  { year: '2021', title: 'First Enterprise Product', description: 'Launched Microtechnique Accounts — our flagship GST-compliant ERP solution.' },
  { year: '2022', title: 'Team & Service Expansion', description: 'Expanded to 30+ engineers and launched full-service digital marketing.' },
  { year: '2023', title: '100+ Active Clients', description: 'Launched Payroll Software and Billing & Inventory solutions.' },
  { year: '2024', title: 'AI & Automation', description: 'Integrated AI/OCR capabilities into our products and began AI consulting.' },
  { year: '2025', title: 'Global Growth', description: 'Reached 200+ successful project deliveries and 50+ team members.' },
];

const team = [
  {
    name: 'Mr. Garvit Dubey',
    role: 'Chief Technology Officer',
    bio: 'Leading technical vision across all product lines. Expertise in scalable system architecture.',
    tags: ['Architecture', 'Cloud', 'AI'],
    image: '/avatar-placeholder.png'
  },
  {
    name: 'Mrs. Varsha Pandey',
    role: 'Head of Human Resources',
    bio: 'Building and nurturing the team that powers our solutions. Oversees talent and culture.',
    tags: ['Talent', 'Culture', 'Operations'],
    image: '/avatar-placeholder.png'
  },
];

const stats = [
  { value: '200+', label: 'Projects Delivered' },
  { value: '150+', label: 'Happy Clients' },
  { value: '50+', label: 'Expert Engineers' },
  { value: '10+', label: 'Industry Verticals' },
  { value: '5+', label: 'Years Experience' },
  { value: '99.9%', label: 'Uptime SLA' },
];

const checklist = [
  'Enterprise-Grade Security',
  'Dedicated Engineering Team',
  'Transparent Pricing Model',
  'Agile Delivery Framework',
  'AI-Powered Solutions',
  'Long-Term Strategic Partnership'
];

export default function AboutClient() {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: scrollRef, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <div style={{ backgroundColor: '#ffffff', overflow: 'hidden' }}>
      
      {/* SECTION 1: HERO */}
      <section style={{ padding: '160px 0 100px 0', position: 'relative' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'radial-gradient(circle at 70% 30%, rgba(79, 70, 229, 0.05) 0%, rgba(255,255,255,0) 50%)', zIndex: 0 }} />
        <div className="container-custom" style={{ position: 'relative', zIndex: 1, maxWidth: '1320px', margin: '0 auto' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '64px' }}>
            <div style={{ flex: '1 1 500px' }}>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <span style={{ display: 'inline-block', padding: '8px 16px', borderRadius: '999px', backgroundColor: 'rgba(79, 70, 229, 0.1)', color: '#4f46e5', fontWeight: 600, fontSize: '14px', marginBottom: '24px' }}>Our Story</span>
                <h1 style={{ fontSize: '64px', fontWeight: 700, lineHeight: '1.1', color: '#0f172a', marginBottom: '24px', letterSpacing: '-0.02em' }}>
                  Engineering the <span style={{ background: 'linear-gradient(135deg, #4f46e5, #0ea5e9)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>future</span> of digital business.
                </h1>
                <p style={{ fontSize: '20px', lineHeight: '1.7', color: '#64748b', marginBottom: '40px', maxWidth: '600px' }}>
                  Founded in 2020, we empower organizations with enterprise-grade software, AI solutions, and digital transformation strategies that drive measurable outcomes.
                </p>
                <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '48px' }}>
                  <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', height: '56px', padding: '0 32px', backgroundColor: '#0f172a', color: '#ffffff', borderRadius: '14px', fontWeight: 600, fontSize: '16px', transition: 'all 0.2s', boxShadow: '0 4px 14px 0 rgba(0,0,0,0.1)' }}>
                    Start a Project
                  </Link>
                  <Link href="/portfolio" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', height: '56px', padding: '0 32px', backgroundColor: '#ffffff', color: '#0f172a', border: '1px solid #e2e8f0', borderRadius: '14px', fontWeight: 600, fontSize: '16px', transition: 'all 0.2s' }}>
                    View Our Work
                  </Link>
                </div>
                <div>
                  <p style={{ fontSize: '14px', color: '#94a3b8', marginBottom: '16px', fontWeight: 500 }}>TRUSTED BY INNOVATIVE COMPANIES</p>
                  <div style={{ display: 'flex', gap: '24px', opacity: 0.6, flexWrap: 'wrap' }}>
                    {/* Placeholder logos */}
                    <div style={{ width: '100px', height: '30px', backgroundColor: '#cbd5e1', borderRadius: '4px' }}></div>
                    <div style={{ width: '100px', height: '30px', backgroundColor: '#cbd5e1', borderRadius: '4px' }}></div>
                    <div style={{ width: '100px', height: '30px', backgroundColor: '#cbd5e1', borderRadius: '4px' }}></div>
                  </div>
                </div>
              </motion.div>
            </div>
            
            <div style={{ flex: '1 1 500px', position: 'relative', height: '600px' }}>
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} style={{ width: '100%', height: '100%', position: 'relative' }}>
                <Image src="/hero-abstract.png" alt="Abstract Innovation" fill style={{ objectFit: 'contain' }} priority />
                
                {/* Floating Achievement Cards */}
                <motion.div 
                  animate={{ y: [0, -10, 0] }} 
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  style={{ position: 'absolute', top: '20%', left: '-10%', padding: '24px', backgroundColor: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(12px)', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.5)', boxShadow: '0 10px 40px -10px rgba(0,0,0,0.08)', display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: '#eff6ff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#4f46e5' }}><Briefcase size={24} /></div>
                  <div>
                    <div style={{ fontSize: '24px', fontWeight: 800, color: '#0f172a', lineHeight: 1 }}>200+</div>
                    <div style={{ fontSize: '14px', color: '#64748b', fontWeight: 500 }}>Projects Delivered</div>
                  </div>
                </motion.div>

                <motion.div 
                  animate={{ y: [0, 10, 0] }} 
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  style={{ position: 'absolute', bottom: '25%', right: '-5%', padding: '24px', backgroundColor: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(12px)', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.5)', boxShadow: '0 10px 40px -10px rgba(0,0,0,0.08)', display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: '#f0fdf4', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#16a34a' }}><Shield size={24} /></div>
                  <div>
                    <div style={{ fontSize: '24px', fontWeight: 800, color: '#0f172a', lineHeight: 1 }}>99.9%</div>
                    <div style={{ fontSize: '14px', color: '#64748b', fontWeight: 500 }}>Uptime SLA</div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: MISSION & VISION */}
      <section style={{ padding: '140px 0', backgroundColor: '#f8fafc' }}>
        <div className="container-custom" style={{ maxWidth: '1320px', margin: '0 auto' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '64px' }}>
            
            {/* Mission Row */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ display: 'flex', flexWrap: 'wrap', gap: '64px', alignItems: 'center' }}>
              <div style={{ flex: '1 1 400px', padding: '64px', backgroundColor: '#ffffff', borderRadius: '24px', border: '1px solid #ececec', boxShadow: '0 4px 20px rgba(0,0,0,0.02)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                  <span style={{ fontSize: '64px', fontWeight: 800, color: '#e2e8f0', lineHeight: 1 }}>01</span>
                  <h2 style={{ fontSize: '48px', fontWeight: 700, color: '#0f172a', margin: 0 }}>Mission</h2>
                </div>
                <p style={{ fontSize: '20px', lineHeight: '1.7', color: '#64748b' }}>
                  To empower organizations with the tools necessary to streamline operations, enhance productivity, and drive sustainable growth. We believe technology should act as an enabler — not a barrier — to success. Every solution we build is designed to deliver tangible ROI and long-term competitive advantage.
                </p>
              </div>
              <div style={{ flex: '1 1 400px', display: 'flex', justifyContent: 'center' }}>
                <div style={{ width: '120px', height: '120px', borderRadius: '30px', background: 'linear-gradient(135deg, #4f46e5 0%, #0ea5e9 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 20px 40px -10px rgba(79,70,229,0.3)' }}>
                  <Target size={48} color="white" />
                </div>
              </div>
            </motion.div>

            {/* Vision Row */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ padding: '64px', backgroundColor: '#ffffff', borderRadius: '24px', border: '1px solid #ececec', boxShadow: '0 4px 20px rgba(0,0,0,0.02)', marginTop: '32px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                <span style={{ fontSize: '64px', fontWeight: 800, color: '#e2e8f0', lineHeight: 1 }}>02</span>
                <h2 style={{ fontSize: '48px', fontWeight: 700, color: '#0f172a', margin: 0 }}>Vision</h2>
              </div>
              <p style={{ fontSize: '20px', lineHeight: '1.7', color: '#64748b', maxWidth: '900px' }}>
                To become India's most trusted technology partner for businesses of all sizes, known for engineering excellence, innovative thinking, and transformational impact. We envision a future where every business — from startups to enterprises — has access to world-class software solutions.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* SECTION 3: COMPANY STATS */}
      <section style={{ padding: '140px 0', backgroundColor: '#0f172a', color: '#ffffff' }}>
        <div className="container-custom" style={{ maxWidth: '1320px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h2 style={{ fontSize: '48px', fontWeight: 700, marginBottom: '24px', color: '#ffffff' }}>Impact in <span style={{ color: '#38bdf8' }}>Numbers</span></h2>
            <p style={{ fontSize: '20px', color: '#94a3b8', maxWidth: '600px', margin: '0 auto' }}>We measure our success by the scale of our impact and the reliability of our systems.</p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '32px' }}>
            {stats.map((stat, idx) => (
              <motion.div 
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.05)' }}
                style={{ padding: '40px 24px', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.1)', textAlign: 'center', transition: 'background-color 0.3s' }}
              >
                <div style={{ fontSize: '48px', fontWeight: 800, marginBottom: '8px', background: 'linear-gradient(135deg, #ffffff, #94a3b8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  {stat.value}
                </div>
                <div style={{ fontSize: '16px', color: '#94a3b8', fontWeight: 500 }}>{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: VALUES (BENTO GRID) */}
      <section style={{ padding: '140px 0' }}>
        <style dangerouslySetInnerHTML={{__html: `
          .values-bento {
            display: grid;
            grid-template-columns: 1fr;
            gap: 24px;
          }
          .bento-card {
            padding: 40px;
            background-color: #ffffff;
            border-radius: 20px;
            border: 1px solid #ececec;
            display: flex;
            flex-direction: column;
            transition: all 0.3s;
          }
          @media (min-width: 768px) {
            .values-bento {
              grid-template-columns: repeat(2, 1fr);
            }
            .bento-wide-tablet {
              grid-column: span 2;
            }
          }
          @media (min-width: 1024px) {
            .values-bento {
              grid-template-columns: repeat(3, 1fr);
              grid-auto-rows: minmax(250px, auto);
            }
            .bento-large {
              grid-column: span 2;
              grid-row: span 2;
            }
            .bento-tall {
              grid-row: span 2;
            }
            .bento-wide {
              grid-column: span 2;
            }
            .bento-normal {
              grid-column: span 1;
              grid-row: span 1;
            }
          }
        `}} />
        <div className="container-custom" style={{ maxWidth: '1320px', margin: '0 auto' }}>
          <div style={{ marginBottom: '80px' }}>
            <h2 style={{ fontSize: '48px', fontWeight: 700, color: '#0f172a', marginBottom: '24px' }}>Principles that <span style={{ background: 'linear-gradient(135deg, #4f46e5, #0ea5e9)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>guide us</span></h2>
            <p style={{ fontSize: '20px', color: '#64748b', maxWidth: '600px' }}>These core values shape every decision we make, every solution we build, and every relationship we nurture.</p>
          </div>

          <div className="values-bento">
            {values.map((val, idx) => {
              // Assign bento classes based on index to create a unique layout
              let bentoClass = 'bento-normal';
              if (idx === 0) bentoClass = 'bento-large bento-wide-tablet';
              else if (idx === 1) bentoClass = 'bento-tall';
              else if (idx === 5) bentoClass = 'bento-wide bento-wide-tablet';
              
              return (
                <motion.div
                  key={val.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ y: -5, boxShadow: '0 20px 40px -10px rgba(0,0,0,0.1)' }}
                  className={`bento-card ${bentoClass}`}
                >
                  <div style={{ width: '56px', height: '56px', borderRadius: '16px', backgroundColor: '#eff6ff', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px', color: '#4f46e5' }}>
                    <val.icon size={28} />
                  </div>
                  <h3 style={{ fontSize: '24px', fontWeight: 700, color: '#0f172a', marginBottom: '16px' }}>{val.title}</h3>
                  <p style={{ fontSize: '18px', lineHeight: '1.7', color: '#64748b' }}>{val.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 5: JOURNEY / TIMELINE */}
      <section style={{ padding: '140px 0', backgroundColor: '#f8fafc', overflow: 'hidden' }}>
        <div className="container-custom" style={{ maxWidth: '1320px', margin: '0 auto' }}>
          <div style={{ marginBottom: '80px' }}>
            <h2 style={{ fontSize: '48px', fontWeight: 700, color: '#0f172a', marginBottom: '24px' }}>Milestones that <span style={{ color: '#4f46e5' }}>define us</span></h2>
          </div>

          {/* Desktop Horizontal Scroll */}
          <div style={{ display: 'flex', gap: '32px', overflowX: 'auto', paddingBottom: '40px', scrollbarWidth: 'none' }}>
            {timeline.map((item, idx) => (
              <motion.div 
                key={item.year}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                style={{ minWidth: '350px', position: 'relative' }}
              >
                {/* Connecting Line */}
                {idx < timeline.length - 1 && <div style={{ position: 'absolute', top: '24px', left: '48px', right: '-32px', height: '2px', backgroundColor: '#e2e8f0', zIndex: 0 }} />}
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', position: 'relative', zIndex: 1 }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '24px', backgroundColor: '#4f46e5', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', fontWeight: 700, border: '4px solid #f8fafc' }}>
                    <Calendar size={20} />
                  </div>
                  <div style={{ padding: '32px', backgroundColor: '#ffffff', borderRadius: '20px', border: '1px solid #ececec', boxShadow: '0 4px 10px rgba(0,0,0,0.02)' }}>
                    <div style={{ fontSize: '32px', fontWeight: 800, color: '#e2e8f0', marginBottom: '8px' }}>{item.year}</div>
                    <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#0f172a', marginBottom: '12px' }}>{item.title}</h3>
                    <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#64748b' }}>{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: TEAM */}
      <section style={{ padding: '140px 0' }}>
        <div className="container-custom" style={{ maxWidth: '1320px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h2 style={{ fontSize: '48px', fontWeight: 700, color: '#0f172a', marginBottom: '24px' }}>Meet Our <span style={{ background: 'linear-gradient(135deg, #4f46e5, #0ea5e9)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Team</span></h2>
            <p style={{ fontSize: '20px', color: '#64748b', maxWidth: '600px', margin: '0 auto' }}>The leadership driving engineering excellence and culture.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '40px' }}>
            {team.map((member, idx) => (
              <motion.div 
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover="hover"
                style={{ borderRadius: '20px', border: '1px solid #ececec', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
              >
                <div style={{ position: 'relative', height: '350px', overflow: 'hidden', backgroundColor: '#f1f5f9' }}>
                  <motion.div variants={{ hover: { scale: 1.05 } }} transition={{ duration: 0.4 }} style={{ width: '100%', height: '100%', position: 'relative' }}>
                    <Image src={member.image} alt={member.name} fill style={{ objectFit: 'cover' }} />
                  </motion.div>
                  <motion.div variants={{ hover: { opacity: 1 } }} initial={{ opacity: 0 }} transition={{ duration: 0.3 }} style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(to top, rgba(15,23,42,0.8), transparent)' }} />
                  <motion.a href="#" variants={{ hover: { y: 0, opacity: 1 } }} initial={{ y: 20, opacity: 0 }} transition={{ duration: 0.3 }} style={{ position: 'absolute', bottom: '24px', right: '24px', width: '48px', height: '48px', backgroundColor: '#ffffff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0077b5', textDecoration: 'none', fontWeight: 800, fontSize: '18px' }}>
                    IN
                  </motion.a>
                </div>
                <div style={{ padding: '32px', backgroundColor: '#ffffff', flex: 1 }}>
                  <h3 style={{ fontSize: '24px', fontWeight: 700, color: '#0f172a', marginBottom: '4px' }}>{member.name}</h3>
                  <div style={{ fontSize: '16px', color: '#4f46e5', fontWeight: 600, marginBottom: '16px' }}>{member.role}</div>
                  <p style={{ fontSize: '16px', lineHeight: '1.7', color: '#64748b', marginBottom: '24px' }}>{member.bio}</p>
                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                    {member.tags.map(tag => (
                      <span key={tag} style={{ padding: '6px 12px', backgroundColor: '#f1f5f9', borderRadius: '8px', fontSize: '12px', fontWeight: 600, color: '#475569' }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: WHY CHOOSE US */}
      <section style={{ padding: '140px 0', backgroundColor: '#f8fafc' }}>
        <div className="container-custom" style={{ maxWidth: '1320px', margin: '0 auto' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '64px', alignItems: 'center' }}>
            
            <div style={{ flex: '1 1 500px' }}>
              <h2 style={{ fontSize: '48px', fontWeight: 700, color: '#0f172a', marginBottom: '24px' }}>Your Technology Partner, <span style={{ color: '#4f46e5' }}>Not Just a Vendor</span></h2>
              <p style={{ fontSize: '20px', lineHeight: '1.7', color: '#64748b', marginBottom: '40px' }}>
                We engineer solutions that align directly with your business goals. Our commitment to quality, security, and agile delivery sets us apart from traditional service providers.
              </p>
              <Link href="/services" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', height: '56px', padding: '0 32px', backgroundColor: '#0f172a', color: '#ffffff', borderRadius: '14px', fontWeight: 600, fontSize: '16px', transition: 'all 0.2s', boxShadow: '0 4px 14px 0 rgba(0,0,0,0.1)' }}>
                Explore Our Services
              </Link>
            </div>

            <div style={{ flex: '1 1 500px' }}>
              <div style={{ padding: '48px', backgroundColor: '#ffffff', borderRadius: '24px', border: '1px solid #ececec', boxShadow: '0 10px 40px -10px rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column', gap: '24px' }}>
                {checklist.map((item, idx) => (
                  <motion.div 
                    key={item}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    style={{ display: 'flex', alignItems: 'center', gap: '16px' }}
                  >
                    <CheckCircle2 size={24} color="#4f46e5" />
                    <span style={{ fontSize: '20px', fontWeight: 600, color: '#0f172a' }}>{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 8: CTA */}
      <section style={{ padding: '140px 0' }}>
        <div className="container-custom" style={{ maxWidth: '1320px', margin: '0 auto' }}>
          <div style={{ position: 'relative', padding: '100px 40px', backgroundColor: '#0f172a', borderRadius: '24px', textAlign: 'center', overflow: 'hidden' }}>
            {/* Floating Shapes */}
            <div style={{ position: 'absolute', top: '-20%', left: '-10%', width: '400px', height: '400px', backgroundColor: '#4f46e5', borderRadius: '50%', filter: 'blur(100px)', opacity: 0.3 }} />
            <div style={{ position: 'absolute', bottom: '-20%', right: '-10%', width: '400px', height: '400px', backgroundColor: '#0ea5e9', borderRadius: '50%', filter: 'blur(100px)', opacity: 0.2 }} />
            
            <div style={{ position: 'relative', zIndex: 1, maxWidth: '800px', margin: '0 auto' }}>
              <h2 style={{ fontSize: '56px', fontWeight: 700, color: '#ffffff', marginBottom: '24px', lineHeight: 1.1 }}>Let's Build Something <span style={{ color: '#38bdf8' }}>Exceptional.</span></h2>
              <p style={{ fontSize: '20px', color: '#94a3b8', marginBottom: '48px' }}>From MVPs to enterprise platforms, we help ambitious businesses scale faster.</p>
              
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
                <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', height: '56px', padding: '0 32px', backgroundColor: '#ffffff', color: '#0f172a', borderRadius: '14px', fontWeight: 600, fontSize: '16px', transition: 'all 0.2s', boxShadow: '0 4px 14px 0 rgba(255,255,255,0.1)' }}>
                  Book Strategy Call
                </Link>
                <Link href="/portfolio" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', height: '56px', padding: '0 32px', backgroundColor: 'transparent', color: '#ffffff', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '14px', fontWeight: 600, fontSize: '16px', transition: 'all 0.2s' }}>
                  View Portfolio
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
