## Check the answer

In this step you will create a function to check the user's answer and let them know if they were right!

The starter project already has a `scripts.js` file that contains variables and constants for the 

### Create the checkAnswer function

Next you need to create a function that will handle the button's `onclick` event.

--- code ---
---
language: html
filename:
line_numbers: false
---

<button id="q1" onclick="checkAnswer('q1', '#result1')">Check Answer</button>

--- /code ---

--- task ---

Open `scripts.js`

Find the `// Check answer function` comment

Create a function called `checkAnswer`

It should have two parameters `question` and `result`.

--- code ---
---
language: javascript
filename: scripts.js
line_numbers: false
line_highlights: 2
---

// Check answer function
function checkAnswer(question, result) {

}

--- /code ---

--- collapse ---

---
title: What is a parameter?
---

### Here is the HTML for the button:

+ `<button id="q1" onclick="checkAnswer('q1', '#result1')">Check Answer</button>`

It contains this function call:

+ `checkAnswer('q1', '#result1')`

The function call contains two arguments that it passes to the `checkAnswer` function.

### Here is the checkAnswer function

+ `function checkAnswer(question, result)`

It has two parameters `question` and `result`.

When the function runs, it can use the word `question` to refer to the first value passed to it as an argument (in this case `q1`) and the word `result` to refer to the second value passed to it as an argument (in this case `#result`).

In this way, the function can be called with different values as arguments and use them in its code.

---/collapse ---

--- /task ---

### Find the selected option

You need to know which radio button option the user has selected, to check if it is correct.

You can get the selected option using the `:checked` pseudo-class in a querySelector.

--- task ---

Create the variable `answer` and set it to the selected radio button in the `name` group that has the same value as that passed to the `question` parameter (in this case: `q1`):

`onclick="checkAnswer('`<mark>q1</mark>`', '#result1')`

--- code ---
---
language: javascript
filename: scripts.js
line_numbers: false
line_highlights: 3
---

// Check answer function
function checkAnswer(question, result) {
  let answer = document.querySelector(`input[name="${question}"]:checked`);

}

--- /code ---

--- /task ---

### The result div

You can update the text in this question's result `<div>` because it has an `id` attribute that is unique to this question (in this case: `#result1`). 

This unique value is the second argument passed to the function by the button's `onclick` event.

`onclick="checkAnswer('q1', '`<mark>#result1</mark>`')`

--- task ---

Set the variable qResult to be this question's result `<div>`.

--- code ---
---
language: javascript
filename: scripts.js
line_numbers: false
line_highlights: 4
---

// Check answer function
function checkAnswer(question, result) {
  let answer = document.querySelector(`input[name="${question}"]:checked`);
  let qResult = document.querySelector(result);

}

--- /code ---

--- /task ---

The styling for the result div means it is hidden.

--- collapse ---

---
title: Show me the result div styling
---

--- code ---
---
language: css
filename: 
line_numbers: false
line_highlights: 10
---

.result {
  background-color: var(--h1-colour);
  color: var(--header-font);
  width: 100%;
  border: 0;
  padding: 10px;
  margin: 20px 0;
  border-radius: 4px;
  align-self: center;
  display: none;
}

--- /code ---

--- /collapse ---

--- task ---

Show the result `<div>`.

--- code ---
---
language: javascript
filename: scripts.js
line_numbers: false
line_highlights: 6
---

// Check answer function
function checkAnswer(question, result) {
  let answer = document.querySelector(`input[name="${question}"]:checked`);
  let qResult = document.querySelector(result);
  
  qResult.style.display = "block";

}

--- /code ---

--- /task ---

### Show the user if the selected answer is correct

--- task ---

Check if the selected answer is correct.

If it **is** correct, update the result div text to show 'Correct'.
If it **is not** correct, update the result div text to show 'Incorrect'.

--- code ---
---
language: javascript
filename: scripts.js
line_numbers: false
line_highlights: 6
---

// Check answer function
function checkAnswer(question, result) {
  let answer = document.querySelector(`input[name="${question}"]:checked`);
  let qResult = document.querySelector(result);
  
  qResult.style.display = "block";
  
  if (answer.value === "correct") {
    qResult.innerText = "Correct";
  } else {
    qResult.innerText = "Incorrect";
  }

}

--- /code ---

--- /task ---

--- task ---

**Click Run**
+ Select the correct answer and click the 'Check Answer' button
+ You should see the result div display 'Correct'.

**Click Run** 
+ Select a different answer and click the 'Check Answer' button
+ You should see the result div display 'Incorrect'.

**Click Run** 
+ Select the other incorrect answer and click the 'Check Answer' button
+ You should see the result div display 'Incorrect'.

--- /task ---

### What if the user does not select an answer?

You only need to run the check if the user has made a selection.

If no answer is selected, you can add a helpful reminder message!

--- task ---

Check if there is a selected answer for this question.

Show a result message if there is.

If there isn't, show a helpful message.

--- code ---
---
language: javascript
filename: scripts.js
line_numbers: false
line_highlights: 8, 13-15
---

// Check answer function
function checkAnswer(question, result) {
  let answer = document.querySelector(`input[name="${question}"]:checked`);
  let qResult = document.querySelector(result);
  
  qResult.style.display = "block";
  
  if (answer) {
    if (answer.value === "correct") {
      qResult.innerText = "Correct";
    } else {
      qResult.innerText = "Incorrect";
    }
  } else {
    qResult.innerText = "Please select an answer";
  }

}

--- /code ---

--- /task ---

--- task ---

**Click Run**
+ Do *not* select an answer
+ Click the 'Check Answer' button
+ You should see the result div display 'Please select an answer'.

--- /task ---

Awesome work! You have created an interactive question!

Next you will create some more questions!