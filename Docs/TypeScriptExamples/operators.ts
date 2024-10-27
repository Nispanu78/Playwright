// Operators are keywords that perform operations on specific values and produce a result

// Arithmetical operators

let a = 10;
let b = 3;
let sum = a + b;
let difference = a - b;
let product = a * b;
let quotient = a / b;
let remainder = a % b;

// Comparison operator (they compare two values and return a boolean result)

let x = 4
let y = 7

let isEqual = x == y; // check wheter the variable's values are equal
let isStrictlyEquale = x === y; // check whether both the variable's value and the data types are equal
let isNotEqual = x != y;
let isGreaterThan = x > y;
let isLessThan = x < y;
let isGreaterOrEqual = x >= y;
let isLessOrEqual = x <= y;

//Logical operators

let isTrue = true;
let isFalse = false;

let andResult = isTrue && isFalse;
let orResult = isTrue || isFalse;
let notresult = !isTrue;

//Assignment operators

let num = 5;

num += 3; //it means num = num + 3
num -= 3; //it means num = num - 3
num *= 3; //it means num = num * 3
num /= 3; //it means num = num / 3
num %= 3; //it means num = num % 3

//Ternary operator (it is a conditional statement in a single line of code)

let age = 20;
let message = age >= 18 ? "Adult" : "Minor";

console.log(message);
