// Variabelen
var score = 0;
var currentQ = 0;

// Constanten
const scoreText = document.querySelector('#scoreText');
const questions = document.querySelectorAll('.q-container');

// Antwoord controleren functie
function checkAnswer(question, result) {
  let answer = document.querySelector(`input[name="${question}"]:checked`);
  let qResult = document.querySelector(result);
  qResult.style.display = 'block';
  if (answer) {
    document.querySelector('#' + question).disabled = true;
    if (answer.value === 'correct') {
      qResult.innerText = 'Juistt';
      score += 1;
      console.log(score);
      scoreText.innerText = `Score: ${score}`;
      nextQ();
    } else {
      qResult.innerText = 'Onjuist';
      nextQ();
    }
  } else {
    qResult.innerText = 'Kies aub een antwoord';
  }
}

// Volgende vraag functie
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

// Eerste vraag weergeven
questions[0].style.display = 'block';
questions[0].style.opacity = 1;
