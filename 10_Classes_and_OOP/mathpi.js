//Interesting info on Objects and their peoperties:
//The Math object has a property PI : 3.14.... ideally this value cannot be changed, bit we can get information about the ,
//PI property of the Math object using:
const descriptor = Object.getOwnPropertyDescriptor(Math, 'PI');
console.log(descriptor);
/*
{
  value: 3.141592653589793,
  writable: false,
  enumerable: false,
  configurable: false
} 
*/

const chai = {
    //these are the properties of the object
    name : 'ginger chai',
    price: 250,
    isAvailable : true,

    orderChai : function(){
        console.log('chai nahi bani');
        
    }

    
}
// console.log(chai);
// console.log(Object.getOwnPropertyDescriptor(chai, 'name'));
/*
  value: 'ginger chai',
  writable: true,
  enumerable: true,
  configurable: true
} 
*/
//Changing the description of the name property
Object.defineProperty(chai, 'name', {
    writable : false,
    enumerable : false
})
// console.log(Object.getOwnPropertyDescriptor(chai, 'name'));
//Now:
/*
{
  value: 'ginger chai',
  writable: false,
  enumerable: false,
  configurable: true
} 
*/
for (const [key,value] of Object.entries(chai)) {
    if(typeof value !== 'function'){ //To avoid getting the function in the output
        console.log(`${key} : ${value}`); //Will print the name property of the object normally, but when enumerable : false, it wont
        
    }
}

