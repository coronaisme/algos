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

const stackCheck = (string) => {
  let stack = [];

  for (let c of string) {
    if (c === "#") {
      stack.pop();
    } else {
      stack.push(c);
    }
  }
  return stack.join(",");
};

const backspaceCompare = (S, T) => {
  return stackCheck(S) === stackCheck(T) ? true : false;
};
