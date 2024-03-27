## Upgrade your project

In this step you can upgrade your project by:
+ Adding more questions
+ Updating the text in the header to show the final score
+ Showing the user a message if they get full marks
+ Letting the user retake the quiz if they don't get full marks
+ Adding more animations

You don't have to do all these things. Choose whichever appeals to you and fits the time you have.

--- collapse ---

---
title: Add more questions
---

You can go through the same process you used in an earlier step to add more questions.

Copy and paste the question container again and change the values to create your extra questions.

You need to:
+ Change the question number and question text
+ Change the answer labels to match the question
+ Change the attributes for the input elements
+ Change the attributes for the result div and button
+ Change the arguments passed to the function

--- /collapse ---

--- collapse ---

---
title: Update the final score ... and make it glow!
---

You will need to change `nextQ` function.

--- code ---
---
language: js
filename: scripts.js
line_numbers: false
line_highlights: 10-11
---

// Next question function
function nextQ() {
  questions[currentQ].classList.add("fade-out");
  setTimeout(() => {
    if (currentQ < questions.length - 1) {
      questions[currentQ].style.display = "none";
      currentQ++;
      questions[currentQ].classList.add("slide-left");
      questions[currentQ].style.display = "block";
    } else {
      scoreText.innerText = `Final score: ${score}`;  
    }
  }, "2000");
}

--- /code ---

Make it glow!

--- code ---
---
language: js
filename: scripts.js
line_numbers: false
line_highlights: 12
---

// Next question function
function nextQ() {
  questions[currentQ].classList.add("fade-out");
  setTimeout(() => {
    if (currentQ < questions.length - 1) {
      questions[currentQ].style.display = "none";
      currentQ++;
      questions[currentQ].classList.add("slide-left");
      questions[currentQ].style.display = "block";
    } else {
      scoreText.innerText = `Final score: ${score}`;
      scoreText.classList.add("glowing");
    }
  }, "2000");
}

--- /code ---

--- /collapse ---

--- collapse ---

---
title: Show the user a message if they get full marks
---

**TODO** Pete to finish later

Update HTML

Add a const to get the element

Add an `if` statement to check the final score.

--- /collapse ---

--- collapse ---

---
title: Let the user retake the quiz if they don't get full marks
---

**TODO** Pete to finish later

Update HTML

Add a const to get the element

Add an `else` statement to the `if` added in the last collapse.

--- /collapse ---