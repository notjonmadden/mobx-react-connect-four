type Matrix<T> = ReadonlyArray<ReadonlyArray<T>>;

const ZERO = { height: 0, width: 0 };

function validate<T>(matrix: Matrix<T>): true {
  if (!Array.isArray(matrix)) {
    throw Error('not an array');
  }

  if (!matrix.every(Array.isArray)) {
    throw Error('not an array of arrays');
  }

  const lengths = new Set(matrix.map(a => a.length));
  if (lengths.size > 1) {
    throw Error('rectangular arrays only');
  }
  
  return true;
}

function getDimensions<T>(matrix: Matrix<T>) {
  const height = matrix.length;

  if (height === 0) {
    return ZERO;
  }

  const width = matrix[0].length;

  if (width === 0) {
    return ZERO;
  }
  
  return { height, width };
}

function bounds<T>(height: number, width: number) {
  return (row: number, column: number) =>
    0 <= row && row < height &&
    0 <= column && column < width;
}

export default function diagonals<T>(matrix: Matrix<T>) {
  const { height, width } = validate(matrix) && getDimensions(matrix);
  const inBounds = bounds(height, width);
  const diagonalCount = height + width - 1;
  const maxDiagonalLength = height;

  const doPass = (pass: 1 | 2) => {
    const diagonals = [];
    const getRowIndex = (i: number) => pass === 1 ? height - i - 1 : i;

    for (let d = 0; d < diagonalCount; d += 1) {
      const diagonal = [];
  
      for (let i = 0; i < maxDiagonalLength; i += 1) {
        const row = getRowIndex(i);
        const column = d - i;
  
        if (inBounds(row, column)) {
          diagonal.unshift(matrix[row][column]);
        }
      }
  
      diagonals.push(diagonal);
    }
 
    return diagonals;
  }

  return [
    ...doPass(1),
    ...doPass(2)
  ];
}