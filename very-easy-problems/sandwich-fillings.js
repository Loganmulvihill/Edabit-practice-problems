function getFillings(sandwich) {
  let newArr = [];
  for (let i = 1; i < sandwich.length - 1; i++) {
    newArr.push(sandwich[i]);
  }
  return newArr;
}
