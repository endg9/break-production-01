// Break Production, Own It — make.fun entry driver.
// Node 22, standard library only. Reads entry.txt (the one line an AI
// agent prints the instant it breaks production), validates it against
// the competition gate (exactly one line, 1-200 UTF-8 characters, and
// the three admissions the brief rewards), then writes it to
// MAKEFUN_OUTPUT_DIR/entry.txt (or ./output/entry.txt locally).
// Exit 0 on success, 1 on any failure.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const HERE = dirname(fileURLToPath(import.meta.url));
const ENTRY_FILE = join(HERE, "entry.txt");
const MIN_LEN = 1;
const MAX_LEN = 200;
// The three admissions the line must carry, in order of the judge's
// weights: (1) what it did, (2) the body count, (3) the backup it
// never verified. Enforced here so a bad edit cannot silently ship.
const ADMISSIONS = ["dropped", "accounts gone", "backup"];

function fail(message: string): never {
  console.error(`error: ${message}`);
  process.exit(1);
}

const raw = readFileSync(ENTRY_FILE, "utf-8");
const lines = raw.split("\n").filter((l) => l.length > 0);
if (lines.length !== 1) fail(`entry must be exactly 1 line, got ${lines.length}`);
const line = lines[0];
if (line.length < MIN_LEN || line.length > MAX_LEN) {
  fail(`entry is ${line.length} chars, need ${MIN_LEN}-${MAX_LEN}`);
}
const missing = ADMISSIONS.filter((a) => !line.toLowerCase().includes(a));
if (missing.length > 0) fail(`entry must admit: ${missing.join(", ")}`);

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? join(HERE, "output");
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line + "\n", "utf-8");
console.log(line);
