

export function createNumberMatrix(rows: number, cols: number): number[][] {
  const result: number[][] = [];

  for (let i = 0; i < rows; i++) {
    const row: number[] = [];
    for (let j = 0; j < cols; j++) {
      row.push(null);
    }
    result.push(row);
  }

  return result;
}

export function findLengthOfLongestElementInMatrix(m: number[][]): number {
  let maxLength: number = 0;

  for(let i = 0; i < m.length; i++) {
    for (let j = 0; j < m[i].length; j++) {
      if (m[i][j].toString().length > maxLength) {
        maxLength = m[i][j].toString().length;
      }
    }
  }

  return maxLength;
}

export function addEmptySpacesBefore(s: string, numOfEmptySpaces: number): string {
  let emptySpaces: string = "";
  for (let i = 0; i < numOfEmptySpaces; i++) {
    emptySpaces += "_";
  }

  return emptySpaces + s;
}

export function printMatrix(m: number[][]): string[] {
  const result: string[] = [];

  const maxLength = findLengthOfLongestElementInMatrix(m);

  for (let i = 0; i < m.length; i++) {
    let row: string = "";

    for (let j = 0; j < m[i].length; j++) {
      row += addEmptySpacesBefore(m[i][j].toString(), maxLength - m[i][j].toString().length) + " ";
    }

    result.push(row);
  }

  return result;
}
