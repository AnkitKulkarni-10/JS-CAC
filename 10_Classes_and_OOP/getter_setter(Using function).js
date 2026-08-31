//Getters ans setters without using class (Rarely used nowadays)
function User(email, password){
    this._email = email;
    this._password = password;
    //Done using deineProperty() method (As function is also an Object)
    Object.defineProperty(this, 'email' , {
        get : function(){
            return this._email.toUpperCase()
        },
        set : function(value){
            this._email = value;
        }
    })
        Object.defineProperty(this, 'password' , {
        get : function(){
            return this._password.toUpperCase()
        },
        set : function(value){
            this._password = value;
        }
    })

}
const chai = new User('chai@123', 'hitya');
console.log(chai.email);
