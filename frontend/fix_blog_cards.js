const fs = require('fs');
let blog = fs.readFileSync('c:/src/microtechiqueit/src/app/blog/page.tsx', 'utf8');

// The dark gradient for featured card
blog = blog.replace(/background: linear-gradient\(145deg, #111318, #0a0b0e\);/g, 'background: #ffffff;');
// The dark background for grid cards
blog = blog.replace(/background: #0f1115;/g, 'background: #ffffff;');
// The dark gradient for card images
blog = blog.replace(/background: linear-gradient\(135deg, #1e293b, #0f172a\);/g, 'background: #f8fafc;'); 

// Nav bar background
blog = blog.replace(/background: rgba\(5, 5, 5, 0\.85\);/g, 'background: rgba(255, 255, 255, 0.85);');

// Text colors
blog = blog.replace(/color: #cbd5e1;/g, 'color: #475569;'); // excerpt text
blog = blog.replace(/color: rgba\(255, 255, 255, 0\.1\);/g, 'color: rgba(0, 0, 0, 0.05);'); // featured letter

// Category button hover background
blog = blog.replace(/background: rgba\(255, 255, 255, 0\.08\);/g, 'background: rgba(0, 0, 0, 0.05);');

// Shadows
blog = blog.replace(/box-shadow: 0 40px 80px rgba\(0, 0, 0, 0\.5\);/g, 'box-shadow: 0 40px 80px rgba(0, 0, 0, 0.1);');
blog = blog.replace(/box-shadow: 0 30px 60px rgba\(0, 0, 0, 0\.5\);/g, 'box-shadow: 0 30px 60px rgba(0, 0, 0, 0.1);');

fs.writeFileSync('c:/src/microtechiqueit/src/app/blog/page.tsx', blog);
