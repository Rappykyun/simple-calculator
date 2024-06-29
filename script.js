const display = document.getElementById('textArea');
const btnZero = document.getElementById('btnZero');
const btnOne = document.getElementById('btnOne');
const btnTwo = document.getElementById('btnTwo');
const btnThree = document.getElementById('btnThree');
const btnFour = document.getElementById('btnFour');
const btnFive = document.getElementById('btnFive');
const btnSix = document.getElementById('btnSix');
const btnSeven = document.getElementById('btnSeven');
const btnEight = document.getElementById('btnEight');
const btnNine = document.getElementById('btnNine');
const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const times = document.getElementById('times');
const btnDivide = document.getElementById('divide');
const del = document.getElementById('del');
const equal = document.getElementById('equals');
const clear = document.getElementById('clear');

btnZero.addEventListener('click', function() {
    display.textContent += '0';
});

btnOne.addEventListener('click', function() {
    display.textContent += '1';
});

btnTwo.addEventListener('click', function() {
    display.textContent += '2';
});

btnThree.addEventListener('click', function() {
    display.textContent += '3';
});

btnFour.addEventListener('click', function() {
    display.textContent += '4';
});

btnFive.addEventListener('click', function() {
    display.textContent += '5';
});

btnSix.addEventListener('click', function() {
    display.textContent += '6';
});

btnSeven.addEventListener('click', function() {
    display.textContent += '7';
});

btnEight.addEventListener('click', function() {
    display.textContent += '8';
});

btnNine.addEventListener('click', function() {
    display.textContent += '9';
});

plus.addEventListener('click', function() {
    display.textContent += ' + ';
});

minus.addEventListener('click', function() {
    display.textContent += ' - ';
});

times.addEventListener('click', function() {
    display.textContent += ' * ';
});

btnDivide.addEventListener('click', function() {
    display.textContent += ' / ';
});

clear.addEventListener('click', function() {
    display.textContent = '';
});

del.addEventListener('click', function() {
    display.textContent = display.textContent.slice(0, -1);
});
equal.addEventListener('click', function() {
    let expression = display.textContent;
    let result = evaluateExpression(expression);
    display.textContent = result;
});

function add(a,b){
    return a+b;
}
function subtract(a,b){
    return a-b;
}
function multiply(a,b){
    return a*b;
}
function divide(a,b){
    if (b === 0) {
        return "Error: Division by zero";
    }
    return a/b;
}
function evaluateExpression(expression) {
    let tokens = expression.split(/\s+/);

    function applyOp(num1, op, num2) {
        switch (op) {
            case '+':
                return add(num1, num2);
            case '-':
                return subtract(num1, num2);
            case '*':
                return multiply(num1, num2);
            case '/':
                if (num2 === 0) {
                    return "Error: Division by zero";
                }
                return divide(num1, num2);
            default:
                return "Error: Invalid operation";
        }
    }

    let result = parseFloat(tokens[0]);
    let i = 1;

    while (i < tokens.length) {
        let operator = tokens[i];
        let nextNum = parseFloat(tokens[i + 1]);

        if (isNaN(nextNum)) {
            return "Error: Invalid number";
        }

        
        if (operator === '*' || operator === '/') {
            result = applyOp(result, operator, nextNum);
        } else {
            
            result = applyOp(result, operator, nextNum);
        }

        i += 2;
    }

    return result;
}

