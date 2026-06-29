const fs = require('fs');
let csData = fs.readFileSync('c:/src/microtechiqueit/src/data/case-studies.ts', 'utf8');

csData = csData.replace(/\/images\/case-studies\/styleverse-ecommerce\.webp/g, "/images/portfolio/styleverse-ecommerce.png");
csData = csData.replace(/\/images\/case-studies\/diamondstar-inventory\.webp/g, "/images/portfolio/diamondstar-inventory.png");
csData = csData.replace(/\/images\/case-studies\/singh-logistics\.webp/g, "/images/portfolio/swiftship-logistics.png");
csData = csData.replace(/\/images\/case-studies\/edunova-education\.webp/g, "/images/portfolio/edunova-education.png"); // just in case

fs.writeFileSync('c:/src/microtechiqueit/src/data/case-studies.ts', csData);
