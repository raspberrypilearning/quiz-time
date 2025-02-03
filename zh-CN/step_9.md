## 升级你的项目

在此步骤中，你可以通过以下方式升级您的项目：

- 添加更多问题
- 更新标题中的文本以显示最终得分
- 如果用户获得满分，则向用户显示一条消息
- 如果用户没有获得满分，则允许他们重新参加测验
- 添加更多动画

你不必去做所有的事情。 选择你感兴趣并且时间允许的去做。

\--- collapse ---

---

## title: 添加更多问题

你可以按照之前步骤，使用的相同流程来添加更多问题。

再次复制并粘贴问题容器并更改值以创建额外的问题。

你需要：

- 更改问题编号和问题文本
- 更改答案标签以匹配问题
- 更改 input 元素的属性
- 更改结果 div 和按钮的属性
- 更改传递给函数的参数

\--- /collapse ---

\--- collapse ---

---

## title: 更新最后得分 ... 并让它发光！

### 更改 nextQ 函数。

## --- code ---

language: js
filename: scripts.js
line_numbers: false
line_highlights: 10-11
-----------------------------------------------------------

// 下一个问题函数
function nextQ() {
questions[currentQ].classList.add("fade-out");
setTimeout(() => {
if (currentQ < questions.length - 1) {
questions[currentQ].style.display = "none";
currentQ++;
questions[currentQ].classList.add("slide-left");
questions[currentQ].style.display = "block";
} else {
scoreText.innerText = `最终分数: ${score}`;\
}
}, "2000");
}

\--- /code ---

### 让它发光！

## --- code ---

language: js
filename: scripts.js
line_numbers: false
line_highlights: 12
--------------------------------------------------------

// 下一个问题函数
function nextQ() {
questions[currentQ].classList.add("fade-out");
setTimeout(() => {
if (currentQ < questions.length - 1) {
questions[currentQ].style.display = "none";
currentQ++;
questions[currentQ].classList.add("slide-left");
questions[currentQ].style.display = "block";
} else {
scoreText.innerText = `最终分数: ${score}`;
scoreText.classList.add("glowing");
}
}, "2000");
}

\--- /code ---

\--- /collapse ---

\--- collapse ---

---

## title: 如果用户获得满分，则向用户显示一条消息

### 更新 HTML

- 在结果 div 下方添加一个 `<div>` 元素。
- 包含一个祝贺信息。
- 赋予它一个`class`属性，可以使用 JavaScript 显示/隐藏消息。 该示例使用类`fullMarks`。

## --- code ---

language: html
filename:
line_numbers: false
line_highlights: 2
-------------------------------------------------------

```
    <0></0>  
    <1>做的好！全部正确！</1>
    <2>查看答案</2>
```

\--- /code ---

### 更新 JavaScript

添加一个常量来获取元素。

## --- code ---

language: js
filename: scripts.js
line_numbers: false
line_highlights: 8
-------------------------------------------------------

// 变量
var score = 0;
var currentQ = 0;

// 常量
const scoreText = document.querySelector("#scoreText");
const questions = document.querySelectorAll(".q-container");
const fullMarks = document.querySelector(".fullMarks");

\--- /code ---

添加`if`语句来检查最终分数是否与问题数量相符。

本例中，每答对一个问题就奖励一分。

如果每个正确答案授予超过一分，那么你需要将分数除以授予的分数。

## --- code ---

language: js
filename: scripts.js
line_numbers: false
line_highlights: 13-15
-----------------------------------------------------------

// 下一个问题函数
function nextQ() {
questions[currentQ].classList.add("fade-out");
setTimeout(() => {
if (currentQ < questions.length - 1) {
questions[currentQ].style.display = "none";
currentQ++;
questions[currentQ].classList.add("slide-left");
questions[currentQ].style.display = "block";
} else {
scoreText.innerText = `最终分数: ${score}`;
scoreText.classList.add("glowing");
if (score === questions.length) {
fullMarks.style.display = "block";
}
}
}, "2000");
}

\--- /code ---

\--- /collapse ---

\--- collapse ---

---

## title: 如果用户没有获得满分，则允许他们重新参加测验

### 更新 HTML

- 在结果 div 下方添加一个 `<a>` 元素。
- 使用`href`属性包含指向`index.html`的链接。
- 赋予它一个`class`属性，可以使用 JavaScript 显示/隐藏链接。 该示例使用`retry`类（CSS 样式已在`style.css`中提供）。

## --- code ---

language: html
filename:
line_numbers: false
line_highlights: 3
-------------------------------------------------------

```
    <div class="result" id="result3"></div>  
    <div class="fullMarks">做得好！全部正确！</div>
    <a class="retry" href="index.html">再试一次！</a>
    <button id="q3" onclick="checkAnswer('q3', '#result3')">查看答案</button>
```

\--- /code ---

### 更新 JavaScript

添加一个常量来获取元素。

## --- code ---

language: js
filename: scripts.js
line_numbers: false
line_highlights: 9
-------------------------------------------------------

// 变量
var score = 0;
var currentQ = 0;

// 常量
const scoreText = document.querySelector("#scoreText");
const questions = document.querySelectorAll(".q-container");
const fullMarks = document.querySelector(".fullMarks");
const retry = document.querySelector(".retry");

\--- /code ---

在上次升级中添加的 `if` 中再添加一个 `else` 语句，当条件**不**满足时（如果用户没有获得满分），显示重试 `<0>` 链接。

## --- code ---

language: js
filename: scripts.js
line_numbers: false
line_highlights: 15-17
-----------------------------------------------------------

// 下一个问题函数
function nextQ() {
questions[currentQ].classList.add("fade-out");
setTimeout(() => {
if (currentQ < questions.length - 1) {
questions[currentQ].style.display = "none";
currentQ++;
questions[currentQ].classList.add("slide-left");
questions[currentQ].style.display = "block";
} else {
scoreText.innerText = `最终分数: ${score}`;
scoreText.classList.add("glowing");
if (score === questions.length) {
fullMarks.style.display = "block";
} else {
retry.style.display = "block";
}
}
}, "2000");
}

\--- /code ---

**提示：** 如果您已经添加了 fullMarks 元素，则在上次升级中添加的 `if` 中添加一个 `else` 语句，如上所示。

如果还没有，请将其添加为`if`，而不是`else`语句。

\--- /collapse ---
