// ---------------------------
// PART 1: Variables, Data Types, and Conditionals
// ---------------------------

// Capturing user input and using conditionals
function greetUser() {
  let name = document.getElementById("nameInput").value;
  let greeting = document.getElementById("greeting");

  if (name.trim() === "") {
    greeting.textContent = "Please enter your name!";
  } else {
    greeting.textContent = `Hello, ${name}! 👋 Welcome!`;
  }
}

// ---------------------------
// PART 2: Functions (Reusability)
// ---------------------------

// Function 1: Add two numbers and return total
function calculateTotal(a, b) {
  return a + b;
}

// Function 2: Format result as a string
function formatResult(result) {
  return `The total is: ${result}`;
}

// Used in DOM interaction
function showTotal() {
  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);
  let total = calculateTotal(num1, num2);
  document.getElementById("totalResult").textContent = formatResult(total);
}

// ---------------------------
// PART 3: Loops (Repetition)
// ---------------------------

// Example 1: Countdown using a for loop
function countdown() {
  let list = document.getElementById("countdownList");
  list.innerHTML = ""; // Clear previous

  for (let i = 5; i >= 1; i--) {
    let li = document.createElement("li");
    li.textContent = `Countdown: ${i}`;
    list.appendChild(li);
  }
}

// Example 2: List fruits using forEach
function listFruits() {
  const fruits = ["🍎 Apple", "🍌 Banana", "🍇 Grape", "🍊 Orange"];
  const fruitList = document.getElementById("fruitList");
  fruitList.innerHTML = ""; // Clear previous

  fruits.forEach(function(fruit) {
    let li = document.createElement("li");
    li.textContent = fruit;
    fruitList.appendChild(li);
  });
}

// ---------------------------
// PART 4: DOM Manipulation
// ---------------------------

// DOM interactions used above:
// 1. Reading input values with `getElementById`
// 2. Updating text content dynamically
// 3. Creating and appending new elements (`li`) using JavaScript
