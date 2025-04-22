// 变量
var score = 0;
var currentQ = 0;

// 常量
const scoreText = document.querySelector('#scoreText');
const questions = document.querySelectorAll('.q-container');
const fullMarks = document.querySelector('.fullMarks');
const retry = document.querySelector('.retry');

// 检查答案的函数
function checkAnswer(question, result) {
  let answer = document.querySelector(`input[name="${question}"]:checked`);
  let qResult = document.querySelector(result);
  qResult.style.display = 'block';
  if (answer) {
    document.querySelector('#' + question).disabled = true;
    if (answer.value === 'correct') {
      qResult.innerText = '正确';
      score += 1;
      scoreText.innerText = `分数：${score}`;
      nextQ();
    } else {
      qResult.innerText = '不正确';
      nextQ();
    }
  } else {
    qResult.innerText = '请选择一个答案';
  }
}

// 下一个问题的函数
function nextQ() {
  questions[currentQ].classList.add('fade-out');
  setTimeout(() => {
    if (currentQ < questions.length - 1) {
      questions[currentQ].style.display = 'none';
      currentQ++;
      questions[currentQ].classList.add('slide-left');
      questions[currentQ].style.display = 'block';
    } else {
      scoreText.innerText = `最终分数：${score}/${questions.length}`;
      scoreText.classList.add('glowing');
      if (score === questions.length) {
        fullMarks.style.display = 'block';
      } else {
        retry.style.display = 'block';
      }
    }
  }, '2000');
}

// 显示第一个问题
questions[0].style.display = 'block';
questions[0].style.opacity = 1;
