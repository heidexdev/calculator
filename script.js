function add(num1, num2) {
  return num1 + num2;
}
function subtract(num1, num2) {
  return num1 - num2;
}
function divide(num1, num2) {
  return num1 / num2;
}
function multiply(num1, num2) {
  return num1 * num2;
}

function operate(num1, num2, operator) {
  return operator(num1, num2);
}

let state = {
  num1: null,
  num2: null,
  operator: null,
  result: null,
};

const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.textContent;
  });
});
