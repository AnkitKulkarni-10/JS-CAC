function setUsername(username){
    this.username = username;
    console.log('called');
    
}
function createUser(username, email, password){
//setUsername(username); Wont work as the setUsername has its own this, we need to give createUser's this to setUsername
    setUsername.call(this, username)
    this.email= email;
    this.password = password;

}
const chai = new createUser("Hitesh", "123@eg.com", 12345);
console.log(chai);


/*The call() method is used to invoke a function immediately, 
while explicitly specifying what 'this' should refer to inside that function. 
It also allows us to pass arguments individually */

//Simple example
function greet(city) {
    console.log(`${this.name} is from ${city}`);
}

const person = {
    name: "Ankit"
};

greet.call(person, "Pune");

/*Execute greet immediately.
Inside greet, make 'this' refer to person.
Pass "Pune" as the argument. */