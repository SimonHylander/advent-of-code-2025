import assert from "assert";
import { getInput } from "~/input";

import { adjacentPositions } from "~/util";

export default {
  partA,
  partB,
};

const example = `..@@.@@@@.
@@@.@.@.@@
@@@@@.@.@@
@.@@@@..@.
@@.@@@@.@@
.@@@@@@@.@
.@.@.@.@@@
@.@@@.@@@@
.@@@@@@@@.
@.@.@@@.@.`;

const countNeighbors = (lines: string[][], i: number, j: number) => Object.values(adjacentPositions(lines, i, j)).filter((v) => v === "@").length;

export async function partA() {
  const input = await getInput(4);
  const lines = input.split("\n").map((line) => line.split(""));

  let sum = 0;
  for (let i = 0; i < lines.length; i++) {
    for (let j = 0; j < lines.length; j++) {
      if (lines[i][j] === "@" && countNeighbors(lines, i, j) < 4) {
        sum++;
      }
    }
  }

  assert(sum === 1356);
}

export async function partB() {
  const input = await getInput(4);
  let lines = input.split("\n").map((line) => line.split(""));
  let sum = 0;

  while (true) {
    const toRemove: [number, number][] = [];

    for (let i = 0; i < lines.length; i++) {
      for (let j = 0; j < lines.length; j++) {
        if (lines[i][j] === "@" && countNeighbors(lines, i, j) < 4) {
          toRemove.push([i, j]);
        }
      }
    }

    if (toRemove.length === 0) {
      break;
    }

    sum += toRemove.length;

    for (const [i, j] of toRemove) {
      lines[i][j] = ".";
    }
  }

  assert(sum === 8713);
}
