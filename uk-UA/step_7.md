## Next question, please!

In this step, you will hide the answered question and show the next one with an animation!

### Which is the current question?

You need to know which is the current question from the `questions` list.

Create a variable to hold the index of the current question.

\--- task ---

Create a variable called `currentQ` and set it to `0`.

## --- code ---

language: js
filename: scripts.js
line_numbers: false
line_highlights: 3
-------------------------------------------------------

// Variables
var score = 0;
var currentQ = 0;

\--- /code ---

\--- /task ---

### Create the next question function

You need to create a function that will hide the current question and show the next one.

\--- task ---

Find the `// Check answer function` comment.

Create a function called `nextQ`.

## --- code ---

language: js
filename: scripts.js
line_numbers: false
line_highlights: 2-4
---------------------------------------------------------

// Next question function
function nextQ() {

}

\--- /code ---

\--- /task ---

You only need the function's code to run if there are still questions in the list.

\--- task ---

Create an `if` statement that checks if the index of the **current** question (`currentQ`) is one fewer than the number of questions in the `questions` list.

## --- code ---

language: js
filename: scripts.js
line_numbers: false
line_highlights: 3-5
---------------------------------------------------------

// Next question function
function nextQ() {
if (currentQ < questions.length - 1) {

}

}

\--- /code ---

\--- /task ---

### Hide the current question

If there are still questions left in the list, then you need to hide the current question.

\--- task ---

Style the current question element so it is hidden.

## --- code ---

language: js
filename: scripts.js
line_numbers: false
line_highlights: 4
-------------------------------------------------------

// Next question function
function nextQ() {
if (currentQ < questions.length - 1) {
questions[currentQ].style.display = "none";

}

}

\--- /code ---

\--- /task ---

### Show the next question

\--- task ---

Increase the `currentQ` variable.

Show the (new) current question.

## --- code ---

language: js
filename: scripts.js
line_numbers: false
line_highlights: 5-6
---------------------------------------------------------

// Next question function
function nextQ() {
if (currentQ < questions.length - 1) {
questions[currentQ].style.display = "none";
currentQ++;
questions[currentQ].style.display = "block";
}

}

\--- /code ---

\--- /task ---

\--- task ---

**Click Run**

- Answer the first question
- The question does not change!

You need to call the `nextQ` function in your code.

\--- /task ---

### Call the next question function

Call the `nextQ` function if an answer is correct or incorrect (only if an answer is selected).

\--- task ---

Add the `nextQ()` call to your `checkAnswer` function.

## --- code ---

language: js
filename: scripts.js
line_numbers: false
line_highlights: 14, 17
------------------------------------------------------------

// Check answer function
function checkAnswer(question, result) {
let answer = document.querySelector(`input[name="${question}"]:checked`);
let qResult = document.querySelector(result);

qResult.style.display = "block";

if (answer) {
document.querySelector("#" + question).disabled = true;
if (answer.value === "correct") {
qResult.innerText = "Correct";
score+=1;
scoreText.innerText = `Score: ${score}`;
nextQ();
} else {
qResult.innerText = "Incorrect";
nextQ();
}
} else {
qResult.innerText = "Please select an answer";
}

}

\--- /code ---

\--- /task ---

\--- task ---

**Click Run**

- Answer the questions.
- The current question will hide and the next question will show.
- You will notice that you only see the `result` div on the last question. The result div for the other questions is also showing, but too fast for you to see.

\--- /task ---

### Slow it down

You need to add a time delay before the current question hides, so that the user can see the `result` div.

\--- task ---

Add a `setTimeout`.

## --- code ---

language: js
filename: scripts.js
line_numbers: false
line_highlights: 3, 9
----------------------------------------------------------

// Next question function
function nextQ() {
setTimeout(() => {
if (currentQ < questions.length - 1) {
questions[currentQ].style.display = "none";
currentQ++;
questions[currentQ].style.display = "block";
}
}, "2000");
}

\--- /code ---

\--- /task ---

\--- task ---

**Click Run**

- Answer the questions
- There should now be a delay before the current question hides and the next question shows
- You will notice that you can now see the `result` div for all questions!

\--- /task ---

### Animate the questions before they hide!

You can make your quiz more interesting by animating the questions before they are hidden.

There is a `fade-out` animation in `style.css` you can use.

\--- task ---

Add a fade out animation to the `nextQ` function to make the current question disappear.

## --- code ---

language: js
filename: scripts.js
line_numbers: false
line_highlights: 3
-------------------------------------------------------

// Next question function
function nextQ() {
questions[currentQ].classList.add("fade-out");
setTimeout(() => {
if (currentQ < questions.length - 1) {
questions[currentQ].style.display = "none";
currentQ++;
questions[currentQ].style.display = "block";
}
}, "2000");
}

\--- /code ---

\--- /task ---

\--- task ---

**Click Run**

- Answer the questions
- The questions will fade out!

\--- /task ---

### Animate the questions as they appear!

**Choose** which animation you would like to use.

There are five animations in `style.css` you could use:

1. `fade-in`
2. `grow-in`
3. `rise-in`
4. `slide-left`
5. `slide-right`

\--- task ---

Add an animation to the `nextQ` function to make the questions appear in style!

## --- code ---

language: js
filename: scripts.js
line_numbers: false
line_highlights: 8
-------------------------------------------------------

// Next question function
function nextQ() {
questions[currentQ].classList.add("fade-out");
setTimeout(() => {
if (currentQ < questions.length - 1) {
questions[currentQ].style.display = "none";
currentQ++;
questions[currentQ].classList.add("slide-left");
questions[currentQ].style.display = "block";
}
}, "2000");
}

\--- /code ---

\--- /task ---

\--- task ---

**Click Run**

- Answer the questions
- The questions will animate as they appear!

\--- /task ---

### Avoid the glitch

You might notice that a question flickers before it animates in.

You can smooth this out.

\--- task ---

Open `style.css`.

Set the `opacity` property of the `q-container` selector to `0`.

## --- code ---

language: css
filename: style.css
line_numbers: false
line_highlights: 9
-------------------------------------------------------

.q-container {
background-color: var(--background);
width: 90%;
max-width: 600px;
margin: 100px auto 0;
border-radius: 10px;
padding: 30px;
display: none;
opacity: 0;
}

\--- /code ---

\--- /task ---

\--- task ---

Open `scripts.js`.

Set the `opacity` property of the the first question to `1`.

## --- code ---

language: js
filename: scripts.js
line_numbers: false
line_highlights: 3
-------------------------------------------------------

// Display first question
questions[0].style.display = "block";
questions[0].style.opacity = 1;

\--- /code ---

\--- /task ---

Молодець! You have made an awesome interactive quiz — it looks amazing!
