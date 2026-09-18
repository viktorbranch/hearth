import sharp from 'sharp';
import { readFileSync } from 'fs';

const svg = readFileSync('./public/screenshot-home.svg', 'utf-8');

sharp(Buffer.from(svg))
  .resize(800, 600)
  .png()
  .toFile('./public/screenshot-home.png')
  .then(() => console.log('Screenshot generated!'))
  .catch(console.error);

