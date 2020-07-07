function calculateExponent(num, exp) {
  var originalNumber = 1;
  var newNumber = num * num;
  for (var i = 0; i < exp; i++) {
    originalNumber *= num
  }
  return originalNumber;
}
