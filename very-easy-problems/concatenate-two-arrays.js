function concat(arr1, arr2) {
  var resultArray = [];
  for (var i = 0; i < arr1.length; i++) {
    resultArray.push(arr1[i]);
  }
  for (var i = 0; i < arr2.length; i++) {
    resultArray.push(arr2[i]);
  }
  return resultArray;

}
