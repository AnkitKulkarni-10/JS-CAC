const accountId = 144553
let accountEmail = "ankit.gmail.com"
var accountPassword = "22102025"
accountCity = "Jaipur"
// accountId = 2 // Not allowed
console.log(accountId);
accountEmail = "rushi.gmail.com"
accountPassword = "22112121"
accountCity = "Bangalore"
let accountState;
/*
Prefer not to use var
Because of issue in block-scope and functional scope
*/
console.table([accountId, accountPassword , accountEmail, accountCity, accountState]);

/* Q: Why avoid var: 
-var is function scoped-> Ignores boundaries like if statements or for loops.
eg. If you declare variable var i inside a for loop for most laguages it is only,
accessible in the loop. Whereas in JS i can be accesses outside of the loop as well
which throws errors.
-You can "Re-declare" same var variable multipe times in same scope-> Js does not throw
an error which can cause you to overrite data accidentally
*/