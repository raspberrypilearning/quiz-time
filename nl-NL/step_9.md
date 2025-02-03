## Verbeter je project

In deze stap kun je jouw project upgraden door:

- Meer vragen toe te voegen
- De tekst in de koptekst bijwerken om de eindscore weer te geven
- Laat de gebruiker een bericht zien als de maximale score wordt behaald
- De gebruiker de quiz opnieuw laten doen als de volledige score niet is behaald
- Meer animaties toe te voegen

Je hoeft niet al deze dingen te doen. Kies wat je het meest aanspreekt en wat past bij de tijd die je hebt.

\--- collapse ---

---

## title: Meer vragen toevoegen

Je kunt hetzelfde proces doorlopen dat je in een eerdere stap hebt gebruikt om meer vragen toe te voegen.

Kopieer en plak de question container opnieuw en wijzig de waarden om jouw extra vragen te maken.

Je moet:

- Het vraagnummer en de vraagtekst veranderen
- De antwoordlabels zodanig veranderen dat ze bij de vraag passen
- De kenmerken voor de input elementen wijzigen
- De kenmerken van de result div en knop veranderen
- De argumenten wijzigen die aan de functie worden doorgegeven

\--- /collapse ---

\--- collapse ---

---

## title: Update de eindscore ... en laat hem stralen!

### Wijzig de nextQ-functie.

## --- code ---

language: js
filename: scripts.js
line_numbers: false
line_highlights: 10-11
-----------------------------------------------------------

// Volgende vraag functie
function nextQ() {
questions[currentQ].classList.add("fade-out");
setTimeout(() => {
if (currentQ < questions.length - 1) {
questions[currentQ].style.display = "none";
currentQ++;
questions[currentQ].classList.add("slide-left");
questions[currentQ].style.display = "block";
} else {
scoreText.innerText = `Eindscore: ${score}`;\
}
}, "2000");
}

\--- /code ---

### Laat het stralen!

## --- code ---

language: js
filename: scripts.js
line_numbers: false
line_highlights: 12
--------------------------------------------------------

// Volgende vraag functie
function nextQ() {
questions[currentQ].classList.add("fade-out");
setTimeout(() => {
if (currentQ < questions.length - 1) {
questions[currentQ].style.display = "none";
currentQ++;
questions[currentQ].classList.add("slide-left");
questions[currentQ].style.display = "block";
} else {
scoreText.innerText = `Eindscore: ${score}`;
scoreText.classList.add("glowing");
}
}, "2000");
}

\--- /code ---

\--- /collapse ---

\--- collapse ---

---

## title: Laat de gebruiker een bericht zien als de maximale score wordt behaald

### HTML bijwerken

- Voeg een `<div>`-element toe onder de result-div.
- Voeg een felicitatiebericht toe.
- Geef het een `class` attribuut dat kan worden gebruikt om het bericht te tonen/verbergen met behulp van JavaScript. In het voorbeeld wordt de klasse `fullMarks` gebruikt.

## --- code ---

language: html
filename:
line_numbers: false
line_highlights: 2
-------------------------------------------------------

```
    <div class="result" id="result3"></div>  
    <div class="fullMarks">Goed gedaan! Alles klopt!</div>
    <button id="q3" onclick="checkAnswer('q3', '#result3')">Antwoord controleren</button>
```

\--- /code ---

### JavaScript bijwerken

Voeg een const toe om het element te verkrijgen.

## --- code ---

language: js
filename: scripts.js
line_numbers: false
line_highlights: 8
-------------------------------------------------------

// Variabelen
var score = 0;
var currentQ = 0;

// Constanten
const scoreText = document.querySelector("#scoreText");
const vragen = document.querySelectorAll(".q-container");
const fullMarks = document.querySelector(".fullMarks");

\--- /code ---

Voeg een `if` statement toe om te controleren of de eindscore overeenkomt met het aantal vragen.

In het voorbeeld wordt één punt toegekend voor elk juist antwoord.

Als je voor elk goed antwoord meer dan één punt toekent, moet je de score delen door het aantal toegekende punten.

## --- code ---

language: js
filename: scripts.js
line_numbers: false
line_highlights: 13-15
-----------------------------------------------------------

// Volgende vraag functie
function nextQ() {
questions[currentQ].classList.add("fade-out");
setTimeout(() => {
if (currentQ < questions.length - 1) {
questions[currentQ].style.display = "none";
currentQ++;
questions[currentQ].classList.add("slide-left");
questions[currentQ].style.display = "block";
} else {
scoreText.innerText = `Eindscore: ${score}`;
scoreText.classList.add("glowing");
if (score === questions.length) {
fullMarks.style.display = "block";
}
}
}, "2000");
}

\--- /code ---

\--- /collapse ---

\--- collapse ---

---

## title: Laat de gebruiker de quiz opnieuw doen als de volledige score niet is behaald

### HTML bijwerken

- Voeg een `<a>` element toe onder de result div.
- Voeg een link naar `index.html` toe met behulp van het `href`-kenmerk.
- Geef het een `class` attribuut dat kan worden gebruikt om de link te tonen/verbergen met behulp van JavaScript. Het voorbeeld gebruikt de class `retry` (de CSS styling is al beschikbaar in `style.css`).

## --- code ---

language: html
filename:
line_numbers: false
line_highlights: 3
-------------------------------------------------------

```
    <div class="result" id="result3"></div>  
    <div class="fullMarks">Goed gedaan! Alles klopt!</div>
    <a class="retry" href="index.html">Probeer het nog eens!</a>
    <button id="q3" onclick="checkAnswer('q3', '#result3')">Antwoord controleren</button>
```

\--- /code ---

### JavaScript bijwerken

Voeg een const toe om het element te verkrijgen.

## --- code ---

language: js
filename: scripts.js
line_numbers: false
line_highlights: 9
-------------------------------------------------------

// Variabelen
var score = 0;
var currentQ = 0;

// Constanten
const scoreText = document.querySelector("#scoreText");
const questions = document.querySelectorAll(".q-container");
const fullMarks = document.querySelector(".fullMarks");
const retry = document.querySelector(".retry");

\--- /code ---

Voeg een `else`-instructie toe aan de `if` die is toegevoegd in de laatste upgrade om de link `<a>` opnieuw te proberen weer te geven als aan de voorwaarde **niet** is voldaan (als de gebruiker niet de maximale score heeft behaald).

## --- code ---

language: js
filename: scripts.js
line_numbers: false
line_highlights: 15-17
-----------------------------------------------------------

// Volgende vraag functie
function nextQ() {
questions[currentQ].classList.add("fade-out");
setTimeout(() => {
if (currentQ < questions.length - 1) {
questions[currentQ].style.display = "none";
currentQ++;
questions[currentQ].classList.add("slide-left");
questions[currentQ].style.display = "block";
} else {
scoreText.innerText = `Eindscore: ${score}`;
scoreText.classList.add("glowing");
if (score === questions.length) {
fullMarks.style.display = "block";
} else {
retry.style.display = "block";
}
}
}, "2000");
}

\--- /code ---

**Tip:** Als je het fullMarks element al hebt toegevoegd, voeg dan een `else` statement toe aan de `if` die is toegevoegd aan de laatste upgrade zoals hierboven getoond.

Als je dat nog niet gedaan hebt, voeg dit dan toe als een `if`-instructie in plaats van een `else`-instructie.

\--- /collapse ---
