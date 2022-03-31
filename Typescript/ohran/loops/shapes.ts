import { func } from '../../Code';


export function coordinateSystem(counter: number) {
  const system: string[] = [];

  for (let i = 0; i < 100; i++) {
    let r: string = "";

    for (let j = 0; j < 100; j++) {
      r += "*";
    }

    system.push(r);
  }

  const frame: number = counter%10 + 1;

  circle(system, Math.floor(50/frame), Math.floor(50/frame), Math.floor(25/frame), "1");
  circle(system, Math.floor(5*frame), Math.floor(5*frame), Math.floor(5*frame), "4");
  circle(system, Math.floor(10*frame % 100), Math.floor(13*frame % 100), Math.floor(8*frame % 30), "0");

  return system;
}

function placeSymbol(system: string[], x: number, y: number, symbol: string = "0"): void {
  system[y] = system[y].substring(0, x) + symbol + system[y].substring(x + 1);
}

function circle(system: string[], cx: number, cy: number, r: number, symbol: string = "0") {
  // (x - cx)2 + (y - cy)2 = r2

  for (let x = 0; x < system.length; x++) {
    for (let y = 0; y < system[x].length; y++) {
      if (Math.abs(Math.pow(x - cx, 2) + Math.pow(y - cy, 2) - Math.pow(r, 2)) <= r) {
        placeSymbol(system, x, y, symbol);
      }
    }
  }
}
