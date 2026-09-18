import sharp from 'sharp';
import { readFileSync } from 'fs';

const svg = readFileSync('./public/favicon.svg', 'utf-8');

const sizes = [16, 32, 72, 96, 128, 144, 152, 192, 384, 512];
const androidSizes = [192, 512];
const appleSizes = [180];

async function generateIcons() {
  for (const size of sizes) {
    await sharp(Buffer.from(svg))
      .resize(size, size)
      .png()
      .toFile(`./public/pwa-${size}x${size}.png`);
  }

  for (const size of androidSizes) {
    await sharp(Buffer.from(svg))
      .resize(size, size)
      .png()
      .toFile(`./public/android-chrome-${size}x${size}.png`);
  }

  for (const size of appleSizes) {
    await sharp(Buffer.from(svg))
      .resize(size, size)
      .png()
      .toFile(`./public/apple-touch-icon.png`);
  }

  await sharp(Buffer.from(svg))
    .resize(192, 192)
    .png()
    .toFile('./public/maskable-192x192.png');

  await sharp(Buffer.from(svg))
    .resize(512, 512)
    .png()
    .toFile('./public/maskable-512x512.png');

  console.log('Icons generated!');
}

generateIcons().catch(console.error);
