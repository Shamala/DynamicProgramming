// Given a string, target, and an array fo strings, workBank,
// return a boolean value indicating if the target can be constructed by concatenating the words from word bank
// Can reuse words from word bank as many times as needed

const canConstruct = (target, wordBank) => {
  if (target === "") return true;

  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      const newTarget = target.slice(word.length);
      if (canConstruct(newTarget, wordBank)) return true;
    }
  }
  return false;
};
console.log(canConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]));
console.log(
  canConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])
);
console.log(
  canConstruct("enterpotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"])
);
console.log(
  canConstruct("eeeeeeeeeeeeeeeeeeeeeeeef", [
    "e",
    "ee",
    "eee",
    "eeee",
    "eeeee",
    "eeeeee",
  ])
);
