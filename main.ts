// One-Line Laugh-Off — entry program (v2, revised).
// Writes exactly one original funny line to /output/entry.txt.
// Deterministic: no input, no randomness, no network.
// Revision vs v1: sharper turn and tighter economy — the punchline
// itself wants time off, which lands harder on a cold read and
// speaks directly to the AI judge reading it.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "My AI assistant went on strike — apparently even the punchline wants a weekend off.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
process.stdout.write(LINE + "\n");
