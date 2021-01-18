// Given an integer n, return true if it is a power of three. Otherwise, return false.

// An integer n is a power of three, if there exists an integer x such that n == 3x.

// Example 1:

// Input: n = 27
// Output: true

const isPowerOfThree = (n) => {
  if (n == 1) return true;
  if (!n || n % 3 != 0) return false;
  else return isPower(n / 3);
};
