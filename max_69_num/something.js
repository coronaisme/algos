const validate = (arr, valSet) => {
  let arrSet = new Set(arr);

  for (let val of valSet) {
    if (!arrSet.has(val)) {
      return false;
    }
  }

  return true;
};

function checkSubSudoku(matrix) {
  let vals = new Set();

  for (let i = 0; i < matrix.length; i++) {
    vals.add(i + 1);
  }

  let cols = new Map();

  for (let row = 0; row < matrix.length; row++) {
    if (!validate(matrix[row], vals)) return "INVALID";
    for (let col = 0; col < matrix.length; col++) {
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
