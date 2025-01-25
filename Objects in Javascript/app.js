document.write(`-------------------------QS:1--------------------------` ,"<br>","<br>")

document.write(`Create an object that represents an employee's data (e.g., name, age, designation), and access the designation to print it on the browser`,"<br>","<br>")

let employee = {
    name:"khadim",
    age:22,
    designation:"software engineer"
}

document.write(`This is the object: <br> let employee = {
    name:"khadim",
    age:22,
    designation:"software engineer"
}`,"<br>","<br>")


document.write(`The designation of the employee is: ${employee.designation}`)



document.write(`-------------------------QS:2--------------------------` ,"<br>","<br>")



document.write(`Create an object to store a product's data (name, price). Add a Electronics category property to the object and update the price.`,"<br>","<br>")


let product = {
    name:"Laptop",
    price:500
}

document.write(`product object: let product = {
    name:"Laptop",
    price:500
}`,"<br>" ,"<br>" )

product.category = "Electronics"
// document.write(`Add the Electronics property : ${product.category}`,"<br>","<br>")
product.price = 700
// document.write(`Update the price : ${product}`,"<br>","<br>")


document.write(`Add a category :${product.category} and updated price is : ${product.price}`)



document.write(`-------------------------QS:3--------------------------` ,"<br>","<br>")


document.write(`Create an object that represents a student's marks subject wise. Print each subject along with its marks.`,"<br>","<br>")

let studentMarks = {
    Math : 90,
    English : 80,
    Science : 75
}

document.write(`Object of students Marks :let studentMarks = {
    Math : 90,
    English : 80,
    Science : 75
}`,"<br>","<br>")

//FOR IN loop is only used for objects

for (let subject in studentMarks){
    document.write(`The marks of a student in ${subject} is = ${studentMarks[subject]} `,"<br>")
}



document.write(`-------------------------QS:4 --------------------------` ,"<br>","<br>")


document.write(`Create an object that stores a book's data. Check if the author property exists in the object.`,"<br>","<br>")

let book = {
    title : "javascript basics",
    pages : 100
}

document.write(`object of book:<br> let book = {
    title : "javascript basics",
    pages : 100
}`,"<br>","<br>")

// If we need to find the existence of a property in any object,
// we use the hasOwnProperty method, which is used in data validation and error handling.

let findAuthor = book.hasOwnProperty("author")

document.write(`book.hasOwnProperty("author")`,"<br>","<br>")

document.write(`The answer is : ${findAuthor}`,"<br>","<br>");



document.write(`-------------------------QS:5 --------------------------` ,"<br>","<br>")


document.write(`Merge two objects and store the result in a new object.`,"<br>","<br>")


let person = {
    name:"saad",
    age:20
}



let job = {
    title : "web developer",
    company : "folio3"
}

// The spread operator (...) is used to merge objects.
// Use case: Combining data from APIs into a single object.

let mergedObjects = {...person , ...job}
console.log(mergedObjects);



document.write(`-------------------------QS:6--------------------------` ,"<br>","<br>")

document.write(`Create an object that stores a product's data. Delete the category property from the object.`,"<br>","<br>")


let productData = {
    name:"laptop",
    price: 25000,
    category:"Electronics"

}

document.write(`Object of product : let productData = {
    name:"laptop",
    price: 25000,
    category:"Electronics"

} `,"<br>","<br>")

document.write(`delete productData.category`,"<br>","<br>")

delete productData.category

document.write(`delete operator is used to delete a object property`,"<br>","<br>")

console.log(productData);




document.write(`-------------------------QS:7--------------------------` ,"<br>","<br>")

document.write(`Create an object that stores a product's data. Convert its keys and values into separate arrays.`,"<br>","<br>")


let productInfo = {
    name:"mobile",
    price:20000,
    category:"Electronics"
}

document.write(`Object of Product : let productInfo = {
    name:"mobile",
    price:20000,
    category:"Electronics"
}`,"<br>","<br>")

document.write(`let keys = Object.keys(productInfo) <br>
let values = Object.values(productInfo)`,"<br>","<br>")

let keys = Object.keys(productInfo)
let values = Object.values(productInfo) 

document.write(`If we log the keys and values to the console, we will get separate arrays for the keys and values.`)

console.log(keys);
console.log(values);

