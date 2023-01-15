//"abcdef", ["ab", "abc", "cd", "def", "abcd", "ef", "c"]

//Iteration 1
//Index     0       1       2        3      4       5       6
//Values    [       [       [       [       [       [       [
//          []
//            ]      ]      ]       ]       ]       ]       ]
//Target    a       b       c       d       e       f

//Iteration 2 - begins with a
//Index     0       1       2        3      4       5       6
//Values    [       [       [       [       [       [       [
//          []             [ab]     [abc]   [abcd]
//            ]      ]      ]       ]       ]       ]       ]
//Target    a       b       c       d       e       f
//          ---ab---
//          ----abc---------
//          ------abcd---------------

//Iteration 3 - begins with b. None Skip
//Index     0       1       2        3      4       5       6
//Values    [       [       [       [       [       [       [
//          []             [ab]     [abc]   [abcd]
//            ]      ]      ]       ]       ]       ]       ]
//Target    a       b       c       d       e       f

//Iteration 4 - begins with c
//Index     0       1       2        3      4       5       6
//Values    [       [       [       [       [       [       [
//          []             [ab]     [abc]   [abcd],
//                                  [ab,c]  [ab,cd]
//            ]      ]      ]       ]       ]       ]       ]
//Target    a       b       c       d       e       f
//                          --cd----
//                         _c_

//Iteration 5 - begins with d
//Index     0       1       2        3      4           5       6
//Values    [       [       [       [       [           [       [
//          []             [ab]     [abc]   [abcd],             [abc,def],
//                                  [ab,c]  [ab,cd]            [ab,c,def]
//            ]      ]      ]       ]       ]           ]       ]
//Target    a       b       c       d       e           f
//                                  --def---------------

//Iteration 5 - begins with e
//Index     0       1       2        3      4           5       6
//Values    [       [       [       [       [           [       [
//          []             [ab]     [abc]   [abcd],             [abc,def],
//                                  [ab,c]  [ab,cd]             [ab,c,def]
//                                                              [abcd,ef]
//                                                              [ab,cd,ef]
//            ]      ]      ]       ]       ]           ]       ]
//Target    a       b       c       d       e           f
//                                          --ef---------

//Iteration 6 - Starts with f. No change

const allConstructIteration = (target, wordBank) => {
  let array = Array(target.length + 1)
    .fill()
    .map(() => []);

  array[0] = [[]];

  for (let i = 0; i <= target.length; i++) {
    for (let word of wordBank) {
      if (target.slice(i, i + word.length) === word) {
        const newCombinations = array[i].map((subArray) => [...subArray, word]);
        array[i + word.length].push(...newCombinations);
      }
    }
  }
  return array[target.length];
};
console.log(
  allConstructIteration("purple", ["purp", "p", "ur", "le", "purpl"])
);
console.log(
  allConstructIteration("abcdef", ["ab", "abc", "cd", "def", "abcd", "ef", "c"])
);
console.log(
  allConstructIteration("skateboard", [
    "bo",
    "rd",
    "ate",
    "t",
    "ska",
    "sk",
    "boar",
  ])
);
console.log(
  allConstructIteration("aaaaaaaaaaaaaaaaaaaaaz", [
    "a",
    "aa",
    "aaa",
    "aaaa",
    "aaaaa",
  ])
);
