/*

    Variables : Variables are containers that holds values like numbers, strings etc.

    JavaScript provides three keywords for declaring variables:

    1. var, 2. let, 3. const

    we can declare a variable like this:

    var X --> where var = keyword for declaring variable and X = identifier (name of the container which hold data value)
    let X
    const X

    1. var --> var is the traditional keyword for declaring variable

    2. let --> let is introduced in ES6. When a variable is defined using let it is limited to block in which it is defined.

    3. const --> Also introduced in ES6. When a variable is initiazed with const keyword it can not be reassigned or changed.


*/

/* var --> the traditional way of declaring variables in javascript */

/* Note : Variable names or identifier must start with $(dollar), _(underscore), or alphabet(A, a, b, C...) */

var x = 30;

var $x = "hello world";

var _x = 50;


/* Note JavaScript is case sensitive */

var firstName = "Stackoverflow";

var firstname = "Stackunderflow";

console.log(firstName);

console.log(firstname);

// output
// Stackoverflow
// Stackunderflow

/* let keyword --> it is not accessible outside the block it is declare */

let m = 10;

if(m > 5){
    let n = 20;
    console.log(n); //20
    console.log(m); //10
}

/* The content inside {} (curly braces) is block, means we declare n inside a block */

// console.log(n);

/* The below error is shown on the console */
/* Uncaught ReferenceError: n is not defined */

/* We can not access outside if block */


/* const --> when a variable is declared as const it can not be reassigned to a new value */

const a = 4;
console.log(a);
 
// a = 5;

/* The below error is shown on console */
/* TypeError: Assignment to constant variable */

/* We can not reassign a value to a const variable again */


/* Scope */

/* Scope defines the visibility of variables within different parts of our code. */

/* In JavaScript there are three types of scope : 1. Golbal scope, 2. Function scope, 3. Block scope */


/* 1. Global Scope : The global scope is outermost scope javascript program. */
/* Variables and functions declared in the global scope are visible from anywhere in the program */

var l = "Hello, amazing world!"; // Global variable

function example(){
    console.log(l);
}

example();

console.log(l);


/* 2. Function Scope : Function scope is created when a function is declared. */
/* Variables and functions declared in a function's scope are only visible within that function. */

function example1(){
    var fs = "Hello, amazing world! i am function scope";
        console.log(fs);
}

example1();

// console.log(fs);

/* We will be shown the below error because we are trying to access the fs outside the function scope */
/* var&scope.js:113 Uncaught ReferenceError: fs is not defined */


/* 3. Block Scope :  Block scope refers to the visibility of variables and functions within a block of code. */

/* Block of code is a group of statements that are enclosed in curly braces ({}) */

/* Variables and functions declared in a block's scope are only visible within that block */

function example2(){
    if(true){
        let bv = "Hello block";
        console.log(bv);
    }
    // console.log(bv);

    /* The above code give below error because we are accessing a block variable outside the block scope */
    /* var&scope.js:130 Uncaught ReferenceError: bv is not defined
    at example2 (var&scope.js:130:17)
    at var&scope.js:133:1 */
}

example2();

// console.log(bv);

/* The above code will give below error because we are accessing a block scoped variable outside its scope */

/* Uncaught ReferenceError: bv is not defined
    at var&scope.js:140:13 */