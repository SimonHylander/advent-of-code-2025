import assert from "assert";
import { getInput } from "~/input";

export default {
  partA,
  partB,
};

export async function partA() {
  const input = await getInput(1);
  const lines = input.split("\n");

  const result = lines.reduce(
    (current, line) => {
      const direction = line.substring(0, 1);
      const numberOfTurns = +line.substring(1);
      const position = move(current.position, direction, numberOfTurns);

      return {
        position,
        count: position === 0 ? current.count + 1 : current.count,
      };
    },
    {
      position: 50,
      count: 0,
    }
  );

  function move(position: number, direction: string, amount: number) {
    if (direction === "L") {
      return position - amount < 0 ? (position - amount + 100) % 100 : position - amount;
    }

    if (direction === "R") {
      return position + amount > 99 ? (position + amount) % 100 : position + amount;
    }

    return position;
  }

  assert(result.count === 1139);
}

async function partB() {
  const input = await getInput(1);
  const lines = input.split("\n");

  const result = lines.reduce(
    (current, line) => {
      const direction = line.substring(0, 1);
      const numberOfTurns = +line.substring(1);
      const { position, zeroDials } = move(current.position, direction, numberOfTurns);

      return {
        position,
        count: current.count + zeroDials,
      };
    },
    {
      position: 50,
      count: 0,
    }
  );

  assert(result.count === 6684);

  function move(position: number, direction: string, amount: number) {
    let zeroDials = 0;
    for (let i = 0; i < amount; i++) {
      if (direction === "L") {
        position = (position - 1 + 100) % 100;
      } else {
        position = (position + 1) % 100;
      }

      if (position === 0) {
        zeroDials++;
      }
    }

    return { position, zeroDials };
  }
}
