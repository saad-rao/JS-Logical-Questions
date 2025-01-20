document.write("---------------------- QS:1 --------------------------" ,"<br>","<br>")
 



document.write(`QS: Make an array that represents the product prices of an e-commerce
store. Create a new array with the updated prices after applying a 10% 
discount to each price.` ,"<br>","<br>");


let pricesArray = [200,400,600,500,700,800,950]

document.write(`Array:${pricesArray}`, "<br>" , "<br>")

let discountedPrices = pricesArray.map(price => price *0.9 ,"<br")
document.write(`After 10% disscount on each price we get : ${discountedPrices}`,"<br>","<br>");




document.write(`-------------------------QS:2--------------------------` ,"<br>","<br>")

document.write(`QS: Create an array of ages.
Return a new array containing only the ages of people who are 18 years old or older (adults).`,"<br>","<br>")


let agesArray = [12,15,20,23,25,30,18,16,50,45,48]

document.write(`Ages Array: ${agesArray}`,"<br>","<br>")

let adults = agesArray.filter(age =>  age>=18,)

document.write(`The ages of people who are above 18 years old: ${adults} `,"<br>","<br>")






document.write(`-------------------------QS:3--------------------------` ,"<br>","<br>")


document.write(`QS: Make an array that represents the item prices in a shopping cart.
Calculate the total price of the cart.`,"<br>","<br>")


let cart =  [100, 50, 150, 200];

document.write(`Cart Array : ${cart}`,"<br>","<br>")

let totalPrice = cart.reduce((total,item)=>total + item,0)

document.write(`Total price of the cart is = ${totalPrice}`,"<br>","<br>")




document.write(`-------------------------QS:4--------------------------` ,"<br>","<br>")



document.write(`QS:Make an array that stores the names of employees. 
Capitalize each employee's name and store them in a new array
`,"<br>","<br>")


let employees = ['ali', 'sarim', 'usman', 'khalid']

document.write(`Employee's Name:${employees}`,"<br>","<br>")

let capitalizedNames = employees.map(name => name.charAt(0).toUpperCase()+ name.slice(1))

document.write(`Capitalize the first letter of each employee:${capitalizedNames}`,"<br>","<br>");


document.write(`This same thing can be done from FOR LOOP`,"<br>","<br>")


document.write(`This is from FOR LOOP `,"<br>")

    for(let i =0; i<employees.length;i++){
        
    let capitalizedNames = employees[i].charAt(0).toUpperCase()

    let displayNames = capitalizedNames+employees[i].slice(1)

  
    document.write(`${displayNames}`,"<br>");
    
}