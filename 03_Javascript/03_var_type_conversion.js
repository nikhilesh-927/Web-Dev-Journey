/* 
Type conversion :
1. Number(): this function converts a value to number.
2. String(): this function converts a value to string.
3. Boolean(): this function converts a value to boolean.
4. parseInt(): this function parses a string argument
                and returns an integer.
5. parseFloat(): this function parses a string argument
                and returns a floating-point number.
*/

/* Number() examples */

console.log(Number("42")); //42
 
console.log(Number("Hello")); //NaN(not a number)

console.log(Number(true)); //1

/* String() examples */

console.log(String(42)); //"42" (it may not look like this on console)

console.log(String([])); //"" (it may not look like this on console)

/* Boolean() examples */

console.log(Boolean(1)); //true

console.log(Boolean(0)); //false

console.log(Boolean("text")); //true

/* parseInt() examples */

console.log(parseInt("42")); //42

console.log(parseInt("10.5")); //10

console.log(parseInt("Hello 5")); //NaN

/* parseFloat() examples */

console.log(parseFloat("3.14")); //3.14

console.log(parseFloat("10.5px")); //10.5

console.log(parseFloat("Hello")); //NaN