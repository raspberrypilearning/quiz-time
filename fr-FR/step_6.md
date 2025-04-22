## Afficher une à la fois

Dans cette étape, tu cacheras toutes les questions afin qu'elles ne soient affichées que quand elles sont nécessaires.

### Cacher toutes les questions

Tu dois faire apparaître chaque question quand elle est nécessaire.

Premièrement, tu dois toutes les cacher.

--- task ---

Ouvre `style.css`.

Modifie le style du sélecteur `.q-container` pour cacher tous les conteneurs de question.

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

**Clique sur Run**

- Toutes tes questions auraient dû disparaître !

Ne t'inquiète pas, tu vas les faire réapparaître !

--- /task ---

### Obtenir une liste de toutes les questions

Tu dois pouvoir accéder à chaque question.

--- task ---

Ouvre `scripts.js`.

Créer une constante pour contenir une liste de tous les conteneurs de questions.

--- code ---
---
language: js
filename: scripts.js
line_numbers: false
line_highlights: 3
---

// Constantes
const scoreText = document.querySelector("#scoreText");
const questions = document.querySelectorAll(".q-container");

--- /code ---

--- /task ---

### Afficher la première question

Le premier élément de ta liste est à l'index `0`.

--- task ---

Trouve le commentaire `// Afficher la première question`.

Affiche la première question.

--- code ---
---
language: js
filename: scripts.js
line_numbers: false
line_highlights: 2
---

// Afficher la première question
questions[0].style.display = "block";

--- /code ---

--- /task ---

--- task ---

**Clique sur Run**

- Ta première question devrait réapparaître !
- Sélectionne une réponse et clique sur le bouton Vérifier la réponse
- Essaie ceci plusieurs fois avec d'autres réponses

--- /task ---

Ensuite, tu dois cacher cette question et montrer la suivante !
