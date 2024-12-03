import { readInputLineByLine } from "../utils/main.ts";

if (import.meta.main) {
  let result: number = 0;

  for await (const text of readInputLineByLine("03/input.txt")) {
    const regex = new RegExp(/mul\((\d+)\,(\d+)\)/, "g");

    result += Array.from(text.matchAll(regex))
      .reduce((acc, arr) => acc + (Number(arr[1]) * Number(arr[2])), 0);
  }

  console.log(result);
}
