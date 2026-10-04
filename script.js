let display = document.getElementById("display");

// Add number/operator to display
function appendValue(value) {
    display.value += value;
}

// Clear everything
function clearDisplay() {
    display.value = "";
}

// Delete last character
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Calculate result
function calculate() {

    if (display.value === "") {
        return;
    }

    try {
        let expression = display.value;

        let result = eval(expression);

        display.value = result;

    } catch (error) {
        display.value = "Error";
    }
}