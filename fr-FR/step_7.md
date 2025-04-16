## Question suivante, s'il vous plaît !

Dans cette étape, tu cacheras la question répondue et montreras la prochaine avec une animation !

### Quelle est la question actuelle ?

Tu dois savoir quelle est la question actuelle de la liste `questions`.

Crée une variable pour contenir l'index de la question actuelle.

--- task ---

Crée une variable appelée `currentQ` et définis-la à `0`.

--- code ---
---
language: js
filename: scripts.js
line_numbers: false
line_highlights: 3
---

// Variables
var score = 0;
var currentQ = 0;

--- /code ---

--- /task ---

### Créer la fonction de question suivante

Tu dois créer une fonction qui cachera la question actuelle et montrera la suivante.

--- task ---

Trouve le commentaire `// Vérifier la fonction de réponse`.

Crée une fonction appelée `nextQ`.

--- code ---
---
language: js
filename: scripts.js
line_numbers: false
line_highlights: 2-4
---

// Fonction de la question suivante
function nextQ() {

}

--- /code ---

--- /task ---

Tu n'as besoin que du code de la fonction à exécuter s'il y a encore des questions dans la liste.

--- task ---

Crée une instruction `if` qui vérifie si l'index de la question **actuelle** (`currentQ`) est inférieur au nombre de questions dans la liste `questions`.

--- code ---
---
language: js
filename: scripts.js
line_numbers: false
line_highlights: 3-5
---

// Fonction de la question suivante
function nextQ() {
  if (currentQ < questions.length - 1) {
  
  }

}  

--- /code ---

--- /task ---

### Cacher la question actuelle

S'il reste encore des questions dans la liste, alors tu dois cacher la question actuelle.

--- task ---

Style l'élément de question actuelle afin qu'il soit caché.

--- code ---
---
language: js
filename: scripts.js
line_numbers: false
line_highlights: 4
---

// Fonction de la question suivante
function nextQ() {
  if (currentQ < questions.length - 1) {
    questions[currentQ].style.display = "none";
    
  }

}  

--- /code ---

--- /task ---

### Afficher la question suivante

--- task ---

Augmente la variable `currentQ`.

Affiche la (nouvelle) question actuelle.

--- code ---
---
language: js
filename: scripts.js
line_numbers: false
line_highlights: 5-6
---

// Fonction de la question actuelle
function nextQ() {
  if (currentQ < questions.length - 1) {
    questions[currentQ].style.display = "none";
    currentQ++;
    questions[currentQ].style.display = "block";
  }

}  

--- /code ---

--- /task ---

--- task ---

**Clique sur Run**

- Réponds à la première question
- La question ne change pas !

Tu dois appeler la fonction `nextQ` dans ton code.

--- /task ---

### Appeler la fonction de la question suivante

Appele la fonction `nextQ` si une réponse est correcte ou incorrecte (seulement si une réponse est sélectionnée).

--- task ---

Ajoute l'appel `nextQ()` à ta fonction `checkAnswer`.

--- code ---
---
language: js
filename: scripts.js
line_numbers: false
line_highlights: 14, 17
---

// Vérifier la fonction de réponse
function checkAnswer(question, result) {
  let answer = document.querySelector(`input[name="${question}"]:checked`);
  let qResult = document.querySelector(result);

  qResult.style.display = "block";

  if (answer) {
    document.querySelector("#" + question).disabled = true;
    if (answer.value === "correct") {
      qResult.innerText = "Correct";
      score+=1;
      scoreText.innerText = `Score  s: ${score}`;
      nextQ();
    } else {
      qResult.innerText = "Incorrect";
      nextQ();
    }
  } else {
    qResult.innerText = "Veuillez sélectionner une réponse";
  }

}

--- /code ---

--- /task ---

--- task ---

**Clique sur Run**

- Réponds aux questions.
- La question actuelle sera cachée et la question suivante s'affichera.
- Tu remarqueras que tu ne vois que le div `result` sur la dernière question. Le div de résultat pour les autres questions est également montré, mais trop vite pour que tu puisses le voir.

--- /task ---

### Ralentir

Tu dois ajouter un délai avant que la question actuelle ne se cache, afin que l'utilisateur puisse voir le div `result`.

--- task ---

Ajoute un `setTimeout`.

--- code ---
---
language: js
filename: scripts.js
line_numbers: false
line_highlights: 3, 9
---

// Fonction de la question suivante
function nextQ() {
  setTimeout(() => {
    if (currentQ < questions.length - 1) {
      questions[currentQ].style.display = "none";
      currentQ++;
      questions[currentQ].style.display = "block";
    }
  }, "2000");
} 

--- /code ---

--- /task ---

--- task ---

**Clique sur Run**

- Réponds aux questions
- Il devrait y avoir un délai avant que la question actuelle ne se cache et que la question suivante apparaisse
- Tu remarqueras que tu peux maintenant voir le div `result` pour toutes les questions !

--- /task ---

### Animer les questions avant qu'elles ne se cachent !

Tu peux rendre ton quiz plus intéressant en animant les questions avant qu'elles ne soient cachées.

Il y a une animation `fade-out` dans `style.css` que tu peux utiliser.

--- task ---

Ajoute une animation de fondu à la fonction `nextQ` pour faire disparaître la question actuelle.

--- code ---
---
language: js
filename: scripts.js
line_numbers: false
line_highlights: 3
---

// Fonction de la question suivante
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

--- /code ---

--- /task ---

--- task ---

**Clique sur Run**

- Réponds aux questions
- Les questions disparaîtront !

--- /task ---

### Animer les questions telles qu'elles apparaissent !

**Choisis** l'animation que tu souhaites utiliser.

Il y a cinq animations dans `style.css` que tu peux utiliser :

1. `fade-in` (fondu enchaîné)
2. `grow-in` (apparition progressive)
3. `rise-in` (montée progressive)
4. `slide-left` (glissement vers la gauche)
5. `slide-right` (glissement vers la droite)

--- task ---

Ajoute une animation à la fonction `nextQ` pour faire apparaître les questions dans le style !

--- code ---
---
language: js
filename: scripts.js
line_numbers: false
line_highlights: 8
---

// Fonction de la question suivante
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

--- /code ---

--- /task ---

--- task ---

**Clique sur Run**

- Réponds aux questions
- Les questions s'animeront au fur et à mesure qu'elles apparaîtront !

--- /task ---

### Éviter les problèmes

Tu remarqueras peut-être qu'une question scintille avant qu'elle ne s'anime.

Tu peux arranger ça.

--- task ---

Ouvre `style.css`.

Définis la propriété `opacity` du sélecteur `q-container` à `0`.

--- code ---
---
language: css
filename: style.css
line_numbers: false
line_highlights: 9
---

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

--- /code ---

--- /task ---

--- task ---

Ouvre `scripts.js`.

Définis la propriété `opacity` de la première question à `1`.

--- code ---
---
language: js
filename: scripts.js
line_numbers: false
line_highlights: 3
---

// Afficher la première question
questions[0].style.display = "block";
questions[0].style.opacity = 1;

--- /code ---

--- /task ---

Bien joué ! Tu as créé un quiz interactif génial, il a l’air incroyable !
