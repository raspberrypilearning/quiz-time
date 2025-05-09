// Variables
var score = 0;
var currentQ = 0;

// Constantes
const scoreText = document.querySelector('#scoreText');
const questions = document.querySelectorAll('.q-container');

// // Vérifier la fonction de réponse
function checkAnswer(question, result){
  let answer = document.querySelector(`input[name="${question}"]:checked`);
  let qResult = document.querySelector(result);
  qResult.style.display = 'block';
  if (answer){
    document.querySelector('#' + question).disabled = true;
    if (answer.value === 'correct') {
      qResult.innerText = 'Well done Sempai';
      score += 1;
      console.log(score);
      scoreText.innerText = `Score: ${score}`;
      nextQ();
    }
    else {
      qResult.innerText = 'Better luck next time Sempai';
      nextQ();
    }
  }
  else {
    qResult.innerText = 'Please select an answer';
  }
}

// // Fonction de la question suivante
function nextQ() {
  questions[currentQ].classList.add('fade-out');
  setTimeout(() => {
    if (currentQ < questions.length - 1) {
      questions[currentQ].style.display = 'none';
      currentQ++;
      questions[currentQ].classList.add('grow-in');
      questions[currentQ].style.display = 'block';
    }
  }, '2000');
}

// Afficher la première question
questions[0].style.display = 'block';
questions[0].style.opacity = 1;
