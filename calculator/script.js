let currentInput = '';
let previousInput = '';
let operator = '';

function appendNumber(number) {
    if (currentInput === '0' && number === '0') return;
    if (currentInput.includes('.') && number === '.') return;
    currentInput += number;
    updateDisplay(currentInput);
}

function appendOperator(op) {
    if (currentInput === '' && op === '**') return; // Avoid exponent without base
    if (currentInput === '' && op !== '-') return;  // Prevent starting with other operator
    if (currentInput !== '' && operator === '') {
        previousInput = currentInput;
        currentInput = '';
    }
    operator = op;
    updateDisplay(operator);
}

function calculate() {
    if (currentInput === '' || previousInput === '' || operator === '') return;
    let result;
    switch (operator) {
        case '+':
            result = parseFloat(previousInput) + parseFloat(currentInput);
            break;
        case '-':
            result = parseFloat(previousInput) - parseFloat(currentInput);
            break;
        case '*':
            result = parseFloat(previousInput) * parseFloat(currentInput);
            break;
        case '/':
            result = parseFloat(previousInput) / parseFloat(currentInput);
            break;
        case '**':
            result = Math.pow(parseFloat(previousInput), parseFloat(currentInput));
            break;
        case '%':
            result = parseFloat(previousInput) % parseFloat(currentInput);
            break;
        default:
            return;
    }
    currentInput = result.toString();
    operator = '';
    previousInput = '';
    updateDisplay(currentInput);
}

function clearAll() {
    currentInput = '';
    previousInput = '';
    operator = '';
    updateDisplay('0');
}

function updateDisplay(value) {
    const display = document.getElementById('display');
    display.innerText = value;
}
