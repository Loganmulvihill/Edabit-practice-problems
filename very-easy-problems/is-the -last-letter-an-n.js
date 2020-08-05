function isLastCharacterN(word) {
  const lastIndex = word.length - 1;
  const lastLetter = word[lastIndex];
  if (lastLetter === 'n') {
    return true;
  } else {
    return false;
  }
}
