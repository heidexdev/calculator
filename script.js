function add(num1, num2) {
  [num1, num2] = [parseFloat(num1), parseFloat(num2)];
  return num1 + num2;
}
function subtract(num1, num2) {
  [num1, num2] = [parseFloat(num1), parseFloat(num2)];

  return num1 - num2;
}
function divide(num1, num2) {
  [num1, num2] = [parseFloat(num1), parseFloat(num2)];

  return num1 / num2;
}
function multiply(num1, num2) {
  [num1, num2] = [parseFloat(num1), parseFloat(num2)];

  return num1 * num2;
}

function operate(num1, num2, operator) {
  const result = operator(num1, num2);
  return parseFloat(result.toFixed(2));
}

let state = {
  num1: null,
  num2: null,
  operator: null,
  operatorStr: "",
  result: null,
};

const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (!isNaN(value) || value === ".") {
      handleNumber(value);
      update();
    } else if (
      value === "÷" ||
      value === "×" ||
      value === "−" ||
      value === "+"
    ) {
      handleOperator(value);
      update();
    } else if (value === "=") {
      handleEqual();
      update();
    } else if (value === "RESET") {
      handleReset();
    } else if (value === "DEL") {
      handleDelete();
    }
  });
});
function handleNumber(num) {
  console.log(`handle number is called on ${num}`);

  if (state.operator === null) {
    if (num === "." && (state.num1 === null || state.num1 === "")) {
      state.num1 = 0 + num;
      return;
    }
    state.num1 = state.num1 ? state.num1 + num : num;
  } else {
    if (num === "." && (state.num2 === null || state.num2 === "")) {
      state.num2 = 0 + num;
      return;
    }
    state.num2 = state.num2 ? state.num2 + num : num;
  }
}
function handleOperator(operator) {
  if (state.num1 && state.num2 && state.operator) {
    handleEqual();
  }
  if (operator === "÷") {
    state.operator = divide;
    state.operatorStr = operator;
  } else if (operator === "+") {
    state.operator = add;
    state.operatorStr = operator;
  } else if (operator === "−") {
    state.operator = subtract;
    state.operatorStr = operator;
  } else if (operator === "×") {
    state.operator = multiply;
    state.operatorStr = operator;
  }
  console.log(state.operator);
}
function handleEqual() {
  if (state.num1 && state.num2 && state.operator) {
    state.result = operate(state.num1, state.num2, state.operator);
    state.num1 = state.result;
    state.num2 = null;
    state.operator = null;
    state.result = null;
  }
}
function handleReset() {
  state.num1 = null;
  state.num2 = null;
  state.operator = null;
  state.operatorStr = "";
  state.result = null;
  display.textContent = "";
}
function handleDelete() {
  if (
    state.num1 &&
    (state.num2 === null || state.num2 === "") &&
    state.operator
  ) {
    state.operator = null;
    state.operatorStr = "";
  } else if (state.operator === null) {
    state.num1 = state.num1.slice(0, -1);
  } else if (state.operator && state.num1) {
    state.num2 = state.num2.slice(0, -1);
  }
  update();
}
function update() {
  if (state.result) {
    display.textContent = state.result;
  } else if (state.num1 && state.operator && state.num2) {
    display.textContent = `${state.num1} ${state.operatorStr} ${state.num2}`;
  } else if (state.num1 && state.operator) {
    display.textContent = `${state.num1} ${state.operatorStr}`;
  } else if (state.num1) {
    display.textContent = `${state.num1}`;
  } else {
    display.textContent = "";
  }
}
