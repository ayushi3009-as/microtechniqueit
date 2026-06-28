const fs = require('fs');

// 1. Fix Case Studies Page (Dark Mode + onError)
let csPage = fs.readFileSync('c:/src/microtechiqueit/src/app/case-studies/page.tsx', 'utf8');
csPage = csPage.replace(/background-color: #000/g, 'background-color: #ffffff');
csPage = csPage.replace(/background: #111/g, 'background: #f8fafc');
csPage = csPage.replace(/background: #000/g, 'background: #ffffff');
csPage = csPage.replace(/color: #fff/g, 'color: #0f172a');
csPage = csPage.replace(/color: #ccc/g, 'color: #64748b');
csPage = csPage.replace(/color: #aaa/g, 'color: #94a3b8');
csPage = csPage.replace(/border-color: rgba\\(255,255,255,0.1\\)/g, 'border-color: rgba(0,0,0,0.1)');
csPage = csPage.replace(/onError=\\{[^\\}]+\\}/g, '');
csPage = csPage.replace(/onError=\\{\\(e\\) => \\{\\s*e\\.currentTarget\\.style\\.display = 'none';\\s*\\}\\}/g, '');
csPage = csPage.replace(/onError=\\{\\([^\\)]*\\)\\s*=>\\s*\\{[^}]*\\}\\}/g, '');
fs.writeFileSync('c:/src/microtechiqueit/src/app/case-studies/page.tsx', csPage);

// 2. Fix Blog Page (onError)
let blogPage = fs.readFileSync('c:/src/microtechiqueit/src/app/blog/page.tsx', 'utf8');
blogPage = blogPage.replace(/onError=\\{\\([^\\)]*\\)\\s*=>\\s*\\{[^}]*\\}\\}/g, '');
fs.writeFileSync('c:/src/microtechiqueit/src/app/blog/page.tsx', blogPage);

// 3. Fix Case Studies Data (Image Paths)
let csData = fs.readFileSync('c:/src/microtechiqueit/src/data/case-studies.ts', 'utf8');
csData = csData.replace(/'\\/images\\/case-studies\\/medcare-hospital\\.webp'/g, "'/images/portfolio/medcare-healthcare.png'");
csData = csData.replace(/'\\/images\\/case-studies\\/styleverse\\.webp'/g, "'/images/portfolio/styleverse-ecommerce.png'");
csData = csData.replace(/'\\/images\\/case-studies\\/swiftship\\.webp'/g, "'/images/portfolio/swiftship-logistics.png'");
csData = csData.replace(/'\\/images\\/case-studies\\/edunova\\.webp'/g, "'/images/portfolio/edunova-education.png'");
fs.writeFileSync('c:/src/microtechiqueit/src/data/case-studies.ts', csData);

