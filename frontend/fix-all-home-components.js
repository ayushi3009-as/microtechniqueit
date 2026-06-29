const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src/components/home');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));

for (const file of files) {
  const fullPath = path.join(dir, file);
  let content = fs.readFileSync(fullPath, 'utf8');
  let original = content;

  // Backgrounds
  content = content.replace(/bg-\[\#050816\]/g, "bg-background");
  content = content.replace(/bg-\[\#0a0f2c\]/g, "bg-card");
  content = content.replace(/from-\[\#050816\]/g, "from-background");
  content = content.replace(/via-\[\#0a0f2c\]/g, "via-background/95");
  content = content.replace(/to-\[\#050816\]/g, "to-background");
  
  content = content.replace(/from-\[\#0a0f2c\]/g, "from-card");
  
  // Specific fix for floating whatsapp/ai which use dark hexes
  content = content.replace(/bg-\[\#0a0f2c\]/g, "bg-card");

  content = content.replace(/bg-black\/20/g, "bg-muted");
  
  content = content.replace(/bg-white\/\[0\.02\]/g, "bg-card");
  content = content.replace(/bg-white\/5/g, "bg-card/50");
  content = content.replace(/bg-white\/10/g, "bg-muted");
  content = content.replace(/hover:bg-white\/10/g, "hover:bg-muted");
  
  // Text Colors
  content = content.replace(/text-white\/90/g, "text-foreground");
  content = content.replace(/text-white\/80/g, "text-foreground/80");
  content = content.replace(/text-white\/70/g, "text-foreground/70");
  content = content.replace(/text-white\/50/g, "text-muted-foreground");
  content = content.replace(/text-white\/40/g, "text-muted-foreground");
  content = content.replace(/text-white\/20/g, "text-muted-foreground/50");
  content = content.replace(/text-white\/10/g, "text-muted-foreground/30");
  content = content.replace(/text-white/g, "text-foreground");
  content = content.replace(/hover:text-white/g, "hover:text-foreground");
  
  // Borders
  content = content.replace(/border-white\/5/g, "border-border/50");
  content = content.replace(/border-white\/10/g, "border-border");
  content = content.replace(/border-white\/20/g, "border-border");
  content = content.replace(/border-white/g, "border-border");

  if (content !== original) {
    fs.writeFileSync(fullPath, content);
    console.log('Updated classes in:', fullPath);
  }
}
