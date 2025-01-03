## Voeg meer vragen toe

In deze stap voeg je nog twee vragen toe.

### Kopieer de question container

\--- task ---

Open `index.html`.

Markeer en kopieer (<kbd>Ctrl</kbd>+<kbd>C</kbd> of <kbd>Cmd</kbd>+<kbd>C</kbd>) de `<div>` met de klasse `q-container`.

\--- collapse ---

---

## title: Laat me de question container div zien

## --- code ---

language: html
filename: index.html
line_numbers: false
--------------------------------------------------------

```
  <div class="q-container">
    <h1>Vraag 1</h1>
    <h2>Wat is de grootste nog levende kattensoort?</h2>

    <input type="radio" name="q1" value="correct" id="q1a1">
    <label for="q1a1">Tijger</label><br>
    
    <input type="radio" name="q1" value="" id="q1a2">
    <label for="q1a2">Jachtluipaard</label><br>
    
    <input type="radio" name="q1" value="" id="q1a3">
    <label for="q1a3">Leeuw</label><br>

    <div class="result" id="result1"></div>
    <button id="q1" onclick="checkAnswer('q1', '#result1')">Antwoord controleren</button>
 </div>
```

\--- /code ---

\--- /collapse ---

\--- /task ---

\--- task ---

Plak (<kbd>Ctrl</kbd>+<kbd>V</kbd> of <kbd>Cmd</kbd>+<kbd>V</kbd>) de question container eronder.

\--- collapse ---

---

## title: Hoe zou mijn code er uit moeten zien?

## --- code ---

language: html
filename: index.html
line_numbers: false
line_highlights: 18-33
-----------------------------------------------------------

```
  <div class="q-container">
    <h1>Vraag 1</h1>
    <h2>Wat is de grootste nog levende kattensoort?</h2>

    <input type="radio" name="q1" value="correct" id="q1a1">
    <label for="q1a1">Tijger</label><br>
    
    <input type="radio" name="q1" value="" id="q1a2">
    <label for="q1a2">Jachtluipaard</label><br>
    
    <input type="radio" name="q1" value="" id="q1a3">
    <label for="q1a3">Leeuw</label><br>

    <div class="result" id="result1"></div>
    <button id="q1" onclick="checkAnswer('q1', '#result1')">Controleer antwoord</button>
  </div>

  <div class="q-container">
    <h1>Vraag 1</h1>
    <h2>Wat is de grootste nog levende kattensoort?</h2>

    <input type="radio" name="q1" value="correct" id="q1a1">
    <label for="q1a1">Tijger</label><br>
    
    <input type="radio" name="q1" value="" id="q1a2">
    <label for="q1a2">Jachtluipaard</label><br>
    
    <input type="radio" name="q1" value="" id="q1a3">
    <label for="q1a3">Leeuw</label><br>

    <div class="result" id="result1"></div>
    <button id="q1" onclick="checkAnswer('q1', '#result1')">Controleer antwoord</button>
  </div>
```

\--- /code ---

\--- /collapse ---

\--- /task ---

### Maak een tweede vraag

**Kies** een tweede vraag over jouw onderwerp.

Wijzig het nummer en de tekst van de vraag.

\--- task ---

Wijzig:

- `<h1>` naar Vraag 2
- `<h2>`naar [Kies je nieuwe vraag]

\--- /task ---

**Kies** antwoorden en verander de antwoordlabels zodat ze bij de vraag passen.

\--- task ---

Wijzig:

- De tekstinhoud van elk `<label>`, zodat je één juist en twee onjuiste antwoorden hebt
- Het `for` attribuut van elk label heeft betrekking op q2, in plaats van q1

\--- /task ---

Wijzig de kenmerken van de invoerelementen.

\--- task ---

Wijzig:

- The `name` attribute of each `<input>` element to `q2`
- The `value` attribute of each `<input>` element to `correct` (or leave it blank if it is an incorrect answer)
- The `id` attribute of each `<input>` element to match the `for` attribute of its label

\--- /task ---

Change the attributes for the result div and button.

\--- task ---

Wijzig:

- The `id` attribute of the `result` div to `result2`
- The `id` attribute of the button to `q2`

\--- /task ---

Change the arguments passed to the function.

\--- task ---

Wijzig:

- The arguments passed by the `onclick` event to the function (`q2` and `#result2`)

\--- collapse ---

---

## title: Hoe zou mijn code er uit moeten zien?

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

## title: Hoe zou mijn code er uit moeten zien?

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
