## Vérifier la réponse

Dans cette étape, tu vas créer une fonction pour vérifier la réponse de l'utilisateur et lui faire savoir s'il a eu raison !

Le projet de démarrage a déjà un fichier `scripts.js` qui contient des constantes.

### Créer la fonction VerifierReponse

Ensuite, tu dois créer une fonction qui gérera l'événement `onclick` du bouton.

--- task ---

Ouvre `scripts.js`.

Trouve le commentaire `// Vérifier la fonction de réponse`.

Crée une fonction appelée `VerifierReponse`.

Elle doit avoir deux paramètres `question` et `result`.

--- code ---
---
language: javascript
filename: scripts.js
line_numbers: false
line_highlights: 2-4
---

// Vérifier la fonction de réponse
function checkAnswer(question, result) {

}

--- /code ---

--- collapse ---

---
title: Qu'est-ce qu'un paramètre ?
---

### Voici le code HTML pour le bouton :

- `<button id="q1" onclick="checkAnswer('q1', '#result1')">Vérifier la réponse</button>`

Il contient cet appel de fonction :

- `checkAnswer('q1', '#result1')`

L'appel de fonction contient deux arguments qu'il transmet à la fonction `checkAnswer`.

### Voici la fonction VerifierReponse

- `function checkAnswer(question, result)`

Elle a deux paramètres `question` et `result`.

Lors de l'exécution de la fonction, le mot `question` est utilisé pour désigner la première valeur passée en argument (ici, `q1`), tandis que le mot `result` fait référence à la seconde valeur passée en argument (ici, `#result`).

De cette façon, la fonction peut être appelée avec des valeurs différentes comme arguments et les utiliser dans son code.

--- /collapse ---

--- /task ---

### Trouver l'option sélectionnée

Tu dois savoir quelle option de bouton radio l'utilisateur a sélectionné pour vérifier si c'est correct.

Tu peux obtenir l'option sélectionnée en utilisant la pseudo-classe `:checked` dans un querySelector.

--- task ---

Crée la variable `answer` et définis-la sur le bouton radio sélectionné dans le groupe `name` qui a la même valeur que celle passée au paramètre `question` (ici : `q1`) :

`onclick="checkAnswer('q1', '#result1')`

--- code ---
---
language: javascript
filename: scripts.js
line_numbers: false
line_highlights: 3
---

// Vérifier la fonction de réponse
function checkAnswer(question, result) {
  let answer = document.querySelector(`input[name="${question}"]:checked`);

}

--- /code ---

--- /task ---

### Le div de résultat

Tu peux mettre à jour le texte dans le `<div>` de résultat de cette question parce qu'elle possède un attribut `id` qui est unique à cette question (ici : `#result1`).

Cette valeur unique est le deuxième argument passé à la fonction par l'événement `onclick` du bouton.

`onclick="checkAnswer('q1', '#result1')`

--- task ---

Définis la variable `qResult` comme étant le `<div>` de résultat de cette question.

--- code ---
---
language: javascript
filename: scripts.js
line_numbers: false
line_highlights: 4
---

// Vérifier la fonction de réponse
function checkAnswer(question, result) {
  let answer = document.querySelector(`input[name="${question}"]:checked`);
  let qResult = document.querySelector(result);

}

--- /code ---

--- /task ---

Le style pour le div de résultat signifie qu'il est caché.

--- collapse ---

---
title: Montre-moi le style du div 'resultat'
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

Affiche le `<div>` de résultat.

--- code ---
---
language: javascript
filename: scripts.js
line_numbers: false
line_highlights: 6
---

// Vérifier la fonction de réponse
function checkAnswer(question, result) {
  let answer = document.querySelector(`input[name="${question}"]:checked`);
  let qResultat = document.querySelector(result);

  qResult.style.display = "block";

}

--- /code ---

--- /task ---

### Afficher l'utilisateur si la réponse sélectionnée est correcte

--- task ---

Vérifie si la réponse sélectionnée est correcte.

Si elle **est** correcte, mets à jour le texte du div de résultat pour afficher 'Correct'.
Si elle **n'est pas** correcte, mets à jour le texte du div de résultat pour afficher 'Incorrect'.

Tu peux **choisir** d'autres messages pour des réponses correctes et incorrectes.

--- code ---
---
language: javascript
filename: scripts.js
line_numbers: false
line_highlights: 8-12
---

// Vérifier la fonction de réponse
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

**Clique sur Run**

- Sélectionne la bonne réponse et clique sur le bouton 'Vérifier la réponse'
- Tu devrais voir l'affichage du div de résultat 'Correct'

**Clique sur Run**

- Sélectionne une réponse différente et clique sur le bouton 'Vérifier la réponse'
- Tu devrais voir l'affichage du div de résultat 'Incorrect'

**Clique sur Run**

- Sélectionne l'autre réponse incorrecte et clique sur le bouton 'Vérifier la réponse'
- Tu devrais voir l'affichage du div de résultat 'Incorrect'

--- /task ---

### Que se passe-t-il si l'utilisateur ne sélectionne pas de réponse ?

Tu dois seulement exécuter la vérification si l'utilisateur a fait une sélection.

Si aucune réponse n'est sélectionnée, tu peux ajouter un message de rappel utile !

--- task ---

Vérifie s'il y a une réponse sélectionnée pour cette question.

Affiche un message de résultat s'il y en a.

Si ce n'est pas le cas, **choisis** un message utile à afficher.

--- code ---
---
language: javascript
filename: scripts.js
line_numbers: false
line_highlights: 8, 13-15
---

// Vérifier la fonction de réponse
function checkAnswer(question, result) {
  let answer = document.querySelector(`input[name="${question}"]:checked`);
  let qResult = document.querySelector(result);
  
  qResult.style.display = "block";
  
  if (answer) {
    if (answer.value === "correct") {
      qResult.innerText = "Correct";
    } else {
      qResult.innerText = "Incorrect";
    }
  } else {
    qResult.innerText = "Veuillez sélectionner une réponse";
  }

}

--- /code ---

--- /task ---

--- task ---

**Clique sur Run**

- Ne sélectionne **pas** une réponse
- Clique sur le bouton « Vérifier la réponse »
- Tu devrais voir l'affichage du div de résultat « Veuillez sélectionner une réponse »

--- /task ---

**Débogage**
Assure-toi d'avoir ajouté le `if (answer) {` à la ligne 8 et mis à jour les lignes 13-15 avec l'instruction `else` (et indenté le code pour inclure ces ajouts).

Excellent travail ! Tu as créé une question interactive !

Ensuite, tu vas créer d’autres questions !
