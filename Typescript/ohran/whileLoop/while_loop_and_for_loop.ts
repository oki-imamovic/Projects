/**
 * Example.
 */
export function whileLoopAndForLoopSimilarities(): number[] {
  const arr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  let sumFor: number = 0;
  for (let i = 0; i < arr.length; i++) {
    sumFor += arr[i];
  }

  /**
   * while (expression) {
   *   // Operations
   * }
   *
   * 1) Check does expression results with true or false.
   * 2) If (true) do Operations
   *    2.1) After finished operations go to step (1).
   * 3) If (false) leave the loop
   */

  let sumWhile: number = 0;
  let i: number = 0;
  while (i < arr.length) {
    sumWhile += arr[i];

    i++;
  }

  return [sumFor, sumWhile];
}

export function financesSharing() {
  let budget: number = 2000000;

  const investments: number[] = [50000, 25000, 5000];
  const totalInvestments: number[] = [0, 0, 0];

  let i: number = 0;
  while (budget > investments[i]) {
    totalInvestments[i] += investments[i];
    budget -= investments[i];

    i++;
    if (i === investments.length) {
      i = 0;
    }
  }

  for (let j = 0; budget > investments[j]; j++) {
    totalInvestments[j] += investments[j];
    budget -= investments[j];

    if (j === investments.length - 1) {
      j = -1;
    }
  }

  return totalInvestments[0] + totalInvestments[1] + totalInvestments[2] + budget;
}

export function canAfford() {
  let budget: number = 1000;
  const transactions: number[] = [-400, -200, 1000, -100, -399, 2000, 10000, 20000];

  let i: number = 0;
  while (budget + transactions[i] > 0 && i < transactions.length) {
    budget = budget + transactions[i];
    i++;
  }

  if (i === transactions.length) {
    return "All transactions are processed and remaining budget is: $" + budget;
  } else {
    return "Budget is not sufficient. There is $" + budget + " budget, so transaction $" + transactions[i] + " can not be executed."
  }
}
