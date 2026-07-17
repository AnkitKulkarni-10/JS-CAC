/*
>>Types of execution contexts:
1.Global Execution Context (GEC): Created automatically when your JavaScript file first loads.Only one global context exists for a program.
It creates the global object (e.g., window in browsers, global in Node.js) and binds this to it.
Function Execution Context (FEC): Created every time a function is invoked (called), not when it is defined.
Each function call gets its own brand-new independent context.
3.Eval Execution Context: Created when code is executed inside the eval() function (rarely used due to security risks). */

/* How it works: Two phases:
Phase 1: Creation Phase (Memory Allocation)Before executing a single line of your code, the engine scans the file to set up the workspace.
It allocates memory for variables and functions.Variables declared with var are initialized with a placeholder value of "undefined".
Functions are stored in their entirety (the whole body of the function (i.e function definition) is copied into memory).
Variables declared with let and const are allocated space but left uninitialized, putting them in the Temporal Dead Zone (TDZ).

Phase 2: Execution PhaseThe engine runs the code line-by-line.
It assigns actual values to your variables (replacing the undefined placeholders).
It executes function calls by generating new "Function Execution Contexts" and continuing the process inside them. (Read written notes for better understanding)
*/

/* Managing Contexts: The Call Stack
To keep track of all these overlapping execution contexts, JavaScript uses a data structure called the Call Stack (or Execution Context Stack).
The Global Execution Context sits permanently at the very bottom of this stack.
When a function is called, its context is pushed onto the top of the stack, pausing the previous context.
When the function finishes and returns, its context is popped off the stack and destroyed to free up memory. */

//Sample code used in notes to understand this:
let val1 = 10
let val2 = 5
function addNum(num1, num2) {
    let total = num1 + num2
    return total;
}
let result1 = addNum(val1,val2)
let result2 = addNum(10,2)