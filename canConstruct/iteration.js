//canConstruct(abcdef, [ab, abc, cd def, abcd])

//Iteration 1- fill default values
//Index         0   1   2   3   4   5   6
//Values        T   F   F   F   F   F   F
//Target        a   b   c   d   e   f

//Iteration 2  Letters beginning with a in the wordBank - possible - fill next prefix as T
//Index         0    1   2   3   4   5   6
//Values       _T_   F   T   T   T   F   F
//Target        a    b   c   d   e   f
//              __ab__   T
//              __abc_____   T
//              __abcd________   T

//Iteration 3 Letters beginning with b. Does not exist. Skip
//Index         0    1   2   3   4   5   6
//Values        T   _F_  T   T   T   F   F
//Target        a    b   c   d   e   f

//Iteration 4 Letters beginning with c.
//Index         0    1    2    3   4   5   6
//Values        T    F   _T_   T   T   F   F
//Target        a    b    c     d   e   f
//                        ___cd__   T

//Iteration 5 Letters beginning with d.
//Index         0    1    2    3   4   5   6
//Values        T    F    T   _T_  T   F   T
//Target        a    b    c    d   e   f
//                             __def____    T

const canConstructIteration = (target, wordBank) => {
  let array = Array(target.length + 1).fill(false);
  array[0] = true;

  for (let i = 0; i <= target.length; i++) {
    if (array[i] === true) {
      for (let word of wordBank) {
        if (target.slice(i, i + word.length) === word) {
          array[i + word.length] = true;
        }
      }
    }
  }
  return array[target.length];
};
console.log(
  canConstructIteration("abcdef", ["ab", "abc", "cd", "def", "abcd"])
);
console.log(
  canConstructIteration("skateboard", [
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
  canConstructIteration("enterpotentpot", [
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
  canConstructIteration("eeeeeeeeeeeeeeeeeeeeeeeef", [
    "e",
    "ee",
    "eee",
    "eeee",
    "eeeee",
    "eeeeee",
  ])
);
