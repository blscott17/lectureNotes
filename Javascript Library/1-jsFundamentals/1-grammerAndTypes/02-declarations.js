/*
VARIABLES

1-grammarAndTypes
  02-declarations.js
*/

//What is a variable?
var a = 1;
var b = 2;
console.log(a + b);
//3                  - console.log output

//NOTES ON NAMEING VARIABLES:
//1) a variable MUST BEGIN with a letter, underscore, or $
//2) numbers may follow the above characters, but CANNOT come FIRST
//3) JavaScript is case sensitive -- 'hello' and 'Hello' are different variables

/* 
DECLARATIONS, INITIALIZATIONS, ASSIGNMENT
*/

/*
Declarataions refer to when we 'declare' a variable

Initializations refer to when a variable is assigned a value

Assignment refers to give a variable a value. This can be after initialization.
*/

var x;
console.log("Declaration 1:", x); //undefined
// Declaration 1: undefined

x = 10;
console.log("Initializtion 1:", x); //10
//Initializtion 1: 10

x = 33;
console.log("Assignment 1:", x); //33
//Assignment 1: 33

var y;
console.log(y); //undefined
//undefined

y = "hello";
console.log(y); //first assignment
//hello

y = "you are my friend!";
console.log(y); // show last assignment
//you are my friend!

/*
var, let const
var = 'old' keyword for variables
let = 'new' keyword for variables (intoduced with ES6) LET is more predicatble and you should use it instead of var
const = also 'new', declares IMMUTABLE or UNCHANGEABLE variables
*/

let tonight = "great!";
const elevenFifty = "Amazing!";
console.log(tonight, elevenFifty);
//great! Amazing!

tonight = "lovely!";
console.log(tonight, elevenFifty);
// lovely! Amazing!

elevenFifty = "Super!";
/*

c:\ElevenFiftyProjects\Javascript Library\1-jsFundamentals\1-grammerAndTypes\02-declarations.js:62
elevenFifty = 'Super!';
            ^

TypeError: Assignment to constant variable.
    at Object.<anonymous> (c:\ElevenFiftyProjects\Javascript Library\1-jsFundamentals\1-grammerAndTypes\02-declarations.js:62:13)
    at Module._compile (internal/modules/cjs/loader.js:1137:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1157:10)
    at Module.load (internal/modules/cjs/loader.js:985:32)
    at Function.Module._load (internal/modules/cjs/loader.js:878:14)
    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:71:12)
    at internal/main/run_main_module.js:17:47

[Done] exited with code=1 in 0.132 seconds
*/
