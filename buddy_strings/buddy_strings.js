// Given two strings A and B of lowercase letters, return true
// if you can swap two letters in A so the result is equal to B, otherwise, return false.

// Swapping letters is defined as taking two indices i and j (0-indexed)
// such that i != j and swapping the characters at A[i] and A[j].
// For example, swapping at indices 0 and 2 in "abcd" results in "cbad".

// Example 1:

// Input: A = "ab", B = "ba"
// Output: true
// Explanation: You can swap A[0] = 'a' and A[1] = 'b' to get "ba", which is equal to B.

const buddyStrings = (A, B) => {
  if (A.length !== B.length) return false;

  let index = -1;
  for (let i = 0; i < A.length; i++) {
    if (A[i] !== B[i]) {
      if (index === -1) {
        index = i;
      } else if (index != undefined) {
        if (A[i] !== B[index] || B[i] !== A[index]) return false;
        index = undefined;
      } else {
        return false;
      }
    }
  }

  if (!index) return true;
  if (index !== -1) return false;

  const set = new Set();
  for (let i = 0; i < A.length; i++) {
    if (set.has(A[i])) return true;
    set.add(A[i]);
  }

  return false;
};
