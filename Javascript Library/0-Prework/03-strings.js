console.log("I was born in Benton Harbor, Michigan");
console.log("I've lived in four states.");
console.log('I like Michigan the best!');
console.log("My bank account had two million bucks in it. It's gone now.");
// We use let, var or const to create a string
var tweet = "Lebron is king! Westbrook for president!"
let facebookPost = "Just thought I'd share this goofy video of my dog eating our couch.";
const username = 'jamespauloconnor';
console.log(tweet);
console.log(facebookPost);
console.log(username);
//You can use numbers in a string, but you cannot do math on them.
//Instead it will concatenate those numbers together without a space.
let age = "21";
let years = "3";
console.log(age + years);
//Challenge print your own birth city and birth state.
var birthCity = "Benton Harbor";
const birthState = "Michigan";
console.log(birthCity + ", " + birthState);
//We can mix strings and numbers together. When you do this, JavaScript turns numbers into strings. This is know as coercion.
//Write a string with two variables. Output: "I graduated from Bill Murray High School in 1994."
let gradYear = 1994;
let highSchool = "Bill Murray High School";
console.log("I graduated from " + highSchool + " in " + gradYear + ".");
//length - returns the length of a string (including spaces)
console.log(highSchool.length); 

//lower or upper case
console.log(highSchool.toUpperCase()); //BILL MURRAY HIGH SCHOOL
console.log(highSchool.toLowerCase()); //bill murray high school

console.log(highSchool.split(" ")); //splits the string into an array on each space['Bill', 'Murray', 'High', 'School' ]
console.log(highSchool.slice(0, 11)); // Extracts from highSchool[0] to and including highSchool[11]