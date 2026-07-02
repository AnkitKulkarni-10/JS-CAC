const score = 400
//console.log(score);
const balance = new Number(100) //Creates a number object using 'new' keyword
//console.log(balance);
//Important methods
//console.log(balance.toString().length);
//console.log(balance.toFixed(2));//Shows the number upto 2 decimal places here i.e 100.00
// IMP: toPrecision()
const otherNumber = 23.8966
//console.log(otherNumber.toPrecision(3)); //toPrecision focuses on the precision value set by you. Here it considers 3 numbers -> 23.9
// Consider the number = 123.8966 and toPrecision(3) is taken -> 123.9

const hundreds = 1000000
//console.log(hundreds.toLocaleString('en-IN'));// Commas are added to the number according to the chosen standard. Default -> USA

//-------------------------Maths-----------------------------------
/*
console.log(Math);
console.log(Math.abs(-4)); //Absolute value i.e -ve --> +ve
console.log(Math.round(4.6));//Round of to nearest integer
console.log(Math.ceil(4.2)); // 5
console.log(Math.floor(4.7));//4
console.log(Math.floor(4.7));//4
console.log(Math.min(4,3,6,8));
console.log(Math.max(4,3,6,8));
*/

//Math.random()-> Generates a random value between 0 and 1
console.log(Math.random());
console.log((Math.random()*10) +1);
console.log(Math.floor(Math.random()*10) +1);
//Important formula to control the max and min values from Math.random()
const min = 1
const max = 6
console.log(Math.floor(Math.random() * (max - min + 1))+ min);













