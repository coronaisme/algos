const myPow = function (x, n) {
  if (n < 0) {
    x = 1 / x;
    n = -n;
  }
  return pow(x, n);

  const pow = (x, n) => {
    if (n == 0) return 1;
    const half = pow(x, Math.floor(n / 2));
    if (n % 2 === 0) {
      return half * half;
    } else {
      return half * half * x;
    }
  }
};
