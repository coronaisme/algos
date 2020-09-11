//I am not sure if this is a real route cipher
//Inputs are a message string, a row number r , and a column number c
//create a grid with the characters including white spaces in r number rows and c number columns
//the message should left to right via the rows when normal
//the coded message would be up and down left to right via the columns instead

//ex : message = "Hello, I am a message to scramblelol", r = 6, c = 6

//    'H', 'e', 'l', 'l', 'o', ','
//    ' ', 'I', ' ', 'a', 'm', ' '
//    'a', ' ', 'm', 'e', 's', 's'
//    'a', 'g', 'e', ' ', 't', 'o'
//    ' ', 's', 'c', 'r', 'a', 'm'
//    'b', 'l', 'e', 'l', 'o', 'l'

//output = 'H aa beI gsll mecelae rlomstao, soml'

const routeCipher = (message, c, r) => {
  let outerArray = [];
  let innerArray = [];
  let messageArr = message.split("");
  let string = "";

  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      innerArray.push(messageArr[0]);
      messageArr.splice(0, 1);
    }
    outerArray.push(innerArray);
    innerArray = [];
  }

  for (let i = 0; i < outerArray.length; i++) {
    for (let j = 0; j < outerArray.length; j++) {
      string = string + outerArray[j][i];
    }
  }

  return string;
};
