//Stack (Primitive), Heap (Non-Primitive)
let myYoutubeName = "ankitkulkarni.com"
let anotherName = myYoutubeName
anotherName = "123.com"
console.log(myYoutubeName);
console.log(anotherName);
// Object -> stored in Heap
let userOne = {
    email: "userOne@google.com",
    upi: "user @ybl"
}
userTwo = userOne //Pass by reference
userTwo.email = "userTwo@google.com"
console.log(userOne.email);
console.log(userTwo.email);
console.log(userTwo.upi);

/*
Important theory:
Primitive Types:
1. Stored in stack.
2. Passed or assigned by value (call by value).
3. Changes to copies don't affect the original.

Reference Types:
1. Stored in heap; accessed via references (stored in stack).
2. Changing the value through another reference affects the original.

*/


