const fs = require('fs');
const path = require('path');

function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDir(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let original = content;
      
      // Fix .card-bg class
      content = content.replace(/background:\s*rgba\(255,\s*255,\s*255,\s*0\.8\)/g, "background: var(--color-card)");
      content = content.replace(/border:\s*1px solid rgba\(0,\s*0,\s*0,\s*0\.1\)/g, "border: 1px solid var(--color-border)");
      
      // Fix inline styles
      content = content.replace(/backgroundColor:\s*['"]#e0e7ff['"]/g, "backgroundColor: 'var(--color-card)'");
      content = content.replace(/backgroundColor:\s*['"]#fff['"]/g, "backgroundColor: 'var(--color-card)'");
      content = content.replace(/backgroundColor:\s*['"]#ffffff['"]/g, "backgroundColor: 'var(--color-background)'");
      content = content.replace(/background:\s*['"]linear-gradient\(135deg,\s*#f8fafc,\s*#f1f5f9\)['"]/g, "background: 'var(--color-card)'");
      
      content = content.replace(/backgroundColor:\s*['"]rgba\(0,0,0,0\.05\)['"]/g, "backgroundColor: 'var(--color-surface)'");
      content = content.replace(/backgroundColor:\s*['"]rgba\(0,\s*0,\s*0,\s*0\.05\)['"]/g, "backgroundColor: 'var(--color-surface)'");
      content = content.replace(/backgroundColor:\s*['"]rgba\(0,0,0,0\.02\)['"]/g, "backgroundColor: 'var(--color-surface)'");
      content = content.replace(/backgroundColor:\s*['"]rgba\(0,\s*0,\s*0,\s*0\.02\)['"]/g, "backgroundColor: 'var(--color-surface)'");
      
      content = content.replace(/border:\s*['"]1px solid rgba\(0,0,0,0\.1\)['"]/g, "border: '1px solid var(--color-border)'");
      content = content.replace(/border:\s*['"]1px solid rgba\(0,\s*0,\s*0,\s*0\.1\)['"]/g, "border: '1px solid var(--color-border)'");
      content = content.replace(/border:\s*['"]1px solid rgba\(0,0,0,0\.05\)['"]/g, "border: '1px solid var(--color-border)'");
      content = content.replace(/border:\s*['"]1px solid rgba\(0,\s*0,\s*0,\s*0\.05\)['"]/g, "border: '1px solid var(--color-border)'");
      
      // text colors
      content = content.replace(/color:\s*['"]#1e293b['"]/g, "color: 'var(--color-foreground)'");
      content = content.replace(/color:\s*['"]#0f172a['"]/g, "color: 'var(--color-foreground)'");
      content = content.replace(/color:\s*['"]#334155['"]/g, "color: 'var(--color-muted-foreground)'");
      content = content.replace(/color:\s*['"]#475569['"]/g, "color: 'var(--color-muted-foreground)'");
      content = content.replace(/color:\s*['"]#64748b['"]/g, "color: 'var(--color-muted-foreground)'");

      // text gradients
      content = content.replace(/from-slate-900/g, "from-[var(--color-foreground)]");
      content = content.replace(/to-slate-600/g, "to-[var(--color-muted-foreground)]");

      // backgrounds in case-study
      content = content.replace(/bg-slate-50/g, "bg-section-alt");
      content = content.replace(/bg-white/g, "bg-background");
      content = content.replace(/bg-gray-50/g, "bg-section-alt");
      content = content.replace(/text-slate-900/g, "text-foreground");
      content = content.replace(/text-slate-600/g, "text-muted-foreground");
      content = content.replace(/border-slate-200/g, "border-border");

      if (content !== original) {
        fs.writeFileSync(fullPath, content);
        console.log('Updated:', fullPath);
      }
    }
  }
}

processDir(path.join(__dirname, 'src/app'));
