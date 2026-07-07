//Destructuring => Done for Objects as well as arrays
const course = {
    courseName : "JS in Hindi",
    price : "999RS",
    courseInstructor : "Hitesh" 
}
// course.courseInstructor
//Syntax for de-structuring : const {Object Property : CustomName} = ObjectName -> CustomName is optional 
const {courseInstructor} = course // const {courseInstructor: instructor} = course
console.log(courseInstructor); //console.log(instructor);
//Destructuring will be used later in React.js

//-------------------------API Basics and JSON ----------------------------
/*
An API, which stands for "Application Programming Interface",
is a set of rules that allows different software applications to communicate and share data with each other.
It acts as an invisible middleman, delivering a request from one system to another and bringing the response right back.
The Restaurant Analogy: The easiest way to understand an API is to think of it like a waiter at a restaurant:
The Client (You): You sit at the table and look at the menu. You want to order food.
The API (The Waiter): The waiter takes your order (the request) and delivers it to the kitchen.
The Server (The Kitchen): The chef prepares your food (processes the data).
The Response: The waiter picks up the food and delivers it back to you. Without the waiter,
you would have to walk into the kitchen yourself, which creates security risks and chaos.
The API protects the internal system while giving you exactly what you need.
*/

//---------------------JSON----------------------------
/*
JSON (JavaScript Object Notation) is used because its syntax looks identical to a standard JavaScript object.
It is lightweight, text-based, and easy for computers to read.When the server sends you JSON, it looks like a string:
{"id": 1, "name": "Leanne Graham"}. The .json() method in your JavaScript instantly parses that string into an interactive object.
*/

//eg.
// {
//     "name" : "hitesh",
//     "courseName": "js in hindi",
//     "price" : "free",
// }



