function hurdleJump(hurdles, jumpHeight) {
  let boolean = true;
  for (let i = 0; i < hurdles.length; i++) {
    if (jumpHeight < hurdles[i]) {
      boolean = false
      return boolean;
    } else {
      boolean = true;
    }
  }
  return boolean;
}
