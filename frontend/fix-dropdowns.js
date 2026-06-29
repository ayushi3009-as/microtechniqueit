const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/components/layout/header.tsx');
let content = fs.readFileSync(filePath, 'utf8');

// Use regex to replace the hardcoded dark colors with CSS variables.
content = content.replace(/background:\s*['"]rgba\(8,\s*12,\s*32,\s*0\.95\)['"]/g, "background: 'var(--color-card)'");
content = content.replace(/background:\s*['"]rgba\(255,255,255,0\.015\)['"]/g, "background: 'var(--color-background-secondary)'");

content = content.replace(/border:\s*['"]1px solid rgba\(255,255,255,0\.1\)['"]/g, "border: '1px solid var(--color-border)'");
content = content.replace(/borderBottom:\s*['"]1px solid rgba\(255,255,255,0\.06\)['"]/g, "borderBottom: '1px solid var(--color-border)'");
content = content.replace(/borderTop:\s*['"]1px solid rgba\(255,255,255,0\.06\)['"]/g, "borderTop: '1px solid var(--color-border)'");
content = content.replace(/border:\s*['"]1px solid rgba\(255,255,255,0\.08\)['"]/g, "border: '1px solid var(--color-border)'");

content = content.replace(/color:\s*['"]rgba\(255,255,255,0\.3\)['"]/g, "color: 'var(--color-muted-foreground)'");
content = content.replace(/color:\s*['"]rgba\(255,255,255,0\.2\)['"]/g, "color: 'var(--color-muted-foreground)'");
content = content.replace(/color:\s*['"]rgba\(255,255,255,0\.4\)['"]/g, "color: 'var(--color-foreground)'");
content = content.replace(/color:\s*['"]rgba\(255,255,255,0\.82\)['"]/g, "color: 'var(--color-foreground)'");
content = content.replace(/color:\s*['"]rgba\(255,255,255,0\.38\)['"]/g, "color: 'var(--color-muted-foreground)'");
content = content.replace(/color:\s*['"]rgba\(255,255,255,0\.35\)['"]/g, "color: 'var(--color-muted-foreground)'");
content = content.replace(/color:\s*['"]rgba\(255,255,255,0\.75\)['"]/g, "color: 'var(--color-foreground)'");
content = content.replace(/color:\s*['"]rgba\(255,255,255,0\.28\)['"]/g, "color: 'var(--color-muted-foreground)'");
content = content.replace(/color:\s*['"]rgba\(255,255,255,0\.65\)['"]/g, "color: 'var(--color-foreground)'");
content = content.replace(/color:\s*['"]rgba\(255,255,255,0\.35\)['"]/g, "color: 'var(--color-muted-foreground)'");

content = content.replace(/background:\s*['"]rgba\(255,255,255,0\.04\)['"]/g, "background: 'var(--color-surface)'");
content = content.replace(/background:\s*['"]rgba\(255,255,255,0\.05\)['"]/g, "background: 'var(--color-surface)'");

content = content.replace(/background = 'rgba\(255,255,255,0\.05\)'/g, "background = 'var(--color-surface)'");
content = content.replace(/background = 'transparent'/g, "background = 'transparent'");

// For the "Browse all products" button
content = content.replace(/background:\s*['"]rgba\(255,255,255,0\.03\)['"]/g, "background: 'var(--color-surface)'");
content = content.replace(/color:\s*['"]#ffffff['"]/g, "color: 'var(--color-foreground)'");
content = content.replace(/background = 'rgba\(255,255,255,0\.08\)'/g, "background = 'var(--color-border)'");
content = content.replace(/borderColor = 'rgba\(255,255,255,0\.2\)'/g, "borderColor = 'var(--color-muted-foreground)'");
content = content.replace(/background = 'rgba\(255,255,255,0\.03\)'/g, "background = 'var(--color-surface)'");
content = content.replace(/borderColor = 'rgba\(255,255,255,0\.1\)'/g, "borderColor = 'var(--color-border)'");

fs.writeFileSync(filePath, content);
console.log('Fixed dropdown styles');
