class User{
    constructor(username){
        this.username = username;
    }
    //method
    logMe(){
        console.log(`USERNAME IS ${this.username}`);
        
    }
}

class Teacher extends User {
    constructor(username, email, password){
        //Now instead of using the call() method we get syntactical sugar: 'super' keyword to access the super class
        super(username);
        this.email = email;
        this.password = password;

    }
    addCourse(){
        console.log(`A new course was added by ${this.username}`);
        
    }
}

const chai = new Teacher("ChachiKaLadka", "123@", "456")
//Teacher1.addCourse()
chai.logMe() //Inherits the access to logMe()

const tea = new User("MamiKaLadka")
//tea.addCourse() // tea does not have the access to addCourse() method
tea.logMe()

console.log(chai === tea);//false
console.log(chai instanceof Teacher); //true
console.log(Teacher instanceof User); //true

