// Given a string s containing only lower case
// English letters and the '?' character,
// convert all the '?' characters into lower case letters
// such that the final string does not contain any
// consecutive repeating characters. You cannot modify the non '?' characters.

// It is guaranteed that there are no consecutive
// repeating characters in the given string except for '?'.

// Return the final string after all the conversions
// (possibly zero) have been made. If there is more than one solution,
// return any of them. It can be shown that an answer is always
// possible with the given constraints.

// Example 1:

// Input: s = "?zs"
// Output: "azs"
// Explanation: There are 25 solutions for this problem.
// From "azs" to "yzs", all are valid. Only "z" is an invalid
// modification as the string will consist of consecutive repeating characters in "zzs".

const findQualifiedChar = (a, b) => {
  let alphabet = [];
  let qualifiedChar;

  for (let i = "a".charCodeAt(); i <= "z".charCodeAt(); i++) {
    alphabet.push(String.fromCharCode(i));
  }

  qualifiedChar = Math.floor(Math.random() * 24);

  while (alphabet[qualifiedChar] === a || alphabet[qualifiedChar] === b) {
    qualifiedChar = Math.floor(Math.random() * 24);
  }

  return alphabet[qualifiedChar];
};

const modifyString = (s) => {
  let strArr = s.split("");

  strArr.forEach((c, i) => {
    if (c === "?") {
      strArr[i] = findQualifiedChar(strArr[i + 1], strArr[i - 1]);
    }
  });

  return strArr.join("");
};
