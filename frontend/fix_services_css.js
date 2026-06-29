const fs = require('fs');
const path = 'c:/src/microtechiqueit/src/app/services/[slug]/page.tsx';
let content = fs.readFileSync(path, 'utf8');

const replacements = {
  'max-w-\\[1320px\\]': 'max-w-7xl',
  'max-w-\\[1000px\\]': 'max-w-5xl',
  'max-w-\\[800px\\]': 'max-w-4xl',
  'max-w-\\[700px\\]': 'max-w-3xl',
  'max-w-\\[650px\\]': 'max-w-2xl',
  'max-w-\\[600px\\]': 'max-w-xl',
  'max-w-\\[500px\\]': 'max-w-lg',
  'text-\\[clamp\\(3rem,5vw,4.5rem\\)\\]': 'text-5xl md:text-6xl lg:text-7xl break-words',
  'text-\\[clamp\\(3rem,5vw,4rem\\)\\]': 'text-5xl md:text-6xl lg:text-7xl break-words',
  'text-\\[clamp\\(2.5rem,4vw,3.5rem\\)\\]': 'text-4xl md:text-5xl',
  'bg-\\[#FAFAFC\\]': 'bg-slate-50',
  'bg-\\[#0f172a\\]': 'bg-slate-900',
  'bg-\\[#1e293b\\]': 'bg-slate-800',
  'bg-\\[#eef2ff\\]': 'bg-indigo-50',
  'bg-\\[#f8fafc\\]': 'bg-slate-50',
  'text-\\[#0f172a\\]': 'text-slate-900',
  'text-\\[#475569\\]': 'text-slate-600',
  'text-\\[#64748b\\]': 'text-slate-500',
  'text-\\[#94a3b8\\]': 'text-slate-400',
  'text-\\[#f8fafc\\]': 'text-slate-50',
  'text-\\[#f1f5f9\\]': 'text-slate-100',
  'text-\\[#4f46e5\\]': 'text-indigo-600',
  'text-\\[#10b981\\]': 'text-emerald-500',
  'text-\\[#fbbf24\\]': 'text-amber-400',
  'border-\\[#ECECEC\\]': 'border-slate-200',
  'border-\\[#f1f5f9\\]': 'border-slate-100',
  'border-\\[#e2e8f0\\]': 'border-slate-200',
  'border-\\[#334155\\]': 'border-slate-700',
  'border-\\[#1e293b\\]': 'border-slate-800',
  'border-\\[#4f46e5\\]/30': 'border-indigo-600/30',
  'border-\\[#4f46e5\\]/20': 'border-indigo-600/20',
  'border-\\[#4f46e5\\]': 'border-indigo-600',
  'fill-\\[#fbbf24\\]': 'fill-amber-400',
  'from-\\[#4f46e5\\]/20': 'from-indigo-600/20',
  'to-\\[#9333ea\\]/20': 'to-purple-600/20',
  'from-\\[#4f46e5\\]': 'from-indigo-600',
  'to-\\[#9333ea\\]': 'to-purple-600',
  'from-\\[#eef2ff\\]': 'from-indigo-50',
  'to-\\[#f8fafc\\]': 'to-slate-50',
  'rounded-\\[24px\\]': 'rounded-3xl',
  'rounded-\\[32px\\]': 'rounded-3xl',
  'rounded-\\[40px\\]': 'rounded-3xl',
  'lg:py-\\[140px\\]': 'lg:py-32',
  'blur-\\[100px\\]': 'blur-3xl',
  'shadow-\\[0_8px_30px_rgb\\(0,0,0,0\\.08\\)\\]': 'shadow-xl',
  'shadow-\\[0_4px_20px_rgba\\(0,0,0,0\\.03\\)\\]': 'shadow-md',
  'shadow-\\[0_20px_40px_rgba\\(0,0,0,0\\.06\\)\\]': 'shadow-2xl',
  'shadow-\\[0_10px_30px_rgba\\(0,0,0,0\\.05\\)\\]': 'shadow-lg',
  'shadow-\\[0_4px_15px_rgba\\(79,70,229,0\\.15\\)\\]': 'shadow-indigo-500/20 shadow-lg',
  'shadow-\\[0_15px_35px_rgba\\(0,0,0,0\\.06\\)\\]': 'shadow-xl',
  'shadow-\\[0_20px_40px_rgba\\(0,0,0,0\\.03\\)\\]': 'shadow-2xl',
  'shadow-\\[0_10px_20px_rgba\\(79,70,229,0\\.3\\)\\]': 'shadow-indigo-500/30 shadow-lg'
};

for (const [key, value] of Object.entries(replacements)) {
  const regex = new RegExp(key, 'g');
  content = content.replace(regex, value);
}

fs.writeFileSync(path, content);
console.log('Done');
