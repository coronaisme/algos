// Given an array nums of integers, return how
// many of them contain an even number of digits.

// Input: nums = [12,345,2,6,7896]
// Output: 2
// Explanation:
// 12 contains 2 digits (even number of digits).
// 345 contains 3 digits (odd number of digits).
// 2 contains 1 digit (odd number of digits).
// 6 contains 1 digit (odd number of digits).
// 7896 contains 4 digits (even number of digits).
// Therefore only 12 and 7896 contain an even number of digits.

const findNums = (nums) => {
  /*
       1. iterate through all the numbers
         1a. convert each number to a string
         1b. count characters
         1c. if characters even, add 1 to total  
    */
  let total = 0;
  nums.forEach((num) => {
    const evenNumChar = num.toString().length % 2 == 0;
    if (evenNumChar) total += 1;
  });
  return total;
};
