function add(num1, num2) {
    return num1 + num2;
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
    return operator(num1, num2);
}

function populateDisplay(e) {
    const display = document.querySelector("#display-text");
    num = Number(e.target.innerText);
    if (!(isNaN(num))) {
        display.innerText += e.target.innerText;
    }
}

const btnContainer = document.querySelector(".button-container");
btnContainer.addEventListener('mouseup', populateDisplay);

