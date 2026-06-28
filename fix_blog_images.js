const fs = require('fs');
let blogData = fs.readFileSync('c:/src/microtechiqueit/src/data/blog-posts.ts', 'utf8');
blogData = blogData.replace(/image: '\/images\/blog\/.*?\.webp'/g, "image: '/images/blog/blog-hero.png'");
fs.writeFileSync('c:/src/microtechiqueit/src/data/blog-posts.ts', blogData);
