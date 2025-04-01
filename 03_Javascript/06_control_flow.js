/* Control flow statements:

    They are used to control the flow of execution in a JavaScript program.
    They are used to make decisions, execute loops, and handle errors.

    There are three types of control flow statements in JavaScript:
    1. Conditional Statements
    2. Loops
    3. try/catch statments
*/

/* --------------------------------------------------------------------------------------- */

/* Conditional Statements */

/* Conditional Statements are used to execute different actions based on different conditions. */

/* 
    if statment,
    else statement,
    else if statement
    are three most common types of conditional statments
*/

/* 
    if statement : if statement is used to execute a block of code
    when a specific condition is true.
*/

/* Let's take an example */

if(true){
    console.log("execute"); //execute
}

/* In above example the condition is true that's why execute is shown on the log */

if(false){
    console.log("execute nothing");
}

/* In above example the condition is false that's why the code written inside the block is skipped */

/* Let's take one more example */

let age = 20;

if(age > 18){  //the condition is true
    console.log("You are eligible for vote!"); //You are eligible for vote!
}

age = 16;

if(age > 18){  //the condition is false
    console.log("You are eligible for vote!"); //skipped block of code
}

let country = "India";
age = 20;

if(age >= 18 && country == "India"){ //the condition is true
    console.log("You are from India and you can get a driver's license");
    //You are from India and you can get a driver's license
}


age = 17;

if(age >= 18 && country == "India"){ //the condition is false, false && ture = false
    console.log("You are from India and you can get a driver's license");
    //this block of code will be skipped
}


/* if else statements */

/* 
    if else statements are conditional statements that are used to 
    execute a block of code when a condition is true otherwise if the
    condition is false the another block of code is executed.
*/

/* Let's take an example */

age = 16;

if(age >= 18){
    console.log("You are eligible for vote!");
}

else{
    console.log("You are not eligible for vote!");
}

//output : You are not eligible for vote!

// the code of else block is execute because 
// the condition age >= 18 is false as 16 is not >= 18

age = 19;

if(age >= 18){
    console.log("You are eligible for vote!");
}

else{
    console.log("You are not eligible for vote!");
}

//output : You are eligible for vote!

// the code of if block is execute because 
// the condition age >= 18 is true as 19 >= 18 is true

/* else if condition */

age = 17;

if(age >= 18){ //false
    console.log("You are eligible for vote!");
}

else if(age >= 16){ //17 >= 16 so true
    console.log("You are 2 years smaller to vote!");
    
}

else{ 
    console.log("You are not eligible for vote!");
}

//output
// You are 2 years smaller to vote!

age = 15;

if(age >= 18){ //false
    console.log("You are eligible for vote!");
}

else if(age >= 16){ //false
    console.log("You are 2 years smaller to vote!");
    
}

else{ //this block of code will be executed
    console.log("You are not eligible for vote!");
}

//output

///You are not eligible for vote!


/* ------------------------------------------------------------------------------------------ */

/* Switch */

/* 
    The switch statement in JavaScript is a conditional statement 
    that is used to execute a block of code based on the value of an expression
*/

/* Let's understand it with one example */

let value = 42;

switch (typeof value) {
    case "number":            //this is true
        console.log("Number");
        break;
    case "string":
        console.log("String");
        break;
    case "boolean":
        console.log("Boolean");
        break;
    default:
        console.log("Other");
        break;
}

//output : Number

value = "Tony";

switch (typeof value) {
    case "number":            
        console.log("Number");
        break;
    case "string":              //this is true
        console.log("String");
        break;
    case "boolean":
        console.log("Boolean");
        break;
    default:
        console.log("Other");
        break;
}

//output : String

value = true;

switch (typeof value) {
    case "number":            
        console.log("Number");
        break;
    case "string":              
        console.log("String");
        break;
    case "boolean":             //this is true
        console.log("Boolean");
        break;
    default:
        console.log("Other");
        break;
}

//output : Boolean

value = []; //empty array

switch (typeof value) {
    case "number":            
        console.log("Number");
        break;
    case "string":              
        console.log("String");
        break;
    case "boolean":             //this is true
        console.log("Boolean");
        break;
    default:
        console.log("Other");
        break;
}

//since none of the cases are true so the code in default case will be executed
//output : Other

/* Let's take one more example of switch case statement */

let dayName = 2;

switch (dayName) {
    case 1:
        dayName = "Sunday";
        break;
    case 2:
        dayName = "Monday";
        break;
    case 3:
        dayName = "Tuesday";
        break;
    case 4:
        dayName = "Wednesday";
        break;
    case 5:
        dayName = "Thursday";
        break;
    case 6:
        dayName = "Friday";
        break;
    case 7:
        dayName = "Saturday";
        break;
    default:
        dayName = "Invaid day number";
        break;
}

console.log("The day is " + dayName); // The day is Monday


dayName = 7;

switch (dayName) {
    case 1:
        dayName = "Sunday";
        break;
    case 2:
        dayName = "Monday";
        break;
    case 3:
        dayName = "Tuesday";
        break;
    case 4:
        dayName = "Wednesday";
        break;
    case 5:
        dayName = "Thursday";
        break;
    case 6:
        dayName = "Friday";
        break;
    case 7:
        dayName = "Saturday";
        break;
    default:
        dayName = "Invaid day number";
        break;
}

console.log("The day is " + dayName); // The day is Saturday


dayName = 9;

switch (dayName) {
    case 1:
        dayName = "Sunday";
        break;
    case 2:
        dayName = "Monday";
        break;
    case 3:
        dayName = "Tuesday";
        break;
    case 4:
        dayName = "Wednesday";
        break;
    case 5:
        dayName = "Thursday";
        break;
    case 6:
        dayName = "Friday";
        break;
    case 7:
        dayName = "Saturday";
        break;
    default:
        dayName = "Invaid day number";
        break;
}

console.log("The day is " + dayName); // The day is Invalid day number


/* ----------------------------------------------------------------------------------------------------------- */

/* Ternary Operatore */

/* 

age = 20;

if(age >= 18){
    console.log("You are eligible for vote!");
}

else{
    console.log("You are not eligible for vote!");
}

*/

// We can write above code using ternary operator.

/* Let's see how we write it */

/* 
    Syntax : condition ? code when codition is true : code when condition is false
*/

age = 20;

let msg = age >= 18 ? "You are eligible for vote!" : "You are not eligible for vote!";

console.log(msg);

//output : You are eligible for vote!

