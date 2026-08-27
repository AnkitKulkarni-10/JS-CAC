//Class in Javascript

class User {
    constructor(username, email , password){
        this.username = username;
        this.email = email;
        this.password = password;
    }
    //methods:  
    encryptPassword(){
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}
const chai = new User('Chai','Chai@123','123')
console.log(chai.encryptPassword()); //123abc
// console.log(chai);  -> User { username: 'Chai', email: 'Chai@123', password: '123' }
console.log(chai.changeUsername());

//Behind the scene without using class:
function User1 (username, email , password){
    this.username = username;
    this.email = email;
    this.password = password;

}
//Injecting the methods:
User1.prototype.encryptPassword = function(){
     return `${this.password}abc`
}
User1.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

const tea = new User1('tea', '1234@', '236')
console.log(tea.encryptPassword());
console.log(tea.changeUsername());

