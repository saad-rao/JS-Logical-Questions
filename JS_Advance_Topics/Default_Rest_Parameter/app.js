// Q1: Basic Default Parameter
// Create a function greet that takes a name parameter and has a default value of "Guest" if no name is provided.


function greet(name) {
    console.log(`Hello, ${name}!`);
}

greet();       
greet("Saad"); 


// Q2: Function with Multiple Default Parameters
// Create a function createUser that takes username, role (default: "User"), and isActive (default: true).



function createUser(username,role="User",isActive=true){

    return{username,role,isActive}

}

console.log(createUser("Saad"));



// Q3: Merge Two Arrays Using Spread Operator

// Use the spread operator to merge two arrays arr1 and arr2.


let arr1 = [1,2,3,4];

let arr2 = [5,6,7,8];

let mergedArray = [...arr1,...arr2]
console.log(mergedArray);
