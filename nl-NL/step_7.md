## Volgende vraag, alsjeblieft!

In deze stap verberg je de beantwoorde vraag en toon je de volgende vraag met een animatie!

### Wat is de huidige vraag?

Je moet weten wat de huidige vraag is uit de `vragen` lijst.

Maak een variabele om de index van de huidige vraag vast te leggen.

\--- task ---

Maak een variabele met de naam `currentQ` en stel deze in op `0`.

## --- code ---

language: js
filename: scripts.js
line_numbers: false
line_highlights: 3
-------------------------------------------------------

// Variabelen
var score = 0;
var currentQ = 0;

\--- /code ---

\--- /task ---

### Maak de volgende vraagfunctie

Je moet een functie maken waarmee je de huidige vraag kunt verbergen en de volgende vraag kunt weergeven.

\--- task ---

Zoek de opmerking `// Controleer antwoordfunctie`.

Maak een functie met de naam `nextQ`.

## --- code ---

language: js
filename: scripts.js
line_numbers: false
line_highlights: 2-4
---------------------------------------------------------

// Volgende vraag functie
functie nextQ() {

}

\--- /code ---

\--- /task ---

Je hoeft de code van de functie alleen uit te voeren als er nog vragen in de lijst staan.

\--- task ---

Maak een `if`-instructie die controleert of de index van de **huidige** vraag (`currentQ`) één minder is dan het aantal vragen in de `vragen`-lijst.

## --- code ---

language: js
filename: scripts.js
line_numbers: false
line_highlights: 3-5
---------------------------------------------------------

// Volgende vraag functie
function nextQ() {
if (currentQ < questions.length - 1) {

}

}

\--- /code ---

\--- /task ---

### Verberg de huidige vraag

Als er nog vragen op de lijst staan, dan moet je de huidige vraag verbergen.

\--- task ---

Zorg voor de juiste opmaak voor het huidige vraag element zodat deze wordt verborgen.

## --- code ---

language: js
filename: scripts.js
line_numbers: false
line_highlights: 4
-------------------------------------------------------

// Volgende vraag functie
function nextQ() {
if (currentQ < questions.length - 1) {
questions[currentQ].style.display = "none";

}

}

\--- /code ---

\--- /task ---

### Laat de volgende vraag zien

\--- task ---

Verhoog de variabele `currentQ`.

Toon de (nieuwe) huidige vraag.

## --- code ---

language: js
filename: scripts.js
line_numbers: false
line_highlights: 5-6
---------------------------------------------------------

//Volgende vraag functie
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

**Klik op Run**

- Beantwoord de eerste vraag
- De vraag verandert niet!

Je moet de `nextQ` functie in je code aanroepen.

\--- /task ---

### De volgende vraagfunctie aanroepen

Roep de `nextQ` functie aan als een antwoord juist of onjuist is (alleen als een antwoord is geselecteerd).

\--- task ---

Voeg de `nextQ()` aanroep toe aan je `checkAnswer` functie.

## --- code ---

language: js
filename: scripts.js
line_numbers: false
line_highlights: 14, 17
------------------------------------------------------------

// Controleer antwoordfunctie
function checkAnswer(question, result) {
let answer = document.querySelector(`input[name="${question}"]:checked`);
let qResult = document.querySelector(result);

qResult.style.display = "block";

if (answer) {
document.querySelector("#" + question).disabled = true;
if (answer.value === "correct") {
qResult.innerText = "Juistt";
score+=1;
scoreText.innerText = `Score: ${score}`;
nextQ();
} else {
qResult.innerText = "Onjuist";
nextQ();
}
} else {
qResult.innerText = "Kies aub een antwoord";
}

}

\--- /code ---

\--- /task ---

\--- task ---

**Klik op Run**

- Beantwoord de vragen.
- De huidige vraag wordt verborgen en de volgende vraag wordt weergegeven.
- Je zal zien dat je de `result` div alleen ziet bij de laatste vraag. De result div voor de andere vragen wordt ook weergegeven, maar het gaat te snel om te kunnen zien.

\--- /task ---

### Langzamer aan doen

Je moet een tijdsvertraging toevoegen voordat de huidige vraag wordt verborgen, zodat de gebruiker de `result` div kan zien.

\--- task ---

Voeg een `setTimeout` toe.

## --- code ---

language: js
filename: scripts.js
line_numbers: false
line_highlights: 3, 9
----------------------------------------------------------

// Volgende vraag functie
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

**Klik op Run**

- Beantwoord de vragen
- Er zou nu een vertraging moeten zijn voordat de huidige vraag wordt verborgen en de volgende vraag wordt weergegeven
- Je zal zien dat je nu de `result` div ziet voor alle vragen!

\--- /task ---

### Animeer de vragen voordat ze verdwijnen!

Je kunt je quiz interessanter maken door de vragen te animeren voordat ze worden verborgen.

Er is een `fade-out` animatie in `style.css` die je kunt gebruiken.

\--- task ---

Voeg een fade out (vervaging) animatie toe aan de 'nextQ' functie om de huidige vraag te laten verdwijnen.

## --- code ---

language: js
filename: scripts.js
line_numbers: false
line_highlights: 3
-------------------------------------------------------

// Volgende vraag functie
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

**Klik op Run**

- Beantwoord de vragen
- De vragen zullen vervagen!

\--- /task ---

### Animeer de vragen zodra ze verschijnen!

**Kies** welke animatie je wilt gebruiken.

Er zijn vijf animaties in `style.css` die je zou kunnen gebruiken:

1. `fade-in` (vervagen)
2. `grow-in` (groei in)
3. `rise-in` (opstijgen in)
4. `slide-left` (schuif naar links)
5. `slide-right` (schuif naar rechts)

\--- task ---

Voeg een animatie toe aan de `nextQ`-functie om de vragen op een stijlvolle manier te laten verschijnen!

## --- code ---

language: js
filename: scripts.js
line_numbers: false
line_highlights: 8
-------------------------------------------------------

// Volgende vraag functie
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

**Klik op Run**

- Beantwoord de vragen
- De vragen worden geanimeerd zodra ze verschijnen!

\--- /task ---

### Vermijd het knipperen

Het kan zijn dat je merkt dat een vraag knippert voordat deze verschijnt.

Je kunt dit netjes oplossen.

\--- task ---

Open `style.css`.

Stel de eigenschap `opacity` van de `q-container`-selector in op `0`.

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

Stel de eigenschap `opacity` van de eerste vraag in op `1`.

## --- code ---

language: js
filename: scripts.js
line_numbers: false
line_highlights: 3
-------------------------------------------------------

// Eerste vraag weergeven
questions[0].style.display = "block";
questions[0].style.opacity = 1;

\--- /code ---

\--- /task ---

Goed gedaan! Je hebt een geweldige interactieve quiz gemaakt - het ziet er geweldig uit!
