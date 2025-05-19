# reduce funciton in javascript

> The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
> - The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
> - The reduce() method executes the reducer function once for each element present in the array, excluding empty elements.
> - The first time the callback is run, there is no "previous value" to return. You can provide an initial value for the accumulator to use as a starting point.
> - If you do not provide an initial value, the first element in the array will be used as the initial "previous value".
> - The reduce() method does not execute the function for empty elements.

```js
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // Output: 15
```

### Pollyfill for reduce() function

```js
Array.prototype.myreduce = function (callback, initialValue) {
    let accumulator = initialValue !== undefined ? initialValue : this[0];
    for (let i = initialValue !== undefined ? 0 : 1; i < this.length; i++) {
        if (i in this) {
            accumulator = callback(accumulator, this[i], i, this);
        }
    }
    return accumulator;
};
// Example usage    
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.myreduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);
console.log(sum); // Output: 15

```
