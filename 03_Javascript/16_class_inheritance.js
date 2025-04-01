/* JavaScript Class Inheritance */

/* JavaScript class Inheritance allows us to create new class
on the basis of already exisitng class. */

/* Using class inheritance, a class can inherit all the
methods and properties of another class */

/* Inheritance is a useful feature that allows the code reusability.
To create a class inheritance, we use extends keyword*/

class Person{
    constructor(name){
        this.name = name;
    }
    greet(){
        console.log("Hello " + this.name);
    }
}

class Student extends Person{
   
}

/* Student will inherit all the methods and properties of Person class */

const student1 = new Student("Peter");

console.log(student1);//Student {name: 'Peter'}

student1.greet();//Hello Peter

/* JavaScript super method */

/* The super() method used inside a child class
denotes its parent class. */

class Student1 extends Person{
    constructor(name){
        super(name);
    }
}

const student2 = new Student1("Parker");

console.log(student2);//Student1 {name: 'Parker'}

student2.greet();//Hello Parker


/* Method or property overriding */

/* 
If the parent class and child class has the same method
or property name. In this case, when we will call the 
method or property of an object of the child class, It will 
override the method or property of the parent calss.
This is known as mehtod overriding or shadowing method.
*/


class Parent{
    constructor(name){
        this.name = name;
    }
    greet(){
        console.log("Hello Parent " + this.name);
        
    }
}

class Student2 extends Parent{
    greet(){
        console.log("Hello Student " + this.name);
        
    }
}

const student3 = new Student2("Andrew");

student3.greet(); //Hello Student Andrew

/* Here the method of the child class overrides the method
of parent class. This is known as method overriding */


/* JavaScript static methods */

/* Static methods are bound to a lass, not the instances
of that class. We can not call a static method on an object,
It can be called only on the class. */

class Person2{
    constructor(name){
        this.name = name;
    }
    static greet(){
        console.log("Hello!");
    }
}

const person1 = new Person2("Flash");

//person1.greet(); //TypeError: person1.greet is not a function

Person2.greet(); //Hello!

/* If we want to use the object's properties inside the
static method, then you can pass the object as a parameter */

class Person3{
    constructor(name){
        this.name = name;
    }
    static greet(x){
        console.log("Hello " + x.name);
    }
}

const person2 = new Person3("Brad");

Person3.greet(person2);//Hello Brad


/* JavaScript private methods */

/* Private methods are accessible only within the class.
It means we can not call the private methods outside of that class */

/* By default, methods of a class are public.
To make the methods private, we need to start the
method name with hash(#) */


class Person4{
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    fullName(){
        return this.firstName + " " + this.lastName;
    }

    //we used # so the below method is private method
    //it can not be accessed outside the class

    #newFullName(){
        return this.firstName + " " + this.lastName;
    }

    /* To access private method */
    display(){
        console.log(this.#newFullName());
    }
    /* We can call dispaly method outside the class */
}

const person3 = new Person4("Peter", "Parker");

console.log(person3.fullName());//Peter Parker

//console.log(person3.newFullName()); //TypeError: person3.newFullName is not a function

/* The above error is shown when we try to access a private method */

person3.display();//Peter Parker


/* Private static methods */

class Person5{
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    //when we use static keyword before a private method
    //it will become static private method

    static #fullName(x){
        return x.firstName + " " + x.lastName;
    }
    //we can not call the static method on the object
    //we can only call it on the class 

    display(){
        console.log(Person5.#fullName(this));
    }

}

const person4 = new Person5("Cody", "Rhodes");

person4.display();//Cody Rhodes




