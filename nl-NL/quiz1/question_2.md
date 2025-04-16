--- question ---

---
legend: Vraag 2 van 3
---

Hier is wat JavaScript dat je hebt gebruikt in je project.


    function checkAnswer(question, result) {

    }

Hier is wat HTML die je met het JavaScript hebt gebruikt.

    <button id="q1" onclick="checkAnswer('q1', '#result1')">Controleer antwoord</button>

Welke van deze antwoorden is een argument dat is doorgegeven aan de parameter `question`?

--- choices ---

- ( ) `id="q1"`

  --- feedback ---

  Niet helemaal! Het `id` attribuut van het knop element wordt gebruikt om het later te wijzigen.

  --- /feedback ---

- (x) `'q1'`

  --- feedback ---

  Juist! Wanneer de functie wordt uitgevoerd, gebruikt deze de parameter `question` om te verwijzen naar de eerste waarde die als argument wordt doorgegeven (in dit geval `q1`). Het tweede argument is `#result1`, dat wordt doorgegeven aan de parameter `result`.

  --- /feedback ---

- ( ) `checkAnswer`

  --- feedback ---

  Niet helemaal! `checkAnswer` is de naam van de functie die de `onclick`-gebeurtenis van de knop afhandelt.

  --- /feedback ---

--- /choices ---

--- /question ---
