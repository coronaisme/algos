// Given a positive integer num consisting only of digits 6 and 9.

// Return the maximum number you can get by changing at most
// one digit (6 becomes 9, and 9 becomes 6).

// Example 1:

// Input: num = 9669
// Output: 9969
// Explanation:
// Changing the first digit results in 6669.
// Changing the second digit results in 9969.
// Changing the third digit results in 9699.
// Changing the fourth digit results in 9666.
// The maximum number is 9969.

const max69Num = (num) => {
  let splitNum = num.toString().split("");
  let numArr = splitNum.map((n) => parseInt(n));

  for (let i = 0; i < numArr.length; i++) {
    if (numArr[i] === 6) {
      numArr[i] = 9;
      break;
    }
  }
  return parseInt(numArr.join(""));
};
