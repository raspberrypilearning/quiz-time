## Scoor wat punten

In deze stap laat je de gebruiker punten scoren voor een goed antwoord!

### Voeg de score toe aan de kop

\--- task ---

Open `index.html`.

Voeg een nieuw span-element toe aan de kop.

Geef het de kenmerken `id="scoreText"` en `class="sitename"`.

Voeg de tekst `Score: 0` toe, zodat de gebruiker begint met een score van 0.

## --- code ---

language: html
filename: index.html
line_numbers: false
line_highlights: 3
-------------------------------------------------------

```
<header class="header">
  <span class="sitename">Quiz over wilde dieren</span>
  <span id="scoreText" class="sitename">Score: 0</span>
</header>
```

\--- /code ---

\--- /task ---

### Werk de score bij

Als de gebruiker het juiste antwoord selecteert, moet de functie de score in de kop bijwerken.

\--- task ---

Open `scripts.js`.

Maak een variabele met de naam `score` en stel deze in op `0`.

## --- code ---

language: js
filename: scripts.js
line_numbers: false
line_highlights: 2
-------------------------------------------------------

// Variabelen
var score = 0;

\--- /code ---

\--- /task ---

**Kies** hoeveel punten je wilt geven voor een juist antwoord.

Verhoog de score als het antwoord juist is.

In het voorbeeld wordt 1 aan de score toegevoegd.

\--- task ---

Werk de scorevariabele bij als het antwoord correct is.

## --- code ---

language: js
filename: scripts.js
line_numbers: false
line_highlights: 4
-------------------------------------------------------

if (answer) {
if (answer.value === "correct") {
qResult.innerText = "Juist";
score+=1;
} else {
qResult.innerText = "Onjuist";
}
} else {
qResult.innerText = "Kies aub een antwoord";
}

\--- /code ---

\--- /task ---

### Werk de score in de kop bij

Je moet de gebruiker zijn score laten zien.

\--- task ---

Maak een constante genaamd `scoreText` en gebruik een `querySelector` om deze in te stellen op het span element in de kop dat de score bevat.

## --- code ---

language: js
filename: scripts.js
line_numbers: false
line_highlights: 2
-------------------------------------------------------

// Constanten
const scoreText = document.querySelector("#scoreText");

\--- /code ---

\--- /task ---

Wijzig de tekstinhoud van de span zodat deze overeenkomt met de nieuwe score.

\--- task ---

Werk de tekstinhoud van de span bij.

Let op: `` `Score: ${score}` `` gebruikt backticks `` ` ` `` in plaats van `" `` of `' \`\`.

## --- code ---

language: js
filename: scripts.js
line_numbers: false
line_highlights: 5
-------------------------------------------------------

if (answer) {
if (answer.value === "correct") {
qResult.innerText = "Juist";
score+=1;
scoreText.innerText = `Score: ${score}`;
} else {
qResult.innerText = "Onjuist";
}
} else {
qResult.innerText = "Kies aub een antwoord";
}

\--- /code ---

\--- /task ---

\--- task ---

**Klik op Run**

- Beantwoord je vragen, klik op de knop 'Antwoord controleren' en zie hoe de score in de kop wordt bijgewerkt!

\--- /task ---

Er is een probleem!

Als de gebruiker het juiste antwoord selecteert, kunnen ze blijven klikken op Antwoord controleren en wordt de score telkens verhoogd.

\--- task ---

**Probeer het uit**

- Selecteer het juiste antwoord
- Klik op de knop 'Antwoord controleren'
- Klik er nog een paar keer op en zie hoe je score elke keer hoger wordt!

\--- /task ---

### Stop het vals spelen!

Je moet voorkomen dat de gebruiker valsspeelt door meer dan één keer op de knop te klikken.

Je kunt een knop uitschakelen met de `.disabled` methode.

\--- task ---

Voeg een regel code toe die de knop uitschakelt wanneer de gebruiker een optie selecteert en op een knop "Antwoord controleren" klikt.

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

**Let op:** Dit zal de knop niet uitschakelen als de gebruiker geen antwoord heeft geselecteerd.

**Let op:** De `querySelector` gebruikt samenvoeging om het teken `#` samen te voegen met de waarde van `question` die als argument is doorgegeven in de `onclick`-gebeurtenis van de knop. Dit richt zich op het specifieke knop element.

\--- /task ---

\--- task ---

**Klik op Run**

- Selecteer het juiste antwoord en klik op de knop 'Antwoord controleren'.
- Klik nogmaals op de knop. Dat zou niet moeten werken.

\--- /task ---

Misschien wil je de knop zo opmaken dat deze een andere kleur heeft.

Je kunt hem ook verbergen of de tekst wijzigen.

In dit project ga je de hele vraag verbergen en de volgende vraag met een animatie laten verschijnen!
