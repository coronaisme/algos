// You are given the array paths, where paths[i] = [cityAi, cityBi]
//  means there exists a direct path going from cityAi to cityBi.
//  Return the destination city, that is, the city without any path
//  outgoing to another city.

// It is guaranteed that the graph of paths forms a line without any loop,
// therefore, there will be exactly one destination city.

// Example 1:

// Input: paths = [["London","New York"],["New York","Lima"],["Lima","Sao Paulo"]]
// Output: "Sao Paulo"
// Explanation: Starting at "London" city you will reach "Sao Paulo"
// city which is the destination city. Your trip consist of: "London" -> "New York" -> "Lima" -> "Sao Paulo".
// Example 2:

// Input: paths = [["B","C"],["D","B"],["C","A"]]
// Output: "A"
// Explanation: All possible trips are:
// "D" -> "B" -> "C" -> "A".
// "B" -> "C" -> "A".
// "C" -> "A".
// "A".
// Clearly the destination city is "A".

const destinationCity = (paths) => {
  let obj = {};
  let possibles = [];
  let result;

  //make obj to get places with only 1 visit
  paths.forEach((e, i) => {
    e.forEach((e) => (obj[e] ? obj[e]++ : (obj[e] = 1)));
  });

  //put places with one visit into arr
  for (let key in obj) {
    if (obj[key] === 1) {
      possibles.push(key);
      obj[key]--;
    }
  }

  //check whether they were a visit or an end
  paths.forEach((e, i) => {
    if (e[1] === possibles[0] || e[1] === possibles[1]) {
      result = e[1];
    }
  });

  return result;
};
