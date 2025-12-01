export async function getInput(day: number) {
  return await Bun.file(new URL(`${import.meta.url}/../../input/${day}/input.txt`)).text();
}
