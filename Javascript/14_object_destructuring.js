/* Object Destructuring */

/* 
Object destructuring in JavaScript is a feature that allows us to extract he properties
of an object into variables. 
 */

/* 
This can be useful for assigning the properties of an object
to variables in a single statement
*/

/* Let's understand it with an example */

const person = {
    firstName : "Tony",
    lastName : "Stark"
}


let fName = person.firstName;
let lName = person.lastName;

console.log(fName);//Tony
console.log(lName);//Stark

/* 
The above is traditional way to assign properties to variables.

ES6 provides an alternative method to assign properties to object variables
 through object destructing syntax.

 Object destructuring syntax:
 let {property1 : variable1, property2 : variable2} = object;
 */

 let {firstName : fname, lastName : lname} = person;

 console.log(fname);//Tony

 console.log(lname);//Stark


/* 
We can further simply this syntax. Suppose we want to add
the variable name same as object's property name.

Like object property names are : firstName and lastName and 
we want our variables names also to be firstName and lastName
 */

/*

let {firstName, lastName} = person;

console.log(firstName);//Tony
console.log(lastName);//Stark

*/

/* 
If we try to add a variable name and the corresponding
property name is not in the object. Let's see what happens
 */

/*
let {firstName, lastName, age} = person;

console.log(age);//undefined (because age property is not exist in object)
*/

/* Using default value */

/*
let {firstName, lastName, age = 18} = person;
*/

/* 
if age property exist in person object age will be assigned 
the same value but if age doesn't exists in person the default
value = 18 is assigned to age.
 */

// console.log(age); //18 (age doesn't exist in person object)

//suppose we add age property to person

const person2 = {
    firstName : "Tony",
    lastName : "Stark",
    age : 52
}

/*

let {firstName , lastName, age = 18} = person2;

console.log(age); //52 (as age is present in person2 object)

*/

/* Object literal syntax extensions in ES6 */

let firstName = "Tony";
let lastName = "Stark";


 const person3 = {
    firstName, 
    lastName
 }

 console.log(person);//{firstName: 'Tony', lastName: 'Stark'}
 