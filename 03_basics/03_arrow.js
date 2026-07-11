//Arrow functions and this keyword
const user = {
    username: "hitesh",
    price: 999,
    welcomeMessage : function () {
        console.log(`${this.username}, welcome to the website `); //To refer the "Current Context"
        //Important:
        console.log(this); //Prints the object with current context (Current key:value pairs of the object)
        
        
    }

}
/*
user.welcomeMessage() //hitesh, welcome to the website 
user.username = "Sam"
user.welcomeMessage() //Sam, welcome to the website (Due to the use of 'this' keyword, the current context is considered-> Sam in this case)
*/
//console.log(this); //{} -> (Empty, as in VScode we are in Node.js envionment, but in inspect element (cosnole) we see 'Window')

//Now: Arrow Functions:
/*
function one (){
    let username = "Hitesh"
    console.log(this); //By running this as is, produces a lot of values in the output
    //console.log(this.username); undefined -> We cannot use this keyword for functions (Possible for objects)
    
    
}
one()
*/
//Arrow function syntax: () => {}
const chai = ()=>{
    let username = "Hitesh"
    console.log(this);  //{}
    
}
//chai()

// const addTWo = (num1, num2) => {
//     return num1+num2
// }

//(Implicit return) -> No need to use curly braces and return statement:
//const addTwo = (num1, num2) => num1+ num2 //Used a LOT in React.js
//console.log(addTwo(3,4));

//To return an Object, we need to use the paranthesis
const addTwo = (num1, num2) => ({username : "Hitesh"})
console.log(addTwo(3,4));

/*
FOR INTERVIEW QUESTION ON ARROW FUNCTION VS NORMAL FUNCCTION:
Here is exactly how you can script your answer:
1. The Core Rule (The Elevator Pitch)"The fundamental difference is that normal functions have dynamic this, while arrow functions have lexical this.
"Normal functions care about how and where they are called. Arrow functions care about where they were defined.
They permanently inherit this from their outer surrounding scope.
2. Debunking the Object Myth: "A common trap is thinking that JavaScript objects create a scope. They don't.
Only functions and blocks create scopes."Because an object literal does not have its own scope, an arrow function written inside an object bypasses the object entirely.
It looks outward and captures the "global scope" (like window or global), which is why this.name returns undefined
3. The "Left-of-the-Dot" Rule (For Normal Functions):"Normal functions determine this at runtime based on the execution context.
If a normal function is called as an object method—like user.logNormal()—JavaScript automatically binds this to whatever object is directly to the left of the dot."
*/


