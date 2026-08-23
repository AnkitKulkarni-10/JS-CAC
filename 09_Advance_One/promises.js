//The Promise object represents the 'eventual completion' (or failure) of an "asynchronous operation" and its resulting value.
//Creating a promise
const PromiseOne = new Promise(function(resolve, reject){
    //Do an async task like:
    //Network calls, DB calls, cryptography tasks(encryption) or web APIs like setTimeout and setInterval
    setTimeout(function(){
        console.log("Async task is complete");
        resolve();
    },1000)
})
//We need to connect the resolve method to the .then() method of the promise
PromiseOne.then(function(){
    console.log('Promise consumed');
}) //Also takes a callback function 

//Direct method
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Async task 2');
        resolve();
    },1000)
}).then(function(){
    console.log('Async 2 resolved');
    
})
//Getting data through the resolve method
const PromiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Hitesh Choudhary", email: "example@123"})
    },1000)
})
PromiseThree.then(function(user){ //The argument is directly connected to the resolve method and returns the data.
    console.log(user);
})

//Error handling using catch and method chaining:
const PromiseFour = new Promise(function(resolve, reject){
setTimeout( () => {
            let error = true;
            if(!error){
            resolve({username: "Hitesh", password: "123"})
            }else {
                reject('ERROR:Something went wrong :(')
            }
        } ,1000)
})
PromiseFour
.then(function(user){
    console.log(user);
    return user.username;
})//Here the returned value will be passed to the next then() method directly
.then( (username)=> {
    console.log(username); //This will destructure the object and will print: Hitesh
    
} )
.catch( (error) =>{
    console.log(error);
    
} ) //catch() is connected to the reject keyword directly
.finally( () => console.log("The promise is finally resolved or rejected") ) //Executes everytime, like a default action

const PromiseFive = new Promise(function (resolve,reject){
    setTimeout( () => {
            let error = true;
            if(!error){
            resolve({username: "Javascript", password: "123"})
            }else {
                reject('ERROR:JS went wrong :(')
            }
        } ,1000)
})
//Important: Async function (async await syntax)
async function consumePromiseFive() {
    //async function cannot explicitly handle the error like promise chaining using .catch()
    //Hence this is done in a trycatch block
    //Async await is mainly used for code-readability
    try {
        const response = await PromiseFive;
        console.log(response);
        
    } catch (error) {
        console.log(error); //Handled using try catch
        
    }
}
//Calling the async function (Dont forget)
consumePromiseFive()
/* Note: The core functionality of promise chaining and async-await is the same, the only differnce being that,
the async function cannot handle error explicitly so it provides the functionality to use try-catch block.
Async await was intoduced as it provided better code readability than promise chaining. */


//Important fetch() method in Javascript: The return type of fetch() is a PROMISE (hence we can use promise chaining/async await on it)
/*
async function getAllUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')

        const data = await response.json() //Converting the data to JSON also takes time hence await is used
        console.log(data);
    } catch (error) {
        console.log("E: ", error);
    }
} */

//Same thing using Promise chaining can be done
fetch('https://api.github.com/users/hiteshchoudhary')
.then( (response) =>{
    return response.json(); //Converting the data to json
} )
.then( (data) => { //"return value" of the first then is passed to this then
    console.log(data);
    
} )
.catch( (error) => {
    console.log(error);
} )

