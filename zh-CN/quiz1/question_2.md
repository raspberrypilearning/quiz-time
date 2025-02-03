\--- question ---

---

## 图例：第 2 题（共 3 题）

这是你在你的项目中使用的一些JavaScript。

```
function checkAnswer(question, result) {

}
```

这里是一些使用 JavaScript 的 HTML 代码。

```
<button id="q1" onclick="checkAnswer('q1', '#result1')">检查答案</button>
```

以下哪项是传递给参数 `question` 的实际参数？

\--- choices ---

- ( ) `id="q1"`

  \--- feedback ---

  不完全对！ 按钮元素的 `id` 属性用于后续对其进行修改

  \--- /feedback ---

- (x) `'q1'`

  \--- feedback ---

  正确！ 当函数运行时，它使用参数 `question` 来引用传递给它的第一个值作为参数(在这里是 `q1`)。 第二个实际参数是 `'#result1'`，它传递给参数 `result` 。

  \--- /feedback ---

- ( ) `checkAnswer`

  \--- feedback ---

  不完全对！ `checkAnswer` 是处理按钮 `onclick` 事件的函数名称。

  \--- /feedback ---

\--- /choices ---

\--- /question ---
