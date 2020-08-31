function firstLast(arr) {
  let newArr = [];
  let first = arr[0];
  let last = arr[arr.length - 1];
  newArr.push(first);
  newArr.push(last);
  return newArr;
}
