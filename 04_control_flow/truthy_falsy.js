//In JavaScript, truthy and falsy values determine how "non-boolean data types" behave when evaluated inside a conditional context like an "if statement or a loop."
// JavaScript uses type coercion to implicitly convert these values into a temporary boolean true or false.
const userEmail = [] //Will give true
if(userEmail){
    console.log("Got the user email");
    
}else {
    console.log("Dont have user email");
    
}
/*The Falsy Values:
There are exactly "eight" falsy values in JavaScript. When encountered in a boolean context, they always evaluate to false.
It is easiest to memorize these eight, because absolutely everything else is truthy 
false, 0 , -0 , BigInt 0n, "" or '', null , undefined , NaN */
//Truthy values:
// "0", "false", " ", [], {}, function (){}

//To check if an array is empty:
/* 
if(userEmail.length === 0){
    console.log("Array is empty");
    
}
*/
// To check if Object is empty:
const myObj = {}
if(Object.keys(myObj).length ===0){ //Object.keys converts the passed objects keys into an array
    console.log("Object is empty");
    
}

//Nullish Coalescing Operator (??) : null , undefined
/*The nullish coalescing operator (??) is a logical operator in JavaScript that returns its right-hand side operand,
when its left-hand side operand is null or undefined. Otherwise, it returns its left-hand side operand*/

let val1
//val1 = 5 ?? 10   5 in this case will be printed to console
//val1 = null ?? 10  10 in this casw will be printed to the console
//val1 = undefined ?? 15
val1 = undefined ?? 10 ?? 15 // -> Here the output will be 10 (First value to the right-side of the operator)
//console.log(val1);

//Ternary operator in JS (Shorthand for if-else)
// condition ? true : false
const teaPrice = 100
teaPrice>= 80 ? console.log("More than 80") : console.log("Less than 80");


