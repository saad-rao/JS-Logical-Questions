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
