//Scope refers to the context in which the variable is declared. There are three types of scope: Global Scope, Local Scope, and Block Scope

//Global scope concerns variables declared outside of any function or code blocks. They are accessible anywhere in the program.

// Example

const globalVar = 10;

function randoFunction() {
    console.log(globalVar);
    //I cannot call the local variable
}

//Local scope concerns variables declared inside a function. They are accessible only within the function in which they are declared

function random2() {
    const localVar = 20;
    console.log(localVar);
    // I can call the global variable
    console.log(globalVar);
}

//Block scope concerns variables declared using let or const inside a block like a if statement or a for loop. 
//They are only accessible within the block in which they are declared

if(true) {
    const blockvar = 30;
    console.log(blockvar);
}

//Variable created with var will not have block scope
