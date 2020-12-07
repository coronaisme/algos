// Suppose Andy and Doris want to choose a restaurant for dinner,
// and they both have a list of favorite restaurants represented by strings.

// You need to help them find out their common interest with the least
// list index sum. If there is a choice tie between answers, output all of
// them with no order requirement. You could assume there always exists an answer.

// Example 1:

// Input: list1 = ["Shogun","Tapioca Express","Burger King","KFC"],
// list2 = ["Piatti","The Grill at Torrey Pines","Hungry Hunter Steakhouse","Shogun"]
// Output: ["Shogun"]
// Explanation: The only restaurant they both like is "Shogun".

const findRestaurant = (list1, list2) => {
  //again, a rather brutish method, but effective
  let obj = {};
  let possibles = [];
  let result = [];

  list1.forEach((movie) =>
    obj[movie]
      ? (obj[movie] += list1.indexOf(movie))
      : (obj[movie] = list1.indexOf(movie))
  );
  list2.forEach((movie) =>
    obj[movie]
      ? (obj[movie] += list2.indexOf(movie))
      : (obj[movie] = list2.indexOf(movie))
  );

  list1.forEach((movie) => {
    if (list2.includes(movie)) {
      possibles.push(obj[movie]);
    }
  });

  possibles.sort((a, b) => a - b);
  for (let key in obj) {
    if (
      obj[key] === possibles[0] &&
      list1.includes(key) &&
      list2.includes(key)
    ) {
      result.push(key);
    }
  }

  return result;
};
