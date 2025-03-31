/* JavaScript object methods */

/* 
JavaScript method is an object property that contains a  
functionn definition
*/

const person = {
    firstName : "Tony",
    lastName : "Stark",
    greet : function greet(){
        console.log("Hello amazing world!");
    }
}

/* 
In the third key we have defined a function, this is called
as object methods. This is the method of the person object
 */

person.greet(); //Hello amazing world!

/* We can use anonymous function as well as object method */

const person2 = {
    firstName : "Tony",
    lastName : "Stark",
    greet : function(){
        console.log("Hello amazing world!");
    }
}

/* We assigned greet property a function expression */

person2.greet(); // Hello amazing world!

/* 
We can declare a function outside of the object and
assign it as a method to a key in object
 */

const person3 = {
    firstName : "Tony",
    lastName : "Stark"
}

function greet(){
    console.log("Hello amazing world!");
}

person3.greeting = greet;

person3.greeting(); //Hello amazing world!

console.log(person3);

/* output */

/* {firstName: 'Tony', lastName: 'Stark', greeting: ƒ} */


/* ES6 provides one more method to declare a method for objects */

const person4 = {
    firstName : "Tony",
    lastName : "Stark",
    greet() {
        console.log("Hello amazing world!");
    }
}

person4.greet(); //Hello amazing world!


/* this keyword */

/* 
To access the other properties of an object within a method
of the same object, we can use "this" keyword. 
 */

/* Let's take an example */

const person5 = {
    firstName : "Tony",
    lastName : "Stark",
    greet : function(){
        console.log("Hello " + this.firstName);
    }
}

console.log("Hello " + person5.firstName); // Hello Tony

/* 
To access the firstName outside the object 
we use person5.firstName

but if we are inside a method of an object and we try to access the 
value of a key we use this keyword.
 */

person5.greet(); // Hello Tony

/* When we use "this" keyword within a method, it refers to the same object. */

const person6 = {
    firstName : "Tony",
    lastName : "Stark",
    getFullName : function(){
        return this.firstName + " " + this.lastName;
    }
}

console.log(person6.getFullName());//Tony Stark

/* 
We can use this keyword outside of the object also but
then it will refer to another object
 */

console.log(this);

/* output */

/* 
    Window {window: Window, self: Window, document: document, name: '', location: Location, …}
 */

/* 
If we use "this" keyword alone, or inside a function.
Then it will refer to the Global object, that is "window" object.
 */

/* When we use "this" key word in the "Event" then it
will refer to the element that receive the event. */

/* "this" is a keyword, it is not a variable, so we can't change the value of "this" */