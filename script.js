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
    if (num2 == 0 && operator === divide) {
        alert("Imagine trying to divide by 0 .-.");
        return "error";
    } else if (!(isNaN(num1)) && typeof operator === 'function' && (!(isNaN(num2)))) {
        let solution = operator(num1, num2);
        if (Number.isInteger(solution)) return solution;
        return Math.round(operator(num1, num2) * 10 ** 10) / 10 ** 10;
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

    } else if (e.target.innerText === ".") {
        display.innerText += ".";
    }
}

function populateAnswerDisplay(answer) {
    const display = document.querySelector("#display-text");

    if (answer === "error") {
        display.innerText = "ERROR";
        OPERATION.length = 0
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
            checkError();
            break;
        case 'x':
            clearOperatorDisplay();
            if (OPERATION.length === 3) {
                const answer = operate(OPERATION[0], OPERATION[2], OPERATION[1]);
                populateAnswerDisplay(answer);
                OPERATION.push(answer);
            } 
            OPERATION.push(multiply);
            checkError();
            break;
        case '-':
            clearOperatorDisplay();
            if (OPERATION.length === 3) {
                const answer = operate(OPERATION[0], OPERATION[2], OPERATION[1]);
                populateAnswerDisplay(answer);
                OPERATION.push(answer);
            } 
            OPERATION.push(subtract);
            checkError();
            break;
        case '+':
            clearOperatorDisplay();
            if (OPERATION.length === 3) {
                const answer = operate(OPERATION[0], OPERATION[2], OPERATION[1]);
                populateAnswerDisplay(answer);
                OPERATION.push(answer);
            } 
            OPERATION.push(add);
            checkError();
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

    if (!(display.innerText === "")) {
        OPERATION.push(display.innerText);
        display.innerText = "";
    }
}

function clearClearDisplay(e) {
    const display = document.querySelector("#display-text");
    
    if (e.target.innerText === "CLEAR") {
        display.innerText = "";
        OPERATION.length = 0;
    } else if (e.target.innerText === "DELETE") {
        display.innerText = display.innerText.slice(0,-1);
    }
}

function checkError() {
    if (typeof OPERATION[0] === "function" || typeof OPERATION[2] === "function") {
        populateAnswerDisplay("error");
    }
}

function displayNumber(e) {
    const display = document.querySelector("#display-text");
    const number = document.querySelector(`button[data-key="${e.keyCode}"]`);
    if (number) {
        display.innerText += number.innerText;
    }
}

// create an array to hold operands and operators
const OPERATION = [];

// have a boolean checker to check if populateAnswerDisplay() was activated
let DISPLAYON = false;

const btnContainer = document.querySelector(".button-container");
btnContainer.addEventListener('mouseup', populateButtonDisplay);
btnContainer.addEventListener('mouseup', checkOperator);
btnContainer.addEventListener('mouseup', clearClearDisplay);
window.addEventListener('keydown', displayNumber);