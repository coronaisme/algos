const myPow = function (x, n) {
  if (n < 0) {
    x = 1 / x;
    n = -n;
  }
  return pow(x, n);

  function pow(x, n) {
    if (n == 0) return 1;
    const half = pow(x, Math.floor(n / 2));
    if (n % 2 === 0) {
      return half * half;
    } else {
      return half * half * x;
    }
  }
};



const constantLookup = (arr = [1,2,3,4,5,6,7,8,9,10]) => {
  return arr[0]
}


const iterativePow = (x, n) => {
  let res = 1
  for(let i = 0; i < n; i++) {
    res *= x
  }
  return res
}

const recursivePow = (x, n) => n === 1 ? x : (x * recursivePow(x, n - 1))

console.log(recursivePow(2, 5)) //32
console.log(iterativePow(2, 5)) //32