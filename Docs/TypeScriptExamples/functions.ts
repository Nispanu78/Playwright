//Functions or methods are fundamental constructs used for definining blocks of reusable code aiming to perform a specific task

//Here's how a function is declared

// function hi() {
//     console.log("life is beautiful")
// }

// //Here's how a function is called

// hi()

//How to pass parameters and return types to a function. We need to define the type of both the parameters "calculateTotal(x:number, y:number)" and of the return statement ": number"
//In the case of the function below, all parameters are mandatory and the function needs to be called with the same number of arguments as are parameters

function calculateTotal(x:number, y:number): number{
    return x * y;
}

console.log(calculateTotal(3,5));

//How to define an optional parameter

function greet(name:string, greetMessage?:string){
    if(greetMessage){
        return `${name}, ${greetMessage}`
    }
    else{
        return `${name}`
    }
}

console.log(greet("Nicola", "Nice to meet you"));

//How to define a default parameter

function add(a: number, b:number=0) {
    console.log(a + b);
}

add(1,2)


// Arrow functions

const multiply = (a:number,b:number):number => a+b;

console.log(multiply)

//OR, how to create a base type function, which is a template for creating objects

let e = 2;
let f = 3
type matchOperation = (a:number,b:number) => number
const addNew:matchOperation = (e, f) => e+f;