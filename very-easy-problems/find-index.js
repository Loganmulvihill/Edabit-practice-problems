function findIndex(arr, str) {
  let counter = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === str) {
      return counter;
    }
    counter++;
  }
}
