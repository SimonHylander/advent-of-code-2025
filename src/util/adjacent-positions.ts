export function adjacentPositions(lines: string[][], i: number, j: number, diagonal: boolean = true) {
  const top = lines[i - 1]?.[j] ?? null;
  const bottom = lines[i + 1]?.[j] ?? null;
  const left = lines[i]?.[j - 1] ?? null;
  const right = lines[i]?.[j + 1] ?? null;

  const topLeft = lines[i - 1]?.[j - 1] ?? null;
  const topRight = lines[i - 1]?.[j + 1] ?? null;
  const bottomLeft = lines[i + 1]?.[j - 1] ?? null;
  const bottomRight = lines[i + 1]?.[j + 1] ?? null;

  if (diagonal) {
    return {
      top,
      bottom,
      left,
      right,
      topLeft,
      topRight,
      bottomLeft,
      bottomRight,
    };
  }

  return {
    top,
    bottom,
    left,
    right,
  };
}
