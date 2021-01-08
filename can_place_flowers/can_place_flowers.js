// You have a long flowerbed in which some of the plots are planted, 
// and some are not. However, flowers cannot be planted in adjacent plots.

// Given an integer array flowerbed containing 0's and 1's, 
// where 0 means empty and 1 means not empty, and an integer n, 
// return if n new flowers can be planted in the flowerbed without violating the 
// no-adjacent-flowers rule.

 

// Example 1:

// Input: flowerbed = [1,0,0,0,1], n = 1
// Output: true

var canPlaceFlowers = function(flowerbed, n) {

    if(flowerbed.length === n && n > 1) return false
    
    let count = 0;

    for(let i = 0; i < flowerbed.length; i++) {
      if(flowerbed[i] === 0) {
        //check if only one slot in arr and its 0
        if(flowerbed.length === 1) {
          return true
        }//check for if first index is applicable for planting
        else if(i === 0 && flowerbed[i + 1] === 0) {
          count++
          i++
        } //then check for occurences within the array 
        else if(flowerbed[i - 1] === 0 && flowerbed[i + 1] === 0) {
          count++
          i++
        } //check last item in array
        else if(i === flowerbed.length - 1 && flowerbed[i - 1] === 0) {
          count++
        }
      }

    }
   return count >= n ? true : false
    
};