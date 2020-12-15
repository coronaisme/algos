// Given an array of integers, find if the array contains any duplicates.

// Your function should return true if any value appears at least twice in the array,
//  and it should return false if every element is distinct.

// Example 1:

// Input: [1,2,3,1]
// Output: true

const containsDuplicate = (nums) => {
  if (nums.length < 2) return false;

  let obj = {};

  nums.forEach((num) => (obj[num] ? obj[num]++ : (obj[num] = 1)));
  console.log(obj);

  for (let key in obj) {
    if (obj[key] > 1) {
      return true;
    }
  }
  return false;
};
