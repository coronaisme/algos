// Implement function ToLowerCase() that has a string parameter str,
//  and returns the same string in lowercase.

// Example 1:

// Input: "Hello"
// Output: "hello"

const isUpperCase = (str) => {
  return str === str.toUpperCase();
};

const toLowerCase = function (str) {
  let splitStr = str.split("");

  let newArr = splitStr.map((c) => {
    if (c.charCodeAt(0) >= 65 && c.charCodeAt(0) <= 90 && isUpperCase(c)) {
      let code = c.charCodeAt(0) + 32;
      return String.fromCharCode(code);
    }

    return c;
  });
  return newArr.join("");
};
