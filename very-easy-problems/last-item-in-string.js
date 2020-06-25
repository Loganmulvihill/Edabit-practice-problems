function getLastItem(arr) {
  var newArray = [];
  for (var i = 0; i < arr.length; i++) {
    if (i === (arr.length - 1)) {
      newArray.push(arr[i]);
    }
  }
  return newArray[0];
}
