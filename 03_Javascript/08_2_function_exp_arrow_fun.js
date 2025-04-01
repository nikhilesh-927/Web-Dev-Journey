/* 
1. Function Expression : It is a way to define a function in
JavaScript. It involves defining a function and assigning 
it to a variable.

2. Arrow Functions : These are more concise syntax for 
writing function expressions introduced in ES6.
 */

/* Function expressions */

const add = function(a, b){
    return a + b;
}

console.log(add(5, 3)); //8
console.log(add(10, 15)); //25


/* Arrow functions */

const multiply = (a, b) => {
    return a * b;
}

console.log(multiply(10, 20)); //200

/* Simplified arrow functions */

const multiplySim = (a, b) => a * b;

console.log(multiplySim(20, 30)); //600

