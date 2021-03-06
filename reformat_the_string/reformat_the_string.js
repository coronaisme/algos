// Given alphanumeric string s.
// (Alphanumeric string is a string consisting of lowercase English letters and digits).

// You have to find a permutation of the string where no letter is followed by
// another letter and no digit is followed by another digit. That is, no two adjacent
// characters have the same type.

// Return the reformatted string or return an empty string if it is impossible to
// reformat the string.

// Example 1:

// Input: s = "a0b1c2"
// Output: "0a1b2c"
// Explanation: No two adjacent characters have the same type in "0a1b2c".
//  "a0b1c2", "0a1b2c", "0c2a1b" are also valid permutations.

const reformat = (s) => {
  //this sol is very BRUTISH, im kind of embarrased to be honest,
  //but it works
  let numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  let arr = s.split("");
  let numArr = [];
  let strArr = [];
  let result = "";

  arr.forEach((c) => {
    if (numbers.includes(c)) {
      numArr.push(c);
    } else {
      strArr.push(c);
    }
  });

  if (numArr.length > strArr.length + 1 || numArr.length < strArr.length - 1) {
    return "";
  }

  let numCount = 0;
  let strCount = 0;
  if (strArr.length > numArr.length) {
    for (let i = 0; i <= arr.length; i++) {
      if (i % 2 === 0 && strArr[strCount] !== undefined) {
        result += strArr[strCount];
        strCount++;
      } else if (i % 2 !== 0 && numArr[numCount] !== undefined) {
        result += numArr[numCount];
        numCount++;
      }
    }
  } else {
    for (let i = 0; i <= arr.length; i++) {
      if (i % 2 === 0 && numArr[numCount] !== undefined) {
        result += numArr[numCount];
        numCount++;
      } else if (i % 2 !== 0 && strArr[strCount] !== undefined) {
        result += strArr[strCount];
        strCount++;
      }
    }
  }

  return result;
};
