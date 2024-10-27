// A tuple is a data structure that allows to store an ordered collection of elements of a specific data type
// Unlike arrays which contain elements of the same type, tuples can contain elements of different data type

//Differences between tuples and arrays:

//Type consistency (each element of the tuple must be of a specific type. Array on the contrary allow elements of mixed type. Tuples are
//ordered, arrays are unordered)

// Example of unordered, changeble and allowing mixed type array:

let mixedData: (string | number | boolean)[] = ["apple", 42, true, "banana", 7, false];

//Type safety (in tuples type of elements is checked at compilation time, while arrays are less strict in terms of type safety)

//Mutability (tuples are immutable after declaration, arrays are not )

//Use cases (tuples are used with data of a fixed structure, such as coordinates of a certain point, while arrays are used for
//collections of elements that may vary in type and number)

// The position of the tuple element must correspond to that of the data type, so if I put string at the first and second place, the array
//must contain two string data types ('Alice' and 'Albert')

let person: [string, string, number] = ['Alice', 'Albert', 25];

//To access tuple elements 

let username: string = person[0];
let userage: number = person[2];
console.log(username, userage);

//To change the first element of an array use index assignment. This will create a new tuple but not change the existing one

person[0] = 'Moana';

console.log(person);

console.log(username, userage);