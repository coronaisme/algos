// Given a string s of zeros and ones,
//  return the maximum score after splitting the string
//  into two non-empty substrings (i.e. left substring and right substring).

// The score after splitting a string is the number of zeros
// in the left substring plus the number of ones in the right substring.

// Example 1:

// Input: s = "011101"
// Output: 5
// Explanation:
// All possible ways of splitting s into two non-empty substrings are:
// left = "0" and right = "11101", score = 1 + 4 = 5
// left = "01" and right = "1101", score = 1 + 3 = 4
// left = "011" and right = "101", score = 1 + 2 = 3
// left = "0111" and right = "01", score = 1 + 1 = 2
// left = "01110" and right = "1", score = 2 + 1 = 3

function stringScore(str, direction) {
  let count = 0;
  if (direction === "left") {
    for (let i = 0; i < str.length; i++) {
      if (str[i] === "0") {
        count += 1;
      }
    }
  } else {
    for (let i = 0; i < str.length; i++) {
      if (str[i] === "1") {
        count += 1;
      }
    }
  }
  return count;
}

const maxScore = (s) => {
  let left;
  let right;
  let currentScore = 0;
  let highestScore = 0;
  // iterate
  // split on each idx, calculate score and compare it to highestScore
  for (let i = 1; i < s.length; i++) {
    left = s.substring(0, i);
    right = s.substring(i);
    currentScore = stringScore(left, "left") + stringScore(right, "right");
    if (currentScore > highestScore) {
      highestScore = currentScore;
    }
  }
  return highestScore;
};
