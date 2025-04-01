/* 
    Function : A function is a block of code that is used
    to perform a specific task
 */

/* 
    Functions in javascript are reusable blocks of code
    that can be called from anywhere in your program.
 */

function greet() {
    console.log("Hello, amazing world!");
}

greet(); //output : Hello, amazing world!


/* Parameters and Arguments */

/* 
    Parameters : Parameters are the variables that are defined
    in a function's declaration or definition. They serve as
    placeholders for the values that the function can accept
    when it is called
 */

/* 
    Arguments : Arguments are the actual values (or expressions) that are passed
    to a function when it is called. These values are assigned
    to the corresponding parameters in the function.
 */


function greet1(firstName, lastName) { //firstName and lastName are parameters
    console.log("Hello " + firstName + " " + lastName);
}

greet1("Tony", "Stark"); //Hello Tony Stark

greet1(200, 100); //Hello 200 100

/* We can pass less or more arguments while calling a function */

/* If we pass less arguments then the rest of the parameters will become undefined. */

/* If we pass more arguments then additional arguments will be ignored */

greet1("Tony"); //Hello Tony undefined (second argument is not passed that's why it is printing undefined)

greet1("Tony", "Stark", "Mr"); //Hello Tony Stark (the third argument ("Mr") will be ignored)


/* Default Parameters */

/* 
    Default parameters in JavaScript are parameters that have a default value.
 */

/* 
This means that, if the argument is not passed to the function,
the default value will be used. 
 */

/* Let's see one example */

function sum(x, y){
    console.log(x + y);  
}

sum(10, 15); //25

sum(10); //NaN (here we are printing 10 + undefined (10 can not be added to undefined) which is not a number (NaN))

function sum1(x, y = 0){
    console.log(x + y);
}

sum1(10);//10 (by default y value will be 0 so x + y = 10 + 0 = 10)

sum1(50);//50 (50 + 0 = 50)

sum1(50, 30);//80 (50 + 30 = 80, since second argument is passed then default parameter is not used i.e. y will not be 0 it will be 30)


/* Function Return */

/* 
    The return statement can be used to return the value,
    when the function is called.
 */

/* 
    The return statement denotes that the function has ended.
    Any code after return is not executed.
 */

function add(a, b){
    return a + b;
}

let result = add(10, 20); //this function will return sum of 10 and 20

console.log("The sum is: " + result); //The sum is: 30

result = add(10, 40);

console.log("The sum is : " + result); //The sum is : 50

/* 
    Important Note:

    function add(a, b){
    return a + b;
    a * b; ----> any code after return statement will not be executed
}
 */

/* 
    In JavaScript a function can return another function
    also
 */

function fn1(x){
    function fn2(y){
        return x * y;
    }
    return fn2;
}

let res = fn1(3);
console.log(res);

/* output */
/* 
ƒ fn2(y){
        return x * y;
    }
 */

console.log(res(2)); //6 (as res holds a function with one parameter and also we passed 3 as a parameter to the first function so it will return 3 * 2 = 6)



