// Alice has n candies, where the ith candy is of type candyType[i].
// Alice noticed that she started to gain weight,
// that is why she visited a doctor.

// The doctor advised Alice to only eat n / 2 of the candies she has (n is always even).
// Alice likes her candies very much. She wants to eat the maximum number of different
// types of candies.

// Given the integer array candyType of length n, return the maximum number of different
// types of candies she can eat, achieving the doctor's advice.

// Example 1:

// Input: candyType = [1,1,2,2,3,3]
// Output: 3
// Explanation: Alice should eat only 3 candies, she currently has 2 candies of the first type,
// 2 candies of the second type, and 2 candies of the third type.
// Alice will choose to eat 1 candy of each type. This leads her to eat 3 different types of
// candies and we return 3.

const uniq = (arr) => {
  const uniqValues = {};
  arr.forEach((ele) => {
    if (!(ele in uniqValues)) {
      uniqValues[ele] = true;
    }
  });
  return Object.keys(uniqValues).map((key) => parseInt(key));
};
const distributeCandies = (candies) => {
  const sisterCandyCount = candies.length / 2;
  const uniqCandies = uniq(candies);
  // case 1: sister gets all her candies unique
  if (uniqCandies.length >= sisterCandyCount) return sisterCandyCount;
  // case 2: sister gets as many unique candies as there are
  return uniqCandies.length;
};
