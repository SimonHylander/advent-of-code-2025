import assert from "assert";
import { getInput } from "~/input";

export default {
  partA,
  partB,
};

export async function partA() {
  const input = await getInput(3);
  const lines = input.split("\n");

  const sum = lines.reduce((acc, line) => {
    const batteries = line.split("");

    const rec: number[] = [];

    for (let i = 0; i < batteries.length; i++) {
      const battery = batteries[i];

      for (let j = i + 1; j < batteries.length; j++) {
        const next = batteries[j];
        rec.push(Number(battery + next));
      }
    }

    const [joltage] = rec.sort((a, b) => b - a);

    return acc + (isNaN(joltage) ? 0 : joltage);
  }, 0);

  assert(sum === 17263);
}

async function partB() {
  const input = await getInput(3);
  const lines = input.split("\n");

  const sum = lines.reduce((acc, line) => {
    const digits = line.split("").map(Number);
    const stack: number[] = [];
    const maxRemove = digits.length - 12;
    let removed = 0;

    digits.forEach((digit) => {
      while (stack.length && removed < maxRemove && Number(stack.at(-1)) < digit) {
        stack.pop();
        removed++;
      }

      stack.push(digit);
    });

    const joltage = Number(stack.slice(0, 12).join(""));
    return acc + joltage;
  }, 0);

  assert(sum === 170731717900423);
}
