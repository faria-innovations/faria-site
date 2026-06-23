import sharp from 'sharp';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

// OG image (1200×630) — technology-company positioning. Navy field, the
// cube-only mark, a straight FARIA / INNOVATIONS lockup, and the headline
// "SOFTWARE AND DATA VENTURES". No warped/curved text, no Flight Risk,
// no glow, no gradient.

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, '..', 'public');

const W = 1200;
const H = 630;
const NAVY = '#00041B';
const PAPER = '#F4F1E8';
const BLUE = '#3B82F6';
const GRAY = '#9CA0AB';

// cube-only mark (dark field matches NAVY so it sits flush)
const cubePx = 188;
const cube = await sharp(join(publicDir, 'assets', 'faria-cube-logo.png'))
  .resize(cubePx, cubePx, { fit: 'inside' })
  .toBuffer();
const cubeX = 84;
const cubeY = 150;

const tx = cubeX + cubePx + 40; // text column start
const overlay = `
<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
  <line x1="84" y1="96" x2="${W - 84}" y2="96" stroke="${PAPER}" stroke-width="2"/>
  <line x1="84" y1="534" x2="${W - 84}" y2="534" stroke="${PAPER}" stroke-width="2"/>

  <!-- straight lockup type, aligned beside the cube -->
  <text x="${tx}" y="232"
    font-family="'Saira','Helvetica Neue',Arial,sans-serif"
    font-weight="900" font-size="92" letter-spacing="2" fill="${PAPER}">FARIA</text>
  <text x="${tx + 4}" y="286"
    font-family="'Saira','Helvetica Neue',Arial,sans-serif"
    font-weight="600" font-size="29" letter-spacing="14" fill="${PAPER}">INNOVATIONS</text>

  <!-- headline -->
  <text x="84" y="424"
    font-family="'Saira','Helvetica Neue',Arial,sans-serif"
    font-weight="800" font-size="56" letter-spacing="1" fill="${PAPER}">SOFTWARE AND DATA VENTURES</text>

  <!-- classification line -->
  <text x="84" y="500"
    font-family="'IBM Plex Mono','SF Mono',Menlo,monospace"
    font-size="17" letter-spacing="3" fill="${BLUE}">TECHNOLOGY VENTURE COMPANY</text>
  <text x="${W - 84}" y="500" text-anchor="end"
    font-family="'IBM Plex Mono','SF Mono',Menlo,monospace"
    font-size="17" letter-spacing="2" fill="${GRAY}">BELTSVILLE, MARYLAND</text>
</svg>`;

await sharp({ create: { width: W, height: H, channels: 4, background: NAVY } })
  .composite([
    { input: cube, left: cubeX, top: cubeY },
    { input: Buffer.from(overlay), top: 0, left: 0 },
  ])
  .png()
  .toFile(join(publicDir, 'og-image.png'));

console.log('✓ og-image.png generated (1200×630, technology positioning)');
