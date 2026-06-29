const fs = require('fs');
let csData = fs.readFileSync('c:/src/microtechiqueit/src/data/case-studies.ts', 'utf8');

csData = csData.replace(/\/images\/case-studies\/medcare-hospital\.webp/g, "/images/portfolio/medcare-healthcare.png");
csData = csData.replace(/\/images\/case-studies\/styleverse\.webp/g, "/images/portfolio/styleverse-ecommerce.png");
csData = csData.replace(/\/images\/case-studies\/swiftship\.webp/g, "/images/portfolio/swiftship-logistics.png");
csData = csData.replace(/\/images\/case-studies\/edunova\.webp/g, "/images/portfolio/edunova-education.png");

fs.writeFileSync('c:/src/microtechiqueit/src/data/case-studies.ts', csData);
