'use client';

const steps = [
  { num: '01', title: 'Discovery & Strategy', desc: 'We analyze your requirements, target audience, and business goals to form a solid technical strategy.' },
  { num: '02', title: 'UI/UX Design', desc: 'Our designers create intuitive, user-centric interfaces that align with your brand identity.' },
  { num: '03', title: 'Development', desc: 'Agile sprints with regular updates, building scalable and secure code architectures.' },
  { num: '04', title: 'Testing & QA', desc: 'Rigorous manual and automated testing to ensure a flawless, bug-free launch.' },
  { num: '05', title: 'Deployment & Support', desc: 'Smooth deployment to production and ongoing maintenance to keep your software running perfectly.' },
];

export function ProcessSection() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="badge mb-4 mx-auto w-fit">How We Work</div>
          <h2 className="text-foreground mb-4">Our Proven <span className="text-accent-gradient">Process</span></h2>
          <p className="text-muted-foreground max-w-xl mx-auto">A transparent, agile methodology ensuring quality delivery on time, every time.</p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />
          
          <div className="space-y-12">
            {steps.map((step, idx) => (
              <div key={step.num} className={`relative flex flex-col md:flex-row items-center gap-8 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                {/* Center dot */}
                <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-pastel-blue border-4 border-white items-center justify-center shadow-sm z-10">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
                
                <div className="md:w-1/2" />
                <div className="md:w-1/2 w-full card p-6 text-center md:text-left">
                  <span className="text-sm font-bold text-primary mb-2 block tracking-widest">STEP {step.num}</span>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
