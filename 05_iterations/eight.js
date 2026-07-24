//reduce() method ->Array.prototype.reduce()
//With simple function:
const nums = [1,2,3,4,5]

const myTotal = nums.reduce(function (acc, currval) {
console.log(`acc: ${acc} and currval: ${currval} and addition: ${acc + currval} `);
return acc + currval
}, 0)
//console.log(myTotal);  15

//Using arrow function:

const initialValue = 0; // This value is passed to the accumulator initially (0 here)
const newNums = nums.reduce( (accumulator, curentValue) => accumulator + curentValue , initialValue ); // Then the sum of accumulator + currentvalue is,
//passed to the accumulator after first iteration

//console.log(newNums); //Output:15

// Real-world example
const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]
const priceToPay = shoppingCart.reduce( (acc , item) => acc + item.price , 0 )
console.log(priceToPay); //22996


