// Q1: Basic Object Destructuring
// Extract the name and age properties from the person object using destructuring.

const person = {
    name: "Saad",
    age: 20,
    city: "Karachi"
};

let name = person.name
let age = person.age

console.log(name);
console.log(age); 



// Q2: Renaming Variables While Destructuring
// Extract firstName as fName and lastName as lName from the user object.


let user = {
    firstName: "Saad",
    lastName: "Naseem"
};

let fName = user.firstName
let lName = user.lastName

console.log(fName); 
console.log(lName); 



// Q5: Skipping Elements in Array Destructuring

// Extract the first and third elements from the array while skipping the second element.


const colors = ["red", "blue", "green", "yellow"];

let firstColor = colors[0]
let thirdColor = colors[2]

console.log(firstColor);  
console.log(thirdColor);  