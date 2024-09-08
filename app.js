//selecting html element
let input = document.querySelector(".input");
let liveResult = document.querySelector(".live_result");
let allInputs = document.querySelector(".all_inputs");
let btns = document.querySelector(".buttons");

let equalBtn = document.querySelector(".equal");
let divition = document.querySelector(".div");
let multiply = document.querySelector(".mul");
let subtraction = document.querySelector(".sub");
let addition = document.querySelector(".add");
let clearInput = document.querySelector(".c");
let clearAll = document.querySelector(".ce");
let clearHistory = document.querySelector(".clear_history");

//focus on input evry 10ms
function focus() {
  input.focus();
}
setInterval(focus, 10);
btns.addEventListener("click", (ele) => {
  if (ele.target.hasAttribute("data-value")) {
    input.value += ele.target.dataset.value;
  }
});
//in txt box don't accept more than one dot (in display)
let dot = document.querySelector(".dot");
dot.addEventListener("click", () => {
  if (!input.value.includes(".")) {
    input.value += ".";
  }
});
//in txt box don't accept more than one dot (in keyboard)
input.addEventListener("keypress", (event) => {
  let code = event.keyCode;
  if (input.value.includes(".")) {
    if (code == 46) {
      event.preventDefault();
      dot.click();
    }
  }
});
//addition function
function add() {
  let arryOfAllInputs = Array.from(allInputs.value); //converting all inputs arry form
  if (
    arryOfAllInputs[arryOfAllInputs.length - 1] != "+" &&
    input.value.trim() == ""
  ) {
    arryOfAllInputs[arryOfAllInputs.length - 1] = "+";
    allInputs.value = arryOfAllInputs.join("");
  }
  if (input.value.trim() != "") {
    allInputs.value += input.value + "+";
    input.value = "";
    liveRes();
  }
}
//substraction function
function sub() {
  if (input.value.trim() != "") {
    allInputs.value += input.value + "-";
    input.value = "";
    liveRes();
  }
  let arryOfAllInputs = Array.from(allInputs.value);
  if (input.value.trim() == "" && allInputs.value != "") {
    arryOfAllInputs[arryOfAllInputs.length - 1] = "-";
    allInputs.value = arryOfAllInputs.join("");
  }

  if (input.value.trim() == "" && allInputs.value == "") {
    allInputs.value += "-";
  }
}
//multiplication function
function mul() {
  if (input.value.trim() != "") {
    allInputs.value += input.value + "*";
    input.value = "";
    liveResult.value = eval(allInputs.value + "1");
  }
  let arryOfAllInputs = Array.from(allInputs.value);
  if (input.value.trim() == "") {
    arryOfAllInputs[arryOfAllInputs.length - 1] = "*";
    allInputs.value = arryOfAllInputs.join("");
  }
}
//divition function
function div() {
  if (input.value.trim() != "") {
    allInputs.value += input.value + "/";
    input.value = "";
    liveResult.value = eval(allInputs.value + "1");
  }
  let arryOfAllInputs = Array.from(allInputs.value);
  if (input.value.trim() == "") {
    arryOfAllInputs[arryOfAllInputs.length - 1] = "/";
    allInputs.value = arryOfAllInputs.join("");
  }
}
//update result
function liveRes() {
  liveResult.value = eval(allInputs.value + "0");
}
//creating backspace button
function backspace() {
  let inputVal = input.value;
  input.value = inputVal.substring(0, inputVal.length - 1);
}
let backspaceBtn = document.querySelector(".backspace");
backspaceBtn.addEventListener("click", backspace);
//equal function
function equal() {
  if (!input.value && !allInputs.value) {
    return 0;
  }
  if (input.value != "") {
    let ulHIs = document.querySelector(".ul_his");
    let li = document.createElement("li");
    li.textContent =
      allInputs.value +
      input.value +
      " = " +
      eval(allInputs.value + String(input.value));
    ulHIs.appendChild(li);

    let arryOfAllInputs = Array.from(allInputs.value);
    let lastOp = arryOfAllInputs[arryOfAllInputs.length - 1];
    input.value = eval(allInputs.value + String(input.value));
    allInputs.value = "";
    liveResult.value = "";
  }
  if (input.value == "") {
    let ulHIs = document.querySelector(".ul_his");
    let arryOfAllInputs = Array.from(allInputs.value);
    arryOfAllInputs.pop();
    let li = document.createElement("li");
    li.textContent = arryOfAllInputs.join("") + " = " + liveResult.value;
    ulHIs.appendChild(li);
    input.value = liveResult.value;
    allInputs.value = "";
    liveResult.value = "";
  }
}
//events lisn=>>
addition.addEventListener("click", add);
subtraction.addEventListener("click", sub);
multiply.addEventListener("click", mul);
divition.addEventListener("click", div);
equalBtn.addEventListener("click", equal);
//enter to run equal function
input.addEventListener("keypress", (event) => {
  let code = event.keyCode;
  if (code == 13) {
    equal();
  }
});
//clearing curent input
clearInput.addEventListener("click", () => {
  input.value = "";
});
//clearing all data
clearAll.addEventListener("click", () => {
  input.value = "";
  allInputs.value = "";
  liveResult.value = "";
});
//clear all history
clearHistory.addEventListener("click", () => {
  clearHistory.parentElement.children[1].innerHTML = "";
});




// Percentage function
function percentage() {
  if (input.value.trim() !== "") {
    let value = parseFloat(input.value);
    input.value = value / 100;
    liveRes();
  }
}

// Square root function
function squareRoot() {
  if (input.value.trim() !== "") {
    let value = parseFloat(input.value);
    input.value = Math.sqrt(value);
    liveRes();
  }
}

// Square function
function square() {
  if (input.value.trim() !== "") {
    let value = parseFloat(input.value);
    input.value = Math.pow(value, 2);
    liveRes();
  }
}

// Cube function
function cube() {
  if (input.value.trim() !== "") {
    let value = parseFloat(input.value);
    input.value = Math.pow(value, 3);
    liveRes();
  }
}

// Reciprocal function (1/x)
// function reciprocal() {
//   if (input.value.trim() !== "") {
//     let value = parseFloat(input.value);
//     if (value !== 0) {
//       input.value = (1 / value).toFixed(10); // Use toFixed to limit decimal places
//       liveRes();
//     } else {
//       input.value = "Error"; // Handle division by zero
//     }
//   }
// }
// Plus-minus (±) function
function plusMinus() {
  if (input.value.trim() !== "") {
    let value = parseFloat(input.value);
    input.value = value * -1;
    liveRes();
  }
}

// Adding event listeners for the new buttons
let percentBtn = document.querySelector(".per");
let sqrtBtn = document.querySelector(".sqrt");
let sqrBtn = document.querySelector(".sqr");
let qubeBtn = document.querySelector(".qube");
let reciprocalBtn = document.querySelector(".btn:not([data-value])"); // Update this selector if needed
let addSubBtn = document.querySelector(".add_sub");

percentBtn.addEventListener("click", percentage);
sqrtBtn.addEventListener("click", squareRoot);
sqrBtn.addEventListener("click", square);
qubeBtn.addEventListener("click", cube);
reciprocalBtn.addEventListener("click", reciprocal);
addSubBtn.addEventListener("click", plusMinus);



const historyElement = document.querySelector('.ul_his');

// Function to add history
function addHistoryEntry(entry) {
  // Create a new list item
  const li = document.createElement('li');
  li.textContent = entry; // Add the entry content
  historyElement.appendChild(li);

  // Scroll to the bottom of the history after adding new item
  historyElement.scrollTop = historyElement.scrollHeight;
}

// Example: Adding new entries to the history
addHistoryEntry("9999 = 9999");