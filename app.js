class Calculator {
    constructor (prevOperandTextElement, postOperandTextElement) {
        this.prevOperandTextElement = prevOperandTextElement;
        this.postOperandTextElement = postOperandTextElement;
        this.clear()
    }

    clear(){
        this.prevOperand = "";
        this.postOperand = "";
        this.operation = undefined;
    }

    delete(){
        this.postOperand = this.postOperand.toString().slice(0, -1);
    }

    appendNumber (number){
        if (number === "." && this.postOperand.includes(".")) return                    // check incoming fullstop against existing number to avoid duplicate points
       
        this.postOperand = this.postOperand.toString() + number.toString();             
        
    }

    chooseOperation (operation){
        if (this.postOperand === '') {                                                  //Check if previous operand exists and update operator rather than entire previous operand output
            
            this.prevOperand = this.prevOperand.slice(0, -1) + operation;
            return;
        }
        if (this.prevOperand !== '') {
            this.compute();
        }
        this.operation = operation;
        this.prevOperand = this.postOperand + operation;                                
        this.postOperand = "";                                                          
    }

    compute(){
        let computation;
        const prev = parseFloat(this.prevOperand);
        const post = parseFloat(this.postOperand);

        switch (this.operation) {
            case ('+'):
                computation = prev + post;
                break;
            case ('-'):
                computation = prev - post;
                break;
            case ('/'):
                computation = prev / post;
                break;
            case ('*'):
                computation = prev * post;
                break;
            default:
                return;
        }

        this.postOperand = computation;
        this.operation = undefined;
        this.prevOperand = "";
    }

    updateDisplay(){
        this.postOperandTextElement.innerText = this.postOperand;
        this.prevOperandTextElement.innerText = this.prevOperand;
    }
}




const numberButton = document.querySelectorAll('[data-number]');
const operatorButton = document.querySelectorAll('[data-operator]');
const equalButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]');

const prevOperandTextElement = document.querySelector('[data-prev-operand]');
const postOperandTextElement = document.querySelector('[data-post-operand]'); 

//instantiate the Calculator instantiate the calculator class 
const calculator = new Calculator(prevOperandTextElement, postOperandTextElement);

numberButton.forEach(
    button => {
        button.addEventListener('click', () => {
            calculator.appendNumber(button.innerText);
            calculator.updateDisplay();
        })
    }
)

allClearButton.addEventListener('click', () => {
    calculator.clear();
    calculator.updateDisplay();
    }
)

operatorButton.forEach(
    button => {
        button.addEventListener('click', () => {
            calculator.chooseOperation(button.innerText);
            calculator.updateDisplay();
        })
    }
)

equalButton.addEventListener('click', () => {
    calculator.compute();
    calculator.updateDisplay();
    }
)

deleteButton.addEventListener('click', () => {
    calculator.delete();
    calculator.updateDisplay();
    }
)



// TODO
// Calculator should have history
// Fix automatic display deletion after computation
// Buttons shouold be interactive