function findIndex(arr, str) {
  var index = null;
  for (var i = 0; i < arr.length; i++) {
    if (str === arr[i]) {
      index = i;
    }
  }
  return index;
}
