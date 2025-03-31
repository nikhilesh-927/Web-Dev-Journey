/* JavaScript Object Prototype */

/* 
In JavaScript, every function and object has its own
property called prototype
 */

const person = {
    name : "Tony"
}

/* 
This is very simple object with only one property that is name
but it has one more property called prototype
*/

console.log(person); //{name: 'Tony'}

/* 
If we expand the output that is shown on console
we get the prototype object.
 */

/* 
Prototype is also an object so it has its own prototype
 */

/* 
A prototype itself is also another object. So, the prototype has its own prototype. 
This creates a prototype chain. 
*/


/* Prototype Inheritance */

/* 
We can use the Prototype to add properties and methods to a constructor function.

And objects inherit the properties and methods from a prototype.
 */

/* Let's take an example */

function Person(fName, lName){
    this.firstName = fName,
    this.lastName = lName
}

/* 
As earlier we first create instance objects then add properties 
using this syntax : person1.age or person1.address

But we can not add properties to Constructor function like this:
Person.age or Person.address this is wrong.

We can use the prototype to do this,
 */

Person.prototype.gender =  "Male";

const person2 = new Person("Tony", "Stark");
const person3 = new Person("Micheal", "Jackson");

console.log(person2); //Person {firstName: 'Tony', lastName: 'Stark'}
console.log(person3); //Person {firstName: 'Micheal', lastName: 'Jackson'}

/* 
If we expand them we will see something like this:

firstName
: 
"Tony"
lastName
: 
"Stark"
[[Prototype]]
: 
Object
gender
: 
"Male"

firstName
: 
"Micheal"
lastName
: 
"Jackson"
[[Prototype]]
: 
Object
gender
: 
"Male"
 */

/* 
We can add the new property in the prototype and this will be inherited
 to all objects created by this constructor function 
*/

console.log(person2.gender); //Male
console.log(person3.gender); //Male

/* 
gender property is not in person2 or person3 objects
but it is added in the prototypes of those objects
 */


function Person2(fName, lName){
    this.firstName = fName,
    this.lastName = lName
}

Person2.prototype.getFullName = function(){
    return this.firstName + " " + this.lastName;
}

const person4 = new Person2("Jennifer", "Garner");

const person5 = new Person2("Chris", "Evans");

console.log(person4);//Person2 {firstName: 'Jennifer', lastName: 'Garner'}

console.log(person4.getFullName());//Jennifer Garner

console.log(person5.getFullName());//Chris Evans

/* 
person4 and person5 do not have getFullName() method
since they are inheriting prototype of Consturctor
function Person2 they also have getFullName() method 
in their prototypes
 */

/* Changing prototype value */

function Person3(){
    this.name = "Tony Stark"
}

Person3.prototype.age = 30;

const person6 = new Person3();

console.log(person6); //Person3 {name: 'Tony Stark'}

Person3.prototype = {age : 52};

const person7 = new Person3();

console.log(person6.age);//30
console.log(person7.age);//52


/* 
If a prototype value is changed, then all the new objects will
have the changed property value.

All the previously created objects will have the previous value.
 */

