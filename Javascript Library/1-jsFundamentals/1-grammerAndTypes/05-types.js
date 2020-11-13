/*

1-grammerAndTypes
  05-types.js

Also See:   https://www.w3schools.com/js/js_datatypes.asp  
            https://www.w3schools.com/cs/cs_strings.asp    - Interpolation explained
            https://www.w3schools.com/js/js_objects.asp
            https://www.w3schools.com/js/js_arrays.asp
*/

//Boolean
var on = true;
console.log(on);
//true

let off = false;
console.log(off);
//false

//boolean can represent: true/fals, yes/no, on/off, 0/1

//undefined usually means a variable has been declared, but it's not been assigned a value.

let grass;
console.log(grass);
//undefined

var undef = undefined;
console.log(undef);
//undefined

//null means a variable has been declared and assigned a value of null

var empty = null;
console.log(empty);
//null

/*
null and defined both represent variables with no value inside. Think of it this way--
null values are for GAG Gifts that are boxes Intentionally given with Nothin inside
(because it is a gag).
undefined values are gifts given when the person giving the gift has Forgotten to put
the gift inside (oops!)
*/

//Numbers
let MyLiteralAge = 90;
console.log(MyLiteralAge);
//90

//15 nines
let precise = 999999999999999;
console.log(precise);
//999999999999999

//16 nines
let rounded = 9999999999999999;
console.log(rounded);
//10000000000000000

//15 nines
let precise2 = -999999999999999;
console.log(precise2);
//-999999999999999

//16 nines
let rounded2 = -9999999999999999;
console.log(rounded2);
//-10000000000000000
//0.30000000000000004  //JavaScript is not great with numbers
//go to an opensource project to plug into your own work,
//or if you are do not need that much precision, use only the 
//part you need and ignore the rest.

let numbersAreHard = (0.2 * 10 + 0.1 * 10) / 10;
console.log(numbersAreHard);
//0.3

//Extra large or extra small numbers can be written with scientific (exponential) notation:
var y = 123e5;      // 12300000
var z = 123e-5;     // 0.00123
console.log(y, z);  //12300000 0.00123

//Strings
//a string is any value within quotes; JS spits out the value 
//within the quotes

let string01 = "double quotes";
let string02 = 'single quotes';
console.log(string01, string02);
//double quotes single quotes

//You can use quotes inside a string, as long as they don't match the quotes surrounding the string:
var answer1 = "It's alright";             // Single quote inside double quotes
var answer2 = "He is called 'Johnny'";    // Single quotes inside double quotes
var answer3 = 'He is called "Johnny"';    // Double quotes inside single quotes 
console.log(answer1);   //It's alright
console.log(answer2);   //He is called 'Johnny'
console.log(answer3);   //He is called "Johnny"

//string concatenation verses addition
//JavaScript evaluates expressions from left to right. Different sequences can produce different results:
let test01 = 1050 + 100 + 'Academy'
console.log(test01);
// 1150Academy

let test02 = ('Academy' + 1050 + 100);
console.log(test02);
// Academy1050100

let first = 1050 + 100;
console.log(first);
//1150       

let second = '1050' + '100';
console.log(second);
//1050100   
 
let third = 1050 + '100';
console.log(third);
//1050100  

let fourth = '1050' + 100;
console.log(fourth);
//1050100   

let fifth = 1050 + ',' '100';
console.log(fifth);
console.log(typeof fifth);

let sixth = 1050 + 'abcde';
console.log(sixth);
console.log(typeof sixth);
//1050abcde
//string

//Interpolation - lets you use strings with dynamic content 
//(they require backticks - under the tilde sign on top left of keyboard)
//String Interpolation
//Another option of string concatenation, is string interpolation, 
//which substitutes values of variables into placeholders in a string.
//ANote that you have to use the dollar sign ($) when using the string interpolation method. 
//Note that you do not have to worry about spaces, like with concatenation:
//Example A:

let firstName = "John";
let lastName = "Doe";
let name = `My full name is: ${firstName} {lastName}`;
console.log(name);
// My full name is: John {lastName}

//Example B:

let firstName = "John";
let lastName = "Doe";
let name = `My full name is: ${firstName} ${lastName}`;
console.log(name);
// My full name is: John Doe

//Example 1:  Note, whatever is within the curley braces gets transforms to a string
let age = 32;
let string = `my age is: ${age}`;
console.log( string);
//my age is: 32

//Objects - a container that stores property names and their values
//(it can hold multiple data types)
//Denoted by key:value pairs within curley braces {} and separated by commas like this:

let hulk = {
    color: 'green',
    age: 42,
    isStrong: true
}
console.log(hulk);              //{ color: 'green', age: 42, isStrong: true }

//using dot notation to grab specific parts of an object
console.log(hulk.color);        //green
console.log(typeof hulk);       //object  - note: arrays return TypeOf = object

//Arrays store multiple values in an ordered way. They also hold multiple data types 
//with single quotes, separated by commas within square brackets [].

var stepsToBrushTeeth = ['uncap toothpaste', 'squeeze toothpaste', 'rinse brush', 'brush', 'clean toothbrush'];
// array indexing          0                  1                     2              3        4
console.log(stepsToBrushTeeth);
/*
[
  'uncap toothpaste',
  'squeeze toothpaste',
  'rinse brush',
  'brush',
  'clean toothbrush'
]
*/
console.log(stepsToBrushTeeth[1]);
// squeeze toothpaste

console.log(stepsToBrushTeeth[5]);  
// undefined - because we do not have a 5th item because of zero based indexing


