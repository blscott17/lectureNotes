//1 Use the function keyword.
//2 Name the function hello. We'll explain the parentheses later.
function hello() {
    console.log("Hello World!");
}
//3 Execute code, by calling or invoking the function
hello();
hello();
hello();
function pacersWon(){
    console.log("Pacers won!");
}
pacersWon();
function numberEntered(num){
    console.log("The number you entered was: ", num);
}
numberEntered(5);
numberEntered(4);
numberEntered(3);
numberEntered(2);
numberEntered(1);
function addAnyTwoNumbers(x, y){
    console.log(x + y);
}

addAnyTwoNumbers(4, 5);
addAnyTwoNumbers(6, 11);
addAnyTwoNumbers(7, 8);
//Declare it
function subtractTwoNumbers(firstNum, secondNum){
    console.log(firstNum - secondNum);
}

//Call it
subtractTwoNumbers(5, 7);
function getMyBattingAverage(atBats, numberOfHits){
    let myAverage = numberOfHits / atBats;
    return myAverage; 
}
console.log(getMyBattingAverage(250, 91)); // = 0.364

function div(x, y){
    let div = x / y;
    return div; // or return x + y;
}
console.log(div(12,3)); 

function phonenumber(ac, first, last){
    let acandnumber = "(" + ac + ") " + first + "-" + last;
    return acandnumber; // Or return first + " " + last;
}
console.log(phonenumber(317, 724, 7454));

function price4SetOfTiresIn(quantity, price){
    let totalPrice = 1.07 * quantity * price;
    return totalPrice; // Or return 1.07 * quantity * price;
}
console.log(price4SetOfTiresIn(4, 175));