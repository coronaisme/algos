//THIS IS NOT AN ALGORITHM

// // //var
// // for (var i = 0; i < 3; i++) {
// //   console.log(i + " var in func block");
// // }
// // console.log(i + " var outside func block");
// // console.log(" ");

// // //let
// // for (let j = 0; j < 3; j++) {
// //   console.log(j + " let inside func block");
// // }
// // console.log(j + " let outside of func block");
// // console.log(" ");

// //const
// const something = "something";
// console.log(something);
// something = "something else";

let array = [1, 2, 2, 2, 2, 2, 2];
const unique = (arr) => new Set([...arr]);
console.log(unique(array));

console.log(" ");

function Something(something) {
  this.something = something;

  this.printSomething = function () {
    return () => {
      console.log(this.constructor.name);
      console.log(`${this.something}`);
    };
  };
}

let s = new Something("something");
let print = s.printSomething();
print();
