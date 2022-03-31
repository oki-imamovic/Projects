

export function flowControl() {
  const a: boolean = false;
  let result: number = 20;

  if (a) {
    result = 10;
  } else {
    result = 5;
  }

  return result;
}

// flowControlOperators
export function doIPayTax(): boolean {
  const netSalary: number = 800;
  const taxCardNumber: number = 2.5;
  const nonTaxableAmount: number = 300;

  // 1000 KM  => 100 KM
  // 1000 KM - 1 * 300KM = 700 KM => 70 KM
  // 1000 KM - 1.5 * 300 KM = 550 KM => 55 KM
  // 1000 KM - 2 * 300 KM = 400 KM => 40 KM
  // 550 KM - 1 * 300 KM = 250 KM => 25 KM
  // 400 KM - 2 * 300 KM = -200 KM => 0 KM
  // 450 KM - 1.5 * 300 KM = 0 KM => 0 KM
  // 430 KM - 1.5 * 300 KM = -20 KM => 0 KM

  // const result: boolean = (nonTaxableAmount * taxCardNumber) < netSalary;
  const result: boolean = (netSalary - (nonTaxableAmount * taxCardNumber)) > 0;
  return result;
}

export function operatorSimpleCases(): boolean {
  // return 5 > 2;
  // return 2 > 2;
  // return 10 < 4;
  // return 4 < 4;
  // return 4 <= 4;
  // return 4 >= 4;
  // return 4 == 4;

  // return '4' == 4; // returns true
  // return '4' === 4; // returns false

  // return 5 === 5;
  // return 5 !== 5;

  const a: number = 10;
  const b: string = "23";

  // return a > 10;
  // return a < 10;
  // return (a as unknown) < b;
  // return "23" === b;

  // return true && true;
  // return true && false;
  // return true || false;

  // return (a > 15) && (a < 9);
  return (a > 15) || (a < 9);
}

export function exercise() {
  const a: boolean = true;
  const b: boolean = false;
  const c: boolean = false;

  let result: number;

  if ((a && b) || (c && a)) {
    result = 20;
  } else if (a || b || c) {
    result = 10;
  } else if (a && (b || c) && (a || c)) {
    result = 89;
  } else {
    result = 100;
  }

  return result;
}

export function elevatorChoice(): number {
  const elevator1: number = 100;
  const elevator2: number = 2;
  const requestedFlor: number = 105;

  let result: number;

  let distance1: number = elevator1 - requestedFlor;
  let distance2: number = elevator2 - requestedFlor;

  if (distance1 < 0){
    distance1 *= (-1);
  }

  if (distance2 < 0){
    distance2 *= (-1);
  }

  if (distance1 < distance2){
    result = 1;
  }
  else {
    result = 2;
  }

  return result;
}

export function canIPay(): boolean {
  const budget: number = 200;
  const price: number = 200;

  return budget >= price;
}

export function amountDifference(): number {
  const amount1: number = 300;
  const amount2: number = 250;

  let difference: number = amount1 - amount2;

  if (difference < 0) {
    return difference * -1;
  }

  return difference;
}
