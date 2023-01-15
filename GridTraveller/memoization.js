const gridTravellerMemo = (n, m, memo = {}) => {
  const key = `${n},${m}`;
  if (key in memo) return memo[key];
  if (m === 0 || n === 0) return 0;
  if (m === 1 && n === 1) return 1;

  memo[key] =
    gridTravellerMemo(n - 1, m, memo) + gridTravellerMemo(n, m - 1, memo);
  return memo[key];
};
console.log(gridTravellerMemo(1, 1));
console.log(gridTravellerMemo(2, 3));
console.log(gridTravellerMemo(3, 2));
console.log(gridTravellerMemo(3, 3));
console.log(gridTravellerMemo(18, 18));
