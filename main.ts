// Entry program for the news-image-20261120 bounty.
// It hands in the finished picture: a plain, deterministic copy of
// entry.png (the infographic drawn for Friday 20 November 2026)
// into the grader's output directory, as entry.png. A copy writes the
// same bytes every run, so the two grading runs agree exactly.
import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outDir, { recursive: true });
copyFileSync(join(here, "entry.png"), join(outDir, "entry.png"));
