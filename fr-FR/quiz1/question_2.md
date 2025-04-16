--- question ---

---
legend: Question 2 sur 3
---

Voici du JavaScript que tu as utilisé dans ton projet.


    function checkAnswer(question, resultat) {

    }

Voici du code HTML que tu as utilisé avec JavaScript.

    <button id="q1" onclick="checkAnswer('q1', '#result1')">Vérifier la réponse</button>

Lequel de ces éléments est un argument passé au paramètre `question` ?

--- choices ---

- ( ) `id="q1"`

  --- feedback ---

  Pas tout à fait ! L'attribut `id` de l'élément bouton est utilisé pour le modifier plus tard.

  --- /feedback ---

- (x) `'q1'`

  --- feedback ---

  Correct ! Quand la fonction s'exécute, elle utilise le paramètre `question` pour faire référence à la première valeur passée en tant qu'argument (ici, `q1`). Le deuxième argument est `#result1`, qui est passé au paramètre `result`.

  --- /feedback ---

- ( ) `checkAnswer`

  --- feedback ---

  Pas tout à fait ! `checkAnswer` est le nom de la fonction qui gère l'événement `onclick` du bouton.

  --- /feedback ---

--- /choices ---

--- /question ---
