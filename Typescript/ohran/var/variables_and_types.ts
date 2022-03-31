

export function Variables(): any {
  let a: number = 10;
  const b: number = 15;

  return b;
}

export function Types(): any {
  let vat: number = 17;
  let company: string = 'BMW';
  let price: number = 100;
  let isHoliday: boolean = true;

  price = price * vat / 99 + price;
  //      number: 17     +   string: 100
  return price;
}

export function HelloWorld(): string {
  return "Hello" + " World!" + 100;
}
