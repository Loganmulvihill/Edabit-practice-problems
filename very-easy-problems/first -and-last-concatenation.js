function firstLast(name) {
  var first = null;
  var last = null;
  for (var i = 0; i < name.length; i++) {
    if (i === 0) {
      first = name[i];
    }
    if (i === (name.length - 1)) {
      last = name[i];
    }
  }
  return first + last;
}
