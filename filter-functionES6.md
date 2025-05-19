# Filter Function

### filter function in ES6 using arrow function
```js
const numbers = [1, 2, 3, 4, 5];
const evens = numbers.filter((number) => number % 2 === 0);
console.log(evens); // [2, 4]
```



### polyfill for filter function

```js
Array.prototype.filter = function (callback, thisArg) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
        if (i in this) {
            const value = this[i];
            if (callback.call(thisArg, value, i, this)) {
                result.push(value);
            }
        }
    }
    return result;
};

// Example usage
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]

```
