//for loop
/*
let array = [1,2,3,4,5,6,7]
for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (element == 5) {
        console.log("5 is the best number");
        
    }
    console.log(element);
}
*/
//Printing every table from 1 to 10
/*
for (let i = 1; i <=10; i++) {
    console.log(`Outer loop value : ${i}`);
    
    for (let j = 1; j <= 10; j++) {
        
        //console.log(`Inner loop value : ${j}`);
        console.log(i + '*' + j + '=' + i*j);
    }
    
} */

// break and continue statements

for(let i = 0; i<=20; i++){
    if (i==5) {
        console.log('Detected 5');
        //break; (break statement immediately terminates the execution of the loop)
        continue //(skips the rest of the current loop iteration and immediately jumps to the next iteration)
    }
    console.log(`Value of i : ${i}`);
    
}

