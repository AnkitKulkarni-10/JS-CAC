//Very important: for-each loop
const langs  = ["js", "rb", "python", "java", "cpp"]
langs.forEach( function (item) {
    //console.log(item);
    
} )
langs.forEach ( (item, index , langs) => {
    //console.log(item, index , langs);
    
}  )
//Other method is to write a function and then pass it to the forEach loop as REFERENCE
/*
function printMe(item)
{
    console.log(item);
    
}
langs.forEach(printMe) //Just pass the referennce, dont execute/invoke the function
*/

//Important: Accessing objects inside arrays using forEach
const coding = [
    {
        languageName : "Javascript",
        languageFileName : ".js"

    },
    {
        languageName : "Python",
        languageFileName : ".py"

    },
    {
        languageName : "Java",
        languageFileName : ".java"

    },

]
coding.forEach( (item) => {
    console.log(item.languageFileName);
    
} )