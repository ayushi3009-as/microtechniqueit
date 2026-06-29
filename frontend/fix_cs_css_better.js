const fs = require('fs');
let css = fs.readFileSync('c:/src/microtechiqueit/src/app/case-studies/page.tsx', 'utf8');

// Global backgrounds
css = css.replace(/#11111a/g, '#f8fafc');
css = css.replace(/#000/g, '#ffffff');

// Global text
css = css.replace(/color: #a0a0a0/g, 'color: #64748b');
css = css.replace(/color: #ccc/g, 'color: #475569');

// Glass Backgrounds
css = css.replace(/rgba\(255,255,255,0\.05\)/g, 'rgba(0,0,0,0.03)');
css = css.replace(/rgba\(255,255,255,0\.02\)/g, 'rgba(0,0,0,0.01)');
css = css.replace(/rgba\(255,255,255,0\.03\)/g, 'rgba(0,0,0,0.02)');
css = css.replace(/rgba\(255,255,255,0\.2\)/g, 'rgba(0,0,0,0.1)');
css = css.replace(/rgba\(255,255,255,0\.1\)/g, 'rgba(0,0,0,0.1)');
css = css.replace(/rgba\(255,255,255,0\.08\)/g, 'rgba(0,0,0,0.08)');
css = css.replace(/rgba\(255,255,255,0\.06\)/g, 'rgba(0,0,0,0.06)');
css = css.replace(/rgba\(255,255,255,0\.3\)/g, 'rgba(0,0,0,0.1)');
css = css.replace(/rgba\(255,255,255,0\.15\)/g, 'rgba(0,0,0,0.15)');

// Gradients for text
css = css.replace(/#fff 30%, #888/g, '#0f172a 30%, #475569');
css = css.replace(/#fff, #aaa/g, '#0f172a, #475569');

// The main heading gradient text was #fff but since #000 became #fff, we might have converted #fff to something else earlier. 
// Wait, my previous script changed color: #fff; to color: #0f172a; which worked for pure color but not for gradients.
// Let's replace any #fff that is used for text gradients.

fs.writeFileSync('c:/src/microtechiqueit/src/app/case-studies/page.tsx', css);
