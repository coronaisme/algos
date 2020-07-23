// Given a string s, the power of the string is the maximum length of
// a non-empty substring that contains only one unique character.

// Return the power of the string.

// Input: s = "abbcccddddeeeeedcba"
// Output: 5
// Explanation: The substring "eeeee" is of length 5 with the character 'e' only.

const maxPower = (s) => {
  let currentHighestCount = 0;
  let currentInARow = 1;
  const sArr = s.split("");

  for (let i = 0; i < sArr.length; i++) {
    if (sArr[i] !== sArr[i + 1]) {
      currentInARow = 1;
    }
    if (sArr[i] === sArr[i + 1]) {
      currentInARow += 1;
    }
    if (currentInARow > currentHighestCount) {
      currentHighestCount = currentInARow;
    }
  }
  return currentHighestCount;
};
