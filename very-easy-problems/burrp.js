function longBurp(num) {
  let burp = "Bu";
  for (let r = 0; r <= num; r++) {
    if (r === num) {
      return burp += "p";
    } else {
      burp += "r";
    }
  }
}
