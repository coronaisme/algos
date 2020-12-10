// Given a string s and a string t, check if s is subsequence of t.

// A subsequence of a string is a new string which is formed from the 
// original string by deleting some (can be none) of the characters without 
// disturbing the relative positions of the remaining characters. 
// (ie, "ace" is a subsequence of "abcde" while "aec" is not).

// Follow up:
// If there are lots of incoming S, say S1, S2, ... , Sk where k >= 1B, 
// and you want to check one by one to see if T has its subsequence. 
// In this scenario, how would you change your code?

// Credits:
// Special thanks to @pbrother for adding this problem and creating all test cases.

 

// Example 1:

// Input: s = "abc", t = "ahbgdc"
// Output: true

const isSubsequence = (s, t) => {
  r isSubsequence = function(s, t) {
    let tArr = t.split('')
    let sArr = s.split('')
    
    let result = ''
    
    for(let i = 0; i < tArr.length; i++ ) {
        if(tArr[i] === sArr[0]) {
            result += tArr[i]
            sArr.splice(0, 1)
        }
    }
    return result === s ? true : false
}