// Data types in TypeScript:

// 1. Boolean

let isDone: boolean = true;

let isEnabled: boolean = false; 

console.log(isDone, isEnabled)

//Number 

let num1: number = 25;
let num2: number = 25.2;

console.log(num1, num2);

//String

let firstName: string = "Nicola";
let familyName: string = "Spanu";

console.log(firstName, familyName);

//Any (by using this data type you can assign values of any type to a variable)

let dynamicValue: any = 3;

console.log(dynamicValue);

// Then we change the value of the variable "dynamicValue" to string type

dynamicValue = "Life is beautiful!";

console.log(dynamicValue)

//Null and undefined. These types represent the absence of any value. Null represents the intentional absence of a value, while 
// undefined represents an uninitialized variable.

let nullValue: null = null;
let undefinedValue: undefined = undefined;

console.log(nullValue, undefinedValue);

