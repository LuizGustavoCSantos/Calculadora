// Seleciona o visor da calculadora
const display = document.getElementById("display");

// Variável para armazenar o conteúdo atual
let currentInput = "";

// Seleciona todos os botões
const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    // Ações especiais
    if (value === "AC") {
      currentInput = "";
      display.textContent = "0";
    } else if (value === "C") {
      currentInput = currentInput.slice(0, -1);
      display.textContent = currentInput || "0";
    } else if (value === "=") {
      try {
        // Substitui os símbolos por operadores reais
        const result = eval(currentInput
          .replace("÷", "/")
          .replace("×", "*")
          .replace("−", "-"));
        display.textContent = result;
        currentInput = result.toString();
      } catch {
        display.textContent = "Erro";
        currentInput = "";
      }
    } else if (value === "±") {
      if (currentInput) {
        if (currentInput.startsWith("-")) {
          currentInput = currentInput.slice(1);
        } else {
          currentInput = "-" + currentInput;
        }
        display.textContent = currentInput;
      }
    } else if (value === "%") {
      currentInput = (parseFloat(currentInput) / 100).toString();
      display.textContent = currentInput;
    } else if (value === "√") {
      currentInput = Math.sqrt(parseFloat(currentInput)).toString();
      display.textContent = currentInput;
    } else if (!["MRC", "M+", "M-"].includes(value)) {
      currentInput += value;
      display.textContent = currentInput;
    }
  });
});
