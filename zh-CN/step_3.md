## 检查答案

在此步骤中，你将创建一个函数来检查用户的答案，并让他们知道他们的答案是否正确！

在初始项目已经有一个包含常量的 `scripts.js` 文件。

### 创建 checkAnswer 函数

接下来，你需要创建一个函数来处理按钮的 `onclick` 事件。

\--- task ---

打开 `scripts.js`。

找到 `// 检查答案函数` 注释。

创建一个名为 `checkAnswer` 的函数。

它应该有两个参数 `question` 和 `result`。

## --- code ---

language: javascript
filename: scripts.js
line_numbers: false
line_highlights: 2-4
---------------------------------------------------------

// 检查答案函数
function checkAnswer(question, result) {

}

\--- /code ---

\--- collapse ---

---

## title: 什么是参数？

### 以下是该按钮的 HTML：

- `<button id="q1" onclick="checkAnswer('q1', '#result1')">检查答案</button>`

它包含以下函数调用：

- `checkAnswer('q1', '#result1')`

函数调用包含两个参数，它传递到 "checkAnswer" 函数。

### 这是 checkAnswer 函数

- `function checkAnswer(question, result)`

它有两个参数 `question` 和 `result` 。

当函数执行时，会把传入的第一个参数称作 `question`（这里指的是 `q1`），而传入的第二个参数则被称作 `result`（这里指的是 `#result`）。

这样，可以使用不同的值作为参数来调用该函数，并在其代码中使用它们。

\---/collapse ---

\--- /task ---

### 找到所选选项

你需要知道用户选择了哪个单选按钮选项来检查它是否正确。

你可以在 querySelector 中使用 `:checed` 伪类获取选中的选项。

\--- task ---

创建变量 `answer` 并将其设置为 `name` 组中选中的单选按钮，该单选按钮具有与传递给 `question` 参数相同的值（在本例中为“q1”）：

`onclick="checkAnswer('q1', '#result1')`

## --- code ---

language: javascript
filename: scripts.js
line_numbers: false
line_highlights: 3
-------------------------------------------------------

// 检查答案函数
function checkAnswer(question, result) {
let answer = document.querySelector(`input[name="${question}"]:checked`);

}

\--- /code ---

\--- /task ---

### 结果 div

你可以更新这个问题的结果 `<div>` 中的文本，因为它有一个唯一的 `id` 属性(在这种情况下：`#result1`)。

这个唯一值是按钮的 `onclick` 事件传递给函数的第二个参数。

`onclick="checkAnswer('q1', '#result1')`

\--- task ---

将变量 `qResult` 设置为该问题的结果 `<div>`。

## --- code ---

language: javascript
filename: scripts.js
line_numbers: false
line_highlights: 4
-------------------------------------------------------

// 检查答案函数
function checkAnswer(question, result) {
let answer = document.querySelector(`input[name="${question}"]:checked`);
let qResult = document.querySelector(result);

}

\--- /code ---

\--- /task ---

结果 div 的样式意味着它是隐藏的。

\--- collapse ---

---

## title: 显示 `result` div 的样式

## --- code ---

language: css
filename:
line_numbers: false
line_highlights: 10
--------------------------------------------------------

.result {
background-color: var(--h1-colour);
color: var(--header-font-colour);
width: 100%;
border: 0;
padding: 10px;
margin: 20px 0;
border-radius: 4px;
align-self: center;
display: none;
}

\--- /code ---

\--- /collapse ---

\--- task ---

显示结果`<div>`。

## --- code ---

language: javascript
filename: scripts.js
line_numbers: false
line_highlights: 6
-------------------------------------------------------

// 检查答案函数
function checkAnswer(question, result) {
let answer = document.querySelector(`input[name="${question}"]:checked`);
let qResult = document.querySelector(result);

qResult.style.display = "block";

}

\--- /code ---

\--- /task ---

### 向用户显示所选答案是否正确

\--- task ---

检查所选的答案是否正确。

如果**正确**，则更新结果 div 文本以显示“正确”。
如果**不正确**，则更新结果 div 文本以显示“不正确”。

你可以**选择**其他消息来表示正确和错误的答案。

## --- code ---

language: javascript
filename: scripts.js
line_numbers: false
line_highlights: 8-12
----------------------------------------------------------

// 检查答案函数
function checkAnswer(question, result) {
let answer = document.querySelector(`input[name="${question}"]:checked`);
let qResult = document.querySelector(result);

qResult.style.display = "block";

if (answer.value === "correct") {
qResult.innerText = "Correct";
} else {
qResult.innerText = "Incorrect";
}

}

\--- /code ---

\--- /task ---

\--- task ---

**点击运行**

- 选择正确的答案并点击`检查答案`按钮
- 你应该看到结果 div 显示“正确”

**点击运行**

- 选择一个不同的答案并点击“检查答案”按钮
- 你应该看到结果 div 显示“不正确”

**点击运行**

- 选择其他不正确的答案，然后点击“检查答案”按钮
- 你应该看到结果 div 显示“不正确”

\--- /task ---

### 如果用户没有选择答案怎么办？

你只需要在用户做出选择时检查答案

如果没有选择答案，你可以添加一个有用的提醒消息！

\--- task ---

检查该问题是否有选定的答案。

如果有的话，显示结果消息。

如果没有，**选择**一个有用的消息来显示。

## --- code ---

language: javascript
filename: scripts.js
line_numbers: false
line_highlights: 8, 13-15
--------------------------------------------------------------

// 检查答案函数
function checkAnswer(question, result) {
let answer = document.querySelector(`input[name="${question}"]:checked`);
let qResult = document.querySelector(result);

qResult.style.display = "block";

if (answer) {
if (answer.value === "correct") {
qResult.innerText = "正确";
} else {
qResult.innerText = "不正确";
}
} else {
qResult.innerText = "请选择一个答案";
}

}

\--- /code ---

\--- /task ---

\--- task ---

**点击运行**

- 不要选择答案
- 点击“检查答案”按钮
- 你应该看到结果 div 显示“请选择一个答案”

\--- /task ---

**调试**
确保已在第 8 行添加了 `if (answer) {`，并使用 `else` 语句更新了第 13-15 行（并缩进代码以包含这些添加内容）。

干得好！ 你已经创建了一个交互式问题！

接下来，你将创建更多问题！
