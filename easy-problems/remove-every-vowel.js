function removeVowels(str) {
  let newString = "";
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === "a" || str.charAt(i) === 'A') {
      str.slice(i)
    } else if (str.charAt(i) === "e" || str.charAt(i) === 'E') {
      str.slice(i)
    } else if (str.charAt(i) === "i" || str.charAt(i) === 'I') {
      str.slice(i)
    } else if (str.charAt(i) === "o" || str.charAt(i) === 'O') {
      str.slice(i)
    } else if (str.charAt(i) === "u" || str.charAt(i) === 'U') {
      str.slice(i)
    } else {
      newString += str.charAt(i)
    }
  }
  return newString;
}
