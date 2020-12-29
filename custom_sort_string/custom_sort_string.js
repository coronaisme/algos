// S and T are strings composed of lowercase letters.
// In S, no letter occurs more than once.

// S was sorted in some custom order previously.
// We want to permute the characters of T so that they match the order that S was sorted.
// More specifically, if x occurs before y in S, then x should occur before y in the returned string.

// Return any permutation of T (as a string) that satisfies this property.

// Example :
// Input:
// S = "cba"
// T = "abcd"
// Output: "cbad"
// Explanation:
// "a", "b", "c" appear in S, so the order of "a", "b", "c" should be "c", "b", and "a".
// Since "d" does not appear in S,
// it can be at any position in T. "dcba", "cdba", "cbda" are also valid outputs.

const customSortString = (S, T) => {
  let map = new Map();
  let result = "";
  for (let c of T) {
    map.set(c, (map.get(c) || 0) + 1);
  }
  for (let c of S) {
    if (map.has(c)) {
      while (map.get(c) > 0) {
        result += c;
        map.set(c, map.get(c) - 1);
      }
      map.delete(c);
    }
  }
  for (let [k, v] of map) {
    while (map.get(k) > 0) {
      result += k;
      map.set(k, map.get(k) - 1);
    }
  }
  return result;
};
