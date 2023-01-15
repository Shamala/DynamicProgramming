// Given an array of numbers and a number.
// Can the number be arrived and if so the shortest numbers, by summing up any of the the numbers in array any number of times to get that number
// Ex 8, [2,3,5] :  [3,5]

const bestSum = (targetSum, numbers) => {
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  let shortestCombination = null;
  for (let num of numbers) {
    const remainder = targetSum - num;
    const result = bestSum(remainder, numbers);
    if (result !== null) {
      const combination = [...result, num];
      if (
        shortestCombination === null ||
        shortestCombination.length > combination.length
      ) {
        shortestCombination = combination;
      }
    }
  }
  return shortestCombination;
};
console.log(bestSum(7, [5, 3, 4, 7]));
console.log(bestSum(8, [2, 3, 5]));
console.log(bestSum(8, [1, 4, 5]));
console.log(bestSum(100, [1, 2, 5, 25]));
