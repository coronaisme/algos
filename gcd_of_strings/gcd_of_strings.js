// For two strings s and t, we say "t divides s" if and only
// if s = t + ... + t  (t concatenated with itself 1 or more times)

// Given two strings str1 and str2, return the largest string x
// such that x divides both str1 and str2.

// Example 1:

// Input: str1 = "ABCABC", str2 = "ABC"
// Output: "ABC"
// Example 2:

// Input: str1 = "ABABAB", str2 = "ABAB"
// Output: "AB"

const gcdOfStrings = (str1, str2) => {
  if (str1.length === str2.length) {
    if (str1 == str2) {
      return str1;
    } else {
      return "";
    }
  }

  if (str1.length < str2.length) {
    [str1, str2] = [str2, str1];
  }
  if (str1.indexOf(str2) == 0) {
    return gcdOfStrings(str1.substring(str2.length, str1.length), str2);
  } else {
    return "";
  }
};
