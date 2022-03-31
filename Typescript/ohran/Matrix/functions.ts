import {createNumberMatrix, printMatrix} from "../util/matrix-utils";


export function linear(x: number): number {
  return x;
}

export function quadratic(x: number): number {
  return x * x;
}

export function twoParamsFunc(x: number, y: number): number {
  return x + y;
}

export function combinedFunctions(x: number, y: number): number {
  return linear(x) + quadratic(y);
}

export function sumMatrices(A: number[][], B: number[][]): number[][] {
  const C: number[][] = createNumberMatrix(A.length, A[0].length);

  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < A[i].length; j++) {
      C[i][j] = A[i][j] + B[i][j];
    }
  }

  return C;
}

export function sumAndNicelyPrintMatrices() {
  const A: number[][] = [
    [2, 4, 5],
    [1, 13, 7],

    [1, 454, 3]
  ];
  const B: number[][] = [
    [1, 5, 10],
    [2, 6, 800],

    [4, 5, 6]
  ];

  const C: number[][] = sumMatrices(A, B);

  return printMatrix(A)
    .concat([""])
    .concat(["+"])
    .concat([""])
    .concat(printMatrix(B))
    .concat([""])
    .concat(["="])
    .concat([""])
    .concat(printMatrix(C));
}

/* 1) Find the biggest number in matrix. */
export function biggestNumberInMatrix (){

  let largestNumber : number = null;
  const A: number[][] = [
    [2, 4, 5],
    [1, 13, 7],
    [1, 454, 3]
  ];

  for (let i = 0; i < A.length; i++){
    for(let j = 0; j < A[i].length; j++){
      if(largestNumber === null || A[i][j] > largestNumber) {
        largestNumber = A[i][j];
      }
    }
  }
  return largestNumber;
}


/* 2) Find the smallest number in matrix. */
export function findTheSmallestNumberInMatrix (){

  let smallestNumber : number = null;
  const A: number[][] = [
    [9, 6, 8],
    [1234, 13, 15],
    [58, 454, 12]
  ];

  for (let i = 0; i < A.length; i++){
    for(let j = 0; j < A[i].length; j++){
      if(A[i][j] < smallestNumber) {
          
        smallestNumber = A[i][j];
      }
    }
  }
  return smallestNumber;
}

/* 3) Find the biggest number in two matrices. */
// Discussion: Performance improvement.
export function findTheBiggestNumberInTwoMatrices (){

  let largestNumberA : number = 0;
  let largestNumberB : number = 0;

  const A: number[][] = [
    [9, 6, 8],
    [1, 13, 15],
    [58, 44, 12]
  ];

  const B: number[][] = [
    [2, 4, 5, 7],
    [1, 13, 7, 10],
    [1, 454, 3, 100]
  ];

  for (let i = 0; i < A.length; i++){
    for(let j = 0; j < A[i].length; j++){
      if(A[i][j] > largestNumberA) {
        
        largestNumberA = A[i][j];
      }
    }
  }

  for (let i = 0; i < B.length; i++){
    for(let j = 0; j < B[i].length; j++){
      if(B[i][j] > largestNumberB) {
        
        largestNumberB = B[i][j];
      }
    }
  }

  
  if(largestNumberA > largestNumberB){
    return largestNumberA;
  }else return largestNumberB;
}

/* 4) Find the smallest number in two matrices. */

export function findTheSmallestNumberInTwoMatrices(){

  let smallestNumberA : number = 9999999 ;
  let smallestNumberB : number = 9999999 ;
  const A: number[][] = [
    [9, 6, 8],
    [1234, 13, 15],
    [58, 454, 12]
  ];

  const B: number[][] = [
    [9, 6, 8],
    [1, 13, 15],
    [58, 44, 12]
  ];

  for (let i = 0; i < A.length; i++){
    for(let j = 0; j < A[i].length; j++){
      if(A[i][j] < smallestNumberA) {
          
        smallestNumberA = A[i][j];
      }
    }
  }

  for (let i = 0; i < B.length; i++){
    for(let j = 0; j < B[i].length; j++){
      if(B[i][j] < smallestNumberB) {
          
        smallestNumberB = B[i][j];
      }
    }
  }

  if(smallestNumberA > smallestNumberB){
    return smallestNumberB;
  }else return smallestNumberA;

}

/* 5) Find the biggest even number in a matrix. */
export function findTheBiggestEvenNumberInMatrix(){

let largestNumber : number = 0 ;
  const A: number[][] = [
    [2, 4, 5],
    [1, 132, 7],
    [1, 4541, 3]
  ];

  for (let i = 0; i < A.length; i++){
    for(let j = 0; j < A[i].length; j++){
      if(A[i][j] % 2 == 0 && A[i][j] > largestNumber) {
          
        largestNumber = A[i][j];
      }
    }
  }
  return largestNumber;
}

/* 6) Find the biggest odd number in a matrix. */
export function findTheBiggestOddNumberInMatrix(){

  let largestNumber : number = 0 ;
  const A: number[][] = [
    [2, 4, 5],
    [1, 132, 7],
    [1, 4542, 13]
  ];

  for (let i = 0; i < A.length; i++){
    for(let j = 0; j < A[i].length; j++){
      if(A[i][j]  % 2 != 0 && A[i][j] > largestNumber) {
          
        largestNumber = A[i][j];
      }
    }
  }
  return largestNumber;
}


/* 7) Find the first biggest number from matrix than average number in matrix. */
export function firstBiggestNumberFromMatrixThanAvarageNumberInMatrix(){

  let sum : number = 0 ;
  let averagesum : number = 0;
  let smallestNumber : number = 9999999 ;

  const A: number[][] = [
    [2, 4, 5],
    [1, 2, 7],
    [1, 4, 3]
  ];
  
  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < A[i].length; j++) {
      sum = (sum + A[i][j]);
    }
  }

  averagesum = sum / 9;

  for (let d = 0; d < A.length; d++){
    for (let s = 0; s < A[d].length; s++ ){
      if(A[d][s] < smallestNumber && A[d][s] > averagesum) {
        smallestNumber = A[d][s];
      }
    }
  }

  return smallestNumber;
}

/* 8) Number and Matrix multiplication. => 4 * A */
export function numberAndMatrixMultiplication(){

  const mul : number = 4;
  let A: number[][] = [
    [2, 4, 5],
    [1, 2, 7],
    [1, 4, 3]
  ];

  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < A[i].length; j++) {
      A[i][j] = ( A[i][j] * mul);
    }
  }
  return A;
}

// TODO: Extend arrays using "push".
// TODO: SUpport matrices of dimensions a x b  and b x c...
// TODO: 2 x 3 &&& 3 x 6  => 2 x 6 -> CAN multiply
// TODO: 2 x 4 &&& 3 x 2  => CAN NOT multiply

/* 9) Matrix and Matrix multiplication. => A * B */
export function twoMatrixMultiplication(){

  let A: number[][] = [
    [2,  5],
    [1,  7],
    [1,  3]
  ];

  let B: number[][] = [
    [2,  5,  7],
    [1,  7,  3],
    [7,  9,  15],
    [12,  71,  32],
    [18,  43,  25],
    [1,  3,  5]
  ];

  let C: number[][] = null;
    for(let j = 0; j < B.length; j++) {
        C[j] = [];
        for(let k = 0; k < A[0].length; k++) {
            var sum = 0;
            for(var i = 0; i < A.length; i++) {
                sum += A[i][k] * B[j][i];
            }
            C[j].push(sum);
        }
    }
    return C;
}
