let display = document.querySelector('input');
let btn1 = document.querySelector('btn1');
let btn2 = document.querySelector('btn2');
let btn3 = document.querySelector('btn3');
let btn4 = document.querySelector('btn4');
let btn5 = document.querySelector('btn5');
let btn6 = document.querySelector('btn6');
let btn7 = document.querySelector('btn7');
let btn8 = document.querySelector('btn8');
let btn9 = document.querySelector('btn9');
let btn0 = document.querySelector('btn0');
let clearBtn = document.querySelector('clear');
let negativeBtn = document.querySelector('negative');
let remainderBtn = document.querySelector('remainder');
let divideBtn = document.querySelector('divide');
let multiplyBtn = document.querySelector('multiply');
let minusBtn = document.querySelector('minus');
let plusBtn = document.querySelector('plus');
let decimalBtn = document.querySelector('decimal');
let equalsBtn = document.querySelector('equals');


let firstNum = 0;
let op = '';
let secondNum = 0; 

function appendToDisplay(number) {
  display.value += number;
}

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
console.log(operate(2, '+', 5, '+', 10, '-', 7, '*', 2, '/', 5));

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