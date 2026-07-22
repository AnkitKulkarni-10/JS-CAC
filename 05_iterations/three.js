//for-of loop
const arr = [1,2,3,4,5]
for (const element of arr) {
    //console.log(element);  
}
// It can be applied on anything, like an array, onbject or even a string
const greetings = "Hello Ankit!"
for (const greet of greetings) {
    if(greet == " ") continue //Skips the space (Current iteration and allows the next iterations to happen)
   // console.log(`Each char is : ${greet}`);
   
}

//Map in JS
// The Map object holds key-value pairs and remembers the original insertion order of the keys.
// Any value (both objects and primitive values) may be used as either a key or a value.
const map = new Map()
map.set('IN', 'India')
map.set('USA', 'United States Of America')
map.set('FRA', 'France')
map.set('IN', 'India') // Wont be reflected in the map as it does not allow duplicate values
//console.log(map);
/* output: Map(3) {
  'IN' => 'India',
  'USA' => 'United States Of America',
  'FRA' => 'France'
} */
// Now using loop to iterate the map
for (const key of map) {
   //console.log(key); // This prints the entire map in array form
    
}
// To get seperate key and value pairs, use the syntax:
for (const [key, value]  of map) {
    //console.log(key , ':-' , value);
    
}

//for-of loop on object
const myObj = {
    'game1' : 'NFS',
    'game2' : 'GTA5'
}
// for (const [key, value] of myObj) {
//    console.log(key, ':-' + value); //myObj is not iterable (For of loop can iterate on map but "NOT ON OBJECTS") 
// }

//Now using for-in on map
for (const [key,value] in map) {
    console.log(key, ':-' , value); // (For-in DOES NOT WORK on Map)
    
}