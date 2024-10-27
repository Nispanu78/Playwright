// Variables are containers of values
// Three fundamental concepts to understand are declaration, initialization and assignment
// A variable is declared when it is made available throughout a given scope
// Example:

// var Test;
//
// A variable is initialized at runtime with a default value of "undefined", even if it is given a value straightaway

//A variable is assigned a value belonging to a specific data type with the "=" operator#

// Example:

// var Test = "This is a test"

var myName = "Nicola"; // variable's value can change. var has function scope is declared inside a function, global scope if declared
// outside of it
let myAge = 46; // variable's value can change. let has block scope and cannot be redeclared outside its block
const myGender = "male"; // variable's value cannot change. const has block scope and cannot be redeclared outside its block

console.log("My name is " + myName + " and" + " my age is " + myAge + " and" + " my gender is " + myGender);
