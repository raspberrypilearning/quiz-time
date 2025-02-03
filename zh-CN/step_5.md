## 获得分数

在此步骤中，你将让用户根据正确答案获得积分！

### 将得分添加到标题

\--- task ---

打开 `index.html`。

向标题栏添加一个新的 span 元素。

赋予其属性 `id="scoreText"` 和 `class="sitename"`。

包含文本 `分数：0`，因此用户从 0 分开始。

## --- code ---

language: html
filename: index.html
line_numbers: false
line_highlights: 3
-------------------------------------------------------

```
<header class="header">
  <span class="sitename">野生动物测验</span>
  <span id="scoreText" class="sitename">分数：0</span>
</header>
```

\--- /code ---

\--- /task ---

### 更新分数

当用户选择正确答案时，你的函数需要更新标题中的分数。

\--- task ---

打开 `scripts.js`。

创建一个名为 `score` 的变量，并将其设置为 `0`。

## --- code ---

language: js
filename: scripts.js
line_numbers: false
line_highlights: 2
-------------------------------------------------------

// 变量
var score = 0;

\--- /code ---

\--- /task ---

**选择**正确答案可获得多少分。

如果答案正确则增加分数。

该示例将分数加 1。

\--- task ---

如果答案正确，则更新分数变量。

## --- code ---

language: js
filename: scripts.js
line_numbers: false
line_highlights: 4
-------------------------------------------------------

if (answer) {
if (answer.value === "correct") {
qResult.innerText = "正确";
score+=1;
} else {
qResult.innerText = "不正确";
}
} else {
qResult.innerText = "请选择一个答案";
}

\--- /code ---

\--- /task ---

### 更新标题中的分数

你需要显示用户的分数。

\--- task ---

创建一个名为 `scoreText` 的常量，并使用 `querySelector` 方法将其设置为标题中包含分数的 span 元素。

## --- code ---

language: js
filename: scripts.js
line_numbers: false
line_highlights: 2
-------------------------------------------------------

// 常量
const scoreText = document.querySelector("#scoreText");

\--- /code ---

\--- /task ---

更改 span 的文本内容以匹配新分数。

\--- task ---

更新 span 的文本内容。

注意: `` `分数: ${score}` `` 使用反引号 `` ` ` `` 而不是 `" "` 或 `' '`.

## --- code ---

language: js
filename: scripts.js
line_numbers: false
line_highlights: 5
-------------------------------------------------------

if (answer) {
if (answer.value === "correct") {
qResult.innerText = "正确";
score+=1;
scoreText.innerText = `分数: ${score}`;
} else {
qResult.innerText = "不正确";
}
} else {
qResult.innerText = "请选择一个答案";
}

\--- /code ---

\--- /task ---

\--- task ---

**点击运行**

- 回答你的问题，单击“检查答案”按钮并查看标题中更新的分数！

\--- /task ---

有一个问题！

如果用户选择了正确的答案，他们可以继续点击检查答案，每次分数都会增加。

\--- task ---

**尝试一下**

- 选择正确的答案
- 点击检查答案按钮
- 再点击几次，观察每次得分的增加！

\--- /task ---

### 好了，不要作弊了！

你需要阻止用户通过多次单击按钮来作弊。

你可以使用 `.disabled` 方法禁用按钮。

\--- task ---

添加一行代码，当用户选择一个选项并单击“检查答案”按钮时禁用该按钮。

## --- code ---

language: js
filename: scripts.js
line_numbers: false
line_highlights: 2
-------------------------------------------------------

if (answer) {
document.querySelector("#" + question).disabled = true;
if (answer.value === "correct") {

\--- /code ---

**注意：** 如果用户没有选择答案，这不会禁用按钮。

**注意：** `querySelector` 使用拼接的方式将字符 `#` 加到通过按钮的 onclick 事件作为参数传递的 question 的值上。 这针对的是特定的按钮元素。

\--- /task ---

\--- task ---

**点击运行**

- 选择正确答案并点击“检查答案”按钮。
- 再次单击该按钮。 它应该不会起作用。

\--- /task ---

你可能希望设置按钮的样式，使其具有不同的颜色。

你也可以隐藏它，或者更改文本。

在这个项目中，您将隐藏整个问题并让下一个问题以动画形式出现！
