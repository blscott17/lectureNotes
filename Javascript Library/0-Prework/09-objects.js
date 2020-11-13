//1  Use the let keyword, create a name and add an equal sign (=).
//2 Next, add { }.
let bobAlcorn = {
 //3 name, age, vocation, and isRetired are properties or keys of the object. Each has a colon (:) preceding the value.                
 //4 Each of the properties has a value. "Bob Alcorn"   59   "Chief Operating Office"   false.
    name            : "Bob Alcorn",
    age             : 59,
    vocation        : "Chief Operating Officer",
    isRetired       : false
};

/*
Dot Notations
The dot . is an operator, like a plus sign. It gives you access to the object's properties and their values. Use the object's name, then the ., then the property name. This accesses the value of the property.
*/
console.log(bobAlcorn); //1 Prints the whole object
console.log(bobAlcorn.name); //2 Prints the value of the name property.
console.log(bobAlcorn.age); //3 Prints the value of the age property.

/*
Undefined
It's good to know about undefined. When we try to access a non-existing property, we get undefined:
*/

console.log(bobAlcorn.middleName); //undefined: middleName does not exist

let player = {
    //3 name, age, vocation, and isRetired are properties or keys of the object. Each has a colon (:) preceding the value.                
    //4 Each of the properties has a value. "Bob Alcorn"   59   "Chief Operating Office"   false.
       username        : "Tom Foolery",
       power           : "Romancing the ladies.",
       toughness       : "teddy bear"
   };
   
   console.log(player);
   console.log("What is his power? " + "It is: " + player.power);
   console.log("How tough is he? " + "Oh, he is just a " + player.toughness +  "!");

   /*
Make a friend object with at least four properties.
*/
let friend = {
    name            : "Jessica L Ross",
    streetAddress   : "4743 Gambel Road",
    city            : "Indianapolis",
    state           : "Indiana",
    zip             : "46221",
    vocation        : "Chief Cook and Bottle Washer",
    isRetired       : false
};
console.log(friend);
// Make another object called movie with three properties
let movie = {
    Title           : "Gone With the Wind",
    maleLead        : "Clarke Gabel",
    femaleLead1     : "Leslie Howard",
    femaleLead2     : "Olivia DeHavilland",
    presenting      : "Vivian Leigh",
    releaseDate     : "December 15, 1939",
    genre           : "Romance"
    };

// Make an object about anything you want (recipe, car, sports team).
let myCar = {
    nake            : "FORD",
    model           : "Escape",
    year            : "2017",
    color           : "White Gold Platinum"
    };

