import sharp from 'sharp';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const input = path.join(root, 'public/atsakiklis-problema-sprendimas.png');
const output = path.join(root, 'public/atsakiklis-problema-sprendimas.webp');

await sharp(input).webp({ quality: 82, effort: 4 }).toFile(output);
console.log('[optimize-atsakiklis-image] Wrote', output);
