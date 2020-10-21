// A self-dividing number is a number that is
// divisible by every digit it contains.

// For example, 128 is a self-dividing number because
// 128 % 1 == 0, 128 % 2 == 0, and 128 % 8 == 0.

// Also, a self-dividing number is not allowed to contain the digit zero.

// Given a lower and upper number bound, output a list of
// every possible self dividing number, including the bounds if possible.

// Example 1:
// Input:
// left = 1, right = 22
// Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22]

const isSelfDividing = (num) => {
  const num_arr = num
    .toString()
    .split("")
    .map((n) => parseInt(n));
  let divisible = true;
  num_arr.forEach((n) => {
    if (n === 0) divisible = false;
    else {
      if (num % n != 0) divisible = false;
    }
  });
  return divisible;
};
console.log(isSelfDividing(13));
var selfDividingNumbers = function (left, right) {
  const selfies = [];
  for (let i = left; i <= right; i++) {
    if (isSelfDividing(i)) selfies.push(i);
  }
  return selfies;
};
