/**
 * XO game - status check.
 *
 *  X  O  X  (row0)
 *  O  -  -
 *  O  X  -
 *
 */

export function forAndWhileComplex() {
  const row0: string[] = ['X', 'O', 'X'];
  const row1: string[] = ['O', 'X', 'O'];
  const row2: string[] = ['X', '-', '-'];

  let winningSymbol: string = null;
  let resultMessage: string = 'Game is Draw';

  let xWinCount: number = 0;
  let oWinCount: number = 0;

  if (row0[0] === row0[1] && row0[1] === row0[2] && row0[0] !== '-') {
    winningSymbol = row0[0];
    if (winningSymbol === 'X') {
      xWinCount++;
    } else {
      oWinCount++;
    }
  }

  if (row1[0] === row1[1] && row1[1] === row1[2] && row1[0] !== '-') {
    winningSymbol = row1[0];
    if (winningSymbol === 'X') {
      xWinCount++;
    } else {
      oWinCount++;
    }
  }

  if (row2[0] === row2[1] && row2[1] === row2[2] && row2[0] !== '-') {
    winningSymbol = row2[0];
    if (winningSymbol === 'X') {
      xWinCount++;
    } else {
      oWinCount++;
    }
  }

  if (row0[0] === row1[0] && row1[0] === row2[0] && row0[0] !== '-') {
    winningSymbol = row0[0];
    if (winningSymbol === 'X') {
      xWinCount++;
    } else {
      oWinCount++;
    }
  }

  if (row0[1] === row1[1] && row1[1] === row2[1] && row0[1] !== '-') {
    winningSymbol = row0[1];
    if (winningSymbol === 'X') {
      xWinCount++;
    } else {
      oWinCount++;
    }
  }

  if (row0[2] === row1[2] && row1[2] === row2[2] && row0[2] !== '-') {
    winningSymbol = row0[2];
    if (winningSymbol === 'X') {
      xWinCount++;
    } else {
      oWinCount++;
    }
  }

  if (row0[0] === row1[1] && row1[1] === row2[2] && row0[0] !== '-') {
    winningSymbol = row0[0];
    if (winningSymbol === 'X') {
      xWinCount++;
    } else {
      oWinCount++;
    }
  }

  if (row0[2] === row1[1] && row1[1] === row2[0] && row0[2] !== '-') {
    winningSymbol = row0[2];
    if (winningSymbol === 'X') {
      xWinCount++;
    } else {
      oWinCount++;
    }
  }

  /* Calculate is game valid */
  let xCount: number = 0;
  let oCount: number = 0;
  for (let i = 0; i < row0.length; i++) {
    if (row0[i] === 'X') {
      xCount++;
    } else if (row0[i] === 'O') {
      oCount++;
    }
  }
  for (let i = 0; i < row1.length; i++) {
    if (row1[i] === 'X') {
      xCount++;
    } else if (row1[i] === 'O') {
      oCount++;
    }
  }
  for (let i = 0; i < row2.length; i++) {
    if (row2[i] === 'X') {
      xCount++;
    } else if (row2[i] === 'O') {
      oCount++;
    }
  }

  if (xWinCount > 1 || oWinCount > 1) {
    resultMessage = 'Game is not valid.';
  } else if (xWinCount === 1 && oWinCount === 1) {
    resultMessage = 'Game is not valid.';
  } else if (xWinCount === 1 && xCount - 1 !== oCount) {
    resultMessage = 'Game is not valid.';
  } else if (oWinCount === 1 && xCount !== oCount) {
    resultMessage = 'Game is not valid.';
  } else if (xCount - 1 !== oCount && xCount !== oCount) {
    resultMessage = 'Game is not valid.';
  } else if (winningSymbol === 'X') {
    resultMessage = 'X won the game';
  } else if (winningSymbol === 'O') {
    resultMessage = 'O won the game';
  } else {
    /* If counts are good, check is game in progress */
    let isGameInProgress: boolean = false;
    for (let i = 0; i < row0.length; i++) {
      if (row0[i] === '-') {
        isGameInProgress = true;
      }
    }
    for (let i = 0; i < row1.length; i++) {
      if (row1[i] === '-') {
        isGameInProgress = true;
        break;
      }
    }
    for (let i = 0; i < row2.length; i++) {
      if (row2[i] === '-') {
        isGameInProgress = true;
        break;
      }
    }

    if (isGameInProgress) {
      resultMessage = 'Game is in progress';
    }
  }

  return resultMessage;
}

export function xoCheckWithArraysOfArrays() {
  const board: string[][] = [
    ['-', '-', '-'],
    ['-', '-', '-'],
    ['-', '-', '-']
  ];

  let resultMessage: string = 'Game is Draw.';
  let winningSymbol: string = null;
  let xWinCount: number = 0;
  let oWinCount: number = 0;

  for (let r = 0; r < board.length; r++) {
    if (board[r][0] === board[r][1] && board[r][1] === board[r][2] && board[r][0] !== '-') {
      winningSymbol = board[r][0];
      if (winningSymbol === 'X') {
        xWinCount++;
      } else {
        oWinCount++;
      }
    }
  }

  for (let c = 0; c < board.length; c++) {
    if (board[0][c] === board[1][c] && board[1][c] === board[2][c] && board[0][c] !== '-') {
      winningSymbol = board[0][c];
      if (winningSymbol === 'X') {
        xWinCount++;
      } else {
        oWinCount++;
      }
    }
  }

  if (board[0][0] === board[1][1] && board[1][1] === board[2][2] && board[0][0] !== '-') {
    winningSymbol = board[0][0];
    if (winningSymbol === 'X') {
      xWinCount++;
    } else {
      oWinCount++;
    }
  }

  if (board[0][2] === board[1][1] && board[1][1] === board[2][0] && board[0][2] !== '-') {
    winningSymbol = board[0][2];
    if (winningSymbol === 'X') {
      xWinCount++;
    } else {
      oWinCount++;
    }
  }

  /* Calculate is game valid */
  let xCount: number = 0;
  let oCount: number = 0;

  for (let r = 0; r < board.length; r++) {
    for (let c = 0; c < board[r].length; c++) {
      if (board[r][c] === 'X') {
        xCount++;
      } else if (board[r][c] === 'O') {
        oCount++;
      }
    }
  }

  if (xWinCount > 1 || oWinCount > 1) {
    resultMessage = 'Game is not valid.';
  } else if (xWinCount === 1 && oWinCount === 1) {
    resultMessage = 'Game is not valid.';
  } else if (xWinCount === 1 && xCount - 1 !== oCount) {
    resultMessage = 'Game is not valid.';
  } else if (oWinCount === 1 && xCount !== oCount) {
    resultMessage = 'Game is not valid.';
  } else if (xCount - 1 !== oCount && xCount !== oCount) {
    resultMessage = 'Game is not valid.';
  } else if (winningSymbol === 'X') {
    resultMessage = 'X won the game';
  } else if (winningSymbol === 'O') {
    resultMessage = 'O won the game';
  } else {
    /* If counts are good, check is game in progress */
    let isGameInProgress: boolean = false;
    for (let r = 0; r < board.length; r++) {
      for (let c = 0; c < board[r].length; c++) {
        if (board[r][c] === '-') {
          isGameInProgress = true;
        }
      }
    }
    if (isGameInProgress) {
      resultMessage = 'Game is in progress';
    }
  }

  return resultMessage;
}

export function matrixAddition() {
  const A: number[][] = [
    [2, 4, 5],
    [1, 3, 7],
    [3, 4, 3],
    [1, 2, 3]
  ];
  const B: number[][] = [
    [1, 5, 10],
    [2, 6, 8],
    [4, 9, 4],
    [4, 5, 6]
  ];
  const C: number[][] = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
    [null, null, null]
  ];


  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < A[i].length; j++) {
      C[i][j] = A[i][j] + B[i][j];
    }
  }

  return C;
}

export function printOnInterface() {
    const content: string[] = [
      "***************",
      "* Hello World *",
      "***************",
    ];

    return content;
}
