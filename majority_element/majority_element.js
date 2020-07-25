// Given an array of size n, find the majority element.
// The majority element is the element that appears more than ⌊ n/2 ⌋ times.

// You may assume that the array is non-empty
// and the majority element always exist in the array.

// ex: input : [2,2,1,1,1,2,2]
// output: 2

const majorityElement = function (nums) {
  const obj = {};

  nums.forEach((num) => (obj[num] ? obj[num]++ : (obj[num] = 1)));

  for (let key in obj) {
    if (obj[key] > nums.length / 2) {
      return parseInt(key);
    }
  }
};
