# Map Function

### map function in ES6 using arrow function
```js
  const numbers = [1, 2, 3, 4, 5];
  const doubled = numbers.map((number) => number * 2);
  console.log(doubled); // [2, 4, 6, 8, 10]
```










> This code snippet demonstrates how to **create a polyfill** for the ***Array.prototype.map*** method using ES6 syntax.
> - The map method creates a new array populated with the results of calling a provided function on every element in the calling array.
It is a higher-order function that takes a callback function as an argument and applies it to each element of the array.
> - The polyfill checks if the map method already exists on the Array prototype, and if not, it defines it.
The polyfill uses the `this` keyword to refer to the array instance and iterates over its elements.
> - The callback function is called with three arguments: the current element, the index of the current element, and the array itself.
> - The result of the callback function is pushed into a new array, which is returned at the end.
> - Polyfill for [Array.prototype.map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

```js
Array.prototype.map = (callback) => {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    if (i in this) {
      result[i] = callback(this[i], i, this);
    }
  }
  return result;
};

const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((number) => number * 2);
console.log(doubled); // [2, 4, 6, 8, 10]
```
