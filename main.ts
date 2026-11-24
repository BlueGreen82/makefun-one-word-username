// One Word, One Username, One Reward.
// The entry is the make.fun username itself: one word, nothing else.
//
// Deterministic by construction: the output is a single constant string.
// No input, no network, no clock, no randomness — every run writes the
// exact same bytes, so the two grader runs are byte-identical.
import { mkdirSync, writeFileSync } from "node:fs";

const USERNAME = "zesty-otter-91";

// Gate: the entry must be 1-30 characters and not only whitespace.
function validateEntry(entry: string): string {
  if (entry.length < 1 || entry.length > 30) {
    throw new Error(`entry length ${entry.length} is outside the 1-30 gate`);
  }
  if (entry.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  return entry;
}

// Build the exact output bytes: the username plus one trailing newline.
function buildEntry(): string {
  return `${validateEntry(USERNAME)}\n`;
}

function main(): void {
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", buildEntry(), "utf8");
}

main();
