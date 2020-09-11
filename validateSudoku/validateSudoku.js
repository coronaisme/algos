// Validate whether a nxn matrix is a valid sudoku board
//ie no duplicates in a row or col
// numbers are 1-n

//example input = [[1,2,3],[2,3,1],[3,1,2]] output = "VALID"

const validate = (arr, valSet) => {
  let arrSet = new Set(arr);
  //check vals of row / col to perfect row / col
  for (let val of valSet) {
    if (!arrSet.has(val)) {
      return false;
    }
  }

  return true;
};

function checkSubSudoku(matrix) {
  let vals = new Set();

  //create a perfect row / col 1 - n
  for (let i = 0; i < matrix.length; i++) {
    vals.add(i + 1);
  }

  let cols = new Map();

  for (let row = 0; row < matrix.length; row++) {
    if (!validate(matrix[row], vals)) return "INVALID";
    for (let col = 0; col < matrix.length; col++) {
      //create col arrays - rows 0 - n
      if (!cols.has(col)) {
        cols.set(col, [matrix[row][col]]);
      } else {
        cols.get(col).push(matrix[row][col]);
      }
    }
  }

  for (let valArr of cols.values()) {
    if (!validate(valArr, vals)) return "INVALID";
  }
  return "VALID";
}

// let matrix = [[1,2,3],[2,3,1],[3,1,2]]
// checkSubSudoku(matrix)
