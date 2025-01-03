## Maak vraag aan

In deze stap ga je de eerste quizvraag maken. Je kiest ook een aantal kleuren en een titel voor de quiz!

### Kies een quizonderwerp

\--- task ---

Waar gaat jouw quiz over?

- 🐻 **Natuur**: Dieren, planten of leefgebieden?
- 📖 **Boeken**: auteurs, personages of genres?
- 🏰 **Geschiedenis**: Koningen en koninginnen, prehistorie/modern of belangrijke data?
- 🥇 **Wereldrecords**: Grootste, snelste of langste?
- 👗 **Mode**: Merken, trends of influencers?
- 🔬 **Wetenschap**: Wilde dieren, klimaat of theorieën?
- 🎥 **TV & film**: Cinematografie, series of personages?
- 🖥️ **Coderen**: Talen, apparaten of software?
- 🕹️ **Video spellen**: Personages, genres of consoles?
- 🎨 **Kunst**: Kunstwerken, kunstenaars of musea?
- 👥 **Cultuur**: Festivals, feestdagen of talen?

Je moet een onderwerp kiezen, en drie vragen voor de gebruiker die hij kan beantwoorden.

\--- collapse ---

---

## title: Enkele voorbeelden

Het voorbeeldproject gebruikt **Wilde Dieren** als onderwerp en stelt de gebruiker drie vragen.

Het **Karate** voorbeeld gebruikt de vechtsport **karate** als onderwerp.

Er zijn veel mogelijkheden qua onderwerpen en vragen over die onderwerpen.

Kies iets waar je de expert in bent en test je vrienden of familie!

\--- /collapse ---

**Kies** jouw onderwerp.

\--- /task ---

\--- task ---

Open het [Tijd voor een Quiz starter project](https://editor.raspberrypi.org/en/projects/quiz-time-starter){:target="_blank"}.

Als je bent ingelogd, sla het project op jouw account op en wijzig de naam.

\--- /task ---

### Werk de titel en koptekst van jouw pagina bij

\--- task ---

Wijzig de paginatitel en de koptekst zodat deze bij jouw onderwerp passen.

## --- code ---

language: html
filename: index.html
line_numbers: true
line_number_start: 1
line_highlights: 8, 12
-----------------------------------------------------------

<!DOCTYPE html>

<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="default.css">
    <title>Quiz over wilde dieren</title>
  </head>
  <body>
    <header class="header">
      <span class="sitename">Quiz over wilde dieren</span>

\--- /code ---

\--- /task ---

\--- task ---

**Klik op Run**

- Je zou de naam van je quiz in de koptekst moeten zien!

\--- /task ---

### Maak jouw eerste vraag

\--- task ---

Zoek de vraagcontainer `<div class="q-container">`

**Kies** een vraag over je onderwerp.

Wijzig de tekst in de tag `<h2>` zodat dit je eerste vraag wordt.

## --- code ---

language: html
filename: index.html
line_numbers: true
line_number_start: 15
line_highlights: 17
--------------------------------------------------------

```
  <div class="q-container">
    <h1>Vraag 1</h1>
    <h2>Wat is de grootste nog levende kattensoort?</h2>
```

\--- /code ---

\--- /task ---

### Maak drie antwoorden

**Kies** de juiste en onjuiste antwoorden.

\--- task ---

Voeg tekst toe aan de drie antwoordlabels.

- Een juist antwoord (en geef het het attribuut `value="correct"`)
- Twee foute antwoorden

## --- code ---

language: html
filename: index.html
line_numbers: true
line_number_start: 15
line_highlights: 20, 23, 26
----------------------------------------------------------------

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
```

\--- /code ---

**Let op:**

- Elk `<label>`-element gebruikt een `for`-kenmerk dat het label koppelt aan het `id`-kenmerk van een `<input>`-element. Hierdoor wordt de webpagina toegankelijker, omdat de gebruiker de keuzerondjes ook kan selecteren door op het label te klikken.
- Elke `<input>` element is een radio knop type en heeft drie attributen:
  - `name` (q1) staat toe dat er slechts één keuzerondje in de naamgroep 'q1' tegelijk geselecteerd kan worden
  - `value` wordt later gebruikt wanneer het antwoord wordt gecontroleerd
  - `id` komt overeen met het `for`-kenmerk van het label

\--- /task ---

\--- task ---

**Klik op Run**

- Je zou je eerste vraag moeten zien en drie opties.

\--- /task ---

### Weergave juist / onjuist

De gebruiker moet weten of de antwoorden juist of onjuist zijn.

\--- task ---

Voeg een `<div>` toe om het resultaat te laten zien.

## --- code ---

language: html
filename: index.html
line_numbers: true
line_number_start: 15
line_highlights: 28
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
```

\--- /code ---

**Let op:** Er staat geen tekstinhoud in `<div>`. Je voegt dit later toe met behulp van JavaScript.

\--- /task ---

### Voeg een knop Antwoord controleren toe

De gebruiker moet controleren of zijn antwoord juist is.

\--- task ---

Voeg een knop toe onderaan de `q-container` `<div>`.

Deze knop:

- Heeft het attribuut `id="q1"`, dat wordt gebruikt om het te laten zien, verbergen en later uit te schakelen
- Heeft een `onclick`-gebeurtenis die de `checkAnswer`-functie uitvoert en doorgeeft:
  - De te controleren vraag (`q1`)
  - De ID van de `<div>` waar het resultaat van de controle wordt weergegeven (`#result1`)
- Toont de tekst 'Antwoord controleren'

## --- code ---

language: html
filename: index.html
line_numbers: true
line_number_start: 15
line_highlights: 29
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
```

\--- /code ---

\--- /task ---

\--- task ---

Controleer of de juiste optie het attribuut `value="correct"` heeft.
In het voorbeeld is het juiste antwoord het eerste antwoord (`Tijger`).

\--- /task ---

### Maak je eigen pagina

De pagina ziet er op dit moment heel functioneel en eenvoudig uit. Het is tijd dat jij het er geweldig uit laat zien!

\--- task ---

Voeg een passend lettertype toe voor jouw webpagina vanuit Google Fonts.

[[[google-fonts]]]

[[[web-fonts]]]

\--- /task ---

\--- task ---

Open `default.css`.

**Kies** je kleuren en verander de kleurvariabelen.

## --- code ---

language: css
filename: default.css
line_numbers: false
line_number_start:
line_highlights:
-----------------------------------------------------

/\* Basiskleuren \*/
\--body-background: #000000;
\--background: #ffffff;
\--header-font-colour: #000000;
\--h1-colour: #000000;
\--h2-colour: #000000;
\--button-background-colour: #000000;
\--button-font-colour: #ffffff;
}

\--- /code ---

[[[contrast-checker]]]

\--- /task ---

\--- task ---

**Klik op Run**

- Verander de kleuren aan als je dat wilt.

\--- /task ---

Vervolgens maak je de functie om te controleren of het antwoord van de gebruiker juist is!
