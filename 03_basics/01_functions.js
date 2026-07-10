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

//Functions with arrays and objects:
//In e-commerce websites there is a 'shopping cart' where user can keep on adding many items. The exact no of items is not known to us,
//in that case Rest/Spread operators are used
function calculateCartPrice(...num1){ //function calculateCartPrice(value1, value2,...num1) -> In this case:[ 4000 ]
    return num1
}
console.log(calculateCartPrice(200,300,4000)); //[ 200, 300, 4000 ] -> Return array of the numbers passed as the arguments
//Passing an object to a function
const user = {
    username : "hitesh",
    price : 500
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}
//handleObject(user)
//Another method:
handleObject({
    username: "Sam",
    price: 500
})

//Passing Arrays to a function
const myArray = [200, 300, 400 , 500]
function handleArray(array){
    console.log(`The second element of the object is: ${array[2]}`);    
}
//handleArray(myArray)
//Another method
handleArray([100,200,3,4,6])


