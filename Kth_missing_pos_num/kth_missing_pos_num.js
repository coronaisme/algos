// Given an array arr of positive integers sorted in a strictly increasing order,
// and an integer k.

// Find the kth positive integer that is missing from this array.

// Example 1:

// Input: arr = [2,3,4,7,11], k = 5
// Output: 9
// Explanation: The missing positive integers are [1,5,6,8,9,10,12,13,...].
// The 5th missing positive integer is 9.

const findKthPositiveNum = (arr, k) => {
  //lol this problem took me about 2 minutes to figure out my strategy
  //then about 1 min to code, cheers

  let currentCount = 0;
  let i = 1;

  while (currentCount !== k) {
    if (!arr.includes(i)) {
      currentCount++;
    }
    i++;
  }
  return i - 1;
};
