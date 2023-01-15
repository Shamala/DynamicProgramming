function fibonacciMemo(n, memo = {}) {
  if (n in memo) return memo[n];
  if (n === 0) return 0;
  if (n <= 2) return 1;

  memo[n] = fibonacciMemo(n - 1, memo) + fibonacciMemo(n - 2, memo);
  return memo[n];
}
console.log(fibonacciMemo(6));
console.log(fibonacciMemo(7));
console.log(fibonacciMemo(8));
console.log(fibonacciMemo(50));
