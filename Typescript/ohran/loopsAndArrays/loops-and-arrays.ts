

export function gradesAverage() {
  const grades: number[] = [10, 6, 10, 5, 10, 6];
  let avg: number = 0;

  for (let i = 0; i < grades.length; i++) {
    if (grades[i] === 5) {
      return 5;
    }

    avg += grades[i];
  }

  avg = avg / grades.length;

  return avg;
}

export function isWordPalindrome() {
  const word: string = 'reset';

  let compareWord: string = '';
  for (let i: number = word.length - 1; i >= 0; i--) {
    compareWord = compareWord + word[i];
  }

  return word === compareWord;
}

/**
 *
 * for (X; Y; Z) {
 *   W;
 * }
 *
 * Q;
 *
 * 1) Execute X.
 * 2) Execute Y.
 * 3) Is Y result true?
 * 3.1) YES
 * 3.1.1) Execute W
 * 3.1.2) Execute Z
 * 3.1.3) GOTO 3)
 * 3.2) NO
 * 3.2.1) Execute Q
 *
 */

export function isNumberPalindrome() {
  const num: number = 1298921;
  let reverse: number = 0;

  for (let original = num; original > 0; original = Math.floor(original / 10)) {
    const digit: number = original % 10;
    reverse = reverse * 10 + digit;
  }

  return reverse === num;
}

export function hundredThousandElementsArr() {
  const arr: number[] = [];

  for (let i = 0; i < 1000000; i++) {
    arr.push(Math.floor(Math.random() * 10));
  }

  //                         0  1  2  3  4  5  6  7  8  9
  const results: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  for (let i = 0; i < arr.length; i++) {
    const num: number = arr[i];
    results[num] = results[num] + 1;
  }

  return results;
}

export function totalVatCalculation() {
  const VAT: number = 17;
  const invoicesWithVat: number[] = [11700, 5850, 1170, 8000, 11700];
  const typeOfInvoice: string[] =   ['E',   'E',  'E',  'K',  'E'];
  const VATTax: number = VAT/100;

  let total:number = 0;

  for( let i = 0; i < invoicesWithVat.length; i++ ){
   if(typeOfInvoice[i]==='E'){
     total += invoicesWithVat[i];
   }
  }

  return total * VATTax;
}
