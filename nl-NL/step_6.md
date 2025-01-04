## Toon er één tegelijk

In this step, you will hide all questions so that they are only shown when they are needed.

### Hide all questions

You need to make each question appear when it is needed.

First, you need to hide all of them.

\--- task ---

Open `style.css`.

Alter the style for the selector `.q-container` to hide all the question containers.

## --- code ---

language: css
filename: styles.html
line_numbers: false
line_highlights: 8
-------------------------------------------------------

.q-container {
background-color: var(--background);
width: 90%;
max-width: 600px;
margin: 100px auto 0;
border-radius: 10px;
padding: 30px;
display: none;
opacity: 1;
}

\--- /code ---

\--- /task ---

\--- task ---

**Klik op Run**

- All your questions should have vanished!

Don't worry, you're going to make them appear again!

\--- /task ---

### Get a list of all questions

You need to be able to access each question.

\--- task ---

Open `scripts.js`.

Create a constant to hold a list of all question containers.

## --- code ---

language: js
filename: scripts.js
line_numbers: false
line_highlights: 3
-------------------------------------------------------

// Constants
const scoreText = document.querySelector("#scoreText");
const questions = document.querySelectorAll(".q-container");

\--- /code ---

\--- /task ---

### Show the first question

The first item in your list is at index `0`.

\--- task ---

Find the `// Display first question` comment.

Show the first question.

## --- code ---

language: js
filename: scripts.js
line_numbers: false
line_highlights: 2
-------------------------------------------------------

// Display first question
questions[0].style.display = "block";

\--- /code ---

\--- /task ---

\--- task ---

**Klik op Run**

- Your first question should be back!
- Select an answer and click the Check Answer button
- Try this a few times with other answers

\--- /task ---

Next, you need to hide this question and show the next one!
