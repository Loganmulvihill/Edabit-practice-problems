function squaresSum(n) {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += Math.pow(i, 2);
  }
  return sum;
}
