// There is a string 'str'
// Find the number of occurences of char 't' in 'str'

// Ex :
// str = 'akfdakfjnadtihamskfnkjsdhfkjasdfkasdnfkjhasdlfkasjnf'
// t = 'a'

const findOccurences = (str, t) => {
  const obj = {}; //storage obj of key/val pairs

  //c = character/element
  str.split("").forEach((c) => (obj[c] ? obj[c]++ : (obj[c] = 1)));

  return obj[t] ? obj[t] : "The key does not exist";
};
