//7 [5,3,4]

//Default
//TargetSum 0   1   2   3   4   5   6   7
//Values    T   F   F   F   F   F   F   F

//Iteration 1
//TargetSum 0   1   2   3   4   5   6   7
//Values    T   F   F   T   T   T   F   F
//          |___3_______|
//          |_________4______|
//          |_________5__________|

//Iteration 2 - No Change( False at given point)
//TargetSum 0   1   2   3   4   5   6   7
//Values    T   F   F   T   T   T   F   F
//              |___3_______|
//              |_________4______|
//              |_________5__________|

//Iteration 3 - No Change
//TargetSum 0   1   2   3   4   5   6   7
//Values    T   F   F   T   T   T   F   F
//                  |___3_______|
//                  |_________4______|
//                  |_________5__________|

//Iteration 4 - True so update
//TargetSum 0   1   2   3   4   5   6   7
//Values    T   F   F   T   T   T   T  T
//                      |___3_______|
//                      |_________4______|

//Iteratio 4,5,6,7 True - UPdate subsequent if any

const canSumIteration = (targetSum, numbers) => {
  let array = Array(targetSum + 1).fill(false);
  array[0] = true;

  for (let i = 0; i <= targetSum; i++) {
    for (let num of numbers) {
      if (i + num <= targetSum) if (array[i]) array[i + num] = true;
    }
  }
  return array[targetSum];
};
console.log(canSumIteration(7, [2, 3]));
console.log(canSumIteration(7, [5, 3, 4, 7]));
console.log(canSumIteration(7, [2, 4]));
console.log(canSumIteration(8, [2, 3, 5]));
console.log(canSumIteration(300, [7, 14]));
