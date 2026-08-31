class User {
    constructor(email, password) {
        this.email = email;
        this.password = password; 
    }
    //Getters and setters : When we define a getter, we have to define a setter as well.
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value;
    }

    get password(){
        return `${this._password}hitesh` //But when we access the password, it returns this custom password through the getter
    }
    set password(value){
        //this.password = value; Error: Maximum call stack size exceeded
         this._password = value; // We are storing the value as it is (Without converting to uppercase)
        //Do not return in setter
    }
}

const hitesh = new User('hitesh@123', '1234')
console.log(hitesh.password);
