// Given a m * n matrix grid which is sorted in
// non-increasing order both row-wise and column-wise.

// Return the number of negative numbers in grid.

// Example 1:

// Input: grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]
// Output: 8
// Explanation: There are 8 negatives number in the matrix.

const countNegatives = (arr) => {
  // have a variable to hold total count of negative nums
  let count = 0;
  // iterate through each row
  grid.forEach((row) => {
    // check each number to see if its positive from the end of a row; if you get a positive / 0 go to next row; otherwise increment because its a negative
    for (let i = row.length - 1; i >= 0; i--) {
      if (row[i] >= 0) break;
      count += 1;
    }
  });
  // iterate through each col value in row,
  // if its negative, add one to count
  return count;
};
