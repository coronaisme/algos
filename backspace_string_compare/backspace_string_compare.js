// Given two strings S and T, return if they are equal when
// both are typed into empty text editors. # means a backspace character.

// Note that after backspacing an empty text, the text will continue empty.

// Example 1:

// Input: S = "ab#c", T = "ad#c"
// Output: true
// Explanation: Both S and T become "ac".
// Example 2:

// Input: S = "ab##", T = "c#d#"
// Output: true
// Explanation: Both S and T become "".

const backspaceCompare = (S, T) => {
  let stackS = [];
  let stackT = [];

  for (let c of S) {
    if (c == "#") {
      stackS.pop();
    } else {
      stackS.push(c);
    }
  }

  for (let c of T) {
    if (c == "#") {
      stackT.pop();
    } else {
      stackT.push(c);
    }
  }

  return stackS.join(",") === stackT.join(",") ? true : false;
};
