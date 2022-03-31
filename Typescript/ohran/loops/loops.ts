export function debugging(): number {
  let a: number = 20;
  let b: number = 10.5;

  let c: string = a.toString() + b.toString();

  const result: number = parseInt(c);

  return result;
}

export function forLoop(arr: number[]): number[] {

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 10) {
      arr[i] = arr[i] + 1;
    }
  }

  return arr;
}

/**
 * Sums all numbers from start to end, including start and end.
 *
 * TODO: To Resolve
 *
 * @param start
 * @param end
 */
export function sumAll(): number {
  const start: number = 25;
  const end: number = 46;

  let sum: number = 0;

  for (let num = start; num <= end; num++) {
    sum += num;
  }

  return sum;
}

/**
 * Sum all even numbers from given [start] and [end].
 *
 * Example:
 * [5, 10] => 6 + 8 + 10 = 24
 * [6, 10] => 6 + 8 + 10 = 24
 * [1, 3] => 2
 * [1, 11] => 2 + 4 + 6 + 8 + 10 = 30
 */
export function sumAllEvenNumbersFromStartToEnd(): number {

  const a: number = 19;
  const b: number = 218987434;

  let sum: number = 0;

  for (let num = a; num <= b; num++) {
    if (num % 2 == 0) {
      sum += num;
    }
  }

  return sum;
}


/**
 * Sum all odd numbers from given [start] and [end].
 */
export function sumAllOddNumbersFromStartToEnd(): number {

  const a: number = 20;
  const b: number = 30;

  let sum: number = 0;

  for (let num = a; num <= b; num++) {
    if (num % 2 != 0) {
      sum += num;
    }
  }

  return sum;
}

export function sumAllEvenNumbersFromStartToEndDifferentIncrement(): number {
  const a: number = 19;
  const b: number = 218987434;

  let sum: number = 0;

  let startNum = a;
  if (startNum % 2 !== 0) {
    startNum++;
  }

  for (let num = startNum; num <= b; num += 2) {
    sum += num;
  }

  return sum;
}

// TODO: Apply same approach, to sum up all odd numbers.

export function fillArrWithNums(): number[] {
  const result: number[] = [];

  const scope: number = 30;
  const treshold: number = 10;

  for (let i = 1; i <= scope; i++) {
    result.push(i);
  }

  for (let i = 0; i < result.length; i++) {
    if (result[i] % 2 === 0) {
      result[i]++;
    }
  }

  for (let i = 0; i < result.length; i++) {

    if (result[i] < treshold) {
      result[i] = treshold;
    } else if (result[i] > scope - treshold) {
      result[i] = scope - treshold;
    } else {
      result[i] = i % 2;
    }

  }

  return result;
}

// TODO: Homework

/**
 *
 * 3) Given array of numbers (represents financial transactions), program returns information is budget possible or
 * not.
 * Example: transactions = [30, -20, -23, 959, 292, 111, -559]
 * Response: Budget is not valid, since transaction on index [2], having amount [-23] is not possible with budget [10].
 * Example: transactions = [30, -20, -5, 95, 5, 20, -559, 2000]
 * Response: Budget is not valid, since transaction on index [6], having amount [-559] is not possible with budget
 * [125]. Example: transactions = [30, -20, -5, 95, 5, 20, -125] Response: Budget is valid. Final value after
 * transactions is [0].
 */


/* Math.floor(Math.random() * 100) + 1    -  takes random numbers from 1 to 100*/


/* 1) Given N, build array of N random numbers (use Math.random()). */
export function randomNumbersArray(): number[] {

  const N: number = 50;

  let arr: number[] = [];

  for (let i = 1; i <= N; i++) {
    arr.push(Math.random());
  }

  return arr;
}

/* 2) Given array of numbers and limit, make a function that builds new array with values only smaller than "Limit".
 * Example: arr = [2, 5, 0, 10, 33, 12, 34], limit = 7
 * Result: [2, 5, 0]; */

export function limitNumberArray(): number [] {

  const arr: number[] = [2, 5, 0, 10, 33, 12, 34];
  const limit: number = 7;

  const arr2: number[] = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < limit) {
      arr2.push(arr[i]);
    }
  }

  return arr2
}


/* 3) Given array of numbers (represents financial transactions), program returns information is budget possible or not.
 * Example: transactions = [30, -20, -23, 959, 292, 111, -559]
 * Response: Budget is not valid, since transaction on index [2], having amount [-23] is not possible with budget [10].
 * Example: transactions = [30, -20, -5, 95, 5, 20, -559, 2000]
 * Response: Budget is not valid, since transaction on index [6], having amount [-559] is not possible with budget [125].
 * Example: transactions = [30, -20, -5, 95, 5, 20, -125]
 * Response: Budget is valid. Final value after transactions is [0]. */


export function representFinancialTransactions(): any {

  const transactions: number[] = [30, -20, -5, 95, 5, 20, -559, 2000];
  let sum: number = 0;

  for (let i = 0; i < transactions.length; i++) {
    sum += transactions[i]
    if (sum < 0) {
      return `Budget is not valid, since transaction on index [${i}], having amount [${transactions[i]}] is not possible with budget ${sum - transactions[i]}.`
    }
  }

  return `Budget is valid. Final value after transactions is ${sum} .`
}
