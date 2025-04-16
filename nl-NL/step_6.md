## Toon er één tegelijk

In deze stap verberg je alle vragen, zodat ze alleen worden weergegeven wanneer ze nodig zijn.

### Alle vragen verbergen

Je moet elke vraag weergeven wanneer deze nodig is.

Eerst moet je ze allemaal verbergen.

--- task ---

Open `style.css`.

Wijzig de stijl voor de selector `.q-container` om alle question containers te verbergen.

--- code ---
---
language: css
filename: styles.html
line_numbers: false
line_highlights: 8
---

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

--- /code ---

--- /task ---

--- task ---

**Klik op Run**

- Al je vragen zouden verdwenen moeten zijn!

Maak je geen zorgen, je gaat ze weer laten verschijnen!

--- /task ---

### Ontvang een lijst met alle vragen

Je moet toegang hebben tot elke vraag.

--- task ---

Open `scripts.js`.

Maak een constante om een lijst met alle question containers vast te leggen.

--- code ---
---
language: js
filename: scripts.js
line_numbers: false
line_highlights: 3
---

// Constanten
const scoreText = document.querySelector("#scoreText");
const questions = document.querySelectorAll(".q-container");

--- /code ---

--- /task ---

### Laat de eerste vraag zien

Het eerste item in je lijst staat op positie 0\`.

--- task ---

Zoek de opmerking `// Eerste vraag weergeven`.

Laat de eerste vraag zien.

--- code ---
---
language: js
filename: scripts.js
line_numbers: false
line_highlights: 2
---

// Eerste vraag weergeven
questions[0].style.display = "block";

--- /code ---

--- /task ---

--- task ---

**Klik op Run**

- Je eerste vraag zou weer tevoorschijn moeten komen!
- Selecteer een antwoord en klik op de knop Antwoord controleren
- Probeer dit een paar keer met andere antwoorden

--- /task ---

Vervolgens moet je deze vraag verbergen en de volgende vraag weergeven!
