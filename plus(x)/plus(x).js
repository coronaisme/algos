const plus = (x) => (x === 0 ? 0 : (x % 10) + plus(Math.floor(x / 10)));

console.log(plus(124897589)); // 53
console.log(124897589 % 10)
console.log(Math.floor(124897589 / 10))