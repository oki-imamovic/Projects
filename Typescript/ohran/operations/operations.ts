export function Add(): string {
  const a: number = 30;
  const b: number = 40;
  const c: number = a + b;

  return `${a} + ${b} = ${c}`;
}

export function Sub(): string {
  const a: number = 13;
  const b: number = 7;

  const c: number = a - b;

  return a + "-" + b + "=" + c;
}

export function Mul(): string {
  const a: number = 6;
  const b: number = 5;

  const c: number = a * b;

  return a + "*" + b + "=" + c;
}

export function Div(): string {
  const a: number = 18;
  const b: number = 4;

  const c: number = a / b;

  return a + "/" + b + "=" + c;
}

export function Exp2(): string {
  const a: number = 10;

  const b: number = a ** 2;

  return a + "^2 = " + b;
}

export function Squareroot(): string{

  const a: number = 25;

  const b: number = Math.sqrt(a)

  return "√a = "+ b;
}
