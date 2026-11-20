// Entry program for the GTA 6 meme bounty on make.fun.
//
// The entry itself is the X post named in POST.json: the ghost meme,
// its caption and its play code all live in that post. So this program
// has exactly one job — hand POST.json to the grader unchanged by
// copying it from the repository directory into the output directory.
//
// It uses only the Node.js standard library, touches no network and
// no clock, and writes the same bytes on every run.

import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const repoDir = process.env.MAKEFUN_BOT_DIR || "/bot";
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const postFile = join(repoDir, "POST.json");

// Fail loudly rather than silently if POST.json is not where it should
// be: without it there is no entry for the grader to read at all.
mkdirSync(outDir, { recursive: true });
try {
  copyFileSync(postFile, join(outDir, "POST.json"));
} catch (err) {
  console.error(`Could not copy ${postFile}: ${err.message}`);
  process.exit(1);
}
