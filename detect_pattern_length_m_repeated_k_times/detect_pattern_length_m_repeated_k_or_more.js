// Given an array of positive integers arr,
// find a pattern of length m that is repeated k or more times.

// A pattern is a subarray (consecutive sub-sequence)
// that consists of one or more values, repeated multiple
// times consecutively without overlapping. A pattern is defined
// by its length and the number of repetitions.

// Return true if there exists a pattern of length m that is
// repeated k or more times, otherwise return false.

// Example 1:

// Input: arr = [1,2,4,4,4,4], m = 1, k = 3
// Output: true
// Explanation: The pattern (4) of length 1 is repeated 4
// consecutive times. Notice that pattern can be repeated k or more times but not less.
// Example 2:

// Input: arr = [1,2,1,2,1,1,1,3], m = 2, k = 2
// Output: true
// Explanation: The pattern (1,2) of length 2 is repeated 2
// consecutive times. Another valid pattern (2,1) is also repeated 2 times.

const sameArr = (arr1, arr2) => {
  if (!arr1 || !arr2) return false;
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
};

const containsPattern = function (arr, m, k) {
  //find m elements that are repeated k or more times

  let count = 1;
  let map = new Map();

  for (let i = 0; i < arr.length; i++) {
    map.set(i, []);
    for (let j = i; j < arr.length; j += m) {
      map.get(i).push(arr.slice(j, j + m));
    }
  }

  // let firstArr = map.get(0);

  for (let arr of map.values()) {
    console.log(arr);
    for (let i = 0; i < arr.length; i++) {
      if (arr[i + 1] && sameArr(arr[i], arr[i + 1])) {
        count++;

        if (count >= k) {
          return true;
        }
      } else {
        count = 1;
      }
    }
  }
  return false;
};

console.log(containsPattern([3, 2, 2, 1, 2, 2, 1, 1, 1, 2, 3, 2, 2], 3, 2));
