## Score some points

In this step, you will let the user score points for a correct answer!

### Add the score to the header

\--- task ---

Ouvre `index.html`.

Add a new span element to the header.

Give it the attributes `id="scoreText"` and `class="sitename"`.

Include the text `Score: 0`, so the user starts on a score of 0.

## --- code ---

language: html
filename: index.html
line_numbers: false
line_highlights: 3
-------------------------------------------------------

```
<header class="header">
  <span class="sitename">Wildlife quiz</span>
  <span id="scoreText" class="sitename">Score: 0</span>
</header>
```

\--- /code ---

\--- /task ---

### Update the score

When the user selects the correct answer, your function needs to update the score in the header.

\--- task ---

Ouvre `scripts.js`.

Create a variable called `score` and set it to `0`.

## --- code ---

language: js
filename: scripts.js
line_numbers: false
line_highlights: 2
-------------------------------------------------------

// Variables
var score = 0;

\--- /code ---

\--- /task ---

**Choose** how many points to give for a correct answer.

Increase the score if the answer is correct.

The example adds 1 to the score.

\--- task ---

Update the score variable if the answer is correct.

## --- code ---

language: js
filename: scripts.js
line_numbers: false
line_highlights: 4
-------------------------------------------------------

if (answer) {
if (answer.value === "correct") {
qResult.innerText = "Correct";
score+=1;
} else {
qResult.innerText = "Incorrect";
}
} else {
qResult.innerText = "Please select an answer";
}

\--- /code ---

\--- /task ---

### Update the score in the header

You need to show the user their score.

\--- task ---

Create a constant called `scoreText` and use a `querySelector` to set it to the span element in the header containing the score.

## --- code ---

language: js
filename: scripts.js
line_numbers: false
line_highlights: 2
-------------------------------------------------------

// Constants
const scoreText = document.querySelector("#scoreText");

\--- /code ---

\--- /task ---

Change the text content of the span to match the new score.

\--- task ---

Update the text content of the span.

Notice: `` `Score: ${score}` `` uses backticks `` ` ` `` instead of `" "` or `' '`.

## --- code ---

language: js
filename: scripts.js
line_numbers: false
line_highlights: 5
-------------------------------------------------------

if (answer) {
if (answer.value === "correct") {
qResult.innerText = "Correct";
score+=1;
scoreText.innerText = `Score: ${score}`;
} else {
qResult.innerText = "Incorrect";
}
} else {
qResult.innerText = "Please select an answer";
}

\--- /code ---

\--- /task ---

\--- task ---

**Clique sur Run**

- Answer your questions, click the 'Check Answer' buttons and watch the score in the header update!

\--- /task ---

There is a problem!

If the user selects the correct answer, they can keep clicking Check Answer and the score will increase each time.

\--- task ---

**Try it**

- Select the correct answer
- Click the Check Answer button
- Click it a few more times and watch the score increase each time!

\--- /task ---

### Stop the cheating!

You need to stop the user from cheating by clicking the button more than once.

You can disable a button using the `.disabled` method.

\--- task ---

Add a line of code that disables the button when the user selects an option and clicks a Check Answer button.

## --- code ---

language: js
filename: scripts.js
line_numbers: false
line_highlights: 2
-------------------------------------------------------

if (answer) {
document.querySelector("#" + question).disabled = true;
if (answer.value === "correct") {

\--- /code ---

**Notice:** This will not disable the button if the user has not selected an answer.

**Notice:** The `querySelector` uses concatenation to join the character `#` to the value of `question` passed as an argument in the button's `onclick` event. This targets the specific button element.

\--- /task ---

\--- task ---

**Clique sur Run**

- Select a correct answer and click the 'Check Answer' button.
- Click the button again. It should not work.

\--- /task ---

You may wish to style your button so that it has a different colour.

You could also hide it, or change the text.

In this project, you are going to hide the whole question and have the next one appear with an animation!
