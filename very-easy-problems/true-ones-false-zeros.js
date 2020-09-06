function integerBoolean(n) {
  let newArr = [];
  for (let i = 0; i < n.length; i++) {
    let item = "replacement";
    if (n.charAt(i) === "1") {
      item = true;
      newArr.push(item);
    } else {
      item = false;
      newArr.push(item);
    }
  }
  return newArr;
}
