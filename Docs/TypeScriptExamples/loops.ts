//Loops are control structure that allows you to execute a block of code repeatedly as long as a certain condition is true
//or until a specified number of iteration is reached.

//For loop is used when you know the exact number of iterations to be used

for (let i = 0; i <= 10; i++) {
    let x = 0
    x += i
    console.log(x)
}


//While loop is used when you don't know the number of iterations but want the loop to continue until a certain condition is true

let count = 0;
while (count < 5) {
    console.log(count);
    count++
}

//The Do While loop guarantees that the code block will be executed at least once before checking the condition
// In the example below the code will run at least one by printing "5" but the while loop will not be run because the condition is 
// false (5 is not less than 5)

let z = 5;

do {
    console.log(z);
    z++;
} while (z < 5)

// Break keyword. This keyword terminates the loop prematurely when a certain condition is met

for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break
    }
    console.log(i)
}

//Continue keyword skips a particular iteration but not the entire loop
// In the example above the number "5" will not be printed because the variable "i" that contains it 
// falls under the condition established by the continue keyword 

for (let i = 0; i < 10; i++) {
    if (i === 5) {
        continue
    }
    console.log(i)
}


//Loop through an array

let numbers2: number[] = [3, 4, 5, 6]

for (let i=0; i < numbers2.length; i++) {
    let x = 3;
    x *= numbers2[i];
    console.log(x)
}