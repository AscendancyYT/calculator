let display = document.getElementById("display");

function appendCharacter(char) {
    display.value += char;
}

function clearDisplay() {
    display.value = "";
}

function deleteLastCharacter() {
    display.value = display.value.slice(0, -1);
}

function calculateResult() {
    try {
        let expression = display.value.replace("^", "**");
        
        if (expression.includes("%")) {
            let parts = expression.split("%");
            if (parts.length === 2) {
                let base = parseFloat(parts[0]);
                let percent = parseFloat(parts[1]);
                display.value = (base * percent) / 100;
                return;
            }
        }

        display.value = eval(expression);
    } catch {
        display.value = "Error";
    }
}

// Keyboard Support
document.addEventListener("keydown", (event) => {
    const key = event.key;

    if (!isNaN(key) || key === ".") appendCharacter(key);
    else if (key === "+" || key === "-" || key === "*" || key === "/" || key === "^") appendCharacter(key);
    else if (key === "%") appendCharacter("%");
    else if (key === "Enter") calculateResult();
    else if (key === "Backspace") deleteLastCharacter();
    else if (key === "Escape") clearDisplay();
});
