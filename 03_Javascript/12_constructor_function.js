/* Constructor function */

/* 
In JavaScript, a constructor function is a special type
of function that is used to create and initialize objects.
 */

/*  
const person = {
    firstName : "Tony",
    lastName : "Stark"
}

the above syntax is used to create a single object
*/

/* If we want to create many similar objects like person */

/* 
Constructor function helps in creating multiple instances 
of an object type with the same properties and methods.
*/

function Person(){
    this.firstName = "Tony",
    this.lastName = "Stark"
}

/* 
Constructor function is similar as a regular function 
but it is good practice to capitalize the first letter of 
of your constructor function
 */

/* A constructor function should be only called with the "new" operator */

/* "this" refers to the instance of object being created when Person function is called with "new" keyword*/

const person1 = new Person();

const person2 = new Person();

console.log(person1); //Person {firstName: 'Tony', lastName: 'Stark'}
console.log(person2); //Person {firstName: 'Tony', lastName: 'Stark'}


/* We can add parameters in constructor function also */

function Person1(first, last){
    this.firstName = first,
    this.lastName = last
}

const person3 = new Person1("Jeff", "Bezos");
const person4 = new Person1("Jim", "Carrey");

console.log(person3); // Person1 {firstName: 'Jeff', lastName: 'Bezos'}
console.log(person4); // Person1 {firstName: 'Jim', lastName: 'Carrey'}


/* Add properties and methods in an object */

person3.age = 52;

console.log(person3); // Person1 {firstName: 'Jeff', lastName: 'Bezos', age: 52}

console.log(person3.age); //52

console.log(person4.age); //undefined (because we have not added age property in this)



person3.greet = function(){
    console.log("Hello " + this.firstName + " " + this.lastName);
}

person3.greet(); //Hello Jeff Bezos

/* Adding method inside a constructor function */

function Person2(first, last){
    this.firstName = first,
    this.lastName = last,
    this.getFullName = function(){
        return this.firstName + " " + this.lastName;
    }
}

const person5 = new Person2("Will", "Smith");
const person6 = new Person2("Johnny", "Depp");

console.log(person5.getFullName()); //Will Smith
console.log(person6.getFullName()); //Johnny Depp

/* 
The problem with this constructor function is that when we
create new object using this constructor function the same 
method will be created in all the objects created using this
constructor function which is not memory efficient.
 */

/* 
To resolve this issue we can use the prototype of the object
so that all the objects are created from that Person, Person1
and Person2 constructor function will share the same method

 */
