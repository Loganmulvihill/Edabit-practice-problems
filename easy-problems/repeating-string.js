function doubleChar(str) {
  let newString = '';
  for (let i = 0; i < str.length; i++) {
    newString += str.charAt(i) + str.charAt(i);
  }
  return newString;
}
