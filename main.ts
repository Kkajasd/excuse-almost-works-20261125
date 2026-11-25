import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "My router died halfway through the GTA 6 preload and the engineer can't come until Friday.";

const WORDS = ENTRY.trim().split(/\s+/).filter(Boolean).length;

if (
  ENTRY.length === 0 ||
  ENTRY.includes("\n") ||
  ENTRY.length > 140 ||
  WORDS > 20
) {
  throw new Error("ENTRY must be a single line of 1-140 characters and at most 20 words");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
