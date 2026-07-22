// Using loops on Objects
const myObj = {
    js : 'Javascript',
    cpp : 'C++',
    rb : 'Ruby',
    swift: 'Swift by Apple'
}
//To iterate on objects, generally the for-in loop is used:
for (const key in myObj) {
    // console.log(key);// Gives all the keys of the object
    // console.log(myObj[key]); //Prints all the 'Values' of the object
    //console.log(`Key : ${key} Value : ${myObj[key]}`); 
}
/*
Output:
Key : js Value : Javascript
Key : cpp Value : C++
Key : rb Value : Ruby
Key : swift Value : Swift by Apple
*/

//Using for-in on Arrays:
const langs  = ["js", "rb", "python", "java", "cpp"]
for (const element in langs) {
    //console.log(element); //outputs index (keys)
    //console.log(langs[element]);// outputs the value only
        
}

