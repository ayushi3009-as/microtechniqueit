const fs = require('fs');

const SRC_DIR = 'C:/Users/priya/.gemini/antigravity/brain/6611b2e0-c34b-467b-9301-ccdc9ff1fb79';
const DEST_DIR = 'C:/src/microtechiqueit/public/images/blog';

// Copy the 6 distinct images
fs.copyFileSync(SRC_DIR + '/blog_custom_software_1782655274012.png', DEST_DIR + '/blog_custom_software.png');
fs.copyFileSync(SRC_DIR + '/abstract_saas_graphic_1782652808791.png', DEST_DIR + '/blog_nextjs_performance.png');
fs.copyFileSync(SRC_DIR + '/abstract_hero_illustration_1782651879299.png', DEST_DIR + '/blog_ai_business.png');
fs.copyFileSync(SRC_DIR + '/case_study_hero_collage_1782653914189.png', DEST_DIR + '/blog_cloud_migration.png');
fs.copyFileSync(SRC_DIR + '/office_culture_photo_1782653929898.png', DEST_DIR + '/blog_gst_automation.png');
fs.copyFileSync(SRC_DIR + '/contact_support_illustration_1782653951525.png', DEST_DIR + '/blog_local_seo.png');

// Update blog-posts.ts
let blogData = fs.readFileSync('c:/src/microtechiqueit/src/data/blog-posts.ts', 'utf8');

const replacements = [
  { old: "'/images/blog/blog-hero.png'", new: "'/images/blog/blog_custom_software.png'" }, // for the 1st one
  { old: "'/images/blog/blog-hero.png'", new: "'/images/blog/blog_nextjs_performance.png'" }, // 2nd
  { old: "'/images/blog/blog-hero.png'", new: "'/images/blog/blog_ai_business.png'" }, // 3rd
  { old: "'/images/blog/blog-hero.png'", new: "'/images/blog/blog_cloud_migration.png'" }, // 4th
  { old: "'/images/blog/blog-hero.png'", new: "'/images/blog/blog_gst_automation.png'" }, // 5th
  { old: "'/images/blog/blog-hero.png'", new: "'/images/blog/blog_local_seo.png'" } // 6th
];

// Wait, they all have the exact same string now because I replaced them all with blog-hero.png!
// I'll need to do it by iterating over instances or split.
let parts = blogData.split("image: '/images/blog/blog-hero.png',");
if (parts.length === 7) {
  let newData = parts[0] + 
                "image: '/images/blog/blog_custom_software.png'," + parts[1] +
                "image: '/images/blog/blog_nextjs_performance.png'," + parts[2] +
                "image: '/images/blog/blog_ai_business.png'," + parts[3] +
                "image: '/images/blog/blog_cloud_migration.png'," + parts[4] +
                "image: '/images/blog/blog_gst_automation.png'," + parts[5] +
                "image: '/images/blog/blog_local_seo.png'," + parts[6];
  fs.writeFileSync('c:/src/microtechiqueit/src/data/blog-posts.ts', newData);
}

