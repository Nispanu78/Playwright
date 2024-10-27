//An object is a data structure used to represent a collection of key:value pairs, where each key is a string or a number and values can be of any data type

const personNew: {name: string, age: number, isStudent: boolean} = {
    name: "Alice",
    age: 30,
    isStudent: false
}

console.log(personNew)

//How to access the object properties

console.log(personNew.name)

//How to merge two objects with the object split property

const contactInfo = {
    email: "test@mail.com",
    phone: 123456,

}

const mergedObject = {...personNew, ...contactInfo}
console.log(mergedObject)

//Type aliases and interfaces for objects. By creating the type shown below we can use it as a template to create objects based on that template

type Person = {
    name: string,
    age: number
}

//Given that the template includes only two key/value pairs, a third one cannot be added

const Lucy:Person = {
    name: "Lucy",
    age: 25,
}