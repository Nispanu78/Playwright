// if else if else. 
// Conditional statements allow to execute different blocks of code based on whether a specifed condtion evaluates to true or false

let number = 0

if (number > 0) {
    console.log("This is a positive number");
} else if (number < 0) {
    console.log("This is a negative number");
} else {
    console.log("This is a 0");
}
 
// Nested condition

let number1 = -1;
if (number1 >= 0) {
    if(number1 === 0)
        console.log("Number is 0")
    else {
        console.log("Number is positive")
    }
}
else {
    console.log("Number is negative")
}