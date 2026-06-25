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
