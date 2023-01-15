// Table with base case 1,1 = 1
// 0  0  0  0
// 0  1  0  0
// 0  0  0  0

// Add the number to every move  i.e. left and down
// Iteration 1
// 0  0  0  0
// 0  1  1  1
// 0  1  1  1

// Iteration 2
// 0  0  0  0
// 0  1  1  1
// 0  1  2  3

const gridTravellerIterative = (n, m) => {
  let table = Array(n + 1)
    .fill()
    .map(() => Array(m + 1).fill(0));
  table[1][1] = 1; // base case
  for (let i = 0; i <= n; i++) {
    for (let j = 0; j <= m; j++) {
      const current = table[i][j];
      if (j + 1 <= m) table[i][j + 1] += current;
      if (i + 1 <= n) table[i + 1][j] += current;
    }
  }
  return table[n][m];
};
console.log(gridTravellerIterative(1, 1));
console.log(gridTravellerIterative(2, 3));
console.log(gridTravellerIterative(3, 2));
console.log(gridTravellerIterative(3, 3));
console.log(gridTravellerIterative(18, 18));
