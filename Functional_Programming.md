# Functional Programming
In this section, we see some important concepts of Functional Programming which will help us to understand Redux quickly.

### 🚀What is Functional Programming?
- Functional programming is one of the types of “Programming paradigms” (means - the methods or we can say a set of rules to structure our code to solve a problem).

- Type of programming paradigms:

  - Procedural programming
  - Logical programming
  - Functional programming
  - Object Oriented programming

- So in functional programming, we create small and reusable functions and by combining them we create another function for solving problems.

- JavaScript is a multi paradigms language. It supports Object Oriented Programming and Functional programming both.



### 📖Basics of Functions:
In JavaScript, functions are first-class citizens. So we treat the functions as any other variable. For example, we can assign them in a variable. we can pass them as an argument, or we can even return them from another function.

#### 📌Higher-order functions:
A higher-order function is a function that takes a function as a parameter or which returns the function or both, then we call them a higher-order function.

// Example 1
setTimeout(() => {
	console.log('Runs after 5s');
}, 5000);
 
// Example 2
const numbers = [10, 20, 30, 40];
const newArray = numbers.map(n => n + 5);
📌Function Composition:
When we pass one function’s output to another function's parameter then it is function composition.

let username = "   Harley   ";
let message = "Hello " + username.trim() + " Good Morning!";
 
const trim = (name) => name.trim();
const generateMessage = (name) => `Hello ${name}, Good Morning!`;
const convertToUpper = (name) => name.toUpperCase();
 
const result = generateMessage(convertToUpper(trim(username))); // This is function composition
console.log(result);
#### 📌Currying:
Currying is a technique that allows us to take a function with multiple arguments and convert it into a function that has a single argument.
```javascript
// Before applying Currying
const multi = (a, b) => a * b;
let result = multi(2, 5);
 
// After applying Currying
const multiple = (a) => (b) => a * b;
let newResult = multiple(2)(5);
````

#### 📌Pure Functions:
Pure function is a function that always gives the same output if we give it the same input.

In Pure functions

there is no Current Date/Time

No random values

No Global state

No Database calls
```javascript
// Example 1
function double(a) {
  return a * 2;
}
 
double(5) // Output 10
double(5) // Output 10
double(5) // Output 10
// so this is double is Pure Function.
 
// Example 2
function randomNumber(a) {
    return a * Math.random();
}
 
randomNumber(5); // Output 0.13411
randomNumber(5); // Output 0.32232
randomNumber(5); // Output 1.0323
// so this is randomNumber is NOT Pure Funtion.
```
### 🚀What is Immutability?
Basically, immutability is, Once we created a variable or string or object or array, it cannot be changed.

If you want to change that, we have to make a copy first of that variable or string or object or array and then we can update that copy.

#### 📌Immutability with Objects:
```javascript
const employee = {
    name: "Harley",
    age: 22,
    company: { country: "Cananda", city: "Toronto" },
};
 
// Method 1 Object.assign method
const newEmployee = Object.assign({}, employee, { name: "Martin" });
 
// Method 2 Spread Operator
const newEmployee = {
    ...employee,
    name: "Martin",
    company: { ...employee.company, city: "Calgary" },
};
```
#### 📌Immutability with Arrays:
```javascript
const numbers = [10, 20, 30, 40];
 
// Adding Items
const index = numbers.indexOf(30);
const addedNumbers = [...numbers.slice(0, index), 50, ...numbers.slice(index)];
 
// Updating Items
const updated = numbers.map((a) => (a === 40 ? 80 : a));
 
// Removing Items
const removed = numbers.filter((a) => a !== 30);
console.log(removed);
```
