'use client';

import { Briefcase, Users, Calendar, Code2 } from 'lucide-react';

const stats = [
  { icon: Briefcase, value: '200+', label: 'Projects Delivered' },
  { icon: Users, value: '150+', label: 'Happy Clients' },
  { icon: Calendar, value: '5+', label: 'Years of Innovation' },
  { icon: Code2, value: '50+', label: 'Expert Engineers' },
];

export function StatsSection() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center p-6 rounded-2xl bg-pastel-blue">
              <stat.icon className="h-5 w-5 text-primary mx-auto mb-3" />
              <div className="text-3xl font-bold text-foreground font-heading mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
