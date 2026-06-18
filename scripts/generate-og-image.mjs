import sharp from 'sharp';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

// OG image (1200×630) — v2 cube identity. Composites the cube hero
// lockup PNG onto the brand navy field, with the venture tagline and a
// registry strip set in matching type. No external SVG file; everything
// is generated here so the OG art stays in lockstep with the cube assets.

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, '..', 'public');

const W = 1200;
const H = 630;
const NAVY = '#00041B';
const CREAM = '#F0EDE4';
const GRAY = '#9CA0AB';
const HAIR = '#1C2540';
const SIENNA = '#C76833';

// Cube hero lockup, sized to sit on the left third.
const lockupTarget = 460;
const lockup = await sharp(join(publicDir, 'assets', 'faria-hero-lockup.png'))
  .resize({ width: lockupTarget, fit: 'inside' })
  .toBuffer();
const lockupMeta = await sharp(lockup).metadata();
const lockupX = 80;
const lockupY = Math.round((H - lockupMeta.height) / 2);

// Right-hand text column.
const textX = 600;
const overlay = `
<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
  <style>
    .display { font-family: 'Saira','Helvetica Neue',Arial,sans-serif; fill: ${CREAM}; }
    .mono    { font-family: 'IBM Plex Mono','SF Mono',Menlo,monospace; fill: ${GRAY}; }
    .key     { font-family: 'IBM Plex Mono','SF Mono',Menlo,monospace; fill: ${CREAM}; font-weight: 600; }
  </style>

  <!-- top + bottom structural rules -->
  <line x1="${textX}" y1="96"  x2="${W - 80}" y2="96"  stroke="${CREAM}" stroke-width="2"/>
  <line x1="${textX}" y1="534" x2="${W - 80}" y2="534" stroke="${CREAM}" stroke-width="2"/>

  <!-- venture tag -->
  <text x="${textX}" y="150" class="mono" font-size="16" font-weight="600"
    letter-spacing="3" fill="${SIENNA}">PARENT COMPANY / VENTURE INDEX</text>

  <!-- name -->
  <text x="${textX}" y="240" class="display" font-size="76" font-weight="900"
    font-style="italic" letter-spacing="2">FARIA</text>
  <text x="${textX}" y="312" class="display" font-size="40" font-weight="600"
    letter-spacing="10">INNOVATIONS</text>

  <!-- tagline -->
  <text x="${textX}" y="372" class="display" font-size="24" font-weight="500" fill="${CREAM}">Software, media, and experimental</text>
  <text x="${textX}" y="406" class="display" font-size="24" font-weight="500" fill="${CREAM}">ventures, indexed under one name.</text>

  <!-- registry strip -->
  <g font-size="15" letter-spacing="2">
    <line x1="${textX}" y1="440" x2="${W - 80}" y2="440" stroke="${HAIR}" stroke-width="1"/>
    <text x="${textX}" y="472" class="key">INDEX</text>
    <text x="${textX + 120}" y="472" class="mono">PARCENTRY / FLIGHT RISK / LABS</text>
    <line x1="${textX}" y1="490" x2="${W - 80}" y2="490" stroke="${HAIR}" stroke-width="1"/>
    <text x="${textX}" y="520" class="key">LOCATION</text>
    <text x="${textX + 120}" y="520" class="mono">BELTSVILLE, MARYLAND</text>
  </g>
</svg>`;

await sharp({
  create: { width: W, height: H, channels: 4, background: NAVY },
})
  .composite([
    { input: lockup, left: lockupX, top: lockupY },
    { input: Buffer.from(overlay), top: 0, left: 0 },
  ])
  .png()
  .toFile(join(publicDir, 'og-image.png'));

console.log('✓ og-image.png generated (1200×630, cube identity)');
