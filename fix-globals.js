const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/app/globals.css');
let content = fs.readFileSync(filePath, 'utf8');

const newHeader = `@import "tailwindcss";

/* ─── Premium Adaptive Theme Tokens ─── */
@theme {
  --font-sans: 'Inter', system-ui, -apple-system, sans-serif;
  --font-heading: 'Space Grotesk', 'DM Sans', system-ui, sans-serif;
  --font-mono: 'JetBrains Mono', ui-monospace, monospace;

  --color-primary: var(--primary);
  --color-primary-light: var(--primary-light);
  --color-primary-dark: var(--primary-dark);
  --color-primary-foreground: var(--primary-foreground);
  --color-accent: var(--accent);
  --color-accent-glow: var(--accent-glow);

  --color-background: var(--background);
  --color-background-secondary: var(--background-secondary);
  --color-foreground: var(--foreground);
  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);
  --color-card: var(--card);
  --color-card-foreground: var(--card-foreground);
  --color-card-hover: var(--card-hover);
  --color-border: var(--border);
  --color-border-hover: var(--border-hover);

  --color-section-alt: var(--section-alt);
  --color-surface: var(--surface);

  --color-gradient-blue: var(--gradient-blue);
  --color-gradient-purple: var(--gradient-purple);
  --color-gradient-cyan: var(--gradient-cyan);
  --color-gradient-pink: var(--gradient-pink);
}

:root {
  --primary: #2563EB;
  --primary-light: #3b82f6;
  --primary-dark: #1d4ed8;
  --primary-foreground: #ffffff;
  --accent: #00E5FF;
  --accent-glow: rgba(0, 229, 255, 0.3);

  --background: #050816;
  --background-secondary: #0a0f2c;
  --foreground: #ffffff;
  --muted: #1a1f3a;
  --muted-foreground: #94a3b8;
  --card: rgba(255, 255, 255, 0.04);
  --card-foreground: #ffffff;
  --card-hover: rgba(255, 255, 255, 0.08);
  --border: rgba(255, 255, 255, 0.08);
  --border-hover: rgba(255, 255, 255, 0.15);

  --section-alt: #080d24;
  --surface: rgba(255, 255, 255, 0.03);

  --gradient-blue: #2563EB;
  --gradient-purple: #7c3aed;
  --gradient-cyan: #00E5FF;
  --gradient-pink: #ec4899;
}

/* ─── Light Theme Override ─── */
[data-theme="light"] {
  --background: #f8fafc;
  --background-secondary: #f1f5f9;
  --foreground: #0f172a;
  --muted: #e2e8f0;
  --muted-foreground: #64748b;
  --card: rgba(255, 255, 255, 0.9);
  --card-foreground: #0f172a;
  --card-hover: rgba(255, 255, 255, 1);
  --border: rgba(0, 0, 0, 0.08);
  --border-hover: rgba(0, 0, 0, 0.15);
  --section-alt: #f1f5f9;
  --surface: rgba(0, 0, 0, 0.02);
}

`;

// Replace everything before /* ─── Base ─── */
const baseIndex = content.indexOf('/* ─── Base ─── */');
if (baseIndex !== -1) {
  content = newHeader + content.substring(baseIndex);
  fs.writeFileSync(filePath, content);
  console.log('Fixed globals.css successfully.');
} else {
  console.error('Could not find base section.');
}
