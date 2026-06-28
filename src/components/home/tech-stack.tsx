'use client';

const technologies = [
  'React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'AWS',
  'PostgreSQL', 'Docker', '.NET', 'Flutter', 'Vue.js', 'Azure',
];

export function TechStack() {
  return (
    <section className="section-padding bg-section-alt">
      <div className="container-custom text-center">
        <h2 className="text-foreground mb-4">Powered by <span className="text-accent-gradient">Modern Tech</span></h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-12">
          We use enterprise-grade, future-proof technologies to build robust and scalable solutions.
        </p>
        
        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
          {technologies.map((tech) => (
            <div key={tech} className="px-5 py-2.5 bg-white border border-border rounded-lg shadow-sm text-sm font-medium text-foreground">
              {tech}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
