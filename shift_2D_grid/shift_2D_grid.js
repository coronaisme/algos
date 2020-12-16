// Given a 2D grid of size m x n and an integer k.
// You need to shift the grid k times.

// In one shift operation:

// Element at grid[i][j] moves to grid[i][j + 1].
// Element at grid[i][n - 1] moves to grid[i + 1][0].
// Element at grid[m - 1][n - 1] moves to grid[0][0].
// Return the 2D grid after applying shift operation k times.

// Example 1:

// Input: grid = [[1,2,3],[4,5,6],[7,8,9]], k = 1
// Output: [[9,1,2],[3,4,5],[6,7,8]]

const shiftGrid = (grid, k) => {
  let placeholder = [];

  grid.forEach((row) => {
    placeholder.push(...row);
  });

  if (k === placeholder.length) {
    return grid;
  }

  let cutLenght = k > placeholder.length ? k % placeholder.length : k;
  let part = placeholder.splice(
    placeholder.length - cutLenght,
    placeholder.length
  );
  placeholder.unshift(...part);

  let result = [];
  let rowCount = grid.length;
  let rowLength = grid[0].length;

  for (let i = 0; i < rowCount; i++) {
    result.push(placeholder.splice(0, rowLength));
  }

  return result;
};
