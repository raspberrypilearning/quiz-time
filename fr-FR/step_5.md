## Marquer des points

Dans cette étape, tu laisseras l'utilisateur marquer des points pour une réponse correcte !

### Ajouter le score à l'en-tête

\--- task ---

Ouvre `index.html`.

Ajoute un nouvel élément span à l'en-tête.

Donne-lui les attributs `id="scoreText"` et `class="sitename"`.

Inclus le texte `Score : 0`, afin que l’utilisateur démarre avec un score de 0.

## --- code ---

language: html
filename: index.html
line_numbers: false
line_highlights: 3
-------------------------------------------------------

```
<header class="header">
  <span class="sitename">Quiz sur la faune</span>
  <span id="scoreText" class="sitename">Score : 0</span>
</header>
```

\--- /code ---

\--- /task ---

### Mettre à jour le score

Lorsque l'utilisateur sélectionne la bonne réponse, ta fonction doit mettre à jour le score dans l'en-tête.

\--- task ---

Ouvre `scripts.js`.

Crée une variable appelée `score` et définis-la à `0`.

## --- code ---

language: js
filename: scripts.js
line_numbers: false
line_highlights: 2
-------------------------------------------------------

// Variables
var score = 0;

\--- /code ---

\--- /task ---

**Choisis** combien de points donner pour une réponse correcte.

Augmente le score si la réponse est correcte.

L'exemple ajoute 1 au score.

\--- task ---

Mets à jour la variable de score si la réponse est correcte.

## --- code ---

language: js
filename: scripts.js
line_numbers: false
line_highlights: 4
-------------------------------------------------------

if (reponse) {
if (reponse.value === "correct") {
qResultat.innerText = "Correct";
score+=1;
} else {
qResultat.innerText = "Incorrect";
}
} else {
qResultat.innerText = "Veuillez sélectionner une réponse";
}

\--- /code ---

\--- /task ---

### Mettre à jour le score dans l'en-tête

Tu dois montrer à l'utilisateur son score.

\--- task ---

Crée une constante appelée `scoreTexte` et utilise un `querySelector` pour la définir sur l'élément span dans l'en-tête contenant le score.

## --- code ---

language: js
filename: scripts.js
line_numbers: false
line_highlights: 2
-------------------------------------------------------

// Constantes
const scoreTexte = document.querySelector("#scoreTexte");

\--- /code ---

\--- /task ---

Modifie le contenu du texte de la plage pour qu'il corresponde au nouveau score.

\--- task ---

Mets à jour le contenu du texte de la plage.

Remarque : \`\`\` `Score : ${score}` `utilise des guillemets obliques` ` `` au lieu de `" "`ou`''\`.

## --- code ---

language: js
filename: scripts.js
line_numbers: false
line_highlights: 5
-------------------------------------------------------

if (reponse) {
if (reponse.value === "correct") {
qResultat.innerText = "Correct";
score+=1;
scoreTexte.innerText = `Score: ${score}`;
} else {
qResultat.innerText = "Incorrect";
}
} else {
qResultat.innerText = "Veuillez sélectionner une réponse";
}

\--- /code ---

\--- /task ---

\--- task ---

**Clique sur Run**

- Réponds à tes questions, clique sur les boutons « Vérifier la réponse » et regarde le score dans l'en-tête se mettre à jour !

\--- /task ---

Il y a un problème !

Si l'utilisateur sélectionne la bonne réponse, il peut continuer à cliquer sur Vérifier la réponse et le score augmentera à chaque fois.

\--- task ---

**Essaie-le**

- Sélectionne la bonne réponse
- Clique sur le bouton « Vérifier la réponse »
- Clique dessus encore quelques fois et regarde le score augmenter à chaque fois !

\--- /task ---

### Stop à la tricherie !

Tu dois empêcher l'utilisateur de tricher en cliquant sur le bouton plus d'une fois.

Tu peux désactiver un bouton en utilisant la méthode `.disabled`.

\--- task ---

Ajoute une ligne de code qui désactive le bouton lorsque l'utilisateur sélectionne une option et clique sur le bouton Vérifier la réponse.

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

**Remarque :** cela ne désactivera pas le bouton si l'utilisateur n'a pas sélectionné de réponse.

**Remarque :** le `querySelector` utilise la concaténation pour joindre le caractère `#` à la valeur de `question` est passé comme argument dans l'événement `onclick` du bouton. Cela cible l'élément spécifique du bouton.

\--- /task ---

\--- task ---

**Clique sur Run**

- Sélectionne une bonne réponse et clique sur le bouton « Vérifier la réponse ».
- Clique à nouveau sur le bouton. Cela ne devrait pas fonctionner.

\--- /task ---

Tu peux changer le style de ton bouton pour qu'il ait une couleur différente.

Tu peux également le cacher ou modifier le texte.

Dans ce projet, tu vas cacher toute la question et faire apparaître la suivante avec une animation !
