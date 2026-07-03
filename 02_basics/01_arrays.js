//Arrays
/*
The Array object,enables storing a collection of multiple items under a single variable name,
and has members for performing common array operations.
JavaScript arrays are resizable and can contain a mix of different data types.
JavaScript arrays are zero-indexed.
**JavaScript array-copy operations create shallow copies.
{A shallow copy of an object is a copy whose properties share the same references (point to the same underlying values)}
 */
const myArr = [0,1,2,3,4,5]
// const myHeros = ["Iron man", "Spiderman"]
// const myArr2 = new Array(1,2,3,4) //Another way to declare an array, automatically adds brackets
// //Accessing elements
// console.log(myArr[0]);

//Array methods
// push()-> adds elements to the 
// myArr.push(6)
// myArr.push(7)
// console.log(myArr);
// //pop()-> Removes the last value from the array
// myArr.pop()
// myArr.unshift(9) //Adds elements to the beginning of the array
// console.log(myArr);
// myArr.shift()// Removes elements from the start in an array
// console.log(myArr);
/* Important note:
unshift and shift modify the "beginning" of a JavaScript array,
while push and pop modify the 'end'.
Because unshift and shift alter the index positions of every subsequent element in the array,
they have a slower time complexity (O(n)) compared to the faster time complexity (O(1)) of push and pop
*/

// console.log(myArr.includes(9)); // Returns a boolean value
// console.log(myArr.indexOf(2));

/*Join() method
Adds all the elements of an array into a string, separated by the specified separator string.
IT DOES NOT CHANGE THE ORIGINAL ARRAY
*/
// const newArr = myArr.join()
// console.log(myArr);
// console.log(newArr);

//Very important : slice and splice (Interview questions)
console.log("A",myArr);
const myn1 = myArr.slice(0,3)
console.log(myn1);
console.log("B",myArr); //Checking the original array

const myn2 = myArr.splice(1,4)
console.log(myn2);
console.log("C",myArr); //Checking original array
//Summary (slice and splice)
// ======================= slice() =======================
// slice(start, end)
// ✅ Returns a NEW array containing elements from start to end-1.
// ✅ Does NOT modify the original array (Non-mutating).
// ✅ The end index is NOT included.
// ✅ Can use negative indices to count from the end.
// ======================= splice() =======================
// splice(start, deleteCount)
// ✅ Modifies the ORIGINAL array (Mutating).
// ✅ Removes, replaces, or inserts elements.
// ✅ Returns an array of the removed elements.
// ✅ Most commonly used for deleting or inserting items.

/*
slice() returns a new portion of an array without changing the original, whereas splice() changes the original array
by adding, removing, or replacing elements and returns the removed elements.
*/

//Splice-> Used to add, remove and replace elements in the array
//1) Adding elements
const arr1 = [10,20,30,40,50]
arr1.splice(2,0,25) // shifts 30 to the right to create space for 25 [10,20,__,30,40,50]
console.log(arr1);// [ 10, 20, 25, 30, 40, 50 ]
//2) Removing elements
const arr2 = [1,2,3,4,5,6]
arr2.splice(2,3)
console.log(arr2); //[1,2,6]
//3) Replacing elements
const arr3 = [20,45,60, 72, 98]
arr3.splice(2,2,50,55) //Replace 60 and 72 with 50 and 55
console.log(arr3);














