function multiplyByLength(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i] * arr.length);
  }
  return newArr;
}
