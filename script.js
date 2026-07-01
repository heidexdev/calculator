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
    console.log(`event listener fired on ${value}`);

    if (!isNaN(value)) {
      handleNumber(value);
    } else if (
      value === "÷" ||
      value === "×" ||
      value === "−" ||
      value === "+"
    ) {
      handleOperator(value);
    } else if (value === "=") {
      handleEqual();
    }
  });
});
function handleNumber(num) {
  console.log(`handle number is called on ${num}`);

  if (state.operator === null) {
    state.num1 = state.num1 ? state.num1 + num : num;
  } else if (!state.operator === null) {
    state.num2 = state.num2 ? state.num2 + num : num;
  }
  console.log(state.num1, state.num2);
}
