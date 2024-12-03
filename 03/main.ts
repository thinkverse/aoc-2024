import { readInputLineByLine } from "../utils/main.ts";

if (import.meta.main) {
  let result: number = 0;

  for await (const text of readInputLineByLine("03/input.txt")) {
    const regex = new RegExp(/mul\((\d+)\,(\d+)\)/, "g");

    result += Array.from(text.matchAll(regex))
      .map(((x) => [Number(x[1]), Number(x[2])]))
      .reduce((acc, arr) => acc + (arr[0] * arr[1]), 0);
  }

  console.log(result);
}
