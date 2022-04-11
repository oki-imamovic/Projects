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