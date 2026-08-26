/*Prototypes are the mechanism by which JavaScript objects inherit features, properties, and methods from one another. 
Unlike traditional class-based languages (like Java or C++), JavaScript uses a prototype-based object model 
Core Concepts:
1.The Hidden Property ([[Prototype]]): Every JavaScript object has a hidden, internal property called [[Prototype]]. 
It links the object directly to another object.
2.The Prototype Chain: When you access a property or method on an object, JavaScript first looks at the object itself. 
If it isn't found, it climbs up the [[Prototype]] chain to look at the parent object. 
This continues until the property is found or the chain ends at null.
3.Memory Efficiency: Instead of duplicating methods for every new instance of an object, 
"methods are defined once on a shared prototype". All instances then reference that single method.
*/

/*Even functions are a kind-of objects in javascript.
function multiplyBy5(num){
    return num*5;
}
console.log(multiplyBy5(5)); //25
console.log(multiplyBy5.power); //2
console.log(multiplyBy5.prototype); //{}  */

/*Using Constructor Functions (The Classic Way):
Before modern classes, constructor functions were paired with the .prototype property to "share methods" */
function createUser(username, price){
    this.username = username;
    this.price = price;
}
//Attching a shared method to the functions prototype property:
createUser.prototype.printMe = function() {
    console.log(`The price is ${this.price}`);
    
}
//Creating instances to share the same method using the 'new' keyword
const chai = new createUser('Chai', 15);
const tea = new createUser('Tea',45);
chai.printMe(); //The price is 15
tea.printMe(); //The price is 45
//We can directly use this method for each instance


