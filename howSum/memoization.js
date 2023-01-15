const howSumMemo = (targetSum, numbers, memo = {}) => {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  for (let num of numbers) {
    const remainder = targetSum - num;
    const result = howSumMemo(remainder, numbers, memo);
    if (result !== null) {
      memo[targetSum] = [...result, num];
      return memo[targetSum];
    }
  }
  memo[targetSum] = null;
  return memo[targetSum];
};

console.log(howSumMemo(7, [2, 3]));
console.log(howSumMemo(7, [5, 3, 4, 7]));
console.log(howSumMemo(7, [2, 4]));
console.log(howSumMemo(8, [2, 3, 5]));
console.log(howSumMemo(300, [7, 14]));
