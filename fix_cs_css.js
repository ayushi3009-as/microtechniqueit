const fs = require('fs');
let csPage = fs.readFileSync('c:/src/microtechiqueit/src/app/case-studies/page.tsx', 'utf8');

// Global backgrounds
csPage = csPage.replace(/background-color: #000;/g, 'background-color: #ffffff;');
csPage = csPage.replace(/background: radial-gradient\\(circle at 20% 30%, #11111a, #000 60%\\);/g, 'background: radial-gradient(circle at 20% 30%, #f8fafc, #ffffff 60%);');
csPage = csPage.replace(/background: #000;/g, 'background: #ffffff;');

// Global Text
csPage = csPage.replace(/color: #fff;/g, 'color: #0f172a;');
csPage = csPage.replace(/color: #aaa;/g, 'color: #64748b;');
csPage = csPage.replace(/color: #ccc;/g, 'color: #475569;');

// Glass Backgrounds
csPage = csPage.replace(/background: rgba\\(255,255,255,0.05\\);/g, 'background: rgba(0,0,0,0.03);');
csPage = csPage.replace(/background: rgba\\(255,255,255,0.02\\);/g, 'background: rgba(0,0,0,0.01);');
csPage = csPage.replace(/background: radial-gradient\\(circle, rgba\\(255,255,255,0.03\\) 0%, transparent 70%\\);/g, 'background: radial-gradient(circle, rgba(0,0,0,0.03) 0%, transparent 70%);');

// Borders
csPage = csPage.replace(/border: 1px solid rgba\\(255,255,255,0.1\\);/g, 'border: 1px solid rgba(0,0,0,0.1);');
csPage = csPage.replace(/border: 1px solid rgba\\(255,255,255,0.05\\);/g, 'border: 1px solid rgba(0,0,0,0.05);');
csPage = csPage.replace(/border: 1px solid rgba\\(255,255,255,0.08\\);/g, 'border: 1px solid rgba(0,0,0,0.08);');
csPage = csPage.replace(/border: 1px solid rgba\\(255,255,255,0.06\\);/g, 'border: 1px solid rgba(0,0,0,0.06);');
csPage = csPage.replace(/border: 1px solid rgba\\(255,255,255,0.2\\);/g, 'border: 1px solid rgba(0,0,0,0.1);');

csPage = csPage.replace(/border-top: 1px solid rgba\\(255,255,255,0.05\\);/g, 'border-top: 1px solid rgba(0,0,0,0.05);');
csPage = csPage.replace(/border-bottom: 1px solid rgba\\(255,255,255,0.05\\);/g, 'border-bottom: 1px solid rgba(0,0,0,0.05);');
csPage = csPage.replace(/border-color: rgba\\(255,255,255,0.1\\);/g, 'border-color: rgba(0,0,0,0.1);');
csPage = csPage.replace(/border-color: rgba\\(255,255,255,0.15\\);/g, 'border-color: rgba(0,0,0,0.15);');

// Shadows
csPage = csPage.replace(/box-shadow: 0 10px 20px rgba\\(255,255,255,0.1\\);/g, 'box-shadow: 0 10px 20px rgba(0,0,0,0.05);');
csPage = csPage.replace(/box-shadow: 0 0 30px rgba\\(255,255,255,0.3\\);/g, 'box-shadow: 0 0 30px rgba(0,0,0,0.1);');

// Lines
csPage = csPage.replace(/background: linear-gradient\\(90deg, transparent, rgba\\(255,255,255,0.2\\), transparent\\);/g, 'background: linear-gradient(90deg, transparent, rgba(0,0,0,0.1), transparent);');

// Typography Gradients
csPage = csPage.replace(/background: linear-gradient\\(135deg, #fff 30%, #888\\);/g, 'background: linear-gradient(135deg, #0f172a 30%, #475569);');
csPage = csPage.replace(/background: linear-gradient\\(135deg, #fff, #aaa\\);/g, 'background: linear-gradient(135deg, #0f172a, #475569);');

// Inverted Buttons / Tags (These are styled as white bg in dark mode, so invert to dark bg in light mode)
csPage = csPage.replace(/background: #fff; \\n          color: #000; \\n          border-color: #fff;/g, 'background: #0f172a; \n          color: #ffffff; \n          border-color: #0f172a;');
csPage = csPage.replace(/background: #fff; \\n          color: #000;/g, 'background: #0f172a; \n          color: #ffffff;');
csPage = csPage.replace(/background: #fff;\\n\\s+color: #000;/g, 'background: #0f172a;\n          color: #ffffff;');

// Remove onError handlers that crash the server component!
csPage = csPage.replace(/onError=\\{[^\\}]+\\}/g, '');

fs.writeFileSync('c:/src/microtechiqueit/src/app/case-studies/page.tsx', csPage);
