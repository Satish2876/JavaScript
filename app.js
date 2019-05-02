// Get the HTML Elements
let firstNumberBox = document.querySelector('#firstNumber');
let secondNumberBox = document.querySelector('#secondNumber');
let operatorButton = document.querySelector('#operator');
let equalsButton = document.querySelector('#equals-button');
let resultButton = document.querySelector('#result-button');
let plusButton = document.querySelector('#plus-button');
let minusButton = document.querySelector('#minus-button');
let divideButton = document.querySelector('#divide-button');
let multiplyButton = document.querySelector('#multiply-button');
let clearButton = document.querySelector('#clear-button');

// Minus Button Click
minusButton.addEventListener('click',function() {
    operatorButton.textContent = minusButton.textContent;
    calculate();
});

// Plus Button Click
plusButton.addEventListener('click',function() {
    operatorButton.textContent = plusButton.textContent;
    calculate();
});

// Divide Button Click
divideButton.addEventListener('click',function() {
    operatorButton.textContent = divideButton.textContent;
    calculate();
});

// Minus Button Click
multiplyButton.addEventListener('click',function() {
    operatorButton.textContent = multiplyButton.textContent;
    calculate();
});

// Equals Button Click
equalsButton.addEventListener('click',function() {
    let firstNumber = firstNumberBox.value;
    let secondNumber = secondNumberBox.value;
    let operator = operatorButton.textContent;
    let result = 0;
    if(firstNumber !== '' && secondNumber !== ''){
        firstNumber = Number(firstNumber);
        secondNumber = Number(secondNumber);
        switch(operator){
            case '+':
                result = firstNumber + secondNumber;
                break;
            case '-':
                result = firstNumber - secondNumber;
                break;
            case '*':
                result = firstNumber * secondNumber;
                break;
            case '/':
                result = firstNumber / secondNumber;
                break;
        }
        resultButton.textContent = result;
    }
});

// calculate
let calculate = () => {
    let firstNumber = firstNumberBox.value;
    let secondNumber = secondNumberBox.value;
    let operator = operatorButton.textContent;
    let result = 0;
    if(firstNumber !== '' && secondNumber !== ''){
        firstNumber = Number(firstNumber);
        secondNumber = Number(secondNumber);
        switch(operator){
            case '+':
                result = firstNumber + secondNumber;
                break;
            case '-':
                result = firstNumber - secondNumber;
                break;
            case '*':
                result = firstNumber * secondNumber;
                break;
            case '/':
                result = firstNumber / secondNumber;
                break;
        }
        resultButton.textContent = result;
    }
};

// Clear Button Logic
clearButton.addEventListener('click',function() {
    firstNumberBox.value = '';
    secondNumberBox.value = '';
    operatorButton.textContent = '+';
    resultButton.textContent = 'RESULT';
});
