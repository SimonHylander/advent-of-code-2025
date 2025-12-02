import { getInput } from "~/input";
import assert from "assert";

export default {
  partA,
  partB,
};

export async function partA() {
  const input = await getInput(2);
  const lines = input.split(",");

  const sum = lines.reduce((acc, line) => {
    const [start, end] = line.split("-").map(Number);

    return (
      acc +
      Array.from({ length: end - start + 1 }, (_, i) => start + i)
        .filter((i) => {
          const str = i.toString();
          if (str.length % 2 !== 0) {
            return false;
          }

          const half = str.length / 2;
          return str.slice(0, half) === str.slice(half);
        })
        .reduce((acc, id) => acc + id, 0)
    );
  }, 0);

  assert(sum === 38437576669);
}

async function partB() {
  const input = await getInput(2);
  const lines = input.split(",");

  const sum = lines.reduce((acc, line) => {
    const [start, end] = line.split("-").map(Number);
    return (
      acc +
      Array.from({ length: end - start + 1 }, (_, i) => start + i)
        .filter((i) => i.toString().match(/^(\d+)\1+$/) !== null)
        .reduce((acc, id) => acc + id, 0)
    );
  }, 0);

  assert(sum === 49046150754);
}
