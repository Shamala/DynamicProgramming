const bestSumMemo = (targetSum, numbers, memo = {}) => {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  let shortestCombination = null;
  for (let num of numbers) {
    const remainder = targetSum - num;
    const result = bestSumMemo(remainder, numbers, memo);
    if (result != null) {
      const combination = [...result, num];
      if (
        shortestCombination === null ||
        combination.length < shortestCombination.length
      ) {
        shortestCombination = combination;
        memo[targetSum] = shortestCombination;
      }
    }
  }
  return memo[targetSum];
};

console.log(bestSumMemo(7, [5, 3, 4, 7]));
console.log(bestSumMemo(8, [2, 3, 5]));
console.log(bestSumMemo(8, [1, 4, 5]));
console.log(bestSumMemo(100, [1, 2, 5, 25]));
