const fs = require('fs');
const path = require('path');

const files = [
  'src/app/industries/industries-client.tsx',
  'src/app/case-studies/page.tsx',
  'src/app/blog/page.tsx',
  'src/app/contact/page.tsx'
];

for (const file of files) {
  const fullPath = path.join(__dirname, file);
  if (!fs.existsSync(fullPath)) continue;
  
  let content = fs.readFileSync(fullPath, 'utf8');
  let original = content;

  // Backgrounds
  content = content.replace(/background-color:\s*#ffffff;/gi, "background-color: var(--color-background);");
  content = content.replace(/background:\s*#ffffff;/gi, "background: var(--color-card);");
  content = content.replace(/background:\s*#f8fafc;/gi, "background: var(--color-background-secondary);");
  content = content.replace(/background:\s*#eff6ff;/gi, "background: var(--color-surface);");
  content = content.replace(/background:\s*radial-gradient\(circle at 20% 30%,\s*#f8fafc,\s*#ffffff 60%\);/gi, "background: radial-gradient(circle at 20% 30%, var(--color-background-secondary), var(--color-background) 60%);");
  content = content.replace(/background:\s*linear-gradient\(160deg,\s*#f8fafc,\s*#ffffff\);/gi, "background: linear-gradient(160deg, var(--color-background-secondary), var(--color-background));");
  content = content.replace(/background:\s*linear-gradient\(135deg,\s*#f8fafc,\s*#f1f5f9\);/gi, "background: linear-gradient(135deg, var(--color-background-secondary), var(--color-background));");
  
  // Text Colors
  content = content.replace(/color:\s*#0f172a;/gi, "color: var(--color-foreground);");
  content = content.replace(/color:\s*#1e293b;/gi, "color: var(--color-foreground);");
  content = content.replace(/color:\s*#475569;/gi, "color: var(--color-muted-foreground);");
  content = content.replace(/color:\s*#64748b;/gi, "color: var(--color-muted-foreground);");
  content = content.replace(/color:\s*#94a3b8;/gi, "color: var(--color-muted-foreground);");
  content = content.replace(/color:\s*#334155;/gi, "color: var(--color-muted-foreground);");
  content = content.replace(/color:\s*#888;/gi, "color: var(--color-muted-foreground);");
  content = content.replace(/color:\s*#999;/gi, "color: var(--color-muted-foreground);");
  content = content.replace(/color:\s*#666;/gi, "color: var(--color-muted-foreground);");
  
  // Borders
  content = content.replace(/border:\s*1px solid #e2e8f0;/gi, "border: 1px solid var(--color-border);");
  content = content.replace(/border-color:\s*#e2e8f0;/gi, "border-color: var(--color-border);");
  content = content.replace(/border:\s*2px solid #bfdbfe;/gi, "border: 2px solid var(--color-border);");
  content = content.replace(/background:\s*#e2e8f0;/gi, "background: var(--color-border);");
  
  if (content !== original) {
    fs.writeFileSync(fullPath, content);
    console.log('Updated CSS in:', fullPath);
  }
}
