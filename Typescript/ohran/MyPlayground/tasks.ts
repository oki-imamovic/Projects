export function smallestNumber() : number {

    const numbers : number[] = [23, 74, 51, 16, 24];
    let winner : number = numbers[0] ;
  
    for(let i = 0; i < numbers.length; i++){
      if(winner > numbers[i]){
        winner = numbers[i];
      }
    }
  
    return winner;
  }

  export function naturalNumbers() : number[] {
    let arr : number[] = [] ;
    for(let i = 3; i <= 8; i++){
        arr.push(i);
    }
    
    return arr;

  }
  
  export function reverseNaturalNumbers() : number[] {
      let arr : number [] = [] ;
      for (let i = 8; i >= 3; i--){
          arr.push(i);
      }
      return arr;
  }

  export function squareNumbers() : number [] {
      let arr : number [] = [] ;
      for (let i = 1; i <= 5; i++){
          arr.push(i*i);
      }
      return arr;
  }

  export function squareRootNumbers() : number []  {
    let arr : number [] = [] ;
    const a : number = 25;
    for (let i = 1; i <= 10; i++){
        arr.push(Math.sqrt(i));
    }
    return arr;
}


  export function eavenNumbers() : number [] {
    
    let arr: number [] = [] ;
    for (let i = 1; i <= 20; i++){
        if(i % 2 == 0){
            arr.push(i);
        }
    } 
    return arr;
  }

  export function oddNumbers() : number [] {
      let arr : number [] = [];
      for (let i = 1; i <= 17; i++){
          if(i % 2 != 0){
              arr.push(i);
          }
      }

    return arr;
  }

  export function numbersThatCanBeDivWith3() : number [] {
      let arr: number [] = [];
      for (let i = 1; i <= 17; i++){
          if(i % 3 == 0){
              arr.push(i);
          }
      }

      return arr;
  }

  export function numbersThatCantBeDivWith3() : number [] {
      let arr: number [] = [];
      for (let i = 1; i <= 17; i++){
          if(i % 3 != 0){
              arr.push(i);
          }
      }
      return arr;
  }

  export function numbersThatCanBeDivWithA (a : number) : number[]{
      let arr: number [] = [];
      for(let i = 1; i <= 17; i++){
          if(i % a == 0){
              arr.push(i);
          }
      }
      return arr;
  }

  export function numbersThatCantBeDivWithA (a : number) : number[]{
    let arr: number [] = [];
    for(let i = 1; i <= 17; i++){
        if(i % a != 0){
            arr.push(i);
        }
    }
    return arr;
}

export function numbersFrom1ToN (n : number) : number[]{
    let arr: number [] = [];
    for(let i = 1; i<= n; i++){
        arr.push(i);
    }
    return arr;
}

export function numbersFromKToN (k : number, n: number) : number[]{
    let arr: number [] = [];
    for (let i = k; i <= n ; i++){
        arr.push(i);
    }
    return arr;
}

export function notProportionalNumbersToN (k : number) : number []{
    let arr: number [] = [];
    for(let i = 1; i <= k; i++){
        arr.push(1/i);
    }
    return arr;
}

export function doubleNumbersToN (n : number) : number []{
    let arr: number [] = [];
    for(let i = 1; i <= n; i++){
        arr.push(i * 2);
    }
    return arr;
}

export function squareNumbersToN (n : number) : number []{
    let arr: number [] = [];
    for (let i = 1; i <= n; i++){
        arr.push(i*i);
    }
    return arr;
}

export function squareRootNumbersToN (n : number) : number []{
    let arr: number [] = [];
    for (let i = 1; i <= n; i++){
        arr.push(Math.sqrt(i));
    }
    return arr;
}

export function eavenNumbersToN (n : number) : number []{
    let arr: number [] = [];
    for (let i = 1; i <= n; i++){
        if(i % 2 == 0){
            arr.push(i);
        }
    }
    return arr;
}

export function oddNumbersToN (n : number) : number []{
    let arr: number [] = [];
    for (let i = 1; i <= n; i++){
        if(i % 2 != 0){
            arr.push(i);
        }
    }
    return arr;
}

export function testOfEavenes (n : number) : any []{
    let arr : any [] = [];
    for (let i = 1 ; i <= n; i++){
        if(i % 2 == 0){
            arr.push(i + ' This is eaven number')
        }else arr.push(i + ' This is odd number')
    }
    return arr;
}

export function numbersFromAtoBThatCanBeDivWithC (a : number, b : number, c : number) : number []{
    let arr: number [] = [];
    for (let i = a; i <= b; i++){
        if(i % c == 0){
            arr.push(i);
        }
    }
    return arr;
}

export function sumNumsTo100 () : number{
    let sum : number = 0;
    for(let i = 0; i <= 100; i++){
        sum = sum + i
    }
    return sum;
}

export function sumNotProportionalNumbers() : number{
    let sum : number = 0;
    for (let i = 1; i <= 100; i++){
        sum = sum + 1/i;
    }
    return sum;
}

export function sumNotProportionalNumbersFromNtoK(n:number, k:number) : number{
    let sum : number = 0;
    for (let i = n; i <= k; i++){
        sum = sum + 1/i;
    }
    return sum;
}

export function sumNumbersToNdivWith7 (n : number) : number{
    let sum : number = 0;
    for (let i = 1; i <= n; i++){
        if(i % 7 == 0){
            sum = sum + i;
        }
    }

    return sum;
}

export function sumNumbersToNnotdivWith7 (n : number) : number{
    let sum : number = 0;
    for (let i = 1; i <= n; i++){
        if(i % 7 != 0){
            sum = sum + i;
        }
    }

    return sum;
}

export function isItPalindrome (palindrom : string) : string{
    const re = /[^A-Za-z0-9]/g;
    palindrom = palindrom.toLowerCase().replace(re, '');

    for(let i = 0; i < palindrom.length / 2; i++){
        if(palindrom [i] !== palindrom[palindrom.length - 1 - i]){
            return 'It is not a palindrom';
        }else return 'It is a palindrome';
    }
}

export function isTheNumberPalindrome() {
    const num: number = 1298921;
    let reverse: number = 0;
  
    for (let original = num; original > 0; original = Math.floor(original / 10)) {
      const digit: number = original % 10;
      reverse = reverse * 10 + digit;
    }
  
    return reverse === num;
  }

export function mostFrequentArrElement(arr : any[]) : any{
    let mf = 1;
    let m = 0;
    let item;

    for (let i = 0; i < arr.length; i++){
        for (let j = i; j < arr.length; j++){
            if (arr[i] == arr[j]){
                m++;
            }if (mf < m){
                mf = m;
                item = arr[i];
            }
        }
        m = 0;
    }
    return item + ' Item is used ' + mf + ' times';
}

export function oneOfKind(arr : number []) : number [] {
    let arr1: number[] = arr.slice().sort();
    let newArr : number[] = [];
    for (let i = 0; i < arr1.length; i++){
        if(arr1[i] != arr1[i + 1]){
            newArr.push(arr1[i]);
        }else i++
    }

    return newArr;
}

export function fibonacci(n : number) : number {
    if(n <= 2){
        return 1;
    }else return fibonacci(n -1) + fibonacci (n - 2);
}

export function studentGradesAverage() {
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