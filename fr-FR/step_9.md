## Améliorer ton projet

Dans cette étape, tu peux améliorer ton projet en :

- Ajoutant plus de questions
- Améliorant le texte dans l'en-tête pour afficher le score final
- Affichant un message à l'utilisateur s'il obtient la note maximale
- Permettant à l'utilisateur de refaire le quiz s'il n'obtient pas la note maximale
- Ajoutant plus d'animations

Tu n'es pas obligé de faire toutes ces choses. Choisis ce qui te plaît et qui correspond au temps dont tu disposes.

\--- collapse ---

---

## title: Ajouter plus de questions

Tu peux suivre le même processus que celui utilisé à l’étape précédente pour ajouter d’autres questions.

Copie et colle à nouveau le conteneur de question et modifie les valeurs pour créer tes questions supplémentaires.

Tu dois :

- Modifier le numéro et le texte de la question
- Modifier les labels de réponse pour qu'elles correspondent à la question
- Modifier les attributs des éléments d'entrée
- Modifier les attributs pour le div de résultat et le bouton
- Modifier les arguments passés à la fonction

\--- /collapse ---

\--- collapse ---

---

## title: Mettre à jour le score final ... et fais-le briller !

### Modifie la fonction nextQ.

## --- code ---

language: js
filename: scripts.js
line_numbers: false
line_highlights: 10-11
-----------------------------------------------------------

// Fonction de la question suivante
function nextQ() {
questions[currentQ].classList.add("fade-out");
setTimeout(() => {
if (currentQ < questions.length - 1) {
questions[currentQ].style.display = "none";
currentQ++;
questions[currentQ].classList.add("slide-left");
questions[currentQ].style.display = "block";
} else {
scoreTexte.innerText = `Score final : ${score}`;\
}
}, "2000");
}

\--- /code ---

### Fais-le briller !

## --- code ---

language: js
filename: scripts.js
line_numbers: false
line_highlights: 12
--------------------------------------------------------

// Fonction de la question suivante
function nextQ() {
questions[currentQ].classList.add("fade-out");
setTimeout(() => {
if (currentQ < questions.length - 1) {
questions[currentQ].style.display = "none";
currentQ++;
questions[currentQ].classList.add("slide-left");
questions[currentQ].style.display = "block";
} else {
scoreTexte.innerText = `Score final : ${score}`;
scoreTexte.classList.add("glowing");
}
}, "2000");
}

\--- /code ---

\--- /collapse ---

\--- collapse ---

---

## title: Afficher un message à l'utilisateur s'il obtient la note maximale

### Mettre à jour le code HTML

- Ajoute un élément `<div>` en dessous du div de résultat.
- Inclus un message de félicitation.
- Donne-lui un attribut `class` qui peut être utilisé pour afficher/cacher le message en utilisant JavaScript. L'exemple utilise la classe `fullMarks`.

## --- code ---

language: html
filename:
line_numbers: false
line_highlights: 2
-------------------------------------------------------

```
    <div class="result" id="result3"></div>  
    <div class="fullMarks">Bien joué !</div>
    <button id="q3" onclick="checkAnswer('q3', '#result3')">Vérifier la réponse</button>
```

\--- /code ---

### Mettre à jour le JavaScript

Ajoute un const pour obtenir l'élément.

## --- code ---

language: js
filename: scripts.js
line_numbers: false
line_highlights: 8
-------------------------------------------------------

// Variables
var score = 0;
var currentQ = 0;

// Constantes
const scoreTexte = document.querySelector("#scoreTexte");
const questions = document.querySelectorAll(".q-container");
const fullMarks = document.querySelector(".fullMarks");

\--- /code ---

Ajoute une instruction `if` pour vérifier si le score final correspond au nombre de questions.

L'exemple attribue un point pour chaque réponse correcte.

Si tu attribues plus d'un point pour chaque réponse correcte, tu dois diviser le score par le nombre de points attribués.

## --- code ---

language: js
filename: scripts.js
line_numbers: false
line_highlights: 13-15
-----------------------------------------------------------

// Fonction de la question suivante
function nextQ() {
questions[currentQ].classList.add("fade-out");
setTimeout(() => {
if (currentQ < questions.length - 1) {
questions[currentQ].style.display = "none";
currentQ++;
questions[currentQ].classList.add("slide-left");
questions[currentQ].style.display = "block";
} else {
scoreTexte.innerText = `Score final : ${score}`;
scoreTexte.classList.add("glowing");
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

## title: Permettre à l'utilisateur de refaire le quiz s'il n'obtient pas la note maximale

### Mettre à jour le code HTML

- Ajoute un élément `<a>` en dessous du div de résultat.
- Inclus un lien vers `index.html` en utilisant l'attribut `href`.
- Donne-lui un attribut `class` qui peut être utilisé pour afficher/cacher le lien en utilisant JavaScript. L'exemple utilise la classe `retry` (le style CSS est déjà fourni dans `style.css`).

## --- code ---

language: html
filename:
line_numbers: false
line_highlights: 3
-------------------------------------------------------

```
    <div class="result" id="result3"></div>  
    <div class="fullMarks">Bien joué ! Tout est correct !</div>
    <a class="retry" href="index.html">Réessaie !</a>
    <button id="q3" onclick="checkAnswer('q3', '#result3')">Vérifier la réponse</button>
```

\--- /code ---

### Mettre à jour le JavaScript

Ajoute un const pour obtenir l'élément.

## --- code ---

language: js
filename: scripts.js
line_numbers: false
line_highlights: 9
-------------------------------------------------------

// Variables
var score = 0;
var currentQ = 0;

// Constantes
const scoreTexte = document.querySelector("#scoreTexte");
const questions = document.querySelectorAll(".q-container");
const fullMarks = document.querySelector(".fullMarks");
const retry = document.querySelector(".retry");

\--- /code ---

Ajoute une instruction `else` à `if` ajouté lors de la dernière mise à jour pour afficher le lien de nouvelle tentative `<a>` si la condition n'est **pas** remplie (si l'utilisateur n'a pas obtenu la note maximale).

## --- code ---

language: js
filename: scripts.js
line_numbers: false
line_highlights: 15-17
-----------------------------------------------------------

// Fonction de la question suivante
function nextQ() {
questions[currentQ].classList.add("fade-out");
setTimeout(() => {
if (currentQ < questions.length - 1) {
questions[currentQ].style.display = "none";
currentQ++;
questions[currentQ].classList.add("slide-left");
questions[currentQ].style.display = "block";
} else {
scoreTexte.innerText = `Score final : ${score}`;
scoreTexte.classList.add("glowing");
if (score === questions.length) {
fullMarks.style.display = "block";
} else {
retry.style.display = "block";
}
}
}, "2000");
}

\--- /code ---

**Astuce :** si tu as déjà ajouté l'élément fullMarks, ajoute une instruction `else` à la dernière mise à jour comme indiqué ci-dessus.

Si tu ne l'as pas fait, ajoute-le en tant que `if`, plutôt qu'une instruction `else`.

\--- /collapse ---
