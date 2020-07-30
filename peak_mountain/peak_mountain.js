// Let's call an array A a mountain if the following properties hold:

// A.length >= 3
// There exists some 0 < i < A.length - 1 such that
//  A[0] < A[1] < ... A[i-1] < A[i] > A[i+1] > ... > A[A.length - 1]
// Given an array that is definitely a mountain, return any i such that 
// A[0] < A[1] < ... A[i-1] < A[i] > A[i+1] > ... > A[A.length - 1].

// Input: [0,1,0]
// Output: 1


const findPeak = (arr) => {
  const startSearch = 1
  let peakIndex = startSearch
  const endSearch = arr.length - 2
  for (let i = startSearch; i <= endSearch; i++) {
    // update peak, if bigger than current peak
    if (arr[peakIndex] < arr[i]) {
       peakIndex = i
    }
  }
  return peakIndex
}

const peakIndexInMountainArray = function(A) {
    // find the peak - the largest number
   return findPeak(A)
};