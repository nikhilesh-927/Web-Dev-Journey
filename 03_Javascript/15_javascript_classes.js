/* JavaScript Classes */

/* 
Classes are one of the features introduced in the ES6
version of JavaScript.
 */
/* JavaScript class is a templates for creating objects */

/*
syntax:

class ClassName{
    constructor(){

    }
}
*/

/*
 We should always add a method with name constructor
inside a class.

The first letter of the class name should be in Capital letters
*/

function Person(name, age){
    this.name = name;
    this.age = age;
}

const person = new Person("Tony Stark", 35);

console.log(person);//Person {name: 'Tony Stark', age: 35}

/* Let's create a class */

class Person1{
    constructor(name, age){
        this.name = name;
        this.age = age
    }
}

const person1 = new Person1("Tony Stark", 35);
const person2 = new Person1("Tom Hanks", 40);

console.log(person1);//Person1 {name: 'Tony Stark', age: 35}
console.log(person2);//Person1 {name: 'Tom Hanks', age: 40}

/*
 JavaScript automatically calls the constructor function
 when we create an object of a class.
 */

 /* JavaScript class methods */

 /* We can add any number of methods in JavaScript class */

 class Person2{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    greet(){
        return "Hello " + this.name;
    }

    changeName(newName){
        this.name = newName;
    }
 }

 const person3 = new Person2("Tony Stark", 35);

 console.log(person3);//Person2 {name: 'Tony Stark', age: 35}

 console.log(person3.greet());//Hello Tony Stark

person3.changeName("John Cena");

console.log(person3);//Person2 {name: 'John Cena', age: 35}

console.log(person3.name); //John Cena

 /* So in JavaScript class we can add any number of methods */


 /* Getters and Setters in JavaScript */

 /*
 Getters and Setters are special methods in JavaScript that allow you to control how properties
 are accessed and modified. 

 They are defined using get and set keywords.
 */

 /* Getter Method */

 /* 
 A getter is a method that is called when a property is accessed. 
 It can be used to do things like validate the value of the property
 or convert it to a different format.
 */

 class Person3{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    //we can add get keyword just before the method to make it getter
    get greet(){
        return "Hello " + this.name;
    }
 }

 const person4 = new Person3("The Rock", 44);

 console.log(person4); //Person {name: 'The Rock', age: 44}

 console.log(person4.greet);//Hello The Rock

 //in above we don't need to write braces() after greet


 /* Setter Methods */

 /* Write your comment here */

 class Person4{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    //we use set keyword to make a method setter method
    set changeName(newName){
        this.name = newName;
    }

 }

 const person5 = new Person4("Jackie Chan", 49);

 console.log(person5);//Person4 {name: 'Jackie Chan', age: 49}

 person5.changeName = "Tony Stark";

 /* 
 We don't need to use braces () like : 
 person5.changeName("Tony Stark") 
 */

 console.log(person5);//Person4 {name: 'Tony Stark', age: 49}
 
 /* 
 A setter is a method that is called when a property is modified.
 It can be used to do things like update the value of the property
  or perform some other action. 

  We can use the same method name as getter and setter.
 */

class Person5{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    set personName(newName){
        this.name = newName;
    }
    get personName(){
        return this.name;
    }
}

const person6 = new Person5("Selena Gomez", 42);

console.log(person6); //Person5 {name: 'Selena Gomez', age: 42}

console.log(person6.personName);//Selena Gomez

person6.personName = "Jakie Chan";

console.log(person6.personName);//Jakie Chan

/* In above we are using personName as getter as well as setter */

/* JavaScript class Expressions */

/* A class expression provides us an alternative way to define a new class */

/* 
It is similar to a function expression, but it uses the class keyword 
instead of the function keyword.

Class expressions can be named or unnamed.

If they are named, the name can be used to refer to the class later.

If they are unnamed, they can only be referred by the variable that 
they are assigned to.
*/

let Person6 = class {
    constructor(name){
        this.name = name;
    }
    getName(){
        return this.name;
    }
}

/* A class expression does not require an identifier after the class keyword */

const person7 = new Person6("Will Smith");

console.log(person7);//Person6 {name: 'Will Smith'}

