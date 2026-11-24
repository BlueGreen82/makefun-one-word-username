// One Word, One Username, One Reward.
// The entry is the make.fun username itself: one word, nothing else.
// Deterministic: same bytes on every run, no input, no network, no clock.
import { mkdirSync, writeFileSync } from "node:fs";

const USERNAME = "zesty-otter-91";

function writeEntry(): void {
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", `${USERNAME}\n`, "utf8");
}

writeEntry();
