## Voeg meer vragen toe

In deze stap voeg je nog twee vragen toe.

### Kopieer de question container

--- task ---

Open `index.html`.

Markeer en kopieer (<kbd>Ctrl</kbd>+<kbd>C</kbd> of <kbd>Cmd</kbd>+<kbd>C</kbd>) de `<div>` met de klasse `q-container`.

--- collapse ---

---
title: Laat me de question container div zien
---

--- code ---
---
language: html
filename: index.html
line_numbers: false
---

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

--- /code ---

--- /collapse ---

--- /task ---

--- task ---

Plak (<kbd>Ctrl</kbd>+<kbd>V</kbd> of <kbd>Cmd</kbd>+<kbd>V</kbd>) de question container eronder.

--- collapse ---

---
title: Hoe zou mijn code er uit moeten zien?
---

--- code ---
---
language: html
filename: index.html
line_numbers: false
line_highlights: 18-33
---

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

--- /code ---

--- /collapse ---

--- /task ---

### Maak een tweede vraag

**Kies** een tweede vraag over jouw onderwerp.

Wijzig het nummer en de tekst van de vraag.

--- task ---

Wijzig:

- `<h1>` naar Vraag 2
- `<h2>`naar [Kies je nieuwe vraag]

--- /task ---

**Kies** antwoorden en verander de antwoordlabels zodat ze bij de vraag passen.

--- task ---

Wijzig:

- De tekstinhoud van elk `<label>`, zodat je één juist en twee onjuiste antwoorden hebt
- Het `for` attribuut van elk label heeft betrekking op q2, in plaats van q1

--- /task ---

Wijzig de kenmerken van de invoerelementen.

--- task ---

Wijzig:

- Het `name`-attribuut van elk `<input>`-element naar `q2`
- Het `value` attribuut van elke `<input>` element naar `correct` (of laat het leeg als het een onjuist antwoord is)
- Het `id`-kenmerk van elk `<input>`-element zodanig dat het overeenkomt met het `for`-kenmerk van het label

--- /task ---

Verander de kenmerken van de result div en knop.

--- task ---

Wijzig:

- Het `id`-attribuut van de `result`-div naar `result2`
- Het `id` attribuut van de knop naar `q2`

--- /task ---

Wijzig de argumenten die aan de functie worden doorgegeven.

--- task ---

Wijzig:

- De argumenten die door de `onclick`-gebeurtenis aan de functie worden doorgegeven (`q2` en `#result2`)

--- collapse ---

---
title: Hoe zou mijn code er uit moeten zien?
---

--- code ---
---
language: html
filename: index.html
line_numbers: false
line_highlights: 19-32
---

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

  <div class="q-container">
    <h1>Vraag 2</h1>
    <h2>Welke vogel staat bekend om zijn vermogen om menselijke spraak te imiteren?</h2>

    <input type="radio" name="q2" value="" id="q2a1">
    <label for="q2a1">Mus</label><br>
    
    <input type="radio" name="q2" value="" id="q2a2">
    <label for="q2a2">Duif</label><br>
    
    <input type="radio" name="q2" value="correct" id="q2a3">
    <label for="q2a3">Papegaai</label><br>

    <div class="result" id="result2"></div>  
    <button id="q2" onclick="checkAnswer('q2', '#result2')">Antwoord controleren</button>
  </div>

--- /code ---

--- /collapse ---

--- /task ---

### Maak een derde vraag

Voor de derde vraag kan je hetzelfde proces weer doorlopen.

--- task ---

Kopieer en plak de question container opnieuw en wijzig de waarden om jouw derde vraag te maken.

Je moet:

- Het vraagnummer en de vraagtekst veranderen
- De antwoordlabels zodanig veranderen dat ze bij de vraag passen
- De kenmerken voor de input elementen wijzigen
- De kenmerken van de result div en knop veranderen
- De argumenten wijzigen die aan de functie worden doorgegeven

--- collapse ---

---
title: Hoe zou mijn code er uit moeten zien?
---

--- code ---
---
language: html
filename: index.html
line_numbers: false
line_highlights: 35-49
---

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

      <div class="q-container">
        <h1>Vraag 2</h1>
        <h2>Welke vogel staat bekend om zijn vermogen om menselijke spraak te imiteren?</h2>

        <input type="radio" name="q2" value="" id="q2a1">
        <label for="q2a1">Mus</label><br>
        
        <input type="radio" name="q2" value="" id="q2a2">
        <label for="q2a2">Duif</label><br>
        
        <input type="radio" name="q2" value="correct" id="q2a3">
        <label for="q2a3">Papegaai</label><br>

        <div class="result" id="result2"></div>  
        <button id="q2" onclick="checkAnswer('q2', '#result2')">Antwoord controleren</button>
      </div>

      <div class="q-container">
        <h1>Vraag 3</h1>
        <h2>Welk dier staat bekend om zijn kenmerkende zwart-witte strepen?</h2>

        <input type="radio" name="q3" value="" id="q3a1">
        <label for="q3a1">Nijlpaard</label><br>
        
        <input type="radio" name="q3" value="" id="q3a2">
        <label for="q3a2">Giraf</label><br>
        
        <input type="radio" name="q3" value="correct" id="q3a3">
        <label for="q3a3">Zebra</label><br>

        <div class="result" id="result3"></div>
        <button id="q3" onclick="checkAnswer('q3', '#result3')">Antwoord controleren</button>
      </div>

--- /code ---

--- /collapse ---

--- /task ---

--- task ---

**Klik op Run**

- Beantwoord je vragen, klik op de knop 'Antwoord controleren' en bekijk de bijgewerkte uitslag!

--- /task ---

--- task ---

- Selecteer een ander antwoord en klik op de knop 'Antwoord controleren'.
- Het resultaat wordt bijgewerkt als je het antwoord wijzigt in een juist of onjuist antwoord!

--- /task ---

Je voorkomt dit later.

Vervolgens laat je de gebruiker punten scoren voor een juist antwoord!
