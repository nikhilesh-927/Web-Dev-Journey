/* Data Types in JavaScript */

/* 
    Data Types in JavaScript are Divided into 2 types :
    1. Primitive Data Types
    2. Reference Data Types

--------------------------------------------------------
    1. Primitive Data Types : Primitive Data Types hold a single value and do not have any properties or methods 

    JavaScript has following primitive data types : 

    01. String
    02. Number
    03. Boolean 
    04. Undefined
    05. Null
    06. BigInt
    07. Symbol
-------------------------------------------------------------

    2. Reference Data Types : Reference data types are more complex and they can hold collection of values
    or more complex entities

    The most common reference types in JavaScript are : 

    01. Object
    02. Array
    03. Function
 */

/* -------------------------------------------------------------------------------- */

/* Primitive Data Types */

/* String Data Types */

/* In JavaScript, a string is a sequence of zero or more characters */

/* A string starts and ends with either a single quote(') or a double quote(") */

/* JavaScript strings are for storing and manipulating text */

let firstName = "Tony"; /* Double quotes */
let lastName = 'Stark'; /* Single quotes */

/* Number Data Types */

/* Number represents an integer or floating point numbers */

let num  = 100; /* An Integer */
let num2 = 96.5; /* Floating point number */

let num3 = 96.0 /* If we write like this; then JavaScript will automatically convert it into an integer since there is only 0 after decimal */

console.log(num3);

//output : 96 

console.log(num2);

//output : 96.5

console.log(num);

//output : 100

let num4 = 96.00;

console.log(num4);

//output : 96


/* Let's take another example */

let x = 10;

console.log(x);

console.log(typeof(x));

//output:

//10

//number


x = '10';

console.log(x);

console.log(typeof(x));

//output:

//10

//string


x = "10";

console.log(x);

console.log(typeof(x));

//output

//10

//string


//we can write typeof operator this way as well : cosole.log(typeof x);

console.log(typeof x);

//output : string 


/* Boolean Data Types */

/* The boolean data type has two values : true and false */

let learning = true;

let completed = false;

console.log(learning);

console.log(typeof learning);

//output

//true

//boolean


console.log(completed);

console.log(typeof completed);

//false

//boolean


/* We can also store result of an expression as true or false booelan values */

let y = 20>10;

console.log(y);

//output

//true

y = 20<10;

console.log(y); //false

console.log(typeof y); //boolean


/* Undefined data type */

/* 
    If a variable is declared but the value is not assigned,
     then the value of that variable will be undefined. 
*/

/* 
    And the data type is also undefined.
 */

    let age;

    console.log(age); //undefined

    console.log(typeof age); //undefined

/* If we add some value to age */

age = 30;

console.log(age); //30

console.log(typeof age); //number



/* Null Data Types */

/*
    In JavaScript, null is a special value that represents 
    empty or unknown value
*/


let number = null;

console.log(number); //null

console.log(typeof number); //object

/* The type should be "null" but it says the type is object */

/* It is a known bug in javascript */

/* JavaScript defines that null is equal to undefined */

/* to check this one let's take an example */

console.log(null == undefined); //true

/* There are two more data types BigInt and Symbol */
/* Let's have a quick look on them also */

/* BigInt data type */

/* 
    BigInt represent integers that are too large for 
    the standard Number type, which is limited to safe
    integer values ranging from -2^53 + 1 to 2^53 - 1
    BigInt allows us to work with arbitrarily large
    integers without losing precision
 */

let bigInt1 = 1287382872828283989393829983938929n;
console.log(bigInt1); //1287382872828283989393829983938929n

/* Usage */

let a = 93892928393839839n; //BigInt
let b = 10n; //BigInt

let sum = a + b;

console.log(sum);

//output

//93892928393839849n


/* Symbol Data Type */

/*  
    Symbol data type is introduced in ES6(EcmaScript 2015)
    It represents a unique and immutable value. Symbols are
    often used to create unique property keeys for objects, which
    helps prevent naming collisions in object properties.

    ------> I know above definition go through your head as a bee,
            we will see it later in more details. Here, we only need to know
            how to declare and use it.
 */

    /* We can create symbol using Symbol() function */

    let mySymbol = Symbol('description');

    console.log(mySymbol); //output : Symbol('description');

    /* Creating two symbols */

    let sym1 = Symbol('mySymbol');
    let sym2 = Symbol('mySymbol');

    console.log(sym1 == sym2); //false

    /* Note ----> Each symbol is unique */
    
/* --------------------------------------------------------------------- */

/* Reference Data Types */

/* Object Data Type */

/* In JavaScript, an object is a collection of properties. */

/* Where each property is defined as a key-value pair. */

let person = {};//empty object

console.log(person); //{}

console.log(typeof person); //object

person = {
    firstName : 'Tony',
    lastName : 'Stark',
    age : 30
}

/* 
    The person is object in which firstName and lastName store stirngs
    while age stores number. Which means it can hold various data types. => Reference data types
    It can also store another object.
 */

console.log(person);

//output

/* {firstName: 'Tony', lastName: 'Stark', age: 30} */

console.log(typeof person); //object


/* Array data types */

/* Arrays are a type of object that stores a collection of values */

let number1 = [1, 2, 3, 4, 5];

console.log(number1);

//output

// [1, 2, 3, 4, 5]

console.log(typeof number1); //object


/* Function data types */

/* Functions are reusable block of code that performs a specific task  */

function masg() {
    console.log("Hello, amazing world!");
    
}

masg();

//output

//Hello, amazing world!

console.log(typeof masg); //function (it is showing function, but still it is object data type)


/* JavaScript is dynamically typed language */

/* Means we can store different data-type in the same variable. */


let m;
console.log(m); //undefined
console.log(typeof m); //undefined

/* 
    We don't need to declare the variable again.
    We can assign any type of data to that variable 
 */

m = "Tony Stark";
console.log(m); //Tony Stark
console.log(typeof m); //string

m = 100;
console.log(m); //100
console.log(typeof m); //number


m = true;
 
console.log(m); //true
console.log(typeof m); //boolean


