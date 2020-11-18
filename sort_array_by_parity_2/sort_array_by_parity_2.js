// Given an array A of non-negative integers, half of the integers in A are odd,
//  and half of the integers are even.

// Sort the array so that whenever A[i] is odd, i is odd; and whenever A[i] is even,
// i is even.

// You may return any answer array that satisfies this condition.

// Example 1:

// Input: [4,2,5,7]
// Output: [4,5,2,7]
// Explanation: [4,7,2,5], [2,5,4,7], [2,7,4,5] would also have been accepted.

const sortArrayByParityII = (A) => {
  //probably a way better way to do this - took me ~5 min
  let odds = [];
  let evens = [];
  let res = [];

  A.forEach((c) => {
    //create odd and evens arrays
    if (c % 2 === 0) {
      evens.push(c);
    } else {
      odds.push(c);
    }
  });

  A.forEach((c, i) => {
    //place into res array in order
    if (i % 2 === 0) {
      res.push(evens[0]);
      evens.splice(0, 1);
    } else {
      res.push(odds[0]);
      odds.splice(0, 1);
    }
  });

  return res;
};
