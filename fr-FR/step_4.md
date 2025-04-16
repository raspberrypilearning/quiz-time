## Ajouter d'autres questions

Dans cette étape, tu ajouteras encore deux questions.

### Copier le conteneur de question

--- task ---

Ouvre `index.html`.

Sélectionne et copie (<kbd>Ctrl</kbd>+<kbd>C</kbd> ou <kbd>Cmd</kbd>+<kbd>C</kbd>) le `<div>` avec la classe `q-container` .

--- collapse ---

---
title: Montre-moi le conteneur de questions div
---

--- code ---
---
language: html
filename: index.html
line_numbers: false
---

  <div class="q-container">
    <h1>Question 1</h1>
    <h2>Quelle est la plus grande espèce de félin vivant ?</h2>

    <input type="radio" name="q1" value="correct" id="q1a1">
    <label for="q1a1">Tigre</label><br>
    
    <input type="radio" name="q1" value="" id="q1a2">
    <label for="q1a2">Guépard</label><br>
    
    <input type="radio" name="q1" value="" id="q1a3">
    <label for="q1a3">Lion</label><br>

    <div class="result" id="result1"></div>
    <button id="q1" onclick="checkAnswer('q1', '#result1')">Vérifier la réponse</button>
  </div>

--- /code ---

--- /collapse ---

--- /task ---

--- task ---

Colle (<kbd>Ctrl</kbd>+<kbd>V</kbd> ou <kbd>Cmd</kbd>+<kbd>V</kbd>) le conteneur de question en dessous.

--- collapse ---

---
title: À quoi devrait ressembler mon code ?
---

--- code ---
---
language: html
filename: index.html
line_numbers: false
line_highlights: 18-33
---

  <div class="q-container">
    <h1>Question 1</h1>
    <h2>Quelle est la plus grande espèce de félin vivant ?</h2>

    <input type="radio" name="q1" value="correct" id="q1a1">
    <label for="q1a1">Tigre</label><br>
    
    <input type="radio" name="q1" value="" id="q1a2">
    <label for="q1a2">Guépard</label><br>
    
    <input type="radio" name="q1" value="" id="q1a3">
    <label for="q1a3">Lion</label><br>

    <div class="result" id="result1"></div>
    <button id="q1" onclick="checkAnswer('q1', '#result1')">Vérifier la réponse</button>
  </div>

  <div class="q-container">
    <h1>Question 1</h1>
    <h2>Quelle est la plus grande espèce de félin vivant ?</h2>

    <input type="radio" name="q1" value="correct" id="q1a1">
    <label for="q1a1">Tigre</label><br>
    
    <input type="radio" name="q1" value="" id="q1a2">
    <label for="q1a2">Guépard</label><br>
    
    <input type="radio" name="q1" value="" id="q1a3">
    <label for="q1a3">Lion</label><br>

    <div class="result" id="result1"></div>
    <button id="q1" onclick="checkAnswer('q1', '#result1')">Vérifier la réponse</button>
  </div>


--- /code ---

--- /collapse ---

--- /task ---

### Créer une deuxième question

**Choisis** une deuxième question sur ton sujet.

Modifie le numéro de la question et le texte de la question.

--- task ---

Modifie :

- `<h1>` à la question 2
- `<h2>`à [Choisis ta nouvelle question]

--- /task ---

**Choisis** les réponses et modifie les labels de réponse pour correspondre à la question.

--- task ---

Modifie :

- Le contenu textuel de chaque `<label>`, tu as donc une réponse correcte et deux réponses incorrectes
- L'attribut `for` de chaque label fait référence à q2, au lieu de q1

--- /task ---

Modifie les attributs des éléments d'entrée.

--- task ---

Modifie :

- L'attribut `name` de chaque élément `<input>` à `q2`
- L'attribut `value` de chaque élément `<input>` à `correct` (ou laisse-le vide s'il s'agit d'une réponse incorrecte)
- L'attribut `id` de chaque élément `<input>` doit correspondre à l'attribut `for` de son label

--- /task ---

Modifie les attributs du div de résultat et du bouton.

--- task ---

Modifie :

- L'attribut `id` du div `result` à `result2`
- L'attribut `id` du bouton à `q2`

--- /task ---

Modifie les arguments passés à la fonction.

--- task ---

Modifie :

- Les arguments passés par l'événement `onclick` à la fonction (`q2` et `#result2`)

--- collapse ---

---
title: À quoi devrait ressembler mon code ?
---

--- code ---
---
language: html
filename: index.html
line_numbers: false
line_highlights: 19-32
---


  <div class="q-container">
    <h1>Question 1</h1>
    <h2>Quelle est la plus grande espèce de félin vivant ?</h2>

    <input type="radio" name="q1" value="correct" id="q1a1">
    <label for="q1a1">Tigre</label><br>
    
    <input type="radio" name="q1" value="" id="q1a2">
    <label for="q1a2">Guépard</label><br>
    
    <input type="radio" name="q1" value="" id="q1a3">
    <label for="q1a3">Lion</label><br>

    <div class="result" id="result1"></div>
    <button id="q1" onclick="checkAnswer('q1', '#result1')">Vérifier la réponse</button>
  </div>

  <div class="q-container">
    <h1>Question 2</h1>
    <h2>Quel oiseau est connu pour sa capacité à copier la parole humaine ?</h2>

    <input type="radio" name="q2" value="" id="q2a1">
    <label for="q2a1">Moineau</label><br>
    
    <input type="radio" name="q2" value="" id="q2a2">
    <label for="q2a2">Pigeon</label><br>
    
    <input type="radio" name="q2" value="correct" id="q2a3">
    <label for="q2a3">Perroquet</label><br>

    <div class="result" id="result2"></div>  
    <button id="q2" onclick="checkAnswer('q2', '#result2')">Vérifier la réponse</button>
  </div>


--- /code ---

--- /collapse ---

--- /task ---

### Créer une troisième question

Ty peux répéter le même processus pour la troisième question.

--- task ---

Copie et colle à nouveau le conteneur de question et modifie les valeurs pour créer ta troisième question.

Tu dois :

- Modifier le numéro de la question et le texte de la question
- Modifier les labels de réponse pour qu'elles correspondent à la question
- Modifier les attributs des éléments d'entrée
- Modifier les attributs pour le div de résultat et le bouton
- Modifier les arguments passés à la fonction

--- collapse ---

---
title: À quoi devrait ressembler mon code ?
---

--- code ---
---
language: html
filename: index.html
line_numbers: false
line_highlights: 35-49
---


  <div class="q-container">
    <h1>Question 1</h1>
    <h2>Quelle est la plus grande espèce de félin vivant ?</h2>

    <input type="radio" name="q1" value="correct" id="q1a1">
    <label for="q1a1">Tigre</label><br>
    
    <input type="radio" name="q1" value="" id="q1a2">
    <label for="q1a2">Guépard</label><br>
    
    <input type="radio" name="q1" value="" id="q1a3">
    <label for="q1a3">Lion</label><br>

    <div class="result" id="result1"></div>
    <button id="q1" onclick="checkAnswer('q1', '#result1')">Vérifier la réponse</button>
  </div>

  <div class="q-container">
    <h1>Question 2</h1>
    <h2>Quel oiseau est connu pour sa capacité à imiter la parole humaine ?</h2>

    <input type="radio" name="q2" value="" id="q2a1">
    <label for="q2a1">Moineau</label><br>
    
    <input type="radio" name="q2" value="" id="q2a2">
    <label for="q2a2">Pigeon</label><br>
    
    <input type="radio" name="q2" value="correct" id="q2a3">
    <label for="q2a3">Perroquet</label><br>

    <div class="result" id="result2"></div>  
    <button id="q2" onclick="checkAnswer('q2', '#result2')">Vérifier la réponse</button>
  </div>

  <div class="q-container">
    <h1>Question 3</h1>
    <h2>Quel animal est connu pour ses rayures noires et blanches distinctives ?</h2>

    <input type="radio" name="q3" value="" id="q3a1">
    <label for="q3a1">Hippopotame</label><br>
    
    <input type="radio" name="q3" value="" id="q3a2">
    <label for="q3a2">Girafe</label><br>
    
    <input type="radio" name="q3" value="correct" id="q3a3">
    <label for="q3a3">Zèbre</label><br>

    <div class="result" id="result3"></div>
    <button id="q3" onclick="checkAnswer('q3', '#result3')">Vérifier la réponse</button>
  </div>


--- /code ---

--- /collapse ---

--- /task ---

--- task ---

**Clique sur Run**

- Réponds à tes questions, clique sur le bouton « Vérifier la réponse » et regarde le résultat se mettre à jour !

--- /task ---

--- task ---

- Sélectionne une réponse différente et clique sur le bouton « Vérifier la réponse ».
- Le résultat sera mis à jour si tu modifies pour une réponse correcte ou incorrecte !

--- /task ---

Tu empêcheras que cela se reproduise plus tard.

Ensuite, tu laisseras l'utilisateur marquer des points pour une réponse correcte !
