class Calculator {
    constructor (prevOperandTextElement, postOperandTextElement) {
        this.prevOperandTextElement = prevOperandTextElement;
        this.postOperandTextElement = postOperandTextElement;
        this.clear(d)
    }
// clear the display (output) on click of allClearButton
    clear(){

    }
}

const numberButton = document.querySelectorAll('[data-number]');
const operatorButton = document.querySelectorAll('[data-operator]');
const equalButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]');

const prevOperandTextElement = document.querySelector('[data-prev-operand]');
const postOperandTextElement = document.querySelector('[data-post-operand]');