import fs from 'node:fs';
import path from 'node:path';
const root=process.cwd();
const required=['index.html','about.html','practice-areas.html','managing-partner.html','insights.html','contact.html','privacy.html','terms.html','404.html','assets/css/site.css','assets/js/site.js','assets/images/logo-gold.png','assets/media/alphonce-advocate-wig.png','assets/media/alphonce-logo-animation.mp4'];
let fail=false;
for(const f of required){if(!fs.existsSync(path.join(root,f))){console.error('Missing:',f);fail=true;}}
for(const f of required.filter(f=>f.endsWith('.html'))){const s=fs.readFileSync(path.join(root,f),'utf8');if(!s.includes('name="viewport"')){console.error('Missing viewport:',f);fail=true;}if(!s.includes('Alphonce Odhiambo')){console.error('Brand name missing:',f);fail=true;}}
if(fail) process.exit(1);
console.log('Site check passed:',required.length,'required files present; responsive viewport and branding confirmed.');
