// Given an array of numbers and a number.
// Can the number be arrived by summing up any of the the numbers in array any number of times to get that number
// Ex 7, [2,3] : true (3+2+2)

const canSum = (targetSum, numbers) => {
  if (targetSum === 0) return true;
  if (targetSum < 0) return false;
  for (let num of numbers) {
    let newTargetSum = targetSum - num;
    if (canSum(newTargetSum, numbers)) {
      return true;
    }
  }
  return false;
};

console.log(canSum(7, [2, 3]));
console.log(canSum(7, [5, 3, 4, 7]));
console.log(canSum(7, [2, 4]));
console.log(canSum(8, [2, 3, 5]));
console.log(canSum(300, [7, 14]));
