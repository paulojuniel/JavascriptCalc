const previousOperationText = document.querySelector("#previous-operation");
const currentOperationText = document.querySelector("#current-operation");
const buttons = document.querySelectorAll("#buttons-container button");

class Calculator {
  constructor(previousOperationText, currentOperationText) {
    this.previousOperationText = previousOperationText;
    this.currentOperationText = currentOperationText;
    this.currentOperation = "";

  }
  //add digita to calculator screen
  addDigit(digit) {
    this.currentOperation = "";

    console.log(digit);
    // Check if number already has a dot
    if (digit === "." && this.currentOperationText.innerText.includes(".")) {
      return;
    }

    this.currentOperation += digit;
    this.updateScreen();
    //this.previousOperationText.innerHTML = this.previousOperationText.innerHTML;
  }


  // Change values of calculator screen
  updateScreen(
    operationValue = null,
    operation = null,
    current = null,
    previous = null
  ) {
    if (operationValue === null) {
      // Append number to current value
      this.currentOperationText.innerText += this.currentOperation;
    } else {
      // Check if value is zero, if is just add current value
      if (previous === 0) {
        operationValue = current;
      }
      // Add current value to previous
      this.previousOperationText.innerText = `${operationValue} ${operation}`;
      this.currentOperationText.innerText = "";
    }
  }

}

const calc = new Calculator(previousOperationText, currentOperationText);

buttons.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    const value = event.target.innerText;

    if (+value >= 0 || value === ".") {
      console.log(value);
      calc.addDigit(value);
    } else {
      console.log("Operation:" + value);
      calc.processOperation(value);
    }
  });
});
