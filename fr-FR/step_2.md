## Créer une question

Dans cette étape, tu vas créer la première question du quiz. Tu pourras également choisir des couleurs et un titre de quiz !

### Choisir un sujet de quiz

\--- task ---

De quoi parlera ton quiz ?

- 🐻 **Nature** : animaux, plantes ou habitats ?
- 📖 **Livres** : auteurs, personnages ou genres ?
- 🏰 **Histoire** : rois et reines, préhistoire/moderne, ou dates importantes ?
- 🥇 **Records du monde** : le plus grand, le plus rapide ou le plus long ?
- 👗 **Mode** : marques, tendances ou influenceurs ?
- 🔬 **Sciences** : faune, climat ou théories ?
- 🎥 **TV & cinéma** : cinématographie, série ou personnages ?
- 🖥️ **Codage** : langages, appareils ou logiciels ?
- 🕹️ **Jeux vidéo** : personnages, genres ou consoles ?
- 🎨 **Art** : œuvres d’art, artistes ou musées ?
- 👥 **Culture** : fêtes, jours fériés ou langues ?

Tu dois choisir un sujet et trois questions auxquelles l’utilisateur devra répondre.

\--- collapse ---

---

## title: Quelques exemples

L'exemple de projet utilise **Faune** comme sujet et pose trois questions à l'utilisateur.

L'exemple du **Karaté** utilise l'art martial **karaté** comme sujet.

Il existe de nombreux choix en termes de sujets et de questions sur ces sujets.

Choisis quelque chose dont tu es l'expert et teste tes amis ou ta famille !

\--- /collapse ---

**Choisis** ton sujet.

\--- /task ---

\--- task ---

Ouvre le [projet de démarrage Quiz !](https://editor.raspberrypi.org/fr-FR/projects/quiz-time-starter){:target="_blank"}.

Si tu es connecté, enregistre le projet sur ton compte et modifie le nom.

\--- /task ---

### Mettre à jour le titre et l'en-tête de ta page

\--- task ---

Modifie le titre de la page et le texte de l'en-tête pour qu'il corresponde à ton sujet.

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
    <title>Quiz sur la faune</title>
  </head>
  <body>
    <header class="header">
      <span class="sitename">Quiz sur la faune</span>

\--- /code ---

\--- /task ---

\--- task ---

**Clique sur Run**

- Tu devrais voir le nom de ton quiz dans l'en-tête !

\--- /task ---

### Créer ta première question

\--- task ---

Trouve le conteneur de questions `<div class="q-container">`

**Choisis** une question sur ton sujet.

Modifie le texte dans la balise `<h2>` pour qu'il soit ta première question.

## --- code ---

language: html
filename: index.html
line_numbers: true
line_number_start: 15
line_highlights: 17
--------------------------------------------------------

```
  <div class="q-container">
    <h1>Question 1</h1>
    <h2>Quelle est la plus grande espèce de félin vivant ?</h2>
```

\--- /code ---

\--- /task ---

### Créer trois réponses

**Choisis** les réponses correctes et incorrectes.

\--- task ---

Ajoute du texte aux trois étiquettes de réponse.

- Une réponse correcte (et lui donner l'attribut `value="correct"`)
- Deux réponses incorrectes

## --- code ---

language: html
filename: index.html
line_numbers: true
line_number_start: 15
line_highlights: 20, 23, 26
----------------------------------------------------------------

```
  <div class="q-container">
    <h1>Question 1</h1>
    <h2>Quelle est la plus grande espèce de félin vivant ?</h2>

    <input type="radio" name="q1" value="correct" id="q1a1">
    <label for="q1a1">Tigre</label><br>
    
    <input type="radio" name="q1" value="" id="q1a2">
    <label for="q1a2">Guépard</label><br>
    
    <input type="radio" name="q1" value="" id="q1a3">
    <label for="q1a3">Lion</label><br>
```

\--- /code ---

**Remarque :**

- Chaque élément `<label>` utilise un attribut `for` qui lie le label à l'attribut `id` d'un élément `<input>`. Cela rend la page web plus accessible car l'utilisateur peut également sélectionner le bouton radio en cliquant sur le label.
- Chaque élément `<input>` est un type de bouton radio et a trois attributs :
  - `name` (q1) permet à un seul bouton radio dans le groupe de nom 'q1' d'être sélectionné à la fois
  - `value` est utilisé plus tard lorsque la réponse est vérifiée
  - `id` correspond à l'attribut `for` du label

\--- /task ---

\--- task ---

**Clique sur Run**

- Tu devrais voir ta première question et trois options.

\--- /task ---

### Affichage correct / incorrect

L'utilisateur doit savoir si les réponses sont correctes ou incorrectes.

\--- task ---

Ajoute un `<div>` pour afficher le résultat.

## --- code ---

language: html
filename: index.html
line_numbers: true
line_number_start: 15
line_highlights: 28
--------------------------------------------------------

```
  <div class="q-container">
    <h1>Question 1</h1>
    <h2>Quelle est la plus grande espèce de félin vivant ?</h2>

    <input type="radio" name="q1" value="correct" id="q1a1">
    <label for="q1a1">Tigre</label><br>
    
    <input type="radio" name="q1" value="" id="q1a2">
    <label for="q1a2">Guépard</label><br>
    
    <input type="radio" name="q1" value="" id="q1a3">
    <label for="q1a3">Lion</label><br>

    <div class="result" id="result1"></div>
```

\--- /code ---

**Remarque :** il n'y a pas de contenu de texte dans le `<div>`. Tu l'ajouteras plus tard en utilisant JavaScript.

\--- /task ---

### Ajouter un bouton Vérifier la réponse

L'utilisateur doit vérifier si sa réponse est correcte.

\--- task ---

Ajoute un bouton en bas du `<div>` `q-container`.

Ce bouton :

- A l'attribut `id="q1"`, qui est utilisé pour le montrer, cacher et désactiver plus tard
- A un événement `onclick` qui exécute la fonction `checkAnswer` et le passe à :
  - La question à vérifier (`q1`)
  - L'ID du `<div>` où le résultat de la vérification sera affiché (`#result1`)
- Affiche le texte `Vérifier la réponse`

## --- code ---

language: html
filename: index.html
line_numbers: true
line_number_start: 15
line_highlights: 29
--------------------------------------------------------

```
  <div class="q-container">
    <h1>Question 1</h1>
    <h2>Quelle est la plus grande espèce de félin vivant ?</h2>

    <input type="radio" name="q1" value="correct" id="q1a1">
    <label for="q1a1">Tigre</label><br>
    
    <input type="radio" name="q1" value="" id="q1a2">
    <label for="q1a2">Guépard</label><br>
    
    <input type="radio" name="q1" value="" id="q1a3">
    <label for="q1a3">Lion</label><br>

    <div class="result" id="result1"></div>
    <button id="q1" onclick="checkAnswer('q1', '#result1')">Vérifier la réponse</button>
```

\--- /code ---

\--- /task ---

\--- task ---

Vérifie que l'option correcte a l'attribut `value="correct"`.
Dans l’exemple, la bonne réponse est la première réponse (`Tigre`).

\--- /task ---

### Personnaliser ta page

La page est très fonctionnelle et basique pour le moment. Il est temps pour toi de la rendre géniale !

\--- task ---

Ajoute une police appropriée pour ta page web à partir de Google Fonts.

[[[google-fonts]]]

[[[web-fonts]]]

\--- /task ---

\--- task ---

Ouvre `default.css`.

**Choisis** tes couleurs et modifie les variables de couleurs.

## --- code ---

language: css
filename: default.css
line_numbers: false
line_number_start:
line_highlights:
-----------------------------------------------------

/\* Couleurs de base \*/
\--body-background: #000000;
\--background: #ffffff;
\--header-font-colour: #000000;
\--h1-colour: #000000;
\--h2-colour: #000000;
\--button-background-colour: #000000;
\--button-font-colour: #ffffff;
}

\--- /code ---

[[[contrast-checker]]]

\--- /task ---

\--- task ---

**Clique sur Run**

- Modifie les couleurs si tu le souhaites.

\--- /task ---

Ensuite, tu vas créer la fonction pour vérifier si la réponse de l'utilisateur est correcte !
