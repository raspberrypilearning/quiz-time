## Add more questions

In this step, you will add two more questions.

### Copy the question container

\--- task ---

Open `index.html`.

Highlight and copy (<kbd>Ctrl</kbd>+<kbd>C</kbd> or <kbd>Cmd</kbd>+<kbd>C</kbd>) the `<div>` with the class `q-container` .

\--- collapse ---

---

## title: Show me the question container div

## --- code ---

language: html
filename: index.html
line_numbers: false
--------------------------------------------------------

```
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
```

\--- /code ---

\--- /collapse ---

\--- /task ---

\--- task ---

Paste (<kbd>Ctrl</kbd>+<kbd>V</kbd> or <kbd>Cmd</kbd>+<kbd>V</kbd>) the question container underneath.

\--- collapse ---

---

## title: What should my code look like?

## --- code ---

language: html
filename: index.html
line_numbers: false
line_highlights: 18-33
-----------------------------------------------------------

```
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
```

\--- /code ---

\--- /collapse ---

\--- /task ---

### Create a second question

**Choose** a second question about your topic.

Change the question number and question text.

\--- task ---

Change:

- `<h1>` to Question 2
- `<h2>`to [Choose your new question]

\--- /task ---

**Choose** answers and change the answer labels to match the question.

\--- task ---

Change:

- The text content of each `<label>`, so you have one correct and two incorrect answers
- The `for` attribute of each label to relate to q2, rather than q1

\--- /task ---

Change the attributes for the input elements.

\--- task ---

Change:

- The `name` attribute of each `<input>` element to `q2`
- The `value` attribute of each `<input>` element to `correct` (or leave it blank if it is an incorrect answer)
- The `id` attribute of each `<input>` element to match the `for` attribute of its label

\--- /task ---

Change the attributes for the result div and button.

\--- task ---

Change:

- The `id` attribute of the `result` div to `result2`
- The `id` attribute of the button to `q2`

\--- /task ---

Change the arguments passed to the function.

\--- task ---

Change:

- The arguments passed by the `onclick` event to the function (`q2` and `#result2`)

\--- collapse ---

---

## title: What should my code look like?

## --- code ---

language: html
filename: index.html
line_numbers: false
line_highlights: 19-32
-----------------------------------------------------------

```
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
```

\--- /code ---

\--- /collapse ---

\--- /task ---

### Create a third question

You can go through the same process again for the third question.

\--- task ---

Copy and paste the question container again and change the values to create your third question.

Je moet:

- Change the question number and question text
- Change the answer labels to match the question
- Change the attributes for the input elements
- Change the attributes for the result div and button
- Change the arguments passed to the function

\--- collapse ---

---

## title: What should my code look like?

## --- code ---

language: html
filename: index.html
line_numbers: false
line_highlights: 35-49
-----------------------------------------------------------

```
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
```

\--- /code ---

\--- /collapse ---

\--- /task ---

\--- task ---

**Klik op Run**

- Answer your questions, click the 'Check Answer' button and watch the result update!

\--- /task ---

\--- task ---

- Select a different answer and click the 'Check Answer' button.
- The result will update if you change to a correct or incorrect answer!

\--- /task ---

You will stop this from happening later.

Next, you will let the user score points for a correct answer!
