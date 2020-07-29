// Given two strings s and t , write 
// a function to determine if t is an anagram of s.

// Input: s = "anagram", t = "nagaram"
// Output: true

const isAnagram = function(s, t) {
    
  const obj = {}
  
  s.split('').map(c => obj[c] = obj[c] ? obj[c] + 1 : 1)
  t.split('').map(c => obj[c] = obj[c] ? obj[c] - 1 : -1)
  
  return Object.keys(obj).every(key => obj[key] === 0)
};