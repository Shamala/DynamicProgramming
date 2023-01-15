// Given a string, target, and an array fo strings, workBank,
// return the count of number of ways a  target can be constructed by concatenating the words from word bank
// Can reuse words from word bank as many times as needed
const countConstruct = (target, wordBank) => {
  if (target === "") return 1;

  let totalCount = 0;
  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      let newOfWays = countConstruct(target.slice(word.length), wordBank);
      totalCount += newOfWays;
    }
  }
  return totalCount;
};

console.log(countConstruct("purple", ["purp", "p", "ur", "le", "purpl"]));
console.log(countConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]));
console.log(
  countConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])
);
console.log(
  countConstruct("enterpotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"])
);
console.log(
  countConstruct("eeeeeeeeeeeeeeeeeeeeeeeef", [
    "e",
    "ee",
    "eee",
    "eeee",
    "eeeee",
    "eeeeee",
  ])
);
