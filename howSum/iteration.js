//7 [5,3,4]

//Default
//TargetSum 0    1      2       3       4       5       6       7
//Values    []  null   null    null    null    null    null    null

//Iteration 1
//TargetSum 0    1      2       3     4     5       6       7
//Values    []  null   null    [3]   [4]   [5]    null    null
//          |___3________________|
//          |_________4__________________|
//          |_________5_________________________|

//Iteration 2 null - So no change
//TargetSum 0    1      2       3       4       5       6       7
//Values    []  null   null   [3]   [4]      [5]    null    null
//                |___3________________|
//                |_________4___________________|
//                |_________5_____________________________|

//Iteration 3 null - so no change
//TargetSum 0    1      2       3       4       5       6       7
//Values    []  null    null   [3]      [4]     [5]    null    null
//                       |___3________________|
//                       |_________4___________________|
//                       |_________5_____________________________|

//Iteration 4
//TargetSum 0    1      2       3       4       5       6       7
//Values    []  null    null   [3]      [4]     [5]    [3,3]    [3,4]
//                              |___3___________________|
//                              |_________4______________________|
//

//Iteration 4
//TargetSum 0    1      2       3       4       5       6       7
//Values    []  null    null   [3]      [4]     [5]    [3,3]    [4,3]
//                                      |___3___________________|
//

const howSumIteration = (targetSum, numbers) => {
  let array = Array(targetSum + 1).fill(null);
  array[0] = [];

  for (let i = 0; i <= targetSum; i++) {
    for (let num of numbers) {
      if (array[i] !== null) {
        array[i + num] = [...array[i], num];
      }
    }
  }
  return array[targetSum];
};

console.log(howSumIteration(7, [2, 3]));
console.log(howSumIteration(7, [5, 3, 4, 7]));
console.log(howSumIteration(7, [2, 4]));
console.log(howSumIteration(8, [2, 3, 5]));
console.log(howSumIteration(300, [7, 14]));
