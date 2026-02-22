const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");

let currentInput = "";
let operator = "";
let firstNumber = "";
let secondNumber = "";

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.textContent;

        // Clear
        if (value === "C") {
            currentInput = "";
            firstNumber = "";
            secondNumber = "";
            operator = "";
            display.value = "";
        }

        // Operators
        else if (value === "+" || value === "-" || value === "*" || value === "/") {
            if (currentInput !== "") {
                firstNumber = currentInput;
                operator = value;
                currentInput = "";
            }
        }

        // Equal
        else if (value === "=") {
            if (firstNumber !== "" && currentInput !== "") {
                secondNumber = currentInput;

                let result;

                // if-else logic
                if (operator === "+") {
                    result = parseFloat(firstNumber) + parseFloat(secondNumber);
                }
                else if (operator === "-") {
                    result = parseFloat(firstNumber) - parseFloat(secondNumber);
                }
                else if (operator === "*") {
                    result = parseFloat(firstNumber) * parseFloat(secondNumber);
                }
                else if (operator === "/") {
                    if (secondNumber === "0") {
                        result = "Error";
                    } else {
                        result = parseFloat(firstNumber) / parseFloat(secondNumber);
                    }
                }

                display.value = result;
                currentInput = result.toString();
                firstNumber = "";
                secondNumber = "";
                operator = "";
            }
        }

        // Numbers & Decimal
        else {
            currentInput += value;
            display.value = currentInput;
        }
    });
});
