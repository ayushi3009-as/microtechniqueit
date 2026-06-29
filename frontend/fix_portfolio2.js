const fs = require('fs');
let content = fs.readFileSync('c:/src/microtechiqueit/src/app/portfolio/portfolio-client.tsx', 'utf8');

// Fix text colors remaining in inline styles
content = content.replace(/color: '#fff'/g, "color: '#0f172a'");
content = content.replace(/color: '#a0a0a0'/g, "color: '#64748b'");
content = content.replace(/color: '#e0e0e0'/g, "color: '#334155'");

// Save
fs.writeFileSync('c:/src/microtechiqueit/src/app/portfolio/portfolio-client.tsx', content);
