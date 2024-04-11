## Upgrade your project

In this step, you can upgrade your project by:
+ Adding more questions
+ Updating the text in the header to show the final score
+ Showing the user a message if they get full marks
+ Letting the user retake the quiz if they don't get full marks
+ Adding more animations

You don't have to do all these things. Choose whichever appeals to you and fits the time you have.

--- collapse ---

---
title: Add more questions
---

You can go through the same process you used in an earlier step to add more questions.

Copy and paste the question container again and change the values to create your extra questions.

You need to:
+ Change the question number and question text
+ Change the answer labels to match the question
+ Change the attributes for the input elements
+ Change the attributes for the result div and button
+ Change the arguments passed to the function

--- /collapse ---

--- collapse ---

---
title: Update the final score ... and make it glow!
---

### Change the nextQ function.

--- code ---
---
language: js
filename: scripts.js
line_numbers: false
line_highlights: 10-11
---

// Next question function
function nextQ() {
  questions[currentQ].classList.add("fade-out");
  setTimeout(() => {
    if (currentQ < questions.length - 1) {
      questions[currentQ].style.display = "none";
      currentQ++;
      questions[currentQ].classList.add("slide-left");
      questions[currentQ].style.display = "block";
    } else {
      scoreText.innerText = `Final score: ${score}`;  
    }
  }, "2000");
}

--- /code ---

### Make it glow!

--- code ---
---
language: js
filename: scripts.js
line_numbers: false
line_highlights: 12
---

// Next question function
function nextQ() {
  questions[currentQ].classList.add("fade-out");
  setTimeout(() => {
    if (currentQ < questions.length - 1) {
      questions[currentQ].style.display = "none";
      currentQ++;
      questions[currentQ].classList.add("slide-left");
      questions[currentQ].style.display = "block";
    } else {
      scoreText.innerText = `Final score: ${score}`;
      scoreText.classList.add("glowing");
    }
  }, "2000");
}

--- /code ---

--- /collapse ---

--- collapse ---

---
title: Show the user a message if they get full marks
---

### Update the HTML

+ Add a `<div>` element below the result div.
+ Include a congratulatory message.
+ Give it a `class` attribute that can be used to show/hide the message using JavaScript. The example uses the class `fullMarks`.

--- code ---
---
language: html
filename: 
line_numbers: false
line_highlights: 2
---

        <div class="result" id="result3"></div>  
        <div class="fullMarks">Well done! All correct!</div>
        <button id="q3" onclick="checkAnswer('q3', '#result3')">Check Answer</button>

--- /code ---

### Update the JavaScript

Add a const to get the element.

--- code ---
---
language: js
filename: scripts.js
line_numbers: false
line_highlights: 8
---

// Variables
var score = 0;
var currentQ = 0;

// Constants
const scoreText = document.querySelector("#scoreText");
const questions = document.querySelectorAll(".q-container");
const fullMarks = document.querySelector(".fullMarks");

--- /code ---

Add an `if` statement to check if the final score matches the number of questions. 

The example awards one point for each correct answer.

If you award more than one point for each correct answer, then you need to divide the score by the number of points awarded.

--- code ---
---
language: js
filename: scripts.js
line_numbers: false
line_highlights: 13-15
---

// Next question function
function nextQ() {
  questions[currentQ].classList.add("fade-out");
  setTimeout(() => {
    if (currentQ < questions.length - 1) {
      questions[currentQ].style.display = "none";
      currentQ++;
      questions[currentQ].classList.add("slide-left");
      questions[currentQ].style.display = "block";
    } else {
      scoreText.innerText = `Final score: ${score}`;
      scoreText.classList.add("glowing");
      if (score === questions.length) {
        fullMarks.style.display = "block";
      }
    }
  }, "2000");
}

--- /code ---

--- /collapse ---

--- collapse ---

---
title: Let the user retake the quiz if they don't get full marks
---

### Update the HTML

+ Add an `<a>` element below the result div.
+ Include a link to `index.html` using the `href` attribute.
+ Give it a `class` attribute that can be used to show/hide the link using JavaScript. The example uses the class `retry` (the CSS styling is already provided in `style.css`).

--- code ---
---
language: html
filename: 
line_numbers: false
line_highlights: 3
---

        <div class="result" id="result3"></div>  
        <div class="fullMarks">Well done! All correct!</div>
        <a class="retry" href="index.html">Have another go!</a>
        <button id="q3" onclick="checkAnswer('q3', '#result3')">Check Answer</button>

--- /code ---

### Update the JavaScript


Add a const to get the element.

--- code ---
---
language: js
filename: scripts.js
line_numbers: false
line_highlights: 9
---

// Variables
var score = 0;
var currentQ = 0;

// Constants
const scoreText = document.querySelector("#scoreText");
const questions = document.querySelectorAll(".q-container");
const fullMarks = document.querySelector(".fullMarks");
const retry = document.querySelector(".retry");

--- /code ---

Add an `else` statement to the `if` added in the last upgrade to show the retry `<a>` link if the condition is **not** met (if the user has not got full marks).

--- code ---
---
language: js
filename: scripts.js
line_numbers: false
line_highlights: 15-17
---

// Next question function
function nextQ() {
  questions[currentQ].classList.add("fade-out");
  setTimeout(() => {
    if (currentQ < questions.length - 1) {
      questions[currentQ].style.display = "none";
      currentQ++;
      questions[currentQ].classList.add("slide-left");
      questions[currentQ].style.display = "block";
    } else {
      scoreText.innerText = `Final score: ${score}`;
      scoreText.classList.add("glowing");
      if (score === questions.length) {
        fullMarks.style.display = "block";
      } else {
        retry.style.display = "block";
      }
    }
  }, "2000");
}

--- /code ---

**Tip:** If you have already added the fullMarks element, then add an `else` statement to the `if` added in the last upgrade as shown above.

If you haven't, then add this as an `if`, rather than an `else` statement.

--- /collapse ---
