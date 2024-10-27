//Arrays are a data structure used to store and manipulate collections of values

// There are two ways to declare and initialize an array

//1. Array literal

const fruits: string[] = ['apple', 'banana', 'avocado'];

//2. Array Constructor

const numbers: number[] = new Array(1, 2, 3, 4);

//3. Initialize an empty array

const emptyArray: string[] = [];

//Accesing array elements through indexing

console.log(fruits[0]);

//Changing one element of the array at the specified index number

numbers[3] = 5
console.log(numbers);

//Array methods

//push() add an element at the end of the array

numbers.push(6);
console.log(numbers);

//To eliminate the last array index element, use pop()

numbers.pop();
console.log(numbers);

//To remove the first element of the array use shift()

numbers.shift();
console.log(numbers);

//To insert a new element at the beginning of the array use unshift()

numbers.unshift(10);
console.log(numbers);

//To create a new array from a certain starting index to a specic end index (not included in the new array) use slice() 
// but assign the method to a variable to use it
// Let us consider this array

let numbers3:number[] = [1, 2, 3, 4];
console.log(numbers3);

//We will slice it from index 0 to index 2 (not included, which meeans that the number "3" at index position 2 will not be
//included in the new array)

const sliceArray2 = numbers3.slice(0, 2);
console.log(sliceArray2);

//Result is: [ 1, 2 ]

//To return a new array with the square root of all element value use map()

let numbers4: number[] = [1, 2, 3, 4, 5]; 

const map = numbers4.map((num)=> num * 2);
console.log(map);

//To return/display an element of the array that meets the specified condition use filter()

const filter = numbers4.filter((num)=> num > 2)
console.log(filter)

//Read only array

const readOnlyArray: readonly number[] = [1, 2, 3];