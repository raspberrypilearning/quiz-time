var score = 0;
var currentQ = 0;
const questions = document.querySelectorAll(".q-container");
const retry = document.querySelector(".retry");
const fullMarks = document.querySelector(".fullMarks");
const scoreText = document.querySelector("#scoreText");

function checkAnswer(question, correctAnswer, result) {
  let answer = document.querySelector(`input[name="${question}"]:checked`);
  document.querySelector(result).style.display = "block";
  if (answer) {
    document.querySelector("#" + question).disabled = true;
    document.querySelector("#" + question).style.display = "none";
    if (answer.value === correctAnswer) {
      document.querySelector(result).innerText = "Correct";
      score++;
      scoreText.innerText = `Score: ${score}`;
      nextQ();
    } else {
      document.querySelector(result).innerText = "Incorrect";
      nextQ();
    }
  } else {
    document.querySelector(result).innerText = "Please select an answer";
  }
}

function nextQ() {
  questions[currentQ].classList.add("fade-out");
  setTimeout(() => {
    if (currentQ < questions.length - 1) {
      currentQ++;
      questions[currentQ - 1].style.display = "none";
      questions[currentQ].classList.add("slide-left");
      questions[currentQ].style.display = "block";
    } else {
      scoreText.innerText = `Final score: ${score}/${questions.length}`;
      scoreText.classList.add("glowing");
      if (score === questions.length) {
        fullMarks.style.display = "block";
      } else {
        retry.style.display = "block";
      }
    }
  }, "2000");
}

scoreText.classList.remove("glowing");
questions[0].style.display = "block";
questions[0].style.opacity = 1;