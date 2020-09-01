function hasSameBread(arr1, arr2) {
  let firstArrSlice = arr1[0];
  let lastArrSlice = arr1[arr1.length - 1];

  let secondArrSlice = arr2[0];
  let secondLastArrSlice = arr2[arr2.length - 1];

  if (firstArrSlice === secondArrSlice && lastArrSlice === secondLastArrSlice) {
    return true;
  } else {
    return false;
  }
}
