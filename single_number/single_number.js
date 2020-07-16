// Given a non-empty array of integers, 
// every element appears twice except for one. 
// Find that single one.

// Input: [2,2,1]
// Output: 1

var singleNumber = function(nums) {
  let obj = {}
  nums.forEach((n) => {
      if(n in obj) {
          obj[n] += 1
      } else {
          obj[n] = 1
      }
  })
  for (let key in obj) {
      if(obj[key] === 1) {
          return parseInt(key)
      }
  }
};