// A static method belongs to the "class itself", not to the objects created from that class.
class User{
    constructor(username){
        this.username = username;
    }
    //method:
    logMe(){
        console.log(`USERNAME IS ${this.username}`);
        
    }
    //Adding an unique id to each created user:
    static createId(){ //Blocks access to this method from created objects
        return `123`
    }
}
class Teacher extends User{
    constructor(username, email){
        super(username);
        this .email = email;
    }
}

const hitesh = new User("Hitesh")
//console.log(hitesh.createId()); //This wont work
console.log(User.createId()); //But this WILL (Static property belongs to the class itself)
