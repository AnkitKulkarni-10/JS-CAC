//map() method: Use map() when you want to change, format, or perform calculations on "every single item" in an array
const myNumbers = [1,2,3,4,5,6,7,8,9,10]
let newNums = myNumbers.map( (num) => {
    return num +10
} )

//IMP: Chaining mthods in Javascript:-
const chainNums = myNumbers
                .map( (num)=> num * 10 )
                .map( (num)=> num+1 )
                .filter( (num) => num >= 40 )

console.log(chainNums);
