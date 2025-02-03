## 添加更多问题

在此步骤中，你将添加另外两个问题。

### 复制问题容器

\--- task ---

打开 `index.html`。

高亮并复制 (<kbd>Ctrl</kbd>+<kbd>C</kbd> 或 <kbd>Cmd</kbd>+<kbd>C</kbd>) class 为 `q-container` 的 `<div>` 。

\--- collapse ---

---

## title: 显示问题容器 div

## --- code ---

language: html
filename: index.html
line_numbers: false
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
  </div>
```

\--- /code ---

\--- /collapse ---

\--- /task ---

\--- task ---

将问题容器粘贴（<kbd>Ctrl</kbd>+<kbd>V</kbd> 或 <kbd>Cmd</kbd>+<kbd>V</kbd>）到下面。

\--- collapse ---

---

## title: 我的代码看起来应该是什么样的？

## --- code ---

language: html
filename: index.html
line_numbers: false
line_highlights: 18-33
-----------------------------------------------------------

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
  </div>

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
  </div>
```

\--- /code ---

\--- /collapse ---

\--- /task ---

### 创建第二个问题

**选择**关于你的主题的第二个问题。

更改问题编号和问题文本。

\--- task ---

更改：

- `<h1>` 为问题 2
- `<h2>`为 [选择你的新问题]

\--- /task ---

**选择**答案并更改答案标签以匹配问题。

\--- task ---

更改：

- 每个 `<label>` 的文本内容，因此你有一个正确答案和两个错误答案
- 每个标签的 `for` 属性与 q2 相关，而不是 q1

\--- /task ---

更改输入 input 的属性。

\--- task ---

更改：

- 每个`<input>`元素的 `name` 属性为 `q2`
- 每个 `<input>` 元素的 `value` 属性为 `correct`（如果答案不正确则留空）
- 每个 `<input>` 元素的 `id` 属性与其标签的 `for` 属性匹配

\--- /task ---

更改结果 div 和按钮的属性。

\--- task ---

更改：

- 将 `result` div 的 `id` 属性设置为 `result2`
- 按钮的 `id` 属性更改为 `q2`

\--- /task ---

更改传递给函数的参数。

\--- task ---

更改：

- `onclick` 事件传递给函数的参数（`q2` 和 `#result2`）

\--- collapse ---

---

## title: 我的代码看起来应该是什么样的？

## --- code ---

language: html
filename: index.html
line_numbers: false
line_highlights: 19-32
-----------------------------------------------------------

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
  </div>

  <div class="q-container">
    <h1>问题 2</h1>
    <h2>哪种鸟以模仿人类语言的能力而闻名？</h2>

    <input type="radio" name="q2" value="" id="q2a1">
    <label for="q2a1">麻雀</label><br>
    
    <input type="radio" name="q2" value="" id="q2a2">
    <label for="q2a2">鸽子</label><br>
    
    <input type="radio" name="q2" value="correct" id="q2a3">
    <label for="q2a3">鹦鹉</label><br>

    <div class="result" id="result2"></div>  
    <button id="q2" onclick="checkAnswer('q2', '#result2')">检查答案</button>
  </div>
```

\--- /code ---

\--- /collapse ---

\--- /task ---

### 创建第三个问题

对于第三个问题，你可以再次执行相同的过程。

\--- task ---

再次复制并粘贴问题容器并更改值以创建第三个问题。

你需要:

- 更改问题编号和问题文本
- 更改答案标签以匹配问题
- 更改 input 元素的属性
- 更改结果 div 和按钮的属性
- 更改传递给函数的参数

\--- collapse ---

---

## title: 我的代码看起来应该是什么样的？

## --- code ---

language: html
filename: index.html
line_numbers: false
line_highlights: 35-49
-----------------------------------------------------------

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
  </div>

  <div class="q-container">
    <h1>问题 2</h1>
    <h2>哪种鸟以模仿人类语言的能力而闻名？</h2>

    <input type="radio" name="q2" value="" id="q2a1">
    <label for="q2a1">麻雀</label><br>
    
    <input type="radio" name="q2" value="" id="q2a2">
    <label for="q2a2">鸽子</label><br>
    
    <input type="radio" name="q2" value="correct" id="q2a3">
    <label for="q2a3">鹦鹉</label><br>

    <div class="result" id="result2"></div>  
    <button id="q2" onclick="checkAnswer('q2', '#result2')">检查答案</button>
  </div>

  <div class="q-container">
    <h1>问题 3</h1>
    <h2>哪种动物以其独特的黑白条纹而闻名？</h2>

    <input type="radio" name="q3" value="" id="q3a1">
    <label for="q3a1">河马</label><br>
    
    <input type="radio" name="q3" value="" id="q3a2">
    <label for="q3a2">长颈鹿</label><br>
    
    <input type="radio" name="q3" value="correct" id="q3a3">
    <label for="q3a3">斑马</label><br>

    <div class="result" id="result3"></div>
    <button id="q3" onclick="checkAnswer('q3', '#result3')">检查答案</button>
  </div>
```

\--- /code ---

\--- /collapse ---

\--- /task ---

\--- task ---

**点击运行**

- 回答你的问题，点击“检查答案”按钮并观看结果更新！

\--- /task ---

\--- task ---

- 选择一个不同的答案并点击“检查答案”按钮。
- 如果你更改为正确或错误的答案，结果将会更新！

\--- /task ---

您将在稍后阻止此类情况发生。

接下来，你将让用户在答对问题时获得分数！
