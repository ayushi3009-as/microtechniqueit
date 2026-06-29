const fs = require('fs');
let content = fs.readFileSync('c:/src/microtechiqueit/src/app/portfolio/portfolio-client.tsx', 'utf8');

// Fix image cropping
content = content.replace(/style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', minHeight: '400px' }}/g, "style={{ width: '100%', height: 'auto', objectFit: 'contain', display: 'block', borderRadius: '32px' }}");
content = content.replace(/border: '1px solid rgba\\(255,255,255,0.1\\)', boxShadow: '0 20px 40px rgba\\(0,0,0,0.5\\)'/g, "border: '1px solid rgba(0,0,0,0.1)', boxShadow: '0 20px 40px rgba(0,0,0,0.1)'");

// Fix global backgrounds
content = content.replace(/backgroundColor: '#050505', color: '#ffffff'/g, "backgroundColor: '#ffffff', color: '#0f172a'");
content = content.replace(/background: #0d0d0d;/g, "background: #ffffff;");
content = content.replace(/background: linear-gradient\\(135deg, #0a0a0a 0%, #1a1a24 100%\\);/g, "background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);");
content = content.replace(/border: 1px solid rgba\\(255,255,255,0.08\\);/g, "border: 1px solid rgba(0,0,0,0.1); box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);");
content = content.replace(/border: 1px solid rgba\\(255,255,255,0.1\\);/g, "border: 1px solid rgba(0,0,0,0.1);");

// Fix text colors
content = content.replace(/color: '#a0a0a0'/g, "color: '#64748b'");
content = content.replace(/background: rgba\\(255,255,255,0.05\\)/g, "background: rgba(0,0,0,0.05)");
content = content.replace(/border: '1px solid rgba\\(255,255,255,0.1\\)'/g, "border: '1px solid rgba(0,0,0,0.1)'");

// Hover states
content = content.replace(/box-shadow: 0 20px 40px rgba\\(0,0,0,0.6\\);/g, "box-shadow: 0 20px 40px rgba(0,0,0,0.15);");
content = content.replace(/box-shadow: inset 0 0 100px rgba\\(0,0,0,0.5\\);/g, "box-shadow: none;");

// CTA Button inverted
content = content.replace(/background: #fff;\\n\\s*color: #000;/g, "background: #0f172a;\n          color: #fff;");
content = content.replace(/background: #000;\\n\\s*color: #fff;\\n\\s*border-color: #fff;/g, "background: #fff;\n          color: #0f172a;\n          border-color: #0f172a;");

// Save
fs.writeFileSync('c:/src/microtechiqueit/src/app/portfolio/portfolio-client.tsx', content);
