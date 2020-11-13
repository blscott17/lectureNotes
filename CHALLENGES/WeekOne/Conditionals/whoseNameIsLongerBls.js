/*
CHALLENGE 1
Who's name is longer?


GOLD
In the console log include how many letters difference there are between the names.
Example Result: Adam's name is shorter than mine by 4 letters.
There is also one additional case that should be handled that has not been mentioned so far. See if you can add that to your conditional!
 */
/*BRONZE
Write two variables. One will store your name and another will store a friend's name.
Find out what property you can use to check how long the names are. Console log how 
many letters are in each name.
*/
 let myName = "Bonita Scott";
 let myFriendsName = "Raeleigh Jo Wade Scott";
 console.log(myName);
 console.log(myFriendsName);
 let myNameLen = myName.length;
 console.log(myNameLen);
 let myFriendsNameLen = myFriendsName.length;
 console.log(myFriendsNameLen);

 /*SILVER and GOLD except
 Expand on what you have already done and write a conditional to see who has the longer name. Using string interpolation console log who's name is longer. 
Example Result: My name is longer than Adam's.
*/
 if (myNameLen > myFriendsNameLen) {
     sentence = `My name is longer than" + ${myFriendsName}`;
     console.log(sentance);
     //console.log("My name is longer than myFriendsName's by,", myNameLen - myFriendsNameLen)
 } else {
     sentance = `${myFriendsName}'s name is longer thant ${myName} by, (${myNameLen} - ${myFriendsNameLen}) letters `
     //console.log("myFriendsName's full name is longer than myName by,", myFriendsNameLen - myNameLen)
 }

 if (myNameLen > myFriendsNameLen) {
    console.log("My name is longer than friendName's by,", myNameLen - myFriendsNameLen + " letters.")
    //let mineIsLonger = new Boolean(true);
} else if (myFriendsNameLen > myNameLen) {
    console.log("Raeleigh's full name is longer than mine. by,", myFriendsNameLen - myNameLen + " letters.")
    //let myFreindsIsLonger = new Boolean(true);
}
 else {
    console.log("The names are eqal in length.")    
 }

/*GOLD 
In the console log include how many letters difference there are between the names.
Example Result: Adam's name is shorter than mine by 4 letters.
There is also one additional case that should be handled that has not been mentioned so far. See if you can add that to your conditional!
*/
 
