function wordLengths(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let length = arr[i].length;
    newArr.push(length);
  }
  return newArr;
}
