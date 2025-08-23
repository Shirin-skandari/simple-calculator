const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

let currentInput = ""; 

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (value === "C") {
      currentInput = "";
      display.textContent = "0";
    } else if (value === "=") {
        
      display.textContent = eval(currentInput);
      currentInput = display.textContent;
    } else {
      currentInput += value;
      display.textContent = currentInput;
    }
  });
});