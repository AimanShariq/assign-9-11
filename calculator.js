function calculate() {
    const firstNumber = parseFloat(document.getElementById('firstNumber').value);
    const secondNumber = parseFloat(document.getElementById('secondNumber').value);
    const operation = document.getElementById('operation').value;
    let result;

    if (operation === '+') {
        result = firstNumber + secondNumber;
    } else if (operation === '-') {
        result = firstNumber - secondNumber;
    } else if (operation === '*') {
        result = firstNumber * secondNumber;
    } else if (operation === '/') {
        result = firstNumber / secondNumber;
    } else if (operation === '%') {
        result = firstNumber % secondNumber;
    } else {
        result = 'Invalid operation';
    }

    document.getElementById('result').innerText = `Result: ${result}`;
}