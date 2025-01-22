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




document.write(`-------------------------QS:5--------------------------` ,"<br>","<br>")

document.write(`QS:Make an array that represents temperature readings (in °C).Filter only those readings that are below the freezing point (below 0°C).`,"<br>","<br>")


let temperatures = [-5, 12, -3, 7, 0, -8, 15]

document.write(`Temperatures:${temperatures}`,"<br>","<br>")

let freezingTemp = temperatures.filter(temp => temp<=0)

console.log(`Freezing temperature are: ${freezingTemp}`);




document.write(`-------------------------QS:6--------------------------` ,"<br>","<br>")

document.write(`QS:Make an array that represents the runs scored in each over of a cricket match. Calculate the total runs.`,"<br>","<br>")


let scores = [10,12,7,8,9,8,15,20,6,10]

document.write(`Score in each over is:${scores}`,"<br>","<br>")


let totalScore = scores.reduce((total,over) => total+over,0  )

document.write(`Total score of the 10 over is = ${totalScore}`,"<br>","<br>");



document.write(`-------------------------QS:7--------------------------` ,"<br>","<br>")

document.write(`QS:Make an array that represents the names of participants in an event. Create an array where each participant's name is written in the format [Hello ,].`,"<br>","<br>")


let participants = ["Saad","Asad","Tahir","Owais","Ali","Bilal"]

document.write(`Participants:${participants}`,"<br>","<br>")


let formatNames = participants.map(name => `Hello , ${name}`,"<br>","<br>");

document.write(`Participant's name is written in the format [Hello,]:<br>${formatNames}`);


