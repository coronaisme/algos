// The transpose of a matrix is the matrix flipped over it's main diagonal,
// switching the row and column indices of the matrix.

// Example 1:

// Input: [[1,2,3],[4,5,6],[7,8,9]]
// Output: [[1,4,7],[2,5,8],[3,6,9]]

const transpose = (a) => {
  const result = [];

  for (let i = 0; i < a[0].length; i++) {
    let placeholder = [];
    for (let j = 0; j < a.length; j++) {
      placeholder.push(a[j][i]);
    }
    result.push(placeholder);
  }
  return result;
};
