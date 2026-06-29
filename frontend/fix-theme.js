const fs = require('fs');
const path = require('path');

function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDir(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let original = content;
      
      // Light backgrounds -> dark backgrounds
      content = content.replace(/backgroundColor:\s*['"](#ffffff|#f8fafc|#f1f5f9)['"]/gi, "backgroundColor: 'var(--color-background)'");
      content = content.replace(/background:\s*['"](#ffffff|#f8fafc|#f1f5f9)['"]/gi, "background: 'var(--color-background)'");
      
      // Light text -> dark text
      content = content.replace(/color:\s*['"](#0f172a|#1e293b|#000000)['"]/gi, "color: 'var(--color-foreground)'");
      content = content.replace(/color:\s*['"](#64748b|#475569|#94a3b8)['"]/gi, "color: 'var(--color-muted-foreground)'");
      
      // Borders -> dark borders
      content = content.replace(/border:\s*['"]1px solid (#ececec|#e2e8f0|#cbd5e1)['"]/gi, "border: '1px solid var(--color-border)'");
      content = content.replace(/borderColor:\s*['"](#ececec|#e2e8f0|#cbd5e1)['"]/gi, "borderColor: 'var(--color-border)'");

      // Specific exceptions or missed cases
      content = content.replace(/['"]#ffffff['"]/gi, "'var(--color-background)'");
      content = content.replace(/['"]#0f172a['"]/gi, "'var(--color-foreground)'");
      content = content.replace(/['"]#64748b['"]/gi, "'var(--color-muted-foreground)'");

      if (content !== original) {
        fs.writeFileSync(fullPath, content);
        console.log('Updated:', fullPath);
      }
    }
  }
}

processDir(path.join(__dirname, 'src/app'));
