const name = "Ankit"
const repoCount = "50"
//console.log(name + repoCount + "Value"); Older and deprecated method in modern JS
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); //Modern method using "backticks" (String interpolation)
//Note: String is an object when created with the 'new' keyword
const gameName = new String ("Gta6")
console.log(gameName[0]); //G
console.log(gameName.__proto__)

console.log(gameName.length); //4
console.log(gameName.toUpperCase());//GTA6  
console.log(gameName.charAt(2));//a
console.log(gameName.indexOf('t'));//1
//Important methods for interviews
const yourName = "hitesh-hc"
const newString = yourName.substring(0,4) //hite (0,1,2,3) does not include the last value 4 i.e 's'
console.log(newString);
//Slice  supports negative indexes
const anotherString = yourName.slice(0,4) 
console.log(anotherString); //ite
/*
Representation of negative indexes:
 h  i  t  e  s  h  -  h  c
 0  1  2  3  4  5  6  7  8
-9 -8 -7 -6 -5 -4 -3 -2 -1
*/
console.log(yourName.slice (2)); //tesh-hc i.e 2 chya pudhche sagle
console.log(yourName.slice (-3)); //-hc i.e -3 dharun pudhche sagle
//Trim() method. Types -> trimStart() and trimEnd()
const newStringOne = "   hitesh   "
console.log(newStringOne);
console.log(newStringOne.trim());//removes the unnecessary whitespaces from the string
//Replace() method
const url = "https://hitesh.com/hitesh%20choudhary"
console.log( url.replace('%20', '-') ) //Replaces the %20 with a '-'
//Other methods
console.log(url.includes('hitesh')); //Returns a boolean value based on the value -> Here 'true'

let stringTwo = "hitesh-hc-demo"
console.log(stringTwo.split('-')); //[ 'hitesh', 'hc', 'demo' ] (Takes a seperator and limit)

















