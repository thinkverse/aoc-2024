import { createReadStream  } from 'node:fs';
import * as readline from 'node:readline/promises';

const left: number[] = [];
const right: number[] = [];
const dist: number[] = [];
const sim: number[] = [];

if (import.meta.main) {
  const stream = createReadStream("01/input.txt");

  const rl = readline.createInterface({
    input: stream
  })

  for await (const text of rl) {
    const [l, r] = text.split("   ");

    left.push(Number(l));
    right.push(Number(r));
  }

  rl.close();

  left.sort();
  right.sort();

  for (let index = 0; index < left.length; index++) {
    dist.push(Math.abs(left[index] - right[index]));

    sim.push(left[index] * right.filter(num => num === left[index]).length);
  }

  const sum = (arr: number[]) => arr.reduce((acc, num) => acc + num, 0);

  console.log(sum(dist), sum(sim));
}
