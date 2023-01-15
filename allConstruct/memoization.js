const allConstructMemo = (target, wordBank, memo = {}) => {
  if (target in memo) return memo[target];
  if (target === "") return [[]];

  let result = [];
  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      const newTarget = target.slice(word.length);
      const combination = allConstructMemo(newTarget, wordBank, memo);
      const newWays = combination.map((way) => [word, ...way]);
      result.push(...newWays);
    }
  }
  memo[target] = result;
  return memo[target];
};
console.log(allConstructMemo("purple", ["purp", "p", "ur", "le", "purpl"]));
console.log(
  allConstructMemo("abcdef", ["ab", "abc", "cd", "def", "abcd", "ef", "c"])
);
console.log(
  allConstructMemo("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])
);
console.log(
  allConstructMemo("aaaaaaaaaaaaaaaaaaaaaz", [
    "a",
    "aa",
    "aaa",
    "aaaa",
    "aaaaa",
  ])
);
