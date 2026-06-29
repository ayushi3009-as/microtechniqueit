const fs = require('fs');
let content = fs.readFileSync('c:/src/microtechiqueit/src/app/products/products-client.tsx', 'utf8');

// Switch main wrapper
content = content.replace(/backgroundColor: '#0f172a', color: '#f8fafc'/g, "backgroundColor: '#ffffff', color: '#0f172a'");
// Text colors
content = content.replace(/color: '#94a3b8'/g, "color: '#64748b'"); // Muted text
content = content.replace(/color: '#fff'/g, "color: '#0f172a'"); // White text to dark text
// Glass backgrounds
content = content.replace(/rgba\(255,255,255,/g, "rgba(0,0,0,");

// But keep CTA section dark
content = content.replace(/backgroundColor: '#0f172a'/g, "backgroundColor: '#ffffff'");
content = content.replace(/padding: '6rem 1.5rem', backgroundColor: '#ffffff'/g, "padding: '6rem 1.5rem', backgroundColor: '#0f172a'"); 
// The massive dark CTA at the bottom had padding: '6rem 1.5rem', backgroundColor: '#0f172a'

fs.writeFileSync('c:/src/microtechiqueit/src/app/products/products-client.tsx', content);
