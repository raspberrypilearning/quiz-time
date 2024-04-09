## Create a question

In this step you will create the first quiz question. You will also choose some colours and a quiz title!

### Choose a quiz topic

--- task ---

What will your quiz be about?

+ 🐻 **Nature**: Animals, plants or habitats?
+ 📖 **Books**: Authors, characters or genres?
+ 🏰 **History**: Kings and queens, pre-history/modern or important dates?
+ 🥇 **World records**: Biggest, fastest or longest?
+ 👗 **Fashion**: Brands, trends, or influencers?
+ 🔬 **Science**: Wildlife, climate or theories?
+ 🎥 **TV & Film**: Cinematography, series, or characters?
+ 🖥️ **Coding**: Languages, devices or software?
+ 🕹️ **Video Games**: Characters, genres or consoles?
+ 🎨 **Art**: Art works, artists or museums?
+ 👥 **Culture**: Festivals, holidays or languages?

You need to pick a topic, and three questions for the user to answer.

--- collapse ---

---
title: Some examples...
---

The example project uses **Wildlife** as its topic, and asks the user three questions.

**TODO** 
The **Mac** example uses **Mac** as its topic, and asks the user ...

There are many choices of topic, and questions about those topics. 
Pick something you're the expert in and test your friends or family!

--- /collapse ---

**Choose** your topic.

--- /task ---

--- task ---

Open the [Quiz time starter project](https://editor.raspberrypi.org/en/projects/quiz-time-starter){:target="_blank"}

If you are logged in - save the project to your account and change the name.

--- /task ---

### Update your page title and heading

--- task ---

Change the page title and header text to match your topic.

--- code ---
---
language: html
filename: index.html
line_numbers: true
line_number_start: 1
line_highlights: 8, 12
---

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="default.css">
    <title>Wildlife quiz</title>
  </head>
  <body>
    <header class="header">
      <span class="sitename">Wildlife quiz</span>

--- /code ---

--- /task ---

--- task ---

**Click Run**
+ You should see your the name of your quiz in the header!

--- /task ---

### Create your first question

--- task ---

Find the question container `<div class="q-container">`

**Choose** a question about your topic.

Change the text in the `<h2>` tag to be your first question.

--- code ---
---
language: html
filename: index.html
line_numbers: true
line_number_start: 15
line_highlights: 17
---

      <div class="q-container">
        <h1>Question 1</h1>
        <h2>What is the largest living cat species?</h2>

--- /code ---

--- /task ---

### Create three answers

**Choose** the correct and incorrect answers.

--- task ---

Add text to the three answer labels.
+ One correct answer (and give it the attribute `value="correct"`)
+ Two incorrect answers

--- code ---
---
language: html
filename: index.html
line_numbers: true
line_number_start: 15
line_highlights: 20, 23, 26
---

      <div class="q-container">
        <h1>Question 1</h1>
        <h2>What is the largest living cat species?</h2>

        <input type="radio" name="q1" value="correct" id="q1a1">
        <label for="q1a1">Tiger</label><br>
        
        <input type="radio" name="q1" value="" id="q1a2">
        <label for="q1a2">Cheetah</label><br>
        
        <input type="radio" name="q1" value="" id="q1a3">
        <label for="q1a3">Lion</label><br>

--- /code ---

**Notice:** 
+ Each `<label>` element uses a `for` attribute that links the label to an `<input>` element's `id` attribute. This makes the webpage more accessible because the user can also select the radio button by clicking on the label.
+ Each `<input>` element is a radio button type and has three attributes:
  + `name` (q1) allows only one radio button in the name group 'q1' to be selected at a time
  + `value` is used later when the answer is checked
  + `id` matches the label's `for` attribute.

--- /task ---

--- task ---

**Click Run**
+ You should see your first question and three options.

--- /task ---

### Display correct / incorrect

The user will need to know if they are correct / incorrect.

--- task ---

Add a `<div>` to show the result.

--- code ---
---
language: html
filename: index.html
line_numbers: true
line_number_start: 15
line_highlights: 28
---

      <div class="q-container">
        <h1>Question 1</h1>
        <h2>What is the largest living cat species?</h2>

        <input type="radio" name="q1" value="correct" id="q1a1">
        <label for="q1a1">Tiger</label><br>
        
        <input type="radio" name="q1" value="" id="q1a2">
        <label for="q1a2">Cheetah</label><br>
        
        <input type="radio" name="q1" value="" id="q1a3">
        <label for="q1a3">Lion</label><br>

        <div class="result" id="result1"></div>

--- /code ---

**Notice:** There is no text content in the div. You will add this later using JavaScript.

--- /task ---

### Add a Check Answer button

The user needs to check if their answer is correct.

--- task ---

Add a button to the bottom of the `q-container` `<div>`.

This button:
+ has the attribute `id="q1"`, used to show, hide and disable it later
+ has an `onclick` event that runs the `checkAnswer` function and passes it:
  + the question to check (`q1`)
  + the id of the div where the result of the check will be displayed (`#result1`)
+ shows the text `Check Answer`

--- code ---
---
language: html
filename: index.html
line_numbers: true
line_number_start: 15
line_highlights: 29
---

      <div class="q-container">
        <h1>Question 1</h1>
        <h2>What is the largest living cat species?</h2>

        <input type="radio" name="q1" value="correct" id="q1a1">
        <label for="q1a1">Tiger</label><br>
        
        <input type="radio" name="q1" value="" id="q1a2">
        <label for="q1a2">Cheetah</label><br>
        
        <input type="radio" name="q1" value="" id="q1a3">
        <label for="q1a3">Lion</label><br>

        <div class="result" id="result1"></div>
        <button id="q1" onclick="checkAnswer('q1', '#result1')">Check Answer</button>

--- /code ---

--- /task ---

--- task ---

Check that the correct option has the attribute `value="correct"`.
In the example, the correct answer is the first answer (`Tiger`)

--- /task ---

### Make the page your own

The page is looking pretty boring now, time for you to make it look awesome!

--- task ---

Add an appropriate font for your webpage from Google Fonts.

[[[google-fonts]]]

[[[web-fonts]]]

--- /task ---

--- task ---

Open `default.css`. 

**Choose** your colours and change the colour variables.

--- code ---
---
language: css
filename: default.css
line_numbers: false
line_number_start: 
line_highlights:
---

  /* Base Colours */
  --body-background: #000000;
  --background: #ffffff;
  --header-font-colour: #000000;
  --h1-colour: #000000;
  --h2-colour: #000000;
  --button-background-colour: #000000;
  --button-font-colour: #ffffff;
}

--- /code ---

[[[contrast-checker]]]

--- /task ---

--- task ---

**Click Run** 
+ Change the colours if you want to. 

--- /task ---

Next you will create the function to check if the user's answer is correct!