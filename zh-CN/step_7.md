## 请回答下一个问题！

在此步骤中，你将隐藏已回答的问题并通过动画显示下一个问题！

### 当前的问题是什么？

你需要知道 `questions` 列表中的当前问题是什么。

创建一个变量来保存当前问题的索引。

--- task ---

创建一个名为 `currentQ` 的变量，并将其设置为 `0`。

--- code ---
---
language: js
filename: scripts.js
line_numbers: false
line_highlights: 3
---

// 变量
var score = 0;
var currentQ = 0;

--- /code ---

--- /task ---

### 创建下一个问题函数

你需要创建一个函数来隐藏当前问题并显示下一个问题。

--- task ---

找到 `// 检查答案函数` 注释。

创建一个名为 `next Q` 的函数。

--- code ---
---
language: js
filename: scripts.js
line_numbers: false
line_highlights: 2-4
---

// 下一个问题函数
function nextQ() {

}

--- /code ---

--- /task ---

如果列表中仍有问题，则仅需要运行函数的代码。

--- task ---

创建一个 `if` 语句，检查 **当前** 问题（`currentQ`）的索引是否比 `questions` 列表中的问题数量少一个。

--- code ---
---
language: js
filename: scripts.js
line_numbers: false
line_highlights: 3-5
---

// 下一个问题函数
function nextQ() {
  if (currentQ < questions.length - 1) {
  
  }

}  

--- /code ---

--- /task ---

### 隐藏当前问题

如果列表中还有剩余问题，则需要隐藏当前问题。

--- task ---

设置当前 question 元素的样式以使其隐藏。

--- code ---
---
language: js
filename: scripts.js
line_numbers: false
line_highlights: 4
---

// 下一个问题函数
function nextQ() {
  if (currentQ < questions.length - 1) {
    questions[currentQ].style.display = "none";
    
  }

}  

--- /code ---

--- /task ---

### 显示下一个问题

--- task ---

增加`currentQ`变量。

显示（新的）当前问题。

--- code ---
---
language: js
filename: scripts.js
line_numbers: false
line_highlights: 5-6
---

// 下一个问题函数
function nextQ() {
  if (currentQ < questions.length - 1) {
    questions[currentQ].style.display = "none";
    currentQ++;
    questions[currentQ].style.display = "block";
  }

}  

--- /code ---

--- /task ---

--- task ---

**点击运行**

- 回答第一个问题
- 这个问题没有变化！

你需要在代码中调用 `next Q` 函数。

--- /task ---

### 调用下一个问题函数

如果答案正确或不正确，调用`nextQ`函数(仅在选择答案时)。

--- task ---

将 `next Q()` 调用添加到您的 `checkAnswer` 函数。

--- code ---
---
language: js
filename: scripts.js
line_numbers: false
line_highlights: 14, 17
---

// 检查答案函数
function checkAnswer(question, result) {
  let answer = document.querySelector(`input[name="${question}"]:checked`);
  let qResult = document.querySelector(result);

  qResult.style.display = "block";

  if (answer) {
    document.querySelector("#" + question).disabled = true;
    if (answer.value === "correct") {
      qResult.innerText = "正确";
      score+=1;
      scoreText.innerText = `分数: ${score}`;
      nextQ();
    } else {
      qResult.innerText = "不正确";
      nextQ();
    }
  } else {
    qResult.innerText = "请选择一个答案";
  }

}

--- /code ---

--- /task ---

--- task ---

**点击运行**

- 回答问题。
- 当前问题将被隐藏，下一个问题将被显示。
- 你会注意到，你只能看到最后一个问题的 `result` div。 其他问题的结果 div 也显示了，但是速度太快，你看不到。

--- /task ---

### 放慢速度

你需要在当前问题隐藏之前添加一个时间延迟，以便用户可以看到`result` div。

--- task ---

添加一个 a `setTimeout`。

--- code ---
---
language: js
filename: scripts.js
line_numbers: false
line_highlights: 3, 9
---

// 下一个问题函数
function nextQ() {
  setTimeout(() => {
    if (currentQ < questions.length - 1) {
      questions[currentQ].style.display = "none";
      currentQ++;
      questions[currentQ].style.display = "block";
    }
  }, "2000");
}

--- /code ---

--- /task ---

--- task ---

**点击运行**

- 回答问题
- 在当前问题和下一个问题显示之前应该有一段延迟。
- 你会注意到你现在可以看到所有问题的 `result` div ！

--- /task ---

### 在问题隐藏之前添加动画效果！

你可以在问题隐藏之前为其添加动画，从而使你的测验更吸引人。

你可以在 `style.css` 中使用 `fade-out` 动画

--- task ---

在 `nextQ` 函数中添加淡出动画以使当前问题消失。

--- code ---
---
language: js
filename: scripts.js
line_numbers: false
line_highlights: 3
---

// 下一个问题函数
function nextQ() {
  questions[currentQ].classList.add("fade-out");
  setTimeout(() => {
    if (currentQ < questions.length - 1) {
      questions[currentQ].style.display = "none";
      currentQ++;
      questions[currentQ].style.display = "block";
    }
  }, "2000");
} 

--- /code ---

--- /task ---

--- task ---

**点击运行**

- 回答问题
- 问题将会淡出！

--- /task ---

### 当问题出现时，为其添加动画效果！

**选择** 你想要使用什么动画。

你可以在 `style.css` 中使用五个动画：

1. `fade-in`
2. `grow-in`
3. `rise-in`
4. `slide-left`
5. `slide-right`

--- task ---

在 `nextQ` 函数中添加动画，让问题以更炫酷的方式显示出来

--- code ---
---
language: js
filename: scripts.js
line_numbers: false
line_highlights: 8
---

// 下一个问题函数
function nextQ() {
  questions[currentQ].classList.add("fade-out");
  setTimeout(() => {
    if (currentQ < questions.length - 1) {
      questions[currentQ].style.display = "none";
      currentQ++;
      questions[currentQ].classList.add("slide-left");
      questions[currentQ].style.display = "block";
    }
  }, "2000");
} 

--- /code ---

--- /task ---

--- task ---

**点击运行**

- 回答问题
- 问题出现时将会以动画形式呈现！

--- /task ---

### 避免故障

你可能会注意到一个问题会在它的动画出现之前闪烁。

你可以解决这个问题。

--- task ---

打开`style.css`。

将 `q-container` 选择器的 `opacity` 属性设置为 `0`。

--- code ---
---
language: css
filename: style.css
line_numbers: false
line_highlights: 9
---

.q-container {
  background-color: var(--background);
  width: 90%;
  max-width: 600px;
  margin: 100px auto 0;
  border-radius: 10px;
  padding: 30px;
  display: none;
  opacity: 0;
}

--- /code ---

--- /task ---

--- task ---

打开 `scripts.js`。

将第一个问题的 `opacity` 属性设置为 `1`。

--- code ---
---
language: js
filename: scripts.js
line_numbers: false
line_highlights: 3
---

// 显示第一个问题
questions[0].style.display = "block";
questions[0].style.opacity = 1;

--- /code ---

--- /task ---

太棒了！ 你已经做了一个很棒的交互式测验 — — 它看起来棒极了！
