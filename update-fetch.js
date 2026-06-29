const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        const dirPath = path.join(dir, f);
        if (fs.statSync(dirPath).isDirectory()) {
            walkDir(dirPath, callback);
        } else {
            callback(path.join(dir, f));
        }
    });
}

const dirToSearch = path.join(__dirname, 'frontend/src');

walkDir(dirToSearch, (filePath) => {
    if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
        let content = fs.readFileSync(filePath, 'utf8');
        let modified = false;

        // Replace fetch('/api/
        if (content.includes("fetch('/api/")) {
            content = content.replace(/fetch\('\/api\//g, "fetch(process.env.NEXT_PUBLIC_API_URL + '/");
            modified = true;
        }

        // Replace fetch(`/api/
        if (content.includes("fetch(`/api/")) {
            content = content.replace(/fetch\(`\/api\//g, "fetch(process.env.NEXT_PUBLIC_API_URL + `/");
            modified = true;
        }

        if (modified) {
            fs.writeFileSync(filePath, content, 'utf8');
            console.log(`Updated ${filePath}`);
        }
    }
});
