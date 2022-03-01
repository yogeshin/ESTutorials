//Sort text
let texts =  ["xyz","pqr","mno","abc"];
texts.sort();
console.log(texts);

//Sort number
let numbers = [10, 4, 3, 55, 20, 34];
numbers.sort((a,b) => a - b);
const maxNumber =  numbers.sort((a,b) => b - a)[0];
const minNumber =  numbers.sort((a,b) => a - b)[0];
console.log("Sort numbers", numbers);
console.log("Minumum number", minNumber);
console.log("Maximum number", maxNumber);


//Sort Number but 0 at the last
input [10, 41, 0, 22, 15, 0, 66, 56]
output [10, 15, 22, 41, 56, 66, 0, 0]

const numbers = [10, 41, 0, 22, 15, 0, 66, 56];
numbers.sort((a, b) => (a || Number.MAX_VALUE) - (b || Number.MAX_VALUE));
console.log(...numbers);

//Sort object by values
let obj = [{name:"xyz"}, {name:"pqr"}, {name:"abc"}];
obj.sort(function(a,b) {
    let x = a.name.toLowerCase();
    let y = b.name.toLowerCase();
    return x < y ? -1 : x > y ? 1 : 0;
});
console.log(obj);

//Sort object by keys
let list = {
  "bar": 15, 
  "me": 75, 
  "you": 100, 
  "foo": 116
};

const sortable = Object.keys(list).sort();
console.log(sortable);
