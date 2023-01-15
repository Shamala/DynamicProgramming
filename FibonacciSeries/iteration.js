//Table Format (n+1)
//Initial Table value 0   1   0   0   0   0  (base case a[1]=1)
//Table index         0   1   2   3   4   5

// Fill with i+1 = arr[i+1] +arr[i]
//Iteration 1
//Table Index  0   1   2   3   4   5
//Table        0   1   1   1   1   1
//                 |___|
//                 |________|
//Iteration 1
//Table Index  0   1   2   3   4   5
//Table        0   1   1   2   3   5
//                     |___|
//                     |________|

function fibonacciIteration(n) {
  const fibonacciTable = Array(n + 1).fill(0);
  fibonacciTable[1] = 1;

  for (let i = 0; i <= n; i++) {
    fibonacciTable[i + 1] += fibonacciTable[i];
    fibonacciTable[i + 2] += fibonacciTable[i];
  }
  return fibonacciTable[n];
}
console.log(fibonacciIteration(6));
console.log(fibonacciIteration(7));
console.log(fibonacciIteration(8));
console.log(fibonacciIteration(50));
