import { readdir, rm, stat } from "node:fs/promises";
import { resolve } from "node:path";

const conflictPattern = /conflicted copy/i;

async function removeConflictedCopies(directory) {
  let removedCount = 0;

  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const entryPath = resolve(directory, entry.name);

    if (conflictPattern.test(entry.name)) {
      await rm(entryPath, { recursive: true, force: true });
      removedCount += 1;
    } else if (entry.isDirectory()) {
      removedCount += await removeConflictedCopies(entryPath);
    }
  }

  return removedCount;
}

const outputDirectory = resolve(process.argv[2] ?? "dist");
const outputStats = await stat(outputDirectory).catch(() => null);

if (!outputStats?.isDirectory()) {
  console.error(`Build output directory not found: ${outputDirectory}`);
  process.exitCode = 1;
} else {
  const removedCount = await removeConflictedCopies(outputDirectory);
  console.log(`Removed ${removedCount} conflicted build files from ${outputDirectory}`);
}
