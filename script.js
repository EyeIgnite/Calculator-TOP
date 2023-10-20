let firstNum = 0;
let op = '';
let secondNum = 0; 

function operate(...args) {
  let result = args[0];

  for (let i = 1; i < args.length; i++) {
    const item = args[i];

    if (item === '+') {
      result = add(result, args[i + 1])
    }
    else if (item === '-') {
      result = subtract(result, args[i + 1]);
    }
    else if (item === '*') {
      result = multiply(result, args[i + 1]); 
    }
    else if (item === '/') {
      result = divide(result, args[i + 1]);
    }
  }
  return result;
}
console.log(operate(2, '+', 5, '+', 10, '-', 7));

function add(a, b, ...numbers) {
  let sum = a + b;

  for (const num of numbers) {
    sum += num;
  }
  return sum;
}

function subtract(a, b, ...numbers) {
  let sum = a - b;

  for (const num of numbers) {
    sum -= num;
  }
  return sum;
}

function multiply(a, b, ...numbers) {
  let sum = a * b;

  for (const num of numbers) {
    sum *= num;
  }
  return sum;
}

function divide(a, b, ...numbers) {
  let sum = a / b;

  for (const num of numbers) {
    sum /= num;
  }
  return sum;
}