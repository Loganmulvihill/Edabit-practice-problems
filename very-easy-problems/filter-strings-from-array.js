function filterArray(arr) {
  const newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number' && Number.isInteger(arr[i]) === true) {
      newArray.push(arr[i]);
    }
  }
  return newArray;
}
