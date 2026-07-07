/* const tinderUser = new Object() --> SIngleton Object  */
const tinderUser = {
}
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false;
// console.log(tinderUser);

// Objects inside objects:
const regularUser = {
    email: "some@gmail.com",
    fullName :{ //Syntax to declare object inside the object requires a semicolon (:)
        userfullname : {
            firstName : "Hitesh",
            lastName : "Chaoudhary"

        }
    }
}
//To access the properties of nested objects ->
console.log(regularUser.fullName.userfullname.firstName);

//Merging(Combining objects)
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}
//Passing the objects directly to a third object will give a propblem similar to which we saw in arrays -> [1,2 [1,3,4]]
//const obj3 = {obj1, obj2}
//Object.assign (target,source) is used -> All the objects are copied to the target object (Returns a value)
//obj3 = Object.assign({}, obj1, obj2, obj4)// Curly braces are used to denote that all the objects are being copied into the target
//console.log(obj3);
//Another example:
/*
 Object.assign() changes multiple properties at once.
Example:

const jsUser = {
    name: "Ankit",
    email: "ankit@gmail.com",
    age: 21
};

Object.assign(jsUser, {
    email: "ankit@microsoft.com",
    age: 22,
    city: "Pune"
});

console.log(jsUser);

Output:

{
    name: "Ankit",
    email: "ankit@microsoft.com",
    age: 22,
    city: "Pune"
}

Notice that:

email was updated
age was updated
city was added

All in one call. 
*/
// Better method -> Spread operator similar to array
const obj3 = {...obj1, ...obj2}
console.log(obj3); //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

//IMP : When info comes from the DB, it comes in the form of 'Array of objects' :
const users = [
    {
        id : 1,
        email : "h@gmail.com"
    },
    {
        id : 1,
        email : "h@gmail.com"
    },
    {
        id : 1,
        email : "h@gmail.com"
    },
    {
        id : 1,
        email : "h@gmail.com"
    },
]
//To access the objects:
//console.log(users[1].email); //Access first object of the array and its email property

console.log(tinderUser);
//To access the keys and values from tinderUser object:
console.log(Object.keys(tinderUser)); //Notice how the result is an ARRAY -> [ 'id', 'name', 'isLoggeIn' ]
console.log(Object.values(tinderUser));
//Object.entries() -> Converts each key:value pair into a 'Seperate array'
console.log(Object.entries(tinderUser)); //[ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggeIn', false ] ]
//To check if an object has a particular property:
console.log(tinderUser.hasOwnProperty('isLoggedIn')); //True













