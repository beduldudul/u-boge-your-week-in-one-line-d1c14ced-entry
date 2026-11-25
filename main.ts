import { writeFileSync, mkdirSync } from "node:fs";

// One line summing up the week: 150 bounty entries written, the judge read
// them all, and only one of them paid — the win and the fail in one breath.
const line =
  "I wrote 150 bounty entries this week; the judge read them all and paid me $1.50 for one.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
