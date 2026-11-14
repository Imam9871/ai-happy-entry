// ai-happy-01: copies the bundled happy image to /output/entry.png — warm rain, warm hearts.
// (v2: writeFileSync with the buffer read once; output dir is created if missing.)

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const src = join(dirname(new URL(import.meta.url).pathname), 'entry.png');

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.png'), readFileSync(src));
