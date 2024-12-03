import { PathLike } from "node:fs";
import { createReadStream  } from 'node:fs';
import * as readline from 'node:readline/promises';

export async function* readInputLineByLine(path: PathLike) {
  const stream = createReadStream(path);

  const rl = readline.createInterface({
    input: stream
  });

  for await (const line of rl) {
    yield line;
  }

  rl.close();
  stream.close();
}