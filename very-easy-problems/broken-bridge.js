function isSafeBridge(str) {
  for (let i = 0; i < str.length - 1; i++) {
    if (str.charAt(i) === " ") {
      return false;
    }
  }
  return true;
}
