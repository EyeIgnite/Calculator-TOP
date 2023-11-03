document.addEventListener('DOMContentLoaded', () => {
  let displayValue = '';
  let firstNumber = null;
  let operator = null;

  const display = document.getElementById('display');

  function calculateAndDisplay() {
    if (firstNumber !== null && operator !== null) {
      const secondNumber = parseFloat(displayValue);
      
      if (operator === '/' && secondNumber === 0) {
        displayValue = 'Error: Division by zero';
        display.value = displayValue;
      } else {
        displayValue = operate(operator, firstNumber, secondNumber);
        display.value = displayValue;
        firstNumber = parseFloat(displayValue);
      }
    }
  }

  document.querySelectorAll('.number').forEach(button => {
    button.addEventListener('click', () => {
      if (displayValue.length < 10) {
        displayValue += button.textContent;
        display.value = displayValue;
      }
    });
  });

  document.getElementById('clear').addEventListener('click', () => {
    displayValue = '';
    firstNumber = null;
    operator = null;
    display.value = '0';
  });

  document.querySelectorAll('.operator').forEach(button => {
    button.addEventListener('click', () => {
        if (firstNumber === null) {
            firstNumber = parseFloat(displayValue);
            operator = button.textContent;
            displayValue = '';
        } else {
            if (displayValue !== '') {
                const secondNumber = parseFloat(displayValue);
                firstNumber = operate(operator, firstNumber, secondNumber);
                displayValue = '';
                operator = button.textContent;
                display.value = firstNumber;
            } else {
              // If no new number is entered, double the displayed value
              firstNumber = operate(operator, firstNumber, firstNumber);
              display.value = firstNumber;
          }
        }
    });
 });

  document.getElementById('equals').addEventListener('click', () => {
    if (firstNumber !== null && operator !== null) {
      const secondNumber = parseFloat(displayValue);
      displayValue = operate(operator, firstNumber, secondNumber);
      display.value = displayValue;
      firstNumber = null;
      operator = null;
    }
  });

  document.getElementById('backspace').addEventListener('click', () => {
    if (displayValue.length > 0) {
      displayValue = displayValue.slice(0, -1);
      display.value = displayValue;
    }
  });

  document.getElementById('decimal').addEventListener('click', () => {
    if (!displayValue.includes('.')) {
      displayValue += '.';
      display.value = displayValue;
    }
  });

  document.getElementById('negative').addEventListener('click', () => {
  if (displayValue !== '0') {
    if (displayValue.charAt(0) === '-') {
      displayValue = displayValue.slice(1); 
    } else {
      displayValue = '-' + displayValue; 
    }
    display.value = displayValue;
  }
});

  function add(a, b) {
    return a + b;
  }

  function subtract(a, b) {
    return a - b;
  }

  function multiply(a, b) {
    return a * b;
  }

  function divide(a, b) {
    if (b === 0) {
      display.value = 'Error';
      return null;
    }
    return a / b;
  }

  function operate(operator, a, b) {
    switch (operator) {
      case '+':
        return add(a, b);
      case '-':
        return subtract(a, b);
      case '*':
        return multiply(a, b);
      case '/':
        return divide(a, b);
      default:
        return null;
    }
  }
});

