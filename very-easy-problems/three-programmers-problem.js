function programmers(one, two, three) {
  let least = 0;
  let most = 0;
  if (one < two && one < three) {
    least = one;
  }
  if (two < one && two < three) {
    least = two
  }
  if (three < one && three < two) {
    least = three
  }
  if (one > two && one > three) {
    most = one;
  }
  if (two > one && two > three) {
    most = two;
  }
  if (three > one && three > two) {
    most = three;
  }
  return (most - least);
}
