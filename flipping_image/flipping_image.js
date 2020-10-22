// Given a binary matrix A, we want to flip the image horizontally,
// then invert it, and return the resulting image.

// To flip an image horizontally means that each row of the image is reversed.
//  For example, flipping [1, 1, 0] horizontally results in [0, 1, 1].

// To invert an image means that each 0 is replaced by 1,
// and each 1 is replaced by 0. For example, inverting [0, 1, 1]
// results in [1, 0, 0].

// Example 1:

// Input: [[1,1,0],[1,0,1],[0,0,0]]
// Output: [[1,0,0],[0,1,0],[1,1,1]]
// Explanation: First reverse each row: [[0,1,1],[1,0,1],[0,0,0]].
// Then, invert the image: [[1,0,0],[0,1,0],[1,1,1]]

const invert = (arr) => {
  return arr.map((el) => {
    if (el === 0) {
      return 1;
    } else {
      return 0;
    }
  });
};

const flipAndInvertImage = (input) => input.map((r) => invert(r.reverse()));
