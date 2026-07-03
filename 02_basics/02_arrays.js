const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "batman", "flash"]
/*
marvel_heros.push(dc_heros) //Creates an array inside an arrya
console.log(marvel_heros); //[ 'thor', 'Ironman', 'spiderman', [ 'superman', 'batman', 'flash' ] ]
//To access the elements of the embedded array :
console.log(marvel_heros[3][1]); //Not a clean method of writing code
*/
// Another better method -> concat()=> Returns a NEW array
const all_heros = marvel_heros.concat(dc_heros)
//console.log(all_heros); //[ 'thor', 'Ironman', 'spiderman', 'superman', 'batman', 'flash' ]

/*
we can merge multiple arrays using concat as well like spread syntax..

const Array1 = [1,2,3,4,5];
const Array2 = [5,6,7,8,9,10];
const Array3 = [0,0,0];
const Array4 = [1,3,9,19];
const concatAll = Array1.concat(Array2, Array3,Array4)
console.log(concatAll)
*/

//Optimal or preferred approach used in modern JS => spread operator(...)
const all_new_heros = [...marvel_heros, ...dc_heros]
//console.log(all_new_heros); //[ 'thor', 'Ironman', 'spiderman', 'superman', 'batman', 'flash' ]

//flat() method -> To spread out (seperate) arrays inside arrays
const real_array = [1,2,3,[4,5,6],7,[6,8,4,[5,9]]]
console.log(real_array.flat(Infinity)); // Specify the depth (no. of sub-arrays) but can use Infinity to consider upto end of array

//Converting elements to arrays using from() and of() methods
console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({name: "hitesh"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
//read more about .isArray, from and of





