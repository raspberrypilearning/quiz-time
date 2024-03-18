var score = 0;
function checkAnswer(question, correctAnswer, result) {
  let answer = document.querySelector(`input[name="${question}"]:checked`);
  document.querySelector(result).style.display = "block";
  if (answer) {
    document.querySelector("#" + question).disabled = true;
    document.querySelector("#" + question).style.display = "none";
    if (answer.value === correctAnswer) {
      document.querySelector(result).innerText = "Correct";
      score++;
      document.querySelector("#scoreText").innerText = `Score: ${score}`;
    } else {
      document.querySelector(result).innerText = "Incorrect";
    }
  } else {
    document.querySelector(result).innerText = "Please select an answer";
  }
}
