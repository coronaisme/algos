// Given a m * n matrix of distinct numbers,
// return all lucky numbers in the matrix in any order.

// A lucky number is an element of the
// matrix such that it is the minimum element in its row and maximum in its column.

// Example 1:

// Input: matrix = [[3,7,8],[9,11,13],[15,16,17]]
// Output: [15]
// Explanation: 15 is the only lucky number since it is the minimum
// in its row and the maximum in its column

const luckyNumbers = (matrix) => {
  let lucky = [];
  let obj = {};
  let obj2 = {};
  // let newArr = []
  matrix.forEach((r, i) => {
    obj[i] = Math.min(...r);
    r.forEach((c, i) => {
      if (!(i in obj2)) {
        obj2[i] = c;
      } else {
        if (c > obj2[i]) {
          obj2[i] = c;
        }
      }
    });
  });

  for (key1 in obj) {
    for (key2 in obj2) {
      if (obj[key1] === obj2[key2]) {
        lucky.push(obj[key1]);
      }
    }
  }

  //  console.log(obj)
  // console.log(obj2)
  return lucky;
};
