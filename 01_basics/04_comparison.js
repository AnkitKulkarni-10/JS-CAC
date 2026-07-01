/*
console.log(2>1)
console.log(2>=1)
console.log(2<1)
console.log(2<=1)
console.log(2!=1)
*/
/*
console.log("2">1)
console.log("02"<1)
*/
console.log(null>0) //false
console.log(null==0) //false
console.log(null>=0) //true
/* Important Note: The reason for this is that an equality check (==) and comparisons (> < >= <=) work differently.
Comparisons -> Convert null to a number, treating it as 0. 
Thats why (3) null>=0 is true and (1) null> 0 is flase
*/

// Strict equality check (===) -> Checks the face value of the number along with its data type
console.log("2"=== 2) //false


