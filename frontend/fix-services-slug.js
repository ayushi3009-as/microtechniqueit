const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/app/services/[slug]/page.tsx');
let content = fs.readFileSync(filePath, 'utf8');

// Replace Text Colors
content = content.replace(/text-slate-500/g, 'text-muted-foreground');
content = content.replace(/text-slate-400/g, 'text-muted-foreground');
content = content.replace(/text-slate-50/g, 'text-foreground');
content = content.replace(/text-slate-100/g, 'text-muted');

// Replace Border Colors
content = content.replace(/border-slate-100/g, 'border-border');
content = content.replace(/border-slate-700/g, 'border-border');
content = content.replace(/border-slate-800/g, 'border-border');
content = content.replace(/divide-slate-100/g, 'divide-border');

// Replace Background Colors
content = content.replace(/bg-slate-900/g, 'bg-section-alt');
content = content.replace(/bg-slate-800/g, 'bg-card');
content = content.replace(/bg-indigo-50/g, 'bg-primary/10');

// Replace Theme Colors
content = content.replace(/text-indigo-600/g, 'text-primary');
content = content.replace(/text-emerald-500/g, 'text-[#10b981]'); // Keep emerald for success
content = content.replace(/bg-indigo-600/g, 'bg-primary');

// Update CTA banner to match homepage CTA
const oldCta = `<div className="relative rounded-3xl overflow-hidden bg-slate-900 p-12 lg:p-20 text-center border border-slate-800 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20"></div>`;
const newCta = `<div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-blue-700 to-indigo-950 border border-white/10 p-12 lg:p-20 text-center shadow-[0_20px_50px_rgba(29,78,216,0.3)]" style={{ padding: '5rem' }}>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.1)_0%,transparent_70%)]"></div>`;
content = content.replace(oldCta, newCta);

// Fix CTA text to be always white
content = content.replace(/<h2 className="text-4xl md:text-5xl font-extrabold text-white/g, '<h2 className="text-4xl md:text-5xl font-extrabold text-white');
content = content.replace(/<p className="text-xl text-slate-400 max-w-xl mx-auto mb-10">/g, '<p className="text-xl text-white/80 max-w-xl mx-auto mb-10">');

// Fix Testimonial Section 7 which was originally bg-slate-900 text-white
content = content.replace(/<section className="py-20 lg:py-32 bg-section-alt text-white">/g, '<section className="py-20 lg:py-32 bg-section-alt text-foreground">');
content = content.replace(/text-slate-50/g, 'text-foreground');

fs.writeFileSync(filePath, content);
console.log('Fixed services slug page!');
