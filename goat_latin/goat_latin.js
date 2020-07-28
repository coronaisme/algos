// A sentence S is given, composed of words separated by spaces.
// Each word consists of lowercase and uppercase letters only.

// We would like to convert the sentence to "Goat Latin" (a made-up language similar to Pig Latin.)

// The rules of Goat Latin are as follows:

// If a word begins with a vowel (a, e, i, o, or u), append "ma" to the end of the word.
// For example, the word 'apple' becomes 'applema'.

// If a word begins with a consonant (i.e. not a vowel),
// remove the first letter and append it to the end, then add "ma".
// For example, the word "goat" becomes "oatgma".

// Add one letter 'a' to the end of each word per its word index in the sentence,
// starting with 1.
// For example, the first word gets "a" added to the end,
// the second word gets "aa" added to the end and so on.
// Return the final sentence representing the conversion from S to Goat Latin.

const isVowel = (char) => {
  let vowels = "aeiouAEIOU";
  return vowels.includes(char);
};

const toGoatLatin = function (S) {
  // split string
  let words = S.split(" ");
  let consenentCase;
  let letter;
  let newOrderedWord;
  let addLetters;
  for (let i = 0; i < words.length; i++) {
    if (isVowel(words[i][0])) {
      // vowel case
      words[i] = words[i] + "ma";
    } else {
      //consenent case
      consenentCase = words[i].split("");
      letter = consenentCase.shift();
      consenentCase.push(letter);
      newOrderedWord = consenentCase.join("") + "ma";
      words[i] = newOrderedWord;
    }
    addLetters = "a".repeat(i + 1);
    words[i] = words[i] + addLetters;
  }
  return words.join(" ");
  // loop thru array, determine if word starts with vowel
  // if vowel: append 'ma' to current word
  // consenent: romove first letter and append to end of word, then append 'ma'
  // also, append incrementing 'A's' to consenent startin words
};
