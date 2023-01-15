const canConstructMemo = (target, wordBank, memo = {}) => {
  if (target in memo) return memo[target];
  if (target === "") return true;

  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      const newTarget = target.slice(word.length);
      if (canConstructMemo(newTarget, wordBank, memo)) {
        memo[target] = true;
        return memo[target];
      }
    }
  }
  memo[target] = false;
  return false;
};
console.log(canConstructMemo("abcdef", ["ab", "abc", "cd", "def", "abcd"]));
console.log(
  canConstructMemo("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])
);
console.log(
  canConstructMemo("enterpotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"])
);
console.log(
  canConstructMemo("eeeeeeeeeeeeeeeeeeeeeeeef", [
    "e",
    "ee",
    "eee",
    "eeee",
    "eeeee",
    "eeeeee",
  ])
);
