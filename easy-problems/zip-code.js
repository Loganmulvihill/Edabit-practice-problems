function isValid(zip) {
  for (let i = 0; i < zip.length; i++) {
    let currentValue = zip.charAt(i);
    if (zip.length > 5) {
      return false;
    } if (zip.charAt(i) === "") {
      return false;
    }
    if (parseInt(currentValue) === 'NaN') {
      return false;
    }
  }
  return true;
}
