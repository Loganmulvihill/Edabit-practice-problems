function mean(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  let mean = total / arr.length;
  return Math.round(mean * 100) / 100
}
