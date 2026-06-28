'use client';

const technologies = [
  'React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'AWS',
  'PostgreSQL', 'Docker', '.NET', 'Flutter', 'Vue.js', 'Azure',
];

export function TechStack() {
  return (
    <section className="section-padding bg-section-alt" style={{ padding: '80px 0' }}>
      <div className="container-custom text-center" style={{ textAlign: 'center' }}>
        <h2 className="text-foreground mb-4" style={{ marginBottom: '16px' }}>Powered by <span className="text-accent-gradient">Modern Tech</span></h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-12" style={{ margin: '0 auto 48px auto' }}>
          We use enterprise-grade, future-proof technologies to build robust and scalable solutions.
        </p>
        
        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '12px', margin: '0 auto', maxWidth: '896px' }}>
          {technologies.map((tech) => (
            <div key={tech} className="px-5 py-2.5 bg-white border border-border rounded-lg shadow-sm text-sm font-medium text-foreground" style={{ padding: '10px 20px', backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '8px' }}>
              {tech}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
