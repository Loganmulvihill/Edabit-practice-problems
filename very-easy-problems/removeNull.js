function removeNull(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== null) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
