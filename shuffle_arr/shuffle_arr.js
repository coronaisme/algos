// Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].

// Return the array in the form [x1,y1,x2,y2,...,xn,yn].

//REMEMBER WITH SHUFFLING THAT YOU CAN USE THE INDEX AND N SWAPPED TO GET RESULT IE

let shuffle = (nums, n) => {
  let res = [];

  for (let i = 0; i < n; i++) {
    res.push(nums[i]); //gets x values
    res.push(nums[i + n]); //gets y values
  }
  // console.log(res);
  return res;
};

// shuffle([2, 5, 1, 3, 4, 7], 3);
