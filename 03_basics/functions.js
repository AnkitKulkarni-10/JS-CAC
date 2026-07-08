/*
Functions in JavaScript are 'reusable blocks of code' designed to perform specific tasks.
They help organize code, eliminate repetition, and execute only when they are called (invoked)
*/

function myName(){
console.log("H");
console.log("I");
console.log("T");
console.log("E");
console.log("S");
console.log("H");
}
//myName() //execution
//Function to add two numbers:
// function addition(number1, number2){ //number1 and number2 are parameters
// console.log(number1+number2);
// }
//const result = addition(3,4) //3&4 are arguments
//console.log(result); //undefined (Because console.log() does not return any value to the result)


function addition(number1, number2){ //number1 and number2 are parameters
// let result = number1 + number2
// return result
return number1 + number2
//Any code written after the return statement "DOES NOT EXECUTE"
}
const result = addition(3,4)
//console.log("result:", result);

function loginUserMessage(username){ //Can aslo write function loginUserMessage(username = "sam") -> When user does not input anything -> sam just logged in! When they do, sam get overwritten by the string input by the user   
    if(username===undefined) //if(!undefined) also means the same thing
    {
        console.log("Please enter a username!");
        return //So here, anything after this return statement will not work when user does not input a username
        
    }
    return `${username} just logged in!` 
}
console.log(loginUserMessage()); //hitesh just logged in!
//When you dont pass anything here, -> undefined just logged in





