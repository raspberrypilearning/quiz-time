## 每次显示一个

在此步骤中，你将隐藏所有问题，以便仅在需要时显示它们。

### 隐藏所有问题

你需要确保每个问题在适当的时候出现。

首先，你需要全部隐藏他们。

\--- task ---

打开`style.css`。

更改选择器 `.q-container` 的样式以隐藏所有的问题容器。

## --- code ---

language: css
filename: styles.html
line_numbers: false
line_highlights: 8
-------------------------------------------------------

.q-container {
background-color: var(--background);
width: 90%;
max-width: 600px;
margin: 100px auto 0;
border-radius: 10px;
padding: 30px;
display: none;
opacity: 1;
}

\--- /code ---

\--- /task ---

\--- task ---

**点击运行**

- 你的所有问题应该都消失了！

别担心，你会让它们再次出现的！

\--- /task ---

### 获取所有问题的列表

你需要能够访问每个问题。

\--- task ---

打开 `scripts.js`。

创建一个常量来保存所有提问容器的列表。

## --- code ---

language: js
filename: scripts.js
line_numbers: false
line_highlights: 3
-------------------------------------------------------

// 常量
const scoreText = document.querySelector("#scoreText");
const questions = document.querySelectorAll(".q-container");

\--- /code ---

\--- /task ---

### 显示第一个问题

列表中的第一个项目位于索引 `0`。

\--- task ---

找到 `// 显示第一个问题` 注释。

显示第一个问题。

## --- code ---

language: js
filename: scripts.js
line_numbers: false
line_highlights: 2
-------------------------------------------------------

// 显示第一个问题
questions[0].style.display = "block";

\--- /code ---

\--- /task ---

\--- task ---

**点击运行**

- 你的第一个问题应该回来了！
- 选择一个答案并点击检查答案按钮
- 用其他答案尝试几次

\--- /task ---

接下来，你需要隐藏这个问题并显示下一个问题！
