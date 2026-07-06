/*
Objects-> Can be declared as a "literal" or "constructor"
Singleton Pattern -> When object is declared as a constructor:
Singleton restricts an object to a 'single instance' throughout the entire application lifecycle
*/
//To declare object as a constructor:
//Object.create() -- Will be covered later in the course
//-------------------------------------------------------------
//Object Literals:
//Special case : Using Symbol data type and declare and  accessing it from the object:
const mySym = Symbol("key1"); //Here Symbol("key1") is going to be the unique key, "key1" is just an optional string used for debuggin  g

const jsUser = {
    name: "Ankit",
    "full Name" : "Ankit Deepak Kulkarni", //Special case where the cannot be accessed using the dot (.) operator
    //Incorrect method for symbols -> Gives the data type as a string (Which is incorrect)
    //mySym : "mykey1",
    [mySym] : "mykey1",
    age :"21",
    email: "ankit@gmail.com",
    isLoggedIn:false,
    lastLogInDays : ["Monday ","Saturday"] 
}
//Accessing properties of the Object:
//1) =>
console.log(jsUser.email)
//2) Another method =>
console.log(jsUser["email"]);
console.log(jsUser["full Name"]);
//console.log(typeof jsUser.mySym); //string
console.log(jsUser[mySym]); //Correct method
//To change a property:
jsUser.email = "ankitkulkarni2745@gmail.com"
//To prevent(lock) a property from changing use:
//Object.freeze(jsUser)
jsUser["email"]  = "ankitmicrosoft.com"//Or jsUser.email = "-----"
//Wont affect the property due to the Object.freeze() method used
//console.log(jsUser);

//Adding a function to the object:
jsUser.greeting = function(){
    console.log("Hello js user!");
    
}
jsUser.greetingTwo = function(){
    console.log(`Hello js user, ${this.name}`);
    
}
//console.log(jsUser.greeting); //[Function (anonymous)] --Reference
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());










    