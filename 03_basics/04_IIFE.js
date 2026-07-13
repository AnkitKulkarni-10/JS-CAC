//Immeadiately Invoked Function Expressions
/*
1. IIFE is a function which immediately executes after it's creation . It is written as one parentheses for wrapping the function and other for execution ()();
2. Variables defined inside an IIFE are not accessible from outside its scope which helps to avoid conflicts with other variables,
or functions (global scope pollution). Means IIFE keeps variables and functions private in it.
3. IIFE written with function name is 'named IIFE' and not with name are unnamed/anonymous. 
4.We can use parameter inside first parentheses.
5. To write two or multiple IIFE one should be end with semicolon ;
*/
//Syntax: ()(); 
(function chai (){
    //named IIFE
    console.log(`DB CONNECTED`);
    
}) (); // Semicolon is important; when two IIFEs are being executed in a single file

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
    
}) ('Hitesh');

//IIFE vs Normal function
/**
 * KEY DIFFERENCES BETWEEN NORMAL FUNCTIONS & IIFEs
 * 
 * | Feature         | Normal Function                               | IIFE (Immediately Invoked Function Expression) |
 * | :-------------- | :-------------------------------------------- | :--------------------------------------------- |
 * | **Invocation**  | Called manually using its name.              | Runs instantly upon declaration.              |
 * | **Naming**      | Usually named.                                | Typically anonymous.                           |
 * | **Reusability** | Can be executed multiple times.               | Runs exactly once.                            |
 * | **Global Scope**| Adds a function name to the global namespace. | Keeps the global scope completely clean.       |
 */
