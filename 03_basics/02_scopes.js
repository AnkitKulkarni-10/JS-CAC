//Why var is not used anymore:
//var is function scoped (As leanred previously) and can be accessed outside of a block (Ignores boundaries of loops, functions etc.)
//eg.
let a  = 300 //Global scope
if(true){
    //Local scope
    let a = 10
    const b = 20
    //var c = 30
    console.log("INNER:", a); //INNER: 10
    
}
//console.log(a); Here a remains local to the if() condition -> As let is 'block-scoped'
// console.log(b); Here b remains local to the if() condition -> As const is 'block-scoped'
// console.log(c); => 30 (var is accessible outside of the if() condition which can cause bugs)

console.log(a); //300

//Nested scopes:
/*A simple analogy to visualise this: Children can take an ice-cream from elders but if an elder takes an ice-cream from a child, then thats considered to be bad,
We can see this using an example
*/
function one (){
    const name = "Hitesh"
    function two (){
        const website = "Youtube"
        console.log(name); //Will print-> (Child can access properties of parent)
    }
    // console.log(website); (Parent cannot access the properties of child)
    two()
    
}
one()
//This is also known as "LEXICAL SCOPING"
//Similiarly:
if(true){
    const username = "Hitesh"
    if(username==="Hitesh"){
        const website = "Youtube"
        console.log(username + website);
    }
    // console.log(website); Error
    
}
// console.log(username); Error

//-------------------BASICS OF HOISTING IN JS------------------------
console.log(addOne(5)) //No error
function addOne(num1){
    return num1 + 1
}
// addOne(5) Normal execution, no error

// addTwo(5) -> ReferenceError: Cannot access 'addTwo' before initialization
const addTwo = function(num2){ //We can also allow variables to hold functions in JS
    return num2+2
}
// addTwo(5) Normal execution, no error
