function fibonacci(n) {
  if (n == 0) return 0;

  if (n === 1 || n === 2) return 1;

  const returnValue = fibonacci(n - 1) + fibonacci(n - 2);
  return returnValue;
}
console.log(fibonacci(6));
console.log(fibonacci(7));
console.log(fibonacci(8));
console.log(fibonacci(50));
