//Dates
//Date is an "object" in Javascript with different methods available
/*
const myDate = new Date ()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
*/

let myCreatedDate = new Date(2023, 0, 23) 
//console.log(myCreatedDate.toDateString()); // Mon Jan 23 2023 Note: Months in JS start with 0->Jan 1-> Feb etc
let newDate = new Date("2026-07-01")//YY-MM-DD or MM-DD-YY (Indian standards)
console.log(newDate.toLocaleString()); //1/7/2026, 5:30:00 am

//Timestamp (Yes, a JavaScript timestamp is the exact number of milliseconds that have passed since midnight on January 1, 1970, UTC)
let myTimestamp = Date.now()
//console.log(myTimestamp);
//console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000)); //Converting the timestamp to seconds [1000ms = 1s] (**Asked in interviews**)

let anotherDate = new Date() //Todays date
console.log(anotherDate.getDay());
console.log(anotherDate.getMonth()); //Month indexing starts from 0

anotherDate.toLocaleString('default', {
    weekday: "long"
})










