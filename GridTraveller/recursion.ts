// A grid traveller can complete a travel from leftmost grid to right most bottomgrid in 2 ways left or down(2 ways) at any point in time
// List the total number of ways a traveller can traverse a grid

//Base case 0 or 0 grid can travel 0 way
// 1,1 grid then 1 way

const gridTraveller = (n, m) => {
  if (m === 0 || n === 0) return 0;
  if (m === 1 && n == 1) return 1;

  const numberOfWays = gridTraveller(n - 1, m) + gridTraveller(n, m - 1);
  return numberOfWays;
};

console.log(gridTraveller(1, 1));
console.log(gridTraveller(2, 3));
console.log(gridTraveller(3, 2));
console.log(gridTraveller(3, 3));
console.log(gridTraveller(18, 18));
