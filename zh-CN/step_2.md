## 创建一个问题

在这个步骤中，你将创建第一个测验问题。 你还将选择一些颜色和一个测验标题！

### 选择测验主题

\--- task ---

你的测验内容是什么？

- 🐻 **自然**：动物、植物还是栖息地？
- 📖 **书籍**：作者、人物还是流派？
- 🏰 **历史**：国王和王后、史前/现代，还是重要日期？
- 🥇 **世界纪录**：最大、最快还是最长？
- 👗 **时尚**：品牌、趋势还是影响者？
- 🔬 **科学**：野生动物、气候还是理论？
- 🎥 **电视和电影**：电影摄影、连续剧还是角色？
- 🖥️ **编码**：语言、设备还是软件？
- 🕹️ **电子游戏**：角色、类型还是游戏机？
- 🎨 **艺术**：艺术作品、艺术家还是博物馆？
- 👥 **文化**：节日、假期还是语言？

你需要选择一个主题和三个问题让用户回答。

\--- collapse ---

---

## title: 一些例子

示例项目以**野生动物**为主题，并向用户提出三个问题。

**空手道**示例以武术**空手道**为主题。

有许多主题可供选择，每个主题都有相关的问题。

选择你擅长的主题，测试你的朋友或家人吧！

\--- /collapse ---

**选择** 你的主题。

\--- /task ---

\--- task ---

打开 [测验时间 入门项目](https://editor.raspberrypi.org/en/projects/quiz-time-starter){:target="_blank"}。

如果你已经登录，请将项目保存到你的帐户并更改名称。

\--- /task ---

### 更新你的页面标题和标题文字

\--- task ---

将页面标题和标题文字更改为与你的主题相符的内容。

## --- code ---

language: html
filename: index.html
line_numbers: true
line_number_start: 1
line_highlights: 8, 12
-----------------------------------------------------------

<!DOCTYPE html>

<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="default.css">
    <title>野生动物测验</title>
  </head>
  <body>
    <header class="header">
<span class="sitename">野生动物测验</span>

\--- /code ---

\--- /task ---

\--- task ---

**点击运行**

- 你应该会在标题中看到你的测验名称！

\--- /task ---

### 创建你的第一个问题

\--- task ---

找到问题容器 `<div class="q-container">`

**选择**和你主题相关的问题。

将 `<h2>` 标签中的文本更改为你的第一个问题。

## --- code ---

language: html
filename: index.html
line_numbers: true
line_number_start: 15
line_highlights: 17
--------------------------------------------------------

```
  <div class="q-container">
    <h1>问题 1</h1>
    <h2>现存最大的猫科动物是什么？</h2>
```

\--- /code ---

\--- /task ---

### 创建三个答案

**选择**正确和错误的答案。

\--- task ---

给这三个答案标签添加文本

- 一个正确的答案 (并给它属性 `value="correct"`)
- 两个错误的答案

## --- code ---

language: html
filename: index.html
line_numbers: true
line_number_start: 15
line_highlights: 20, 23, 26
----------------------------------------------------------------

```
  <div class="q-container">
    <h1>问题 1</h1>
    <h2>现存最大的猫科动物是什么？</h2>

    <input type="radio" name="q1" value="correct" id="q1a1">
    <label for="q1a1">老虎</label><br>
    
    <input type="radio" name="q1" value="" id="q1a2">
    <label for="q1a2">猎豹</label><br>
    
    <input type="radio" name="q1" value="" id="q1a3">
    <label for="q1a3">狮子</label><br>
```

\--- /code ---

**注意：**

- 每个 `<label>` 元素使用一个 `for` 属性将标签链接到 `<input>` 元素的 `id` 属性。 这使网页更容易访问，因为用户也可以点击标签来选择单选按钮。
- 每个 `<input>` 元素都是单选按钮类型，具有三个属性：
  - `name` (q1) 仅允许一次选择名称组 'q1' 中的一个单选按钮
  - `value` 稍后在检查答案时使用
  - `id` 与标签的 `for` 属性匹配

\--- /task ---

\--- task ---

**点击运行**

- 你应该看到你的第一个问题和三个选项。

\--- /task ---

### 显示正确/不正确

用户需要知道它们是否正确。

\--- task ---

添加一个 `<div>` 来显示结果。

## --- code ---

language: html
filename: index.html
line_numbers: true
line_number_start: 15
line_highlights: 28
--------------------------------------------------------

```
  <div class="q-container">
    <h1>问题 1</h1>
    <h2>现存最大的猫科动物是什么？</h2>

    <input type="radio" name="q1" value="correct" id="q1a1">
    <label for="q1a1">老虎</label><br>
    
    <input type="radio" name="q1" value="" id="q1a2">
    <label for="q1a2">猎豹</label><br>
    
    <input type="radio" name="q1" value="" id="q1a3">
    <label for="q1a3">狮子</label><br>

    <div class="result" id="result1"></div>
```

\--- /code ---

**注意：** `<div>` 中没有文本内容。 稍后你将使用 JavaScript 添加它。

\--- /task ---

### 添加检查答案按钮

用户需要检查他们的答案是否正确。

\--- task ---

在 `q-container` `<div>` 的底部添加一个按钮。

此按钮：

- 具有属性`id="q1"`，用于以后显示、隐藏和禁用
- 有一个 `onclick` 事件，它运行 `checkAnswer` 函数并传递它：
  - 要检查的问题 (`q1`)
  - 检查结果将显示在 ID为（`#result1`）的 `<div>` 中
- 显示文本 `检查答案`

## --- code ---

language: html
filename: index.html
line_numbers: true
line_number_start: 15
line_highlights: 29
--------------------------------------------------------

```
  <div class="q-container">
    <h1>问题 1</h1>
    <h2>现存最大的猫科动物是什么？</h2>

    <input type="radio" name="q1" value="correct" id="q1a1">
    <label for="q1a1">老虎</label><br>
    
    <input type="radio" name="q1" value="" id="q1a2">
    <label for="q1a2">猎豹</label><br>
    
    <input type="radio" name="q1" value="" id="q1a3">
    <label for="q1a3">狮子</label><br>

    <div class="result" id="result1"></div>
    <button id="q1" onclick="checkAnswer('q1', '#result1')">检查答案</button>
```

\--- /code ---

\--- /task ---

\--- task ---

检查正确的选项是否具有属性`value="correct"`。
在这个例子中，正确答案是第一个答案（`Tiger`）。

\--- /task ---

### 打造你自己的页面

这个页面现在看起来非常实用，也很基础。 是时候让它看起来更棒了！

\--- task ---

从 Google Fonts 中为你的网页添加合适的字体。

[[[google-fonts]]]

[[[web-fonts]]]

\--- /task ---

\--- task ---

Open `default.css`。

**选择** 你的颜色并更改颜色变量。

## --- code ---

language: css
filename: default.css
line_numbers: false
line_number_start:
line_highlights:
-----------------------------------------------------

/\* 基本颜色 \*/
\--body-background： #0000;
\--background： #ffffff;
\--header-font-colour： #0000;
\--h1-colour： #000000;
\--h2-colour: #000000;
\--buton-background-colour: #000000;
\--buton-font-colour: #ffffff;
}

\--- /code ---

[[[contrast-checker]]]

\--- /task ---

\--- task ---

**点击运行**

- 如果你需要的话，请更改颜色

\--- /task ---

接下来，你将创建函数来检查用户的答案是否正确！
