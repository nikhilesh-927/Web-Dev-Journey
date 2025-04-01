//Syntax and Basics

//single line comment

/* 
multiline
comment
 */

/* 
camelCase : First letter is small letter and subsequent letters are Capital.
snake_case : all letter are lowercase and words are seperated by underscore.
PascalCase : similar to camelCase but first letter is also capitalized.
 */

let camelCaseVariable = "I am camel case variable";
let snake_case_variable = "I am snake case variable";
let PascalCaseVariable = "I am pascal case variable";

console.log(camelCaseVariable);
console.log(snake_case_variable);
console.log(PascalCaseVariable);


alert("This is an alert message!");

let userName = prompt("Please enter your name : ");

console.log("Hello, " + userName + "!");

let userChoice = confirm("Do you want to proceed?");

if(userChoice){
    console.log("User chose to proceed.");
}
else{
    console.log("User cancelled.");
}
