// In a deck of cards, each card has an integer written on it.

// Return true if and only if you can choose X >=
// 2 such that it is possible to split the entire deck into 1
// or more groups of cards, where:

// Each group has exactly X cards.
// All the cards in each group have the same integer.

// Example 1:

// Input: deck = [1,2,3,4,4,3,2,1]
// Output: true
// Explanation: Possible partition [1,1],[2,2],[3,3],[4,4].

const hasGroupsSizeX = function (deck) {
  const primeArr = [5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53];
  let obj = {};

  deck.forEach((c) => (obj[c] ? obj[c]++ : (obj[c] = 1)));

  for (let key in obj) {
    if (obj[key] === 1) return false;
  }
};
