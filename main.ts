// One Word, One Username, One Reward.
// The entry IS the make.fun username: one word, nothing else.
//
// Deterministic by construction: the output is a single constant string.
// No input, no network, no clock, no randomness — every run writes the
// exact same bytes, so the grader's two runs are byte-identical.
import { mkdirSync, writeFileSync } from "node:fs";

// The entry value itself — this exact username is the whole submission.
const ENTRY_USERNAME = "zesty-otter-91";

// Gate: the entry must be 1-30 characters and not only whitespace.
function validateEntry(entry: string): string {
  if (entry.length < 1 || entry.length > 30) {
    throw new Error(`entry of length ${entry.length} fails the 1-30 gate`);
  }
  // A blank-looking entry is not a word at all.
  if (entry.trim().length === 0) {
    throw new Error("entry must be a real word, not only whitespace");
  }
  return entry;
}

// Build the exact output bytes: the username plus one trailing newline.
function buildEntry(): string {
  return `${validateEntry(ENTRY_USERNAME)}\n`;
}

function main(): void {
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", buildEntry(), "utf8");
}

main();
