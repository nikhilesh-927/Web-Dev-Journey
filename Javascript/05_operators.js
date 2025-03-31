/* Operators in JavaScript */

/* Operators in JavaScript are symbols */

/* That are used to perform operations on operands */

/* Operands are the values and variables */

/* For example */

10 + 20; //Here 10 and 20 are operands and + is an operator

/* Types of operators in JavaScript */

/* Arithmetic Operators */
/* Assignment Operators */
/* Comparison Operators */
/* Logical Operators */
/* String Operators */

/* ------------------------------------------------------------------------ */

/* Arithmetic Operators */

/* Arithmetic Operators are used to perform mathematical operations on operands. */

/* 01. Addition */

let sum = 5 + 3;

console.log(sum); //8

/* 02. Subtraction */

let sub = 5 - 3;

console.log(sub); //2

/* 03. Multiplication */

let mul = 5 * 3;

console.log(mul); //15

/* 04. Divison */

let div = 15 / 3;

console.log(div); //5

/* 05. Modulus (Remainder) */

let mod = 15 % 3;

console.log(mod); //0 (remainder after dividing 15 by 3)

let mod1 = 14 % 3;

console.log(mod1); //2 (remainder after dividing 14 by 3)

/* 06. Exponentiation */

let expo = 2 ** 4; // 2 x 2 x 2 x 2 = 2^4 = 16 

console.log(expo); //16

/* -------------------------------------------------------------------------------- */

/* Assignment Operator */

/* Assignment operators are used to assign values to variables. */

/* We use equal sign (=) to assign values to variables */

/* For example */

let val = 5; // here equal (=) is assignment operator.

console.log(val); //5


/* 
    while assigning values to the variables it is necessary to write
    the values to the left side of the assignment operator 
*/

/* Addition Assignment */

val += 5; //it means ----> val = val + 5;

console.log(val); //5


/* Subtraction Assignment */

val -= 3; //10 - 3 = 7

console.log(val); //7

/* Multiplication Assignment */

val *= 3; //7 * 3 = 21

console.log(val); //21

/* Division Assignment */

val /= 3; //21/3 = 7

console.log(val); //7

/* Modulus Assignment */

val %= 3; //7 % 3 = 1

console.log(val); //1

/* Exponentiation Assignment */

let val1 = 2;

val1 **= 3; //2 x 2 x 2 = 2^3 = 8

console.log(val1); //8

/* ------------------------------------------------------------------ */

/* Increment and Decrement Operators */

/* 
    The increment and decrement operators are used to 
    increase or decrease the value of a variable by 1. 
*/

/* The increment operator is ++ */

/* The decrement operator is -- */

/* 
    Increment and Decrement operators can be used in 2 ways :
    1. Prefix and 2. Postfix
 */

/* Prefix Increment and Decrement Operators */

/* For example */

let a = 10;

console.log(++a); //++a = a + 1 = 10 + 1 = 11 (value changed before it is used)
 
console.log(a); //11 (changed value)

/* 
    In the above example the operator is placed before the variable,
    and the value of the variable is incremented before it is used. 
*/

let b = 10;

console.log(--b);//--b = b - 1 = 10 - 1 = 9 (value changed before it is used)

console.log(b);//9 (changed value)

/* Postfix Increment and Decrement Operators */

let c = 10;

console.log(c++);// c = c + 1 = 10 + 1 = 11 (but it will print 10 because value is used before it is changed)

//output of above : 10

console.log(c); //11 (value changed earlier

/* 
    In this example operator is placed after the variable, 
    and the value of the variable is used before it is incremented 
*/

let d = 10;

console.log(d--);//10 (value will be changed after it is used or logged on console)

console.log(d); //9 (changed earlier)

/* ---------------------------------------------------------------------------------------------------- */

/* Comparison Operators */

/* 
    Compare operators compare two values and give back a boolean value : 
    either true or false. 
*/

/* 
    Comparison operators are useful in decision-making and
    loop programs in JavaScript. 
*/

/* Types of comparison operators */

/* < (less than) */
/* > (greater than) */
/* <= (less than or equal to) */
/* >= (greater than or equal to) */

/* == (Equal Checks) */
/* != (inequality) (not equal) (flipped value of equal checks) */

/* === (strict equality checks) (checks the data type) */

/* !== (strict inequality (!==) (flipped value strict equality checks)) */

/* Let's understand them with examples */

let i = 10;
let j = 20;

console.log(i < j); //true
console.log(i > j); //false
console.log(i <= j); //true
console.log(i >= j); //false

console.log(i == j); //false
console.log(i != j); //true

console.log(i === j); //false
console.log(i !== j); //true

/* Let's understand strict equality and inequality in more detail */

i = '10';
j = 10;

console.log(i == j); //true (it is only checking values)
console.log(i === j); //false (it checks data type first, so it will log false)

console.log(i != j); //false (again values only means 10 != 10 --> false)
console.log(i !== j); //true (first data type check then value check --> datatype of i(string) !== datatype of j(number), yes , true)


/* ------------------------------------------------------------------------------------------------------------------------------------------------ */

/* Logical Operators */

/* 
    Logical Operators perform logical operations like : 

    AND (&&),
    OR (||),
    NOT (!)

 */

/* Logical AND (&&) */

/* 
    Logical AND (&&) evaluates operands and return true only if all are true 
    
    ture && true ; //true
    true && false; //false
    false && true; //false
    false && false; ///true
*/

/* Let's understand it with example */

let m = 5;
let n = 10;

console.log(m > 0 && n > 0); //true (m > 0 means 5 > 0 which is true, also n > 0 means 10 > 0 which true so true && true = true)
console.log(m > 0 && n < 0); //false
console.log(m < 0 && n > 0); //false
console.log(m < 0 && n < 0); //false

/* Logical OR (||) */

/* 
    Logical OR (||) returns true even if only one of the multiple operands is true

    true || true; // true
    true || false; // true
    false || true; //true
    false || false; //false
 */

/* Let's understand it with example */

m = 5; 

n = 10;

console.log(m > 0 || n > 0); //true (m > 0 means 5 > 0 which is true, n > 0 means 10 > 0 which also true ====> true || true = true)
console.log(m > 0 || n < 0); //true
console.log(m < 0 || n > 0); //true
console.log(m < 0 || n < 0); //false

/* Logical NOT (!) */

/* Logical NOT (!) converts opertor to boolean and returns fipped value */

/* Let's understand it with example */

let Yes = true;
let No = false;

console.log(!Yes); //false (Yes is true so after flipping Yes become false)
console.log(!No); //true (No is false so after flipping No become true)


/* ------------------------------------------------------------------------------------------------------------------------------ */

/* JavaScript String Operators */

/* 
    In JavaScript, you can also use the + operator
    to concatenate (join) two or more strings. 
 */

/* Let's understand it with example */

console.log("hello " + "amazing world"); //hello amazing world

let k = 'JavaScript';

console.log(k); //JavaScript 

k += ' Learning';

console.log(k); //JavaScript Learning


/* -------------------------------------------------------------------------------------------------- */

/* Bitwise Operators */

/* 
    They are used for operations on binary representations of numbers.
    They are rarely used in General Web Development
*/

/* --------------------------------------------------------------------------------------------------- */

/* Operator Precedence */

/* 
    Operator precedence in JavaScript determines the order in 
    which operators are parsed concerning each other.
*/

/* Let's take examples */

let result = 2 + 3 * 4; //first 3 * 4 = 12, then 2 + 12 = 14, * has higher precedence than +s

console.log(result);//14 

/* Operator Precedence Table */

/* 
Precedence Level	Operator(s)	Description

1	                ()	Parentheses (for grouping)
2	                [], .	Array indexing, property access
3	                ++, --	Postfix increment and decrement
4	                ** (exponentiation)	Exponentiation
5	                *, /, %	Multiplication, division, modulus
6	                +, -	Addition, subtraction
7	                <<, >>, >>>	Bitwise left shift, right shift
8	                <, <=, >, >=, instanceof	Comparison operators
9	                ==, ===, !=, !==	Equality operators (loose and strict)
10	                &	Bitwise AND
11	                ^	Bitwise XOR
12	                &&	Logical AND
13	                ? :	Ternary conditional operator
14	                =, +=, -=, *=, /=, %=	Assignment operators
15	                ,	Comma operator
16	                `` (empty string)**	Some contexts may include this-level operators, such as void, and typeof, etc. as they are unary operators.

*/


/* Operator Associativity */

/* 
    Operator associativity in JavaScript defines the order 
    in which operators of the same precedence are evaluated.

    There are two types of operator associativity:

    1. Left-to-right
    2. Right-to-left
*/

/* Operator Associativity Table */

/* 
    Operator(s)	                    Associativity
    ()	                            Left-to-right
    [], .	                        Left-to-right
    ++, -- (postfix)	            Left-to-right
    ** (exponentiation)	            Right-to-left
    *, /, %	                        Left-to-right
    +, -	                        Left-to-right
    <<, >>, >>>	                    Left-to-right
    <, <=, >, >=, instanceof	    Left-to-right
    ==, ===, !=, !==	            Left-to-right
    &	                            Left-to-right
    ^	                            Left-to-right
    &&	                            Left-to-right
    ? :	                            Right-to-left
    =, +=, -=, *=, /=, %=	        Right-to-left
    ,	                            Left-to-right
    void, typeof, delete	        Left-to-right

*/


/* Left-to-right associativity */

/* 
    In left-to-right associativity, the opreators are 
    evaluated from left to right.
*/

/* Let's take example */

result = 4 - 2 - 1;

//First 4 - 2 is evaluated so 4 - 2 = 2
//Then now 4 - 2 is replaced by 2 so 2 - 1 is evaluated so 2 - 1 = 1

console.log(result);// 1

/* Right-to-left associativity */

/* 
    In right-to-left associativity the operators
    are evaluated from right-to-left
*/

/* Let's take an example */

result = 2 ** 3 ** 2;

/* 
    First 3 ** 2 is evaluated, resulting in 9
    then 2 ** 9 is evaluated, resulting in 512 
*/

console.log(result); //512
