/**
 * Problem:
 *
 * Having given three numbers, return smallest one.
 *
 * Examples:
 * [10, 15, 13] => 10
 * [2, 4, 5] => 2
 * [1, 1, 1] => 1
 *

 export function min(): number {
  const a: number = 2;
  const b: number = 3;
  const c: number = 4;
  let result: number;

  if ((a < b) && (a < c)) {
    result = a;
  } else if ((b < a) && (b < c)) {
    result = b;
  } else {
    result = c;
  }
 */
export function min(): number {
  const a: number = 2;
  const b: number = 3;
  const c: number = 4;
  let result: number;


  if (a < b) {
    if (a < c) {
      result = a;
    } else {
      result = c;
    }
  } else {
    if (b < c) {
      result = b;
    } else {
      result = c;
    }
  }


  return result;
}

/**
 * Problem:
 *
 * With given count of passengers which are currently on the bus, bus capacity and
 * amount of passengers which want to get on the bus, function needs to return true or false,
 * related to result can Bus accept new passengers.
 *
 * Examples:
 * [passengersInTheBus: 40, busCapacity: 50, passengersToGetOnTheBus: 10] => true
 * [passengersInTheBus: 41, busCapacity: 50, passengersToGetOnTheBus: 10] => false
 * [passengersInTheBus: 28, busCapacity: 30, passengersToGetOnTheBus: 1] => true
 */
export function openBusDoor(): boolean {
  const passengersInTheBus: number = 28;
  const busCapacity: number = 30;
  const passengersToGetOnTheBus: number = 10;

  const leftCapacity: number = busCapacity - passengersInTheBus;

  return passengersToGetOnTheBus <= leftCapacity;
}

/**
 * Problem:
 *
 * With given distance and season, function needs to return vehicle which should be picked to travel:
 *
 * "Skateboard" - When distance is smaller or equal to 5
 * "Bicycle" - When distance is bigger than 5 and smaller or equal to 10
 * "Motorcycle" - When distance is bigger than 10 and smaller or equal to 20
 * "Car" - When distance is bigger than 20 (any season)
 *
 * On different seasons, different vehicles can be used (goal is to pick first applicable vehicle from upper list)
 * Spring: Skateboard, Bicycle, Motorcycle and Car
 * Summer: Skateboard, Bicycle, Motorcycle and Car
 * Autumn: Bicycle and Car
 * Winter: Car
 *
 * Examples:
 * [distance: 100, season: "Spring"] => "Car"
 * [distance: 15, season: "Autumn"] => "Car"
 * [distance: 15, season: "Spring"] => "Motorcycle"
 * [distance: 4, season: "Summer"] => "Skateboard"
 * [distance: 7, season: "Autumn"] => "Bicycle"
 */

/*export function pickVehicle(): string {
 const distance: number = 2;
 const season: string = "Autumn";
 let result: string;
 if (season === "Winter") {
   result = "Car";
 } else if (season === "Autumn") {
   if (distance <= 10) {
     result = "Bicycle";
   } else {
     result = "Car";
   }
 } else {
   if (distance <= 5) {
     result = "Skateboard";
   } else if (distance <= 10) {
     result = "Bicycle";
   } else if (distance <= 20) {
     result = "Motorcycle";
   } else {
     result = "Car";
   }
 }

 return result;
*/
export function pickVehicle(): string {
  const distance: number = 3;
  const season: string = "Spring";
  let result: string;

  if (distance <= 5 && (season == "Spring" || season == "Summer")) {
    result = "Skateboard";
  } else if (distance <= 10 && (season == "Spring" || season == "Summer" || season == "Autumn")) {
    result = "Bicycle";
  } else if (distance <= 20 && (season == "Spring" || season == "Summer")) {
    result = "Motorcycle";
  } else {
    result = "Car";
  }

  return result;
}

// export function compare(): boolean {
//   const a: number = ("5" as any);
//   const b: number = 5;
//
//   return a === b;
// }

/**
 * Progressive tax calculation.
 *
 * Tax percentage is percentage of income which needs to be paid as tax.
 * In progressive tax calculation, tax percentage depends of the income.
 *
 * Rules:
 * Income     Tax Percentage
 * up to 100          2
 * up to 1000         5
 * up to 3000        10
 * up to 5000        12
 * up to inf         20
 *
 * Examples:
 * [50] => 1
 * [100] => 2
 * [200] => [100](2%) + [100](5%) => 2 + 5 => 7
 * [3700] => [100](2%) + [1000](5%) + [2600](10%) => 2 + 50 + 260 => 312
 *
 *
 * WRONG CALCULATION
 * [100] => 2    ==>   98
 * [110] => 5.5  ==>  104.5
 * [101] => 5.05 ==>   95.95
 *
 */

export function progressiveTaxAmount(plata: number): number {

  const tax1: number = 2;
  const tax2: number = 50;
  const tax3: number = 300;
  const tax4: number = 600;
  let taxedInc: number;
  let plataUpdate: number;

  if (plata >= 1 && plata <= 100) {
    taxedInc = plata * 0.02;
    return taxedInc;

  } else if (plata >= 101 && plata <= 1000) {
    plataUpdate = plata - 100;
    taxedInc = plataUpdate * 0.05 + tax1;
    return taxedInc;

  } else if (plata >= 1001 && plata <= 3000) {
    plataUpdate = plata - 100;
    if (plataUpdate >= 1000) {
      plataUpdate = plataUpdate - 1000;
      taxedInc = plataUpdate * 0.10 + tax1 + tax2;
    } else {
      return plataUpdate * 0.05 + tax1;
    }
    return taxedInc;

  } else if (plata >= 3001 && plata <= 5000) {
    plataUpdate = plata - 1100;
    if (plataUpdate >= 3000) {
      plataUpdate = plataUpdate - 3000;
      taxedInc = plataUpdate * 0.12 + tax1 + tax2 + tax3;
    } else {
      return plataUpdate * 0.10 + tax1 + tax2;
    }
    return taxedInc;
  } else if (plata >= 5001) {
    plataUpdate = plata - 4100;
    if (plataUpdate >= 5000) {
      plataUpdate = plataUpdate - 5000;
      taxedInc = plataUpdate * 0.20 + tax1 + tax2 + tax3 + tax4;
      return taxedInc;
    } else {
      return plataUpdate * 0.12 + tax1 + tax2 + tax3;
    }
  }
}

export function progressiveTaxNextHardcoded(income: number): number {
  let totalTax: number = 0;
  let leftToBeTaxed: number = income;

  if (leftToBeTaxed > 100) {
    totalTax += 2;
    leftToBeTaxed -= 100;
  } else {
    totalTax += leftToBeTaxed * 0.02;
    leftToBeTaxed = 0;
  }

  if (leftToBeTaxed > 1000) {
    totalTax += 50;
    leftToBeTaxed -= 1000;
  } else {
    totalTax += leftToBeTaxed * 0.05;
    leftToBeTaxed = 0;
  }

  if (leftToBeTaxed > 3000) {
    totalTax += 300;
    leftToBeTaxed -= 3000;
  } else {
    totalTax += leftToBeTaxed * 0.10;
    leftToBeTaxed = 0;
  }

  if (leftToBeTaxed > 5000) {
    totalTax += 600;
    leftToBeTaxed -= 5000;
  } else {
    totalTax += leftToBeTaxed * 0.12;
    leftToBeTaxed = 0;
  }

  if (leftToBeTaxed > 0) {
    totalTax += leftToBeTaxed * 0.20;
  }

  return totalTax;
}

export function progressiveTaxNext(income: number): number {
  const taxes: number[] = [2, 5, 10, 12, 20, 25];
  const limits: number[] = [100, 1000, 3000, 5000, 10000];

  let totalTax: number = 0;
  let leftToBeTaxed: number = income;

  // for (inicijalizacija; uslov; inkrementiranje) { blok za izvrsenje }

  // 01: inicijalizacija;
  // 02: if (uslov)
  // 03: {
  // 04:    blok za izvrsenje;
  // 05: } else {
  // 06:    goTo 10
  // 07: }
  // 08:    inkrementiranje;
  // 09:    goTo 02
  // 10:    // // // Kod izvan for petlje

  for (let i = 0; i < limits.length; i++) {

    if (leftToBeTaxed > limits[i]) {
      const taxAmount: number = limits[i] * taxes[i] / 100;
      totalTax += taxAmount;
      leftToBeTaxed -= limits[i];
    } else {
      const taxAmount: number = leftToBeTaxed * taxes[i] / 100;
      totalTax += taxAmount;
      leftToBeTaxed = 0;
    }

  }

  if (leftToBeTaxed > 0) {
    totalTax += leftToBeTaxed * taxes[limits.length] / 100;
  }

  return totalTax;
}
