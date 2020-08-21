function addIndexes(arr) {
  const newArray = []
  for (let i = 0; i < arr.length; i++) {
    let newItem = i + arr[i];
    newArray.push(newItem)
  }
  return newArray;
}
