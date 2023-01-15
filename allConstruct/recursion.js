// Given a string, target, and an array fo strings, workBank,
// return all the combination of word that result in target,by concatenating the words from word bank
// Can reuse words from word bank as many times as needed

const allConstruct = (target, wordBank) => {
  if (target === "") return [[]];

  const result = [];
  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      const newTarget = target.slice(word.length);
      const newCombinations = allConstruct(newTarget, wordBank);
      const targetWays = newCombinations.map((way) => [word, ...way]);
      result.push(...targetWays);
    }
  }
  return result;
};
console.log(allConstruct("purple", ["purp", "p", "ur", "le", "purpl"]));
console.log(
  allConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd", "ef", "c"])
);
console.log(
  allConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])
);
console.log(
  allConstruct("aaaaaaaaaaaaaaaaaaaaaz", ["a", "aa", "aaa", "aaaa", "aaaaa"])
);
