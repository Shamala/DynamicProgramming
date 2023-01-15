//8 [2,3,5]

//Default
//TargetSum 0    1      2       3       4       5       6       7       8
//Values    []  null   null    null    null    null    null    null     null

//Iteration 1
//TargetSum 0    1      2       3     4     5       6       7       8
//Values    []  null   [2]    [3]   null   [5]    null    null      null
//          |___2_______ |
//          |_________3_________|
//          |_________5______________________|

//Iteration 2 null - So no change
//TargetSum 0    1      2       3       4       5       6     7     8
//Values    []  null   [2]     [3]     [4]      [5]    null    null    null
//                |___2_________|
//                |_________3___________|
//                |_________5_____________________________|

//Iteration 3
//TargetSum 0    1      2       3       4       5       6       7       8
//Possible but length long            [2,2]    [2,3]
//Values    []  null    [2]   [3]      [4]     [5]    null    [2,5]     null
//                        |___2_________|
//                        |_________3___________|
//                        |_________5_____________________________|

//Iteration 4
//TargetSum 0    1      2       3       4       5       6       7       8
//Possible but length long                     [2,3]
//Values    []  null    [2]   [3]      [4]     [5]    [3,3]    [2,5]    [3,5]
//                              |___2_________|
//                              |_________3___________|
//                              |_________5_____________________________|

//Iteration 4
//TargetSum 0    1      2       3       4       5       6       7       8
//Possible return either                            [4,2]    [4,3]
//Values    []  null    [2]   [3]      [4]     [5]   [3,3]    [2,5]    3,5]
//                                      |___2_________|
//                                      |_________3___________|

//Iteration 5
//TargetSum 0    1      2       3       4       5       6       7       8
//Possible return either
//Values    []  null    [2]   [3]      [4]     [5]   [3,3]    [2,5]    [3,5]
//                                              |___2_________|
//                                              |_________3___________|

//Iteration 6
//TargetSum 0    1      2       3       4       5       6       7       8
//Possible but length long                                              [3,3,2]
//Values    []  null    [2]   [3]      [4]     [5]   [3,3]    [2,5]    [3,5]
//                                                      |___2_________|
//

const bestSumIteration = (targetSum, numbers) => {
  let array = Array(targetSum + 1).fill(null);
  array[0] = [];
  for (let i = 0; i <= targetSum; i++) {
    if (array[i] != null) {
      for (let num of numbers) {
        const combination = [...array[i], num];
        if (i + num <= targetSum) {
          if (!array[i + num] || combination.length < array[i + num].length)
            array[i + num] = combination;
        }
      }
    }
  }
  return array[targetSum];
};
console.log(bestSumIteration(7, [5, 3, 4, 7]));
console.log(bestSumIteration(8, [2, 3, 5]));
console.log(bestSumIteration(8, [1, 4, 5]));
console.log(bestSumIteration(100, [1, 2, 5, 25]));
