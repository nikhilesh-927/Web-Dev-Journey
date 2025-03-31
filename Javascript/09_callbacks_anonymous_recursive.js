/* Callbacks in JavaScript */

/* A callback is a function passed as an argument to another function */

/* A callback function is intended to be executed after another function has finished */

/* Let's take an examples */

function display(result){
    console.log(result);
}

function add(num1, num2, myCallback){
    let sum = num1 + num2;
    myCallback(sum);
}

add(10, 20, display);//30

// remember while calling a callback function do not include () braces
// we call it with it name only
// In above example we write only display.

add(20, 30, display); // 50

/* 
So when we pass one function as an argument 
to another function it is known as callback function.
*/


/* Anonymous Function */

/* 
Anonymous functions in JavaScript, are the functions 
that are not declared with a name.
 */

let sum = function (x, y){
    return x + y;
}

/* 
Without any name function will not be stored on our memory
so we need to store anonymous functions in a variable
 */

console.log(sum(10, 15)); //25
console.log(sum(10, 30)); //40

(
function(){
    console.log("Welcome to amazing world!");
}
)(); 

//output

//Welcome to amazing world!

/*
 Remember how we call function : functionName();
 The same way in anonymous function there is no name 
 so we call it as an expression.

 Function Expression: This defines a function as part of an expression (often anonymous)
 and can be stored in a variable, passed as an argument, or called.

 Example of expressions : (2 + 3), (true || false), (5 ** 2), etc.

 In above we are calling the function immediately after the definition
 */


/*
setTimeout :  setTimeout is a built-in function that allows
us to execute specified piece of code, or function after a 
defined delay (in milliseconds).
*/


setTimeout(function(){
    console.log("Hello amazing world!");
}, 2000);

//After 2 seconds we see a message on console : Hello amazing world!

setTimeout(function(){
    console.log("Hello amazing world, again!");
}, 5000);

//After 5 seconds we see a message on console : Hello amazing world, again!



/* Recursive functions */

/* A recursive function in JavaScript is a function that calls itself */

/*
function myFunction(){
    if(condition){
        myFunction();
    }
    else{
        //stop calling recursion
    }
}

myFunction();

*/

/*
 Here myFunction is recursive function because it is calling 
 itself inside its body.
 */

/*
 A recursive function must have a stopping function
 otherwise it will be calling itself infinite times
 which may lead to errors.
  */

 function countDown(num){
    console.log(num);
    num--;
    if(num >= 0){
        countDown(num);
    }
 }

 countDown(10);

 /* output */

 /* 
 10
 9
 8
 7
 6
 5
 4
 3
 2
 1
 0
*/