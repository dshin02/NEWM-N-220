# Assignment 3: Show Your Work

## Week 3 Lecture
This week, we learned how JavaScript handles variables using `var`, `let`, and `const`. Each has different scoping rules, with `var` being function-scoped and `let` and `const` being block-scoped. We now understand why `let` and `const` are preferred in modern JavaScript.

We also explored different types of operators. Arithmetic operators allow mathematical calculations, assignment operators help store values, and comparison operators evaluate differences between values. Logical operators enable combining conditions, making complex condition checks easier.

Another key topic was object wrappers. Strings, numbers, and booleans in JavaScript come with built-in methods that make manipulation easy. For example, `.toUpperCase()` changes text to uppercase, `.toFixed()` rounds numbers to a fixed decimal place, and `Boolean(value)` converts values into true or false.

Finally, we learned about truthy and falsy values. In JavaScript, some values evaluate to `true` while others, like `0` and `null`, evaluate to `false`. Understanding this helps when writing conditional statements. Additionally, math functions such as `Math.round()` and `Math.random()` are useful for numerical operations.

## Weekly Recap
### Key Takeaways

#### Declaring Variables
- **var**: Function-scoped, can be redeclared/reassigned (avoid in modern JS).
- **let**: Block-scoped, can be reassigned but not redeclared in the same scope.
- **const**: Block-scoped, cannot be reassigned or redeclared.

#### Basic Operators
1. **Arithmetic Operators**:
- `+`, `-`, `*`, `/`, `%`, `**` (addition, subtraction, multiplication, division, remainder, exponentiation).

2. **Assignment Operators**:
- `=`, `+=`, `-=`, `--`, `++` (assignment, addition/subtraction with assignment, increment/decrement).

3. **Comparison Operators**:
- `==` (loose equality), `===` (strict equality), `!=`, `!==`, `>`, `<`.

4. **Logical Operators**:
- `&&` (AND), `||` (OR), `!` (NOT).

5. **Type Operators**:
- `typeof` returns the type of a variable.

#### Object Wrappers
1. **String Methods**:
- `.length`, `.toUpperCase()`, `.toLowerCase()`, `.trim()`, `.includes()`, `.indexOf()`, `.slice()`, `.replace()`, `.split()`, `.charAt()`.

2. **Number Methods**:
- `.toFixed()`, `.toString()`, `.toExponential()`, `.toPrecision()`, `Number.isInteger()`, `Number.parseFloat()`, `Number.parseInt()`, `Math.round()`, `Math.floor()`, `Math.ceil()`, `Math.random()`, `Math.PI`.

3. **Boolean Methods**:
- `Boolean(value)`, `.toString()`, `!!value` (shorthand conversion to boolean).

#### Truthy vs Falsy Values
1. **Truthy Values**:
- Non-empty strings, non-zero numbers, arrays, objects, functions.

2. **Falsy Values**:
- Empty strings, `0`, `null`, `undefined`.

## Notes for Future Reference
- Use `let` for variables that change and `const` for constants.
- Avoid `var` due to scoping issues.
- Utilize object wrapper methods to manipulate strings, numbers, and booleans efficiently.
- Remember truthy and falsy values when handling conditional statements.
- JavaScript’s built-in methods provide powerful ways to work with data—take advantage of them!

##Live Links

[Home] https://dshin02.github.io/NEWM-N-220/Homework-3/index.html
[Store] https://dshin02.github.io/NEWM-N-220/Homework-3/store.html
[Login] https://dshin02.github.io/NEWM-N-220/Homework-3/login.html