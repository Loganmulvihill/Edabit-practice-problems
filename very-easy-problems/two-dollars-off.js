function TwoDollarsOff (arr) {
  const newArr = [];

  for(let i = 0; i < arr.length; i++) {
    let newItem = arr[i] - 2;
    newArr.push(newItem);
  }
  return newArr;
}
