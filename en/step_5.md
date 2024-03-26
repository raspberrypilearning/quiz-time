## Score some points

In this step you will let the user score points for a correct answer!

### Add the score to the header

--- task ---

Open `index.html`. 

Add a new span element to the header.

Give it the attributes `id="scoreText"` and `class="sitename"`.

Include the text `Score: 0`, so the user starts on a score of 0.

--- code ---
---
language: html
filename: index.html
line_numbers: false
line_highlights: 3
---

    <header class="header">
      <span class="sitename">Wildlife quiz</span>
      <span id="scoreText" class="sitename">Score: 0</span>
    </header>

--- /code ---

--- /task ---

### Update the score

When the user selects the correct answer, your function needs to update the score in the header.

--- task ---

Open `scripts.js`

Create a variable called `score` and set it to `0`

--- code ---
---
language: js
filename: scripts.js
line_numbers: false
line_highlights: 2
---

// Variables
var score = 0;

--- /code ---

--- /task ---

Increase the score if the answer is correct.

The example adds 1 to the score, but you can add 10, 100 or however many points you like!

--- task ---

Update the score variable if the answer is correct.

--- code ---
---
language: js
filename: scripts.js
line_numbers: false
line_highlights: 4
---

  if (answer) {
    if (answer.value === "correct") {
      qResult.innerText = "Correct";
      score+1;
    } else {
      qResult.innerText = "Incorrect";
    }
  } else {
    qResult.innerText = "Please select an answer";
  }

--- /code ---

--- /task ---

### Update the score in the header

You need to show the user their score.

--- task ---

Create a constant called `scoreText` and use a `querySelector` to set it to the span element in the header containing the score.

--- code ---
---
language: js
filename: scripts.js
line_numbers: false
line_highlights: 2
---

// Constants
const scoreText = document.querySelector("#scoreText");

--- /code ---

--- /task ---

Change the text content of the span to match the new score.

--- task ---

Update the text content of the span using a template literal.

Notice: ``` `Score: ${score}` ``` uses backticks ``` ` ` ``` instead of `" "` or `' '`

--- code ---
---
language: js
filename: scripts.js
line_numbers: false
line_highlights: 5
---

  if (answer) {
    if (answer.value === "correct") {
      qResult.innerText = "Correct";
      score+1;
      scoreText.innerText = `Score: ${score}`;
    } else {
      qResult.innerText = "Incorrect";
    }
  } else {
    qResult.innerText = "Please select an answer";
  }

--- /code ---

--- /task ---















Change the answer labels to match the question.

--- task ---

Change:
+ the text content of each `<label>`, so you have one correct and two incorrect answers.
+ the `for` attribute of each label to relate to q2, rather than q1.

--- /task ---

Change the attributes for the input elements.

--- task ---

Change:
+ the `name` attribute of each `<input>` element to `q2`
+ the `value` attribute of each `<input>` element to `correct` (or leave it blank if it is an incorrect answer)
+ the `id` attribute of each `<input>` element to match the `for` attribute of its label

--- /task ---

Change the attributes for the result div and button.

--- task ---

Change:
+ the `id` attribute of the `result` div to `result2`
+ the `id` attribute of the button to `q2`

--- /task ---

Change the arguments passed to the function.

--- task ---

Change:
+ the arguments passed by the `onclick` event to the function (`q2` and `#result2`)

--- /task ---

--- collapse ---

---
title: What should my code look like?
---

--- code ---
---
language: html
filename: index.html
line_numbers: false
line_highlights: 19-32 
---

      <div class="q-container">
        <h1>Question 1</h1>
        <h2>What is the largest living cat species?</h2>

        <input type="radio" name="q1" value="correct" id="q1a1">
        <label for="q1a1">Tiger</label><br>
        
        <input type="radio" name="q1" value="" id="q1a2">
        <label for="q1a2">Cheetah</label><br>
        
        <input type="radio" name="q1" value="" id="q1a3">
        <label for="q1a3">Lion</label><br>
    
        <div class="result" id="result1"></div>
        <button id="q1" onclick="checkAnswer('q1', '#result1')">Check Answer</button>
      </div>

      <div class="q-container">
        <h1>Question 2</h1>
        <h2>Which bird is known for its ability to copy human speech?</h2>

        <input type="radio" name="q2" value="" id="q2a1">
        <label for="q2a1">Sparrow</label><br>
        
        <input type="radio" name="q2" value="" id="q2a2">
        <label for="q2a2">Pigeon</label><br>
        
        <input type="radio" name="q2" value="correct" id="q2a3">
        <label for="q2a3">Parrot</label><br>

        <div class="result" id="result2"></div>  
        <button id="q2" onclick="checkAnswer('q2', '#result2')">Check Answer</button>
      </div>

--- /code ---

--- /collapse ---

--- /task ---

### Create a third question

You can go through the same process again for the third question.

--- task ---

Copy and paste the question container again and change the values to create your third question.

You need to:
+ Change the question number and question text
+ Change the answer labels to match the question
+ Change the attributes for the input elements
+ Change the attributes for the result div and button
+ Change the arguments passed to the function

--- collapse ---

---
title: What should my code look like?
---

--- code ---
---
language: html
filename: index.html
line_numbers: false
line_highlights: 35-49
---

      <div class="q-container">
        <h1>Question 1</h1>
        <h2>What is the largest living cat species?</h2>

        <input type="radio" name="q1" value="correct" id="q1a1">
        <label for="q1a1">Tiger</label><br>
        
        <input type="radio" name="q1" value="" id="q1a2">
        <label for="q1a2">Cheetah</label><br>
        
        <input type="radio" name="q1" value="" id="q1a3">
        <label for="q1a3">Lion</label><br>
    
        <div class="result" id="result1"></div>
        <button id="q1" onclick="checkAnswer('q1', '#result1')">Check Answer</button>
      </div>

      <div class="q-container">
        <h1>Question 2</h1>
        <h2>Which bird is known for its ability to copy human speech?</h2>

        <input type="radio" name="q2" value="" id="q2a1">
        <label for="q2a1">Sparrow</label><br>
        
        <input type="radio" name="q2" value="" id="q2a2">
        <label for="q2a2">Pigeon</label><br>
        
        <input type="radio" name="q2" value="correct" id="q2a3">
        <label for="q2a3">Parrot</label><br>

        <div class="result" id="result2"></div>  
        <button id="q2" onclick="checkAnswer('q2', '#result2')">Check Answer</button>
      </div>

      <div class="q-container">
        <h1>Question 3</h1>
        <h2>Which animal is known for its distinctive black and white stripes?</h2>

        <input type="radio" name="q3" value="" id="q3a1">
        <label for="q3a1">Hippopotamus</label><br>
        
        <input type="radio" name="q3" value="" id="q3a2">
        <label for="q3a2">Giraffe</label><br>
        
        <input type="radio" name="q3" value="correct" id="q3a3">
        <label for="q3a3">Zebra</label><br>

        <div class="result" id="result3"></div>
        <button id="q3" onclick="checkAnswer('q3', '#result3')">Check Answer</button>
      </div>

--- /code ---

--- /collapse ---

--- /task ---

--- task ---

**Click Run** 
+ Answer your questions, click the 'Check Answer' button and watch the result update!

--- /task ---

--- task ---

+ Select a different answer and click the 'Check Answer' button.
+ The result will update if you change to a correct or incorrect answer!

--- /task ---

You will stop this from happening later.

Next, you will let the user score points for a correct answer!