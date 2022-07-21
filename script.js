function add(num1, num2) {
    return Number(num1) + Number(num2);
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function operate(num1, num2, operator) {
    OPERATION.length = 0;
    if (!(isNaN(num1)) && typeof operator === 'function' && (!(isNaN(num2)))) {
        return Math.round(operator(num1, num2) * 10 ** 13) / 10 ** 13;
    }
    return "error";
}

function populateButtonDisplay(e) {
    const display = document.querySelector("#display-text");
    let num = Number(e.target.innerText);
    
    if (!(isNaN(num))) {

        if (DISPLAYON) {
            display.innerText = "";
            DISPLAYON = false;
        }

        display.innerText += e.target.innerText;
    }
}

function populateAnswerDisplay(answer) {
    const display = document.querySelector("#display-text");

    if (answer === "error") {
        display.innerText = "ERROR";
    } else {
        display.innerText = answer;

    }
    DISPLAYON = true;
}

function checkOperator(e) {
    switch (e.target.innerText) {
        case '÷':
            clearOperatorDisplay();
            if (OPERATION.length === 3) {
                const answer = operate(OPERATION[0], OPERATION[2], OPERATION[1]);
                populateAnswerDisplay(answer);
                OPERATION.push(answer);
            } 
            OPERATION.push(divide);
            
            break;
        case 'x':
            clearOperatorDisplay();
            if (OPERATION.length === 3) {
                const answer = operate(OPERATION[0], OPERATION[2], OPERATION[1]);
                populateAnswerDisplay(answer);
                OPERATION.push(answer);
            } 
            OPERATION.push(multiply);
            
            break;
        case '-':
            clearOperatorDisplay();
            if (OPERATION.length === 3) {
                const answer = operate(OPERATION[0], OPERATION[2], OPERATION[1]);
                populateAnswerDisplay(answer);
                OPERATION.push(answer);
            } 
            OPERATION.push(subtract);
            
            break;
        case '+':
            clearOperatorDisplay();
            if (OPERATION.length === 3) {
                const answer = operate(OPERATION[0], OPERATION[2], OPERATION[1]);
                populateAnswerDisplay(answer);
                OPERATION.push(answer);
            } 

            OPERATION.push(add);
            
            break;
        case '=':
            clearOperatorDisplay();
            const answer = operate(OPERATION[0], OPERATION[2], OPERATION[1]);
            populateAnswerDisplay(answer);
            break;
    }
}

function clearOperatorDisplay() {
    const display = document.querySelector("#display-text");
    OPERATION.push(display.innerText);
    display.innerText = "";
}

// create an array to hold operands and operators
const OPERATION = [];

// have a boolean checker to check if populateAnswerDisplay() was activated
let DISPLAYON = false;

const btnContainer = document.querySelector(".button-container");
btnContainer.addEventListener('mouseup', populateButtonDisplay);
btnContainer.addEventListener('mouseup', checkOperator);

