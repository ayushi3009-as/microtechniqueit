const fs = require('fs');
let content = fs.readFileSync('c:/src/microtechiqueit/src/app/contact/page.tsx', 'utf8');

// Global backgrounds and text
content = content.replace(/background-color: #030303;/g, 'background-color: #ffffff;');
content = content.replace(/color: #ffffff;/g, 'color: #0f172a;');
content = content.replace(/color: #fff;/g, 'color: #0f172a;');
content = content.replace(/color: #000;/g, 'color: #ffffff;');

// Headers
content = content.replace(/background: linear-gradient\\(to right, #ffffff, #a5b4fc\\);/g, 'background: linear-gradient(to right, #0f172a, #4f46e5);');

// Shadows & glow
content = content.replace(/box-shadow: 0 40px 80px -20px rgba\\(99, 102, 241, 0.4\\);/g, 'box-shadow: 0 20px 40px -10px rgba(99, 102, 241, 0.2);');
content = content.replace(/border: 1px solid rgba\\(255,255,255,0.1\\);/g, 'border: 1px solid rgba(0,0,0,0.1);');
content = content.replace(/border: 1px solid rgba\\(255, 255, 255, 0.1\\);/g, 'border: 1px solid rgba(0,0,0,0.1);');
content = content.replace(/border: 1px solid rgba\\(255, 255, 255, 0.2\\);/g, 'border: 1px solid rgba(0,0,0,0.2);');
content = content.replace(/border-color: rgba\\(255,255,255,0.1\\);/g, 'border-color: rgba(0,0,0,0.1);');
content = content.replace(/border-color: rgba\\(255, 255, 255, 0.1\\)/g, 'border-color: rgba(0,0,0,0.1)');
content = content.replace(/border-color: rgba\\(255,255,255,0.2\\)/g, 'border-color: rgba(0,0,0,0.2)');

content = content.replace(/background: rgba\\(255, 255, 255, 0.03\\);/g, 'background: rgba(0, 0, 0, 0.02);');
content = content.replace(/background: rgba\\(255, 255, 255, 0.05\\);/g, 'background: rgba(0, 0, 0, 0.03);');
content = content.replace(/background: rgba\\(255, 255, 255, 0.1\\);/g, 'background: rgba(0, 0, 0, 0.05);');

// Form elements
content = content.replace(/background: #111116;/g, 'background: #f8fafc;');
content = content.replace(/background: #1a1a24;/g, 'background: #ffffff;');
content = content.replace(/border-color: #2d2d3d;/g, 'border-color: #e2e8f0;');
content = content.replace(/color: #888;/g, 'color: #64748b;');
content = content.replace(/color: #aaa;/g, 'color: #64748b;');

// Gradients
content = content.replace(/background: linear-gradient\\(135deg, rgba\\(255,255,255,0.1\\) 0%, rgba\\(255,255,255,0.02\\) 100%\\);/g, 'background: linear-gradient(135deg, rgba(0,0,0,0.03) 0%, rgba(0,0,0,0.01) 100%);');
content = content.replace(/background: linear-gradient\\(135deg, rgba\\(255,255,255,0.15\\) 0%, transparent 50%, rgba\\(99,102,241,0.15\\) 100%\\);/g, 'background: linear-gradient(135deg, rgba(0,0,0,0.05) 0%, transparent 50%, rgba(99,102,241,0.05) 100%);');
content = content.replace(/background: linear-gradient\\(90deg, transparent, rgba\\(255,255,255,0.2\\), transparent\\);/g, 'background: linear-gradient(90deg, transparent, rgba(0,0,0,0.1), transparent);');
content = content.replace(/background: linear-gradient\\(to bottom, transparent, #030303\\);/g, 'background: linear-gradient(to bottom, transparent, #ffffff);');
content = content.replace(/background: #ffffff;\\s*color: #0f172a;/g, 'background: #0f172a;\n            color: #ffffff;'); // revert the button text inversion if it got inverted by the generic rule

// Remove onError
content = content.replace(/onError=\\{[^\\}]+\\}/g, '');

fs.writeFileSync('c:/src/microtechiqueit/src/app/contact/page.tsx', content);
