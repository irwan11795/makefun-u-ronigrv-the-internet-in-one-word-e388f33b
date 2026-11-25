import * as fs from 'node:fs';
import * as path from 'node:path';

const WORD = 'feral';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, 'entry.txt'), WORD);
