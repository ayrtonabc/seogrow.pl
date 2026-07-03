const fs = require('fs');
const path = require('path');
const root = 'C:/Users/Ayrton/Desktop/webs/landing/seogrow.pl-main';
let patched = 0;
let skipped = 0;
function walk(d) {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const p = path.join(d, e.name);
    if (e.isDirectory()) walk(p);
    else if (e.isFile() && p.endsWith('.html')) {
      let html = fs.readFileSync(p, 'utf8');
      let original = html;
      // Match <html lang="pl"> with optional whitespace, add translate="no"
      html = html.replace(/<html lang="pl"\s*>/g, '<html lang="pl" translate="no">');
      if (html !== original) {
        fs.writeFileSync(p, html, 'utf8');
        patched++;
        console.log('Patched:', p);
      } else {
        skipped++;
      }
    }
  }
}
walk(root);
console.log('---');
console.log('Patched:', patched);
console.log('Skipped (already had it or different lang):', skipped);