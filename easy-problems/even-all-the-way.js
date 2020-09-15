function getOnlyEvens(nums) {
  let newArr = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0 && i % 2 === 0) {
      newArr.push(nums[i]);
    }
  }
  return newArr;
}
