// if statement & if-else statements
const isUserLoggedIn = true
const temperature = 41
/*
if(temperature < 50) {
    console.log("Less than 50");
}
else {
    console.log("temperature greater than 50");
}
*/
const score = 200
if(score> 100) {
    const power = "fly"
    //console.log(`User power : ${power}`);
}
// console.log(`User power : ${power}`); -> Error: Not in the global scope (If var was used in the if statement the variable 'power' is accessible)

// Comparison and equality operators used to check conditions:
// <,>, <=, >= , ==, === , !=

//Nested if-else
/*
const balance = 1000
if (balance<500) {
    console.log("less than 500");
    
} else if (balance < 750)
{
    console.log("less than 750");
    
}
else if (balance < 900)
{
    console.log("less than 900");
    
}    
else {
    console.log("less than 1200");
    
}
*/
// Logical or Bitwise operators
const userLoggedIn = true
const debitCard = true
const loggedInFromEmail = true
const loggedInFromGoogle = false
if(userLoggedIn && debitCard && 2==2){
    console.log("Allow to buy courses");
    
}
if(loggedInFromEmail || loggedInFromGoogle){
    console.log("User logged in");
    
}         