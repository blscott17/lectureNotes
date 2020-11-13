/*
ASSIGNMENT OPERATORS

5-expressionsAndOperators
  01-assignmentOperators.js
  
Also see: https://www.w3schools.com/js/js_comparisons.asp


*/

//Assignment operator
let x = 20;
console.log(x); // x             returns: 20

//addition assignment operator
x += 1; // x = x + 1             returns: 21
console.log(x);

//subtraction assignment operator
x -= 1;
console.log(x); // x = x - 1     returns: 20

//multiplication assignment operator
x *= 2;
console.log(x); // x = x * 2     returns: 40

//division assignment operator
x /= 4; // x = x / 4             returns: 10
console.log(x);

//remainder (modulus) assignment operator
x %= 2;   //remainder of operation     
console.log(x);     //           returns: 0

//modulus operator   5/3 = 1 2/3 
console.log(5%3);   //           returns: 2
//modulus operator  25/7 = 3 4/7 
console.log(25%7);   //          returns: 4

//exponential assignment operator
x **= 2;    // last time we used x it returned 0, line 27
console.log(x);      //          returns: 0

let y = 7;
y **= 3;    // last time we used x it returned 0, line 27
console.log(y);      //          returns: 343