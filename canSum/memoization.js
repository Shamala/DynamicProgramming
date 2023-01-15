const canSumMemo = (targetSum, numbers, memo = {}) => {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return true;
  if (targetSum < 0) return false;

  for (let num of numbers) {
    const newTargetSum = targetSum - num;
    if (canSumMemo(newTargetSum, numbers, memo)) {
      memo[targetSum] = true;
      return true;
    }
  }
  memo[targetSum] = false;
  return false;
};

console.log(canSumMemo(7, [2, 3]));
console.log(canSumMemo(7, [5, 3, 4, 7]));
console.log(canSumMemo(7, [2, 4]));
console.log(canSumMemo(8, [2, 3, 5]));
console.log(canSumMemo(300, [7, 14]));
