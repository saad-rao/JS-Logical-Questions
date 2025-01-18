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

document.write(`The ages of people who are above 18 years old: ${adults} `)
