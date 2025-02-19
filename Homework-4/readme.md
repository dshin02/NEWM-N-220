# Assignment 4:Looping to the DOM

## Week 4 lecture 
This week we learned about JavaScript Arrays and DOM Manipulation.

JavaScript Arrays: Arrays in JavaScript are special objects that store multiple values in a single variable. They help organize and manage collections of data efficiently. Arrays can be created using square brackets ([]) or the Array constructor. You can loop through arrays using for, while, and do...while loops to process each element. Arrays are particularly useful for managing lists of related data, such as names, scores, or Boolean values.

DOM Manipulation: The Document Object Model (DOM) is a structured representation of a webpage that JavaScript can manipulate to create dynamic and interactive web applications. JavaScript interacts with the DOM to select, modify, delete, and create elements in real-time. Key methods include: getElementById for selecting elements by their unique id, getElementsByClassName for selecting elements by their class name, querySelector for selecting the first matching element by a CSS selector, querySelectorAll for selecting all matching elements by a CSS selector

We learned how to modify content using textContent, innerText, and innerHTML, change styles using the .style property, and manage classes with the classList methods. JavaScript also allows us to create and append new elements dynamically using document.createElement.

## Weekly Recap
### Key Takeaways

#### Document Object Model (DOM) Manipulation
The **DOM** is a structured representation of a webpage, allowing JavaScript to dynamically access and modify elements.

#### Selecting Elements
- `document.getElementById("id")` – Selects an element by ID.
- `document.getElementsByClassName("class")` – Returns a collection of elements by class.
- `document.querySelector("selector")` – Selects the first matching element.
- `document.querySelectorAll("selector")` – Selects all matching elements.

#### Modifying Content
- `element.textContent` – Updates text content (ignores HTML tags).
- `element.innerText` – Similar to `textContent` but respects CSS styling.
- `element.innerHTML` – Updates HTML content inside an element.

#### Changing Styles
- `element.style.backgroundColor = "lightblue";`
- `element.style.color = "red";`
- `element.style.fontSize = "20px";`
- `element.style.display = "none"; // Hides the element`

#### Modifying Attributes
- `element.setAttribute("disabled", true);`
- `element.getAttribute("href");`
- `element.dataset.attributeName; // Access custom data attributes`

#### Managing Classes
- `element.classList.add("class-name");`
- `element.classList.remove("class-name");`
- `element.classList.toggle("class-name");`
- `element.classList.contains("class-name"); // Returns true/false`

#### Creating New Elements
- `let newDiv = document.createElement("div");`
- `newDiv.innerHTML = "<p>New content</p>";`
- `document.body.appendChild(newDiv);`

#### Arrays & Loops in JavaScript
An **array** is a special object that stores multiple values in a single variable.

#### Creating Arrays
```js
let fruits = ["apple", "banana", "cherry"];
let numbers = [1, 2, 3, 4, 5];
let flags = [true, false, true];
```

#### Looping Through Arrays
##### Using `for` loop
```js
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}
```

##### Using `while` loop
```js
let i = 0;
while (i < fruits.length) {
  console.log(fruits[i]);
  i++;
}
```

##### Using `do...while` loop
```js
let i = 0;
do {
  console.log(flags[i]);
  i++;
} while (i < flags.length);
```

### Summary
Understanding **DOM Manipulation** and **Arrays & Loops** is essential for JavaScript development. By using these concepts, you can create dynamic and interactive web applications. 🚀


##Live Links

- [Instrument-Lessons] https://dshin02.github.io/NEWM-N-220/Homework-4/index.html
- [Test-Scores] https://dshin02.github.io/NEWM-N-220/Homework-4/scores.html
- [Image-Gallery] https://dshin02.github.io/NEWM-N-220/Homework-4/gallery.html
