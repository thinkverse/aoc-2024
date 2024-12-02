import { readInputLineByLine } from "../utils/main.ts";

type Direction = 'increasing' | 'decreasing';
type Marker = 'safe' | 'unsafe';

let safe: number = 0;
let unsafe: number = 0;

if (import.meta.main) {
  for await (const text of readInputLineByLine("02/input.txt")) {
    const numbers = text.split(" ");
    let direction: Direction = 'increasing';
    let marker: Marker = 'safe';

    for (let index = 0; index < numbers.length -1; index++) {
      const diff = Number(numbers[index]) - Number(numbers[index + 1]);
      
      const currentDirection: Direction = (diff < 0 ? 'decreasing' : 'increasing');

      if (index == 0) {
        direction = currentDirection;
      } else {
        if (currentDirection !== direction) {
          marker = 'unsafe';
          break;
        } else {
          direction == currentDirection;
        }
      }

      if (Math.abs(diff) >= 1 && Math.abs(diff) <= 3) {
        marker = 'safe';
      } else {
        marker = 'unsafe';
        break;
      }
    }

    marker == 'safe' ? safe++ : unsafe++;
  }

  console.log(safe);
}
