let firstNum = 0;
let op = '';
let secondNum = 0; 

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
console.log(subtract(10000, 5000, 10, 10, 10));


function multiply(a, b, ...numbers) {
  let sum = a * b;

  for (const num of numbers) {
    sum *= num;
  }
  return sum;
}
console.log(multiply(2, 4, 10, 10));


function division(a, b, ...numbers) {
  let sum = a / b;

  for (const num of numbers) {
    sum /= num;
  }
  return sum;
}
console.log(division(100, 2));