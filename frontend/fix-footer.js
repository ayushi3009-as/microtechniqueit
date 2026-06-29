const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/components/layout/footer.tsx');
let content = fs.readFileSync(filePath, 'utf8');

// Background and borders
content = content.replace(/backgroundColor:\s*['"]#0a0f2c['"]/g, "backgroundColor: 'var(--color-card)'");
content = content.replace(/borderTop:\s*['"]1px solid rgba\(255,255,255,0\.06\)['"]/g, "borderTop: '1px solid var(--color-border)'");
content = content.replace(/borderBottom:\s*['"]1px solid rgba\(255,255,255,0\.06\)['"]/g, "borderBottom: '1px solid var(--color-border)'");
content = content.replace(/rgba\(255,255,255,0\.15\)/g, "var(--color-border)"); // For the separator |

// Headings and hover colors that were white
content = content.replace(/color:\s*['"]#ffffff['"]/g, "color: 'var(--color-foreground)'");
content = content.replace(/\.style\.color\s*=\s*['"]#ffffff['"]/g, ".style.color = 'var(--color-foreground)'");

// Social icons background / borders
content = content.replace(/background:\s*['"]rgba\(255,255,255,0\.05\)['"]/g, "background: 'var(--color-surface)'");
content = content.replace(/border:\s*['"]1px solid rgba\(255,255,255,0\.08\)['"]/g, "border: '1px solid var(--color-border)'");
content = content.replace(/\.style\.background\s*=\s*['"]rgba\(255,255,255,0\.05\)['"]/g, ".style.background = 'var(--color-surface)'");
content = content.replace(/\.style\.borderColor\s*=\s*['"]rgba\(255,255,255,0\.08\)['"]/g, ".style.borderColor = 'var(--color-border)'");

// Newsletter input
content = content.replace(/border:\s*['"]1px solid rgba\(255,255,255,0\.1\)['"]/g, "border: '1px solid var(--color-border)'");

fs.writeFileSync(filePath, content);
console.log('Fixed footer styles');
