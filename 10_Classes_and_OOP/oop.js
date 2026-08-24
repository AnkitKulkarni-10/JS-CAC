//Object literal - Literally an object : Collection of properties and methods
const user = {
    username : 'Hitesh',
    loginCount : 8,
    signedIn : true,

    getUserDetails : function(){
        //console.log('Got user details from the database');
        // console.log(`Username: ${this.username}`);
        console.log(this); //Prints the entire object (Current context)
        
    }
}
//console.log(user.username);//Hitesh
// console.log(user.getUserDetails());
// console.log(this)In global context this gives : {}  ,In browser console doing this will provide you the entire Window object

/*Constructor fuctions:
A constructor function in JavaScript is a specialized function used as a blueprint to create and initialize,
"multiple objects" with similar properties and methods. Executed using the 'new' keyword */
function User (username, loginCount , isLoggedIn){
    // "this" points to the new empty object being created
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
    //return this; //We add this to the empty {} Global this
}
/*
const userOne = User('Hitesh', 8, true)
//Now if you do:
const userTwo = User('Chaiaurcode', 11 , false)
console.log(userOne); //Now even if you did not print userTwo, its overwrites the initial values of userOne
//This is not desirable as it can create issues in the code, hence the 'new' keyword is used to provide a new instance
*/
// Creating unique object instances using the 'new' keyword
const userOne = new User('Hitesh', 8, true)
const userTwo = new User('Chaiaurcode', 11 , false)
console.log(userOne);
console.log(userTwo); //Now both these variales will get their own instances and hence will not overwrite each-other

/*How the new Keyword Works Under the Hood when you call a function with new:
JavaScript automatically performs four hidden steps behind the scenes:
1.Creates a brand-new, empty object ({}).
2.Binds 'this' inside the function to point directly to that new object.
3.Executes the function code, assigning properties like this.name = name to the new object.
4.Automatically returns the newly constructed object (you do not need an explicit return statement). */







