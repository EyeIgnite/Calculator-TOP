let firstNum = 0;
let op = '';
let secondNum = 0; 

function operate(num1, op, num2) {
  if (op === '+') {
    return add(num1, num2);
  }
  else if (op === '-') {
    return subtract(num1, num2);
  }
  else if (op === '*') {
    return multiply(num1, num2); 
  }
  else if (op === '/') {
    return divide(num1, num2);
  }
}

console.log(operate(2, '+', 5, '+', 10));

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


function divide(a, b, ...numbers) {
  let sum = a / b;

  for (const num of numbers) {
    sum /= num;
  }
  return sum;
}
console.log(divide(100, 2));