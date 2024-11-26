                     // | MATH METHODS | DATE	METHODS



// 1. Write a program that takes a positive integer from user & 
// display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number 



let userInput = prompt("Enter a positive number")
let round = Math.round(userInput)
let floor = Math.floor(userInput)
let ceil = Math.ceil(userInput)

document.write(`number : ${userInput}` ,"<br>")
document.write(`round off value : ${round}`)
document.write(`floor value : ${floor}`)
document.write(`ceil value : ${ceil}`)


// 2. Write a program that takes a negative integer from user & 
// display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number


let userInput = prompt("Enter a negative number",-12)
let round = Math.round(userInput)
let floor = Math.floor(userInput)
let ceil = Math.ceil(userInput)

if(userInput > 0 ){
    alert("Enter a negative number")
}

document.write(`number : ${userInput}` ,"<br>")
document.write(`round off value : ${round}`,"<br>")
document.write(`floor value : ${floor}`,"<br>")
document.write(`ceil value : ${ceil}`,"<br>")



//3. Write a program that shows a random number between 1 and
// 100 in your browser.

let generateRandom = Math.random()*100
document.write  ( `random number between 1 to 100 : `,Math.floor(generateRandom));



// 4. Write a program that asks the user about his weight. Parse the
// user input and display his weight in your browser. Possible user
// inputs can be:

let userWeight  = parseInt(prompt("Enter your weight in kilograms"))
document.write(`The weight of user is ${userWeight} kilograms`)


// 5. Write a program that stores a random secret number from 1
// to 10 in a variable. Ask the user to input a number between 1
// and 10. If the user input equals the secret number, congratulate
// the user.

let num = 7;

let userInput  = parseInt (prompt("Enter a random num from 1 to 10"))

if (userInput == num){
    alert("congo! you guess the word")
}

else{
    alert("guess is wrong")
}


// 6. Write a program that displays current date and time in your
// browser.

let time = new Date()
console.log(time);

// 7. Write a program that alerts the current month in words. For
// example December.

// let time = new Date()

////hum is method se bhe kar sakte han locale string wale or
////array bana ka us se bhe kr sakte han

let getMonth = time.toLocaleString('default',{month:"long"});
console.log(getMonth);


////or dosra method ya array wala ha 

let time = new Date();
let month = ["january","february","march","april","may","june","july","agust","september","october","november","december"]
console.log(month[time.getMonth()]);


// 8. Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show Sun

////sab se pehla time ko get (new Date()) ka function banaya 
////phhir 1 array banayen gen days ka name se jis ma sare days hon ge 
////weeks ka, isa hum ne sunday se shuru kiya ha kyun ka getDay wale
//// method ma sunday 0 index se start hota ha tw is liya hum ne array ko 
////sunday se shuru kiya.

let time = new Date();
let days = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"]
let getDay = (days[time.getDay()])

////1 variable banaya displayMsg ka name se or jo hamara day aa rha 
////tha us pa slice ka method chala ke question ke requirement puri kr
//// de aur use alert me show krwa diya.

let displayMsg = getDay.slice(0,3);
alert(`today is: ${displayMsg}`)



