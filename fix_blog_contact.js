const fs = require('fs');

// 1. Contact Page Fix
let contact = fs.readFileSync('c:/src/microtechiqueit/src/app/contact/page.tsx', 'utf8');
contact = contact.replace(/\.contact-page-wrapper {\s*background-color: #[a-zA-Z0-9]+;\s*color: #[a-zA-Z0-9]+;/g, '.contact-page-wrapper {\n            background-color: #ffffff;\n            color: #0f172a;');
// Re-fix the gradient which I inverted wrongly
contact = contact.replace(/background: linear-gradient\(to right, #0f172a, #4f46e5\);/g, 'background: linear-gradient(to right, #0f172a, #4f46e5);');
fs.writeFileSync('c:/src/microtechiqueit/src/app/contact/page.tsx', contact);


// 2. Blog Page Fix
let blog = fs.readFileSync('c:/src/microtechiqueit/src/app/blog/page.tsx', 'utf8');

blog = blog.replace(/background-color: #050505;/g, 'background-color: #ffffff;');
blog = blog.replace(/color: #f1f5f9;/g, 'color: #0f172a;');
blog = blog.replace(/color: #f8fafc;/g, 'color: #0f172a;');
blog = blog.replace(/color: #e2e8f0;/g, 'color: #334155;');
blog = blog.replace(/color: #94a3b8;/g, 'color: #64748b;');
blog = blog.replace(/background: #111111;/g, 'background: #ffffff;');
blog = blog.replace(/background: #0a0a0a;/g, 'background: #ffffff;');
blog = blog.replace(/background: #171717;/g, 'background: #f8fafc;');
blog = blog.replace(/background: #111;/g, 'background: #ffffff;');
blog = blog.replace(/background: #000;/g, 'background: #ffffff;');

// borders
blog = blog.replace(/border: 1px solid rgba\(255, 255, 255, 0\.05\);/g, 'border: 1px solid rgba(0,0,0,0.05);');
blog = blog.replace(/border: 1px solid rgba\(255, 255, 255, 0\.1\);/g, 'border: 1px solid rgba(0,0,0,0.1);');
blog = blog.replace(/border-color: rgba\(255, 255, 255, 0\.1\);/g, 'border-color: rgba(0,0,0,0.1);');
blog = blog.replace(/border-top: 1px solid rgba\(255, 255, 255, 0\.1\);/g, 'border-top: 1px solid rgba(0,0,0,0.1);');
blog = blog.replace(/border-color: rgba\(255,255,255,0\.1\);/g, 'border-color: rgba(0,0,0,0.1);');
blog = blog.replace(/border: 1px solid rgba\(255,255,255,0\.1\);/g, 'border: 1px solid rgba(0,0,0,0.1);');
blog = blog.replace(/border: 1px solid #222;/g, 'border: 1px solid #e2e8f0;');
blog = blog.replace(/border-top: 1px solid #222;/g, 'border-top: 1px solid #e2e8f0;');

// glass backgrounds
blog = blog.replace(/background: rgba\(255, 255, 255, 0\.03\);/g, 'background: rgba(0,0,0,0.02);');
blog = blog.replace(/background: rgba\(255, 255, 255, 0\.05\);/g, 'background: rgba(0,0,0,0.04);');
blog = blog.replace(/background: rgba\(255, 255, 255, 0\.1\);/g, 'background: rgba(0,0,0,0.08);');
blog = blog.replace(/background: rgba\(255,255,255,0\.1\);/g, 'background: rgba(0,0,0,0.08);');
blog = blog.replace(/background: rgba\(255,255,255,0\.05\);/g, 'background: rgba(0,0,0,0.04);');

// hover shadows
blog = blog.replace(/box-shadow: 0 10px 40px rgba\(0,0,0,0\.5\);/g, 'box-shadow: 0 10px 40px rgba(0,0,0,0.1);');
blog = blog.replace(/box-shadow: 0 20px 40px rgba\(0, 0, 0, 0\.6\);/g, 'box-shadow: 0 20px 40px rgba(0,0,0,0.1);');
blog = blog.replace(/box-shadow: 0 20px 40px rgba\(0,0,0,0\.6\);/g, 'box-shadow: 0 20px 40px rgba(0,0,0,0.1);');

// inverted colors (usually buttons)
blog = blog.replace(/background: #fff;[\s\n]*color: #000;/g, 'background: #0f172a;\n          color: #ffffff;');
blog = blog.replace(/background: #ffffff;[\s\n]*color: #050505;/g, 'background: #0f172a;\n          color: #ffffff;');

fs.writeFileSync('c:/src/microtechiqueit/src/app/blog/page.tsx', blog);
