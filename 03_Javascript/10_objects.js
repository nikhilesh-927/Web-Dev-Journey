/* Objects in JavaScript */

/* 
JavaScript object is a non-primitive data-type that allows
us to store multiple collections of data.
*/
/*

Syntax :

const object_name = {
    key1: value1,
    key2: value2
}

*/

const person = {
    firstName: "Tony",
    lastName: "Stark",
    age: 30
}

console.log(typeof person); //object

console.log(person);

//output

/* {firstName: 'Tony', lastName: 'Stark', age: 30} */

/* In above person object data is stored as key-value pair */

/* firstName is key, 'Tony' is value, lastName is key, 'Stark' is value, age is key, 30 is value */

/* These key-value pairs are called properties */

/* Key is always stored as string */

const person1 = {
    "firstName" : "Tony"
}

console.log(person1); //{firstName: 'Tony'}

/* 
In value we can store any data type string, number, arrays,
boolean, function and we can store an object also
 */


/* 
When we declare a function as a value in key : value
pair then it is known as Methods 
*/


/* Access the properties of an object */

/* syntax : object_name.key ----> it will give the value stored in key in object_name object */

const person3 = {
    firstName : "Tom",
    lastName : "Cruise",
    age: 40
}

console.log(person3.firstName); //Tom

console.log(person3.age); //40

/* Second way of accessing properties */

console.log(person3["age"]); //40

console.log(person3["firstName"]); //Tom


const person4 = {
    "first Name" : "Snoop",
    lastName : "Dogg",
    age: 50
}

/* we can not access first Name like this : person4.first Name ----> it will give error */

console.log(person4["first Name"]); //Snoop


/* Update the properties of an object */

const person5 = {
    firstName : "Dwayne",
    lastName : "Johnson",
    age : 48
}

person5.firstName = "The Rock";

console.log(person5["firstName"]); //The Rock

/* Add new properties in the object */

/* We will take the above person5 as object here */

person5.profession = "Wrestler";

console.log(person5);

/* output */

/*
{firstName: 'The Rock', lastName: 'Johnson', age: 48, profession: 'Wrestler'} 
 */

/* Deleting a property of an object */

delete person5.age;

console.log(person5);

/* Output */

/* 
{firstName: 'The Rock', lastName: 'Johnson', profession: 'Wrestler'} 
 */


/* Storing object as a value inside another object that is nested object */

const person6 = {
    firstName : "John",
    lastName : "Cena",
    age : 40,
    address : {
        street : "1234 Pine Lane",
        city : "Los Angeles",
        state : "California",
        country : "United States",
        zipCode : "90001"
    }
}

//here address key has an object type of value

console.log(person6.address.city); //Los Angeles

console.log(person6.address.country); //United States

console.log(person6.address.street); //1234 Pine Lane



/* Checking if a property exists */

/* We can use in operator to check whether a property exists in an object or not */

/* Syntax : propertyName in objectName */

console.log("firstName" in person6); //true

console.log("age" in person6); //true

console.log("country" in person6); //false

//there is no property with name country 


/* 
If we want to display all properties and values of an object
without knowing the property name then we can use for...in loop
 */

/* 
The for...in loop allows us to access each property and value
of an object without knowing the specific name of the property.
 */

for(let prop in person6){
    console.log(prop);
}

/* output */

/*
firstName
lastName
age
address
*/

/* If we want to access value stored in these keys */

const person7 = {
    firstName : "Sachin",
    lastName : "Tendulkar",
    age : 40
}

for(let prop in person7){
    console.log(person7[prop]);
}

/* Output */

/*
Sachin
Tendulkar
40
*/

/* If we want to display both key and value */

for(let prop in person7){
    console.log(prop +  " : " + person7[prop]);
}

/* Output */

/*
firstName : Sachin
lastName : Tendulkar
age : 40
*/

/* 
There are multiple ways to create an object
till now we have used only one method that is : creating an object with object literal
 */


/* Create an object with new keyword */

const person8 = new Object(); //This is another way to create new object

/* If we want to add some data in object we will do it like below: */

person8.firstName = "Cristiano";

person8.lastName = "Ronaldo";

person8.age = 35;

console.log(person8);

//output

// {firstName: 'Cristiano', lastName: 'Ronaldo', age: 35}

/* we can add data like this also:  */

const person9 = new Object({
    firstName : "Lionel",
    lastName : "Messi",
    age : 40
});

console.log(person9);

/* {firstName: 'Lionel', lastName: 'Messi', age: 40} */