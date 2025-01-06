\--- question ---

---

## legend: Question 3 of 3

When you created the next question function, you had to check if the index of the **current** question (`currentQ`) was one fewer than the number of questions in the `questions` list.

Which one of these was used to create the list?

\--- choices ---

- ( ) `IntersectionObserver()`

  \--- feedback ---

  不完全对！ `IntersectionObserver()` checks to see if elements have entered or exited the viewport.

  \--- /feedback ---

- ( ) `<ol>`

  \--- feedback ---

  不完全对！ `<ol>` is an HTML element used to create an ordered list.

  \--- /feedback ---

- (x) `querySelectorAll()`

  \--- feedback ---

  正确！

  `querySelectorAll()` returns a list of the document's elements that match a specified group of selectors. The example used `document.querySelectorAll(".q-container")` to return a list of all elements that had the class `q-container`.

  \--- /feedback ---

\--- /choices ---

\--- /question ---
