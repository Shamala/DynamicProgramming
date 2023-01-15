//"purple", ["purp", "p", "ur", "le", "purpl"]

//Itertion 1- Set Defaults
//Index     0   1   2   3   4   5   6
//Value     1   0   0   0   0   0   0
//Target    p   u   r   p   l   e

//Itertion 2 - Words starting with p
//Index      0   1   2   3   4   5   6
//Value     _1_  1   0   0   1   1   0
//Target     p   u   r   p  l   e
//           -purp--------   1
//           -p- 1
//           ---- purpl-------    1

//Iteration 3 - Words starting with u
//Index      0   1   2   3   4   5   6
//Value      1   1   0   1   1   1   0
//Target     p   u   r   p  l   e
//               -ur--   1

//Iteration 4 - Words starting with r - None No change
//Index      0   1   2   3   4   5   6
//Value      1   1   0   1   1   1   0
//Target     p   u   r   p  l   e

//Iteration 5 - Words starting with p
//Index      0   1   2   3   4   5   6
//Value      1   1   0   1   2   1   0
//Target     p   u   r   p   l   e
//                       -p- 1+1

//Iteration 6 - Words starting with l
//Index      0   1   2   3   4   5   6
//Value      1   1   0   1   2   1   2
//Target     p   u   r   p   l   e
//                           -le--- 2+0

//Iteration 6 - Words starting with e . No change
//Index      0   1   2   3   4   5   6
//Value      1   1   0   1   2   1   2
//Target     p   u   r   p   l   e

const countConstructIteration = (target, wordBank) => {
  let array = Array(target.length + 1).fill(0);
  array[0] = 1;

  for (let i = 0; i <= target.length; i++) {
    for (let word of wordBank) {
      if (target.slice(i, i + word.length) === word) {
        array[i + word.length] += array[i];
      }
    }
  }
  return array[target.length];
};
console.log(
  countConstructIteration("purple", ["purp", "p", "ur", "le", "purpl"])
);
console.log(
  countConstructIteration("abcdef", ["ab", "abc", "cd", "def", "abcd"])
);
console.log(
  countConstructIteration("skateboard", [
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
  countConstructIteration("enterpotentpot", [
    "a",
    "p",
    "ent",
    "enter",
    "ot",
    "o",
    "t",
  ])
);
console.log(
  countConstructIteration("eeeeeeeeeeeeeeeeeeeeeeeef", [
    "e",
    "ee",
    "eee",
    "eeee",
    "eeeee",
    "eeeeee",
  ])
);
