import sharp from 'sharp';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, '..', 'public');

const svg = readFileSync(join(publicDir, 'og-image.svg'));

await sharp(svg, { density: 150 })
  .resize(1200, 630)
  .png()
  .toFile(join(publicDir, 'og-image.png'));

console.log('✓ og-image.png generated (1200×630)');
