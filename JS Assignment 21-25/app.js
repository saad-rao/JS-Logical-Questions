                            // |  STRINGS METHODS  |


//QS:1 Write a program that takes two user inputs for first and last 
// name using prompt and merge them in a new variable titled 
// fullName. Greet the user using his full name

let userFirstName = prompt("Enter your first name")
let userLastName = prompt("Enter your last name")

let fullName = userFirstName +" "+ userLastName ; 

alert(`wellcome to JS coding  ${fullName}` )



//QS:2 Write a program to take a user input about his favorite mobile 
// phone model. Find and display the length of user input in your 
// browser

let userFavoriteMobilePhoneModel = prompt("Enter your favorite mobile phone model");

document.write(`my favorite phone is : ${userFavoriteMobilePhoneModel} <br>
    length of string: ${userFavoriteMobilePhoneModel.length}`);



//QS:3 Write a program to find the index of letter “n” in the word 
// “Pakistani” and display the result in your browser


let word = "pakistani"

let findIndex = string.indexOf("n")
console.log(findIndex);

document.write(`String :${string} <br>`) 
document.write(`index of 'n' is : ${findIndex}`)


//QS:4 Write a program to find the last index of letter “l” in the word 
// “Hello World” and display the result in your browser

let str = "Hello world"

let findLastIndex = string.lastIndexOf("l")
console.log(findLastIndex);

document.write(string ,"<br>")

document.write(`last index of 'l' is: ${findLastIndex} `)


//QS:5 Write a program to replace the “Hyder” to “Islam” in the word 
// “Hyderabad” and display the result in your browser

let city = "hyderabad"

let replaceWord = city.replace("hyder","islam")


document.write('city : ', city , "<br>")
document.write(`after replacement : ${replaceWord}`)



//QS:6 Write a program to replace all occurrences of “and” in the 
// string with “&” and display the result in your browser. var message = “Ali and Sami are best friends. 
// They play cricket and football together.”;

let message = "Ali and Sami are best friends.They play cricket and football together.";

let newMessage = message.replaceAll("and","&")

document.write(`Message: ${message}` ,"<br>")
document.write(`After repacement: ${newMessage}`)



//QS:7 Write a program that converts a string “472” to a number 472.
// Display the values & types in your browser.

let strToNum = "472"

let toNumber = Number (string)
console.log(typeof(toNumber));


//QS:8 Write a program that take a URL as user input in the 
// following format: (www.facebook.com / www.yahoo.com ). 
// Extract the domain name & show in your browser

let userUrl = prompt("Enter a URL like:(www.facebook.com / www.yahoo.com )")

document.write(`URL : ${userUrl}</br>`)

let extractDomain = (userUrl.slice(4,userUrl.length))

document.write(`Domain: ${extractDomain}`)


//QS:9 Write a program that takes user input. Convert and show the 
// input in capital letters


let userInput1 = prompt("Enter a word or sentence i can change it into uppercase");

document.write(`userInput : ${userInput1}` ,"</br>")

document.write(`Upper Case: ${userInput1.toUpperCase()}`)


// QS:10 Write a program that takes user input. Convert and show the 
// input in title case

let userInput2 = prompt("Enter a word or sentence i can change it into Title Case");

document.write(`userInput : ${userInput2}` ,"</br>")

let titleCase = userInput2.charAt(0).toUpperCase();

document.write(`Title Case: ${titleCase}`)


//QS:11 You have an array
//  A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an array. 
// After searching, prompt the user whether the given item is 
// found in the list or not. 
// Note: Perform case insensitive search. Whether the user enters 
// cookie, Cookie, COOKIE or coOkIE, program should inform 
// about its availability. Example


let array = ["cake", "apple", "pie", "cookie", "chips", "patties"]

let userInput3 = prompt("wellcome to abc bakery, what do you want to order sir/ma'am");

//YA HUM NA 1 FLAG VARIABLE BANAYA HA 

let found = false;

//PHIR FOR LOOP LAGA KA KA CHECK KIYA KA AGAR USER KA INPUT AARAY ME MILE TW 
//FLAG VARIABLE KO HUM NA TRUE KR DIYA AUR US BAAD BREAK LAGA DIYA BREAK IS LIYA 
//LAGAYA KA AGAR USER NE JO INPUT DALA WO AARAY ME MIL JATA HA TW WO USA LOOP SE 
//BAHER LE AYE GA OR AAGA NHI CHALE GA 


for (let i = 0; i <array.length; i++){
    if(userInput3.toLowerCase() === array[i]){
       
 found=true
 break
    }
}

if(found){
    document.write(`${userInput3} is available at index ${array.indexOf(userInput3.toLowerCase())} in our bakery`)
}
else{
    document.write(`we are sorry ${userInput3} is not available in our bakery`)

}



//QS:11  Write a program to display the last character of a user input.

let userInput4 = prompt("Enter a number ",3243)

document.write(`User input is : ${userInput4} <br>` )

document.write(`Last character of user input is = `, userInput4.charAt(userInput4.length -1));


if(userInput4 === ""){
    alert("Enter a valid number")
}


//QS:12 You have a string “The quick brown fox jumps over the lazy dog”. 
// Write a program to count number of occurrences of word “the” in given string.


document.write(
  "You have a string “The quick brown fox jumps over the lazy dog”. Write a program to count number of occurrences of word “the” in given string. <br> <br>")
let text  = "The quick brown fox jumps over the lazy dog"

lowerCase = text.toLowerCase()

//Hum word find karne ka liya match method ka use karen ga jis ka syntax match(/\bthe\b/gi)
// \b boundry ensure karta ha matlab jo word ap ko find karwana ha ap ko wo likhna pare ga 
// /g globally jitne bhe "the" honge una find kare ga, pehla hon ya akhir ma 
// i case sensitive matlab "The" or "the" dono ko match kare ga
// Agar match() koi result return kare, toh uski length le lo.
//Agar result null ho (matlab 'the' nahi mila), toh 0 return karo.


find = (lowerCase.match(/\bthe\b/gi).length || 0 )

document.write(`The word 'the' appears ${find} times.`);



