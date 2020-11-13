/*
CHALLENGE 2
Types Challenge

BRONZE
Create an Object that contains a string, number, boolean, and object.
Console.log the type of one of the values in the object.
The following example creates myHonda with three properties. Note that the engine property is also an object with its own properties.

var myHonda = {color: 'red', wheels: 4, engine: {cylinders: 4, size: 2.2}};
*/

let myObject = {
  addr: 1700,
  street: "Madison Avenue",
  correctAddr: true,
  resident: { name: "John Doe", placeOfWork: "DelcoRemy", yearsSeniority: 25 },
  emptyProperty: null,
};

console.log(typeof myObject.resident);
console.log(typeof myObject["addr"]);
console.log(typeof myObject.street);
console.log(typeof myObject.emptyProperty);
console.log(myObject);
/*
SILVER

Write a conditional that checks the type of one of the values stored in the object
and console logs the data type. If the value is not a string, number, boolean, or 
object console log 'What are you?!'
*/

if (typeof myObject.addr === "string") {
  console.log(myObject.street);
}

/* 
MY ATTEMPT AT Silver
if ((typeof myObject.addr !== 'number') || (typeof myObject.addr!== 'string') || (typeof myObjecg) ) {
    console.log(myObject.addr);
    this works   if (varType === String || Object || Boolean || Number)

}
*/
/*
CHALLENGE 2
Types Challenge


BRONZE


Create an Object that contains a string, number, boolean, and object.
Console.log the type of one of the values in the object.
*/

let myObject = {
  string: "String",
  number: 15,
  boolean: true,
  object: {},
  undefined: undefined,
};

// console.log(typeof myObject.boolean)

// --------------------------------------------------------------------------
/*
SILVER


Write a conditional that checks the type of one of the values stored in the object
and console logs the data type. If the value is not a string, number, boolean, or object console log 'What are you?!'
*/

let value = typeof myObject.undefined;

if (value === "string") {
  console.log("The value is a string");
} else if (value === "number") {
  console.log("The value is a number");
} else if (value === "boolean") {
  console.log("The value is a boolean");
} else if (value === "object") {
  console.log("The value is an object");
} else {
  console.log("What are you?");
}
