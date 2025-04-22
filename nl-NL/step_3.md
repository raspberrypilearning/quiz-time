## Controleer het antwoord

In deze stap maak je een functie om het antwoord van de gebruiker te controleren en ze te laten weten of ze het bij het rechte eind hadden!

Het startersproject heeft al een `scripts.js` bestand dat constanten bevat.

### Maak de checkAnswer-functie

Vervolgens moet je een functie maken die de `onclick`-gebeurtenis van de knop afhandelt.

--- task ---

Open `scripts.js`.

Zoek de opmerking `// Controleer antwoordfunctie`.

Maak een functie met de naam `checkAnswer`.

Er moeten twee parameters zijn: `question` en `result`.

--- code ---
---
language: javascript
filename: scripts.js
line_numbers: false
line_highlights: 2-4
---

// Controleer antwoordfunctie
function checkAnswer(question, result) {

}

--- /code ---

--- collapse ---

---
title: Wat is een parameter?
---

### Hier is de HTML voor de knop:

- `<button id="q1" onclick="checkAnswer('q1', '#result1')">Antwoord controleren</button>`

Het bevat deze functieaanroep:

- `checkAnswer('q1', '#result1')`

De functie aanroep bevat twee argumenten die deze doorgeeft aan de `checkAnswer` functie.

### Hier is de checkAnswer-functie

- `function checkAnswer(question, result)`

Deze heeft twee parameters: `question` en `result`.

Wanneer de functie wordt uitgevoerd, gebruikt deze het woord `question` om te verwijzen naar de eerste waarde die als argument is doorgegeven (in dit geval `q1`) en het woord `result` om te verwijzen naar de tweede waarde die als argument is doorgegeven (in dit geval `#result`).

Op deze manier kan de functie met verschillende waarden als argumenten worden aangeroepen en in de code worden gebruikt.

--- /collapse ---

--- /task ---

### De geselecteerde optie zoeken

Je moet weten welke radioknop de gebruiker heeft geselecteerd, om te controleren of deze juist is.

Je kunt de geselecteerde optie ophalen met behulp van de pseudo-klasse `:checked` in een querySelector.

--- task ---

Maak de variabele `answer` en zet deze op de geselecteerde radio knop in de `name` groep die dezelfde waarde heeft als die is doorgegeven aan de `question` parameter (in dit geval: `q1`):

`onclick="checkAnswer('q1', '#result1')`

--- code ---
---
language: javascript
filename: scripts.js
line_numbers: false
line_highlights: 3
---

// Controleer Antwoordfunctie
function checkAnswer(question, result) {
  let answer = document.querySelector(`input[name="${question}"]:checked`);

}

--- /code ---

--- /task ---

### De result div

Je kunt de tekst in de result `<div>` van deze vraag bijwerken, omdat het een `id` attribuut heeft dat uniek is voor deze vraag (in dit geval: `#result1`).

Deze unieke waarde is het tweede argument dat door de `onclick`-gebeurtenis van de knop aan de functie wordt doorgegeven.

`onclick="checkAnswer('q1', '#result1')`

--- task ---

Zet de variabele `qResult` als resultaat `<div>` van deze vraag.

--- code ---
---
language: javascript
filename: scripts.js
line_numbers: false
line_highlights: 4
---

// Controleer antwoordfunctie
function checkAnswer(question, result) {
  let answer = document.querySelector(`input[name="${question}"]:checked`);
  let qResult = document.querySelector(result);

}

--- /code ---

--- /task ---

De styling voor de result-div zorgt ervoor dat deze verborgen is.

--- collapse ---

---
title: toon me de stijl van de 'result' div
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
  color: var(--header-font-colour);
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

Toon de result `<div>`.

--- code ---
---
language: javascript
filename: scripts.js
line_numbers: false
line_highlights: 6
---

// Controleer antwoordfunctie
function checkAnswer(question, result) {
  let answer = document.querySelector(`input[name="${question}"]:checked`);
  let qResult = document.querySelector(result);

  qResult.style.display = "block";

}

--- /code ---

--- /task ---

### Laat de gebruiker zien of het geselecteerde antwoord correct is

--- task ---

Controleer of het geselecteerde antwoord juist is.

Als het **juist** is, werk dan de tekst van de result-div bij zodat 'Juist' wordt weergegeven.
Als het **niet** juist is, update dan de result div tekst om 'Onjuist' te tonen.

Je kunt andere berichten **kiezen** voor juiste en onjuiste antwoorden.

--- code ---
---
language: javascript
filename: scripts.js
line_numbers: false
line_highlights: 8-12
---

// Controleer antwoordfunctie
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

**Klik op Run**

- Selecteer het juiste antwoord en klik op de knop 'Antwoord controleren'
- Je zou de result div weergave 'Juist' moeten zien

**Klik op Run**

- Selecteer een ander antwoord en klik op de knop 'Antwoord controleren'
- Je zou de result div weergave 'Onjuist' moeten zien

**Klik op Run**

- Selecteer het andere onjuiste antwoord en klik op de knop 'Antwoord controleren'
- Je zou de result div weergave 'Onjuist' moeten zien

--- /task ---

### Wat als de gebruiker geen antwoord selecteert?

Je hoeft de controle alleen uit te voeren als de gebruiker een selectie heeft gemaakt.

Als er geen antwoord is geselecteerd, kun je een handige herinneringsboodschap toevoegen!

--- task ---

Controleer of er een antwoord is geselecteerd voor deze vraag.

Geef een resultaatbericht weer als dat er is.

Als dat niet zo is, **kies** dan een nuttig bericht om weer te geven.

--- code ---
---
language: javascript
filename: scripts.js
line_numbers: false
line_highlights: 8, 13-15
---

// Controleer antwoordfunctie
function checkAnswer(question, result) {
  let answer = document.querySelector(`input[name="${question}"]:checked`);
  let qResult = document.querySelector(result);

  qResult.style.display = "block";

  if (answer) {
    if (answer.value === "correct") {
      qResult.innerText = "Juist";
    } else {
      qResult.innerText = "Onjuist";
    }
  } else {
    qResult.innerText = "Kies aub een antwoord";
  }

}

--- /code ---

--- /task ---

--- task ---

**Klik op Run**

- Selecteer **geen** antwoord
- Klik op de knop 'Antwoord controleren'
- Je zou de result-div moeten zien met de boodschap 'Kies aub een antwoord'

--- /task ---

**Fouten opsporen**
Zorg ervoor dat je de `if (answer) {` op regel 8 hebt toegevoegd en de regels 13-15 met het `else` statement hebt bijgewerkt (en de code hebt ingesprongen om deze aanvullingen op te nemen).

Geweldig werk! Je hebt een interactieve vraag gemaakt!

Nu ga je nog meer vragen bedenken!
