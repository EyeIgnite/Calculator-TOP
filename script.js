function add(a, b, ...numbers) {
  let sum = a + b;

  for (const num of numbers) {
    sum += num;
  }
  return sum;
}

console.log(add(1000, 5000, 45, 60));

function subtract(a, b, ...numbers) {
  let sum = a - b;

  for (const num of numbers) {
    sum -= num;
  }

  return sum;
}