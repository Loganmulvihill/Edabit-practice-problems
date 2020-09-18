function getAbsSum(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += Math.abs(arr[i]);
  }
  return total;
}
