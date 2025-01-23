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
