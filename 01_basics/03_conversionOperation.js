/*
let score = undefined
console.log(typeof score) //undefined
console.log(typeof (score))
let valueInNumber = Number(score) // Method to convert the string to number
console.log(typeof valueInNumber)
console.log(valueInNumber) //NaN
//"33" => 33
// "33abc" => NaN
// true => 1; false => 0
let isLoggedIn = ""
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(typeof booleanIsLoggedIn)
console.log(booleanIsLoggedIn)
// 1 => true; 0 => false
// "" => false
//"Hitesh" => true
let number = 33
let stringNumber = String(number)
console.log(typeof stringNumber)
console.log(stringNumber)
*/
// ***************** Operations *****************
let value = 3
let negValue = -value
console.log(negValue)
console.log(value);

//Read all the arithmatic operations once
let str1 = "Hello "
let str2 = "Ankit"
let str3 = str1 + str2
console.log(str3)
console.log("1"+ 2)
console.log( 1 + "2" + 2) //Note o/p = 122
console.log(1+2+"2") // Note o/p => 32
console.log(1 + "2" + 2 +"2" + 1);// 12221
/*Note: Easy way to remember:
"left-to-right evaluation", and once a string appears, everything after becomes concatenation.
*/
//Read prefix and postfix increment/decrement operator from mdn docs