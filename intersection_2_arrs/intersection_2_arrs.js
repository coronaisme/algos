// Given two arrays, write a function to compute their intersection.

// Example 1:

// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2]
// Example 2:

// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [9,4]

const unique = (arr) => [...new Set(arr)]

const intersection = (nums1, nums2) => {
  //compare the arrays, if we find numbers that are in both, push into new array
  let newArr = [];

  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      if (nums1[i] === nums2[j]) {
        newArr.push(nums2[j]);
      }
    }
  }
  return unique(newArr);
  //make uniq function and call on new array or push only if not in array
};
