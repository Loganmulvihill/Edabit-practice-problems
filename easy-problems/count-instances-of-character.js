function charCount(myChar, str) {
  let total = 0;
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === myChar) {
      total += 1;
    }
  }
  return total;
}
