//This is a problem I am creating to play with time complexity and recusion
//The problem will involve an alphabet and a target letter
//The goal of the algo will be to find the target letter
//and output the amount of steps it took to get there

// 97-122

const alphabetMaker = () => {
  let output = [];

  for (let i = 97; i <= 122; i++) {
    output.push(String.fromCharCode(i));
  }
  return output;
};

const iterativeFinder = (alphabet, target) => {
  for (let i = 0; i <= alphabet.length; i++) {
    if (alphabet[i] === target) {
      return `The letter ${target} has been found, tried ${i} times`;
    }
  }

  return `The letter ${target} has NOT been found, tried ${
    alphabet.length + 1
  } times`;
};

const recursiveFinder = (alphabet, target) => {
  let mid = Math.floor((alphabet.length + 1) / 2);

  if (alphabet[mid] > target) {
    alphabet.splice(mid);
    return recursiveFinder(alphabet, "l");
  } else if (alphabet[mid] < target) {
    alphabet.splice(0, mid);
    return recursiveFinder(alphabet, "l");
  } else if (alphabet[mid] === target) {
    return `Found target ${alphabet[mid]}`;
  } else {
    return "Target not found";
  }
};

// Math.floor((alphabet.length + 1) / 2)

let alphabet = alphabetMaker();
console.log(recursiveFinder(alphabet, "l"));
