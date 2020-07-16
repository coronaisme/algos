// Given an array of integers arr, a lucky integer is an integer 
// which has a frequency in the array equal to its value.

// Return a lucky integer in the array. If there are multiple 
// lucky integers return the largest of them. If there is no lucky integer return -1.

var findLucky = function(arr) {
  //iterate and make an obj where key = number and value = count of occurences
  let obj = {}
  let lucky = -1;

  for(let i = 0; i < arr.length; i++) {
    if( arr[i] in obj) {
      obj[arr[i]] += 1
    }
    else {
      obj[arr[i]] = 1
    }
  }
    for( let key in obj) {
      if((parseInt(key) === obj[key]) && (parseInt(key) > lucky)) {  
        lucky = parseInt(key)
      }
    }
    return lucky
  //if key = val, return either
  //if no keys = vals return -1
  //if multiple key = val, return highest
};