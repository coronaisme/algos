// Given a string text, you want to use the characters
// of text to form as many instances of the word "balloon" as possible.

// You can use each character in text at most once.
// Return the maximum number of instances that can be formed.

// Example 1:

// Input: text = "nlaebolko"
// Output: 1

const canLoon = (obj) => {
  return (
    obj["b"] >= 1 &&
    obj["a"] >= 1 &&
    obj["l"] >= 2 &&
    obj["o"] >= 2 &&
    obj["n"] >= 1
  );
};

const makeLoon = (obj) => {
  if (canLoon(obj)) {
    obj["b"] -= 1;
    obj["a"] -= 1;
    obj["l"] -= 2;
    obj["o"] -= 2;
    obj["n"] -= 1;
  }
};

const maxNumberOfBalloons = (text) => {
  let textObj = {};
  // let balloonObj = { b: 1, a: 1, l: 2, o: 2, n: 1 };
  let count = 0;

  text.split("").forEach((c) => {
    textObj[c] ? textObj[c]++ : (textObj[c] = 1);
  });
  while (canLoon(textObj)) {
    count++;
    makeLoon(textObj);
  }
  return count;
};
