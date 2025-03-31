/* Loops in JavaScript */

/* In programming, loops are used to repeat a block of code */

/* 
    For example: If we want to display a message 100 times
    then we can use a loop 
*/

/* --------------------------------------------------------------------------------------------- */

/* For loops */

for(let i = 1; i <= 10; i++){
    console.log("Ironman");
}

//output : 10 Ironman (the browser will collapse 9 more occurences of Ironman and it will show as 10 in front
// of Ironman indicating that Ironman is printed 10 times)

for(let i = 1; i <= 10; i++){
    console.log(i);
}

/* 
    At first i = 1, it prints  1 then i++ means i will be incremented i = i + 1 = 1 + 1 = 2
    Now i = 2, it prints 2 then again i++ = i + 1 = 2 + 1 = 3...
    ..and so on till i <= 10, as soon as i become 11 loop execution will stop
*/

//output : 
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10

let coding = ["JavaScript", "Python", "CPP"];

/* 
Array elements are stored on different indexes, like this:
coding[0] = "JavaScript"
coding[1] = "Python"
coding[2] = "CPP"
*/

for(let i = 0; i < coding.length; i++){
    console.log(coding[i]);
}

/* 
We used stopping condition as coding.length because 
the last index will be the length of array - 1, 
in above example lenght of array is 3, and the last index is 2
so length of array - 1 = last index, that's why we used coding.length
*/

//output : 

// JavaScript
// Python
// CPP



/* 
Nested Loops : We can also use a loop inside another loop
this is called nesting of loops
 */

for(let i = 0; i < 5; i++){
    console.log(i);
    for(let j = 0; j <= 3; j++){
        console.log("Inner loop " + j);
    }
}

//output
/* 
0
Inner loop 0
Inner loop 1
Inner loop 2
Inner loop 3
1
Inner loop 0
Inner loop 1
Inner loop 2
Inner loop 3
2
Inner loop 0
Inner loop 1
Inner loop 2
Inner loop 3
3
Inner loop 0
Inner loop 1
Inner loop 2
Inner loop 3
4
Inner loop 0
Inner loop 1
Inner loop 2
Inner loop 3
*/


/* -------------------------------------------------------------------------------- */

/* while loop */
let i = 0;

while(i <= 10){ //as soon as i = 11 the loop stops
    console.log(i);
    i++;
}

/* output */

/* 
 0
 1
 2
 3
 4
 5
 6
 7
 8
 9
 10
*/

/* do while */

let m = 1;

do{
    console.log(m);
    m++;
}while(m <= 5);

//do while executes at least once because first the block of code executes then the condition is being checked

/* output */
/* 
1
2
3
4
5
*/

/* There are some more loops like : for...in, for...of, and forEach loops we will see them later */


/* --------------------------------------------------------------------------------------------------------------------- */

/* break and continue statement */

for(let i = 1; i <= 5; i++){

    if(i == 3){ //as soon as i become 3 loop stops its execution
        break;
    }

    console.log(i);
}

//output

//1
//2

/* 
continue statement is used to skip the current iteration
of the loop and the control flow of the program goes to the next iteration
*/

for(let i = 1; i <= 5; i++){

    if(i == 3){ //as soon as i become 3 loop skips execution of code below continue statment
        continue;
    }

    console.log(i);
}

//output

//1
//2
//4
//5

//3 will not be prited as it will be skipped