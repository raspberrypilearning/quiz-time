// Variables
var score = 0;

// Constants
const scoreText = document.querySelector("#scoreText");

// Check answer function
function checkAnswer(question, result) {
  let answer = document.querySelector(`input[name="${question}"]:checked`);
  let qResult = document.querySelector(result);
  
  qResult.style.display = "block";
  
  if (answer) {
    if (answer.value === "correct") {
      qResult.innerText = "Correct";
      score+=1;
      scoreText.innerText = `Score: ${score}`;
    } else {
      qResult.innerText = "Incorrect";
    }
  } else {
    qResult.innerText = "Please select an answer";
  }

}

// Next question function


// Display first question