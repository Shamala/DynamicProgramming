const countConstructMemo = (target, wordBank, memo = {}) => {
  if (target in memo) return memo[target];

  if (target === "") return 1;
  let totalCount = 0;
  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      const count = countConstructMemo(
        target.slice(word.length),
        wordBank,
        memo
      );
      totalCount += count;
    }
  }
  memo[target] = totalCount;
  return memo[target];
};
console.log(countConstructMemo("purple", ["purp", "p", "ur", "le", "purpl"]));
console.log(countConstructMemo("abcdef", ["ab", "abc", "cd", "def", "abcd"]));
console.log(
  countConstructMemo("skateboard", [
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
  countConstructMemo("enterpotentpot", [
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
  countConstructMemo("eeeeeeeeeeeeeeeeeeeeeeeef", [
    "e",
    "ee",
    "eee",
    "eeee",
    "eeeee",
    "eeeeee",
  ])
);
