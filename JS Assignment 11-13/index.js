//QS:1 Write a program to check whether the given input number is
// divisible by 3 or else show a message “Number is not divisible
// by 3”

var inputNumber = +prompt("Enter a Number");
var divide = inputNumber % 3;
var result = divide;

if (inputNumber % 3 == 0) {
  document.write(
    inputNumber + " " + "is divisible by 3 and the answer is" + " " + result
  );
} else {
  document.write(
    inputNumber + " " + "is not divisible by 3 and the answer is" + " " + result
  );
}

//QS:2 Write a program that checks whether the given input is an even
// number or an odd number.

var inputNumber = +prompt("Enter a number");

if (inputNumber % 2 == 0) {
  document.write("The given number is even");
} else {
  document.write("The given number is odd");
}

//QS:3 Write an if/else statement with the following condition:
// If the variable age is greater than 18, output "Old enough",
// otherwise output "Too young"

var age = +prompt("Enter your age");

if (age >= 18) {
  document.write("old enough");
} else {
  document.write("Too young");
}

//QS:4 Write a program that prompts the user for their name, and then
// displays a special greeting to that person if their name is the
// same as yours. If the name entered by the user is anything
// other than your name, your code should not produce any
// output

var name1 = prompt("Enter the name");

if (name1 == "saad") {
  document.write("hello ser G ");
}

//QS:5 Write a program that takes time as input from user in 24 hours
// clock format like: 1900 = 7pm. Implement the following case
// using if, else & else if statements

var input = parseInt(
  prompt("Enter time in 24-hour format (e.g., 1900 for 7:00 PM):")
);

if (input >= 0 && input < 1200) {
    alert("Good morning honey! ");
} else if (input >= 1200 && input < 1700) {
    alert("Good afternoon honey! ");
} else if (input >= 1700 && input < 2100) {
    alert("Good evening honey! ");
} else if (input >= 2100 && input <= 2359) {
    alert("Good night honey! ");
} else {
    alert("Please enter a valid time");
}

//QS:6 Write a program that takes a calendar year in YYYY format in
// a variable. Check & notify the user whether it is a leap year or
// not.

var year = +prompt("Enter the year in   YYYY format");
if (year % 4 == 0) {
  document.write("The given year is leap year");
} else {
  document.write("The given year is not a leap year");
}

//QS:7 Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then give
// message “ Please enter your password”
// ii. Check if both passwords are same. If they are same,
// show message “Correct! The password you entered
// matches the original password”. Show “Incorrect
// password” otherwise

var correctPassword = "SMITbatch12";
var password = prompt("Enter your password");

if (password == "") {
  document.write("Please enter your password");
}

if (correctPassword == password) {
  document.write(
    "Correct! The password you entered matches the original password."
  );
} else {
  document.write("Incorrect password");
}

//QS:8 Write a program that adds an else statement to the following
// script to display “You are not Fahad”

var firstName = "Ali";
if (firstName === "Fahad") {
  document.write("Hello Fahad!");
}

var firstName = "Ali";
if (firstName === "Fahad") {
  document.write("Hello Fahad!");
} else {
  document.write("You are not Fahad");
}

// QS:9 This if/else statement does not work. Try to fix it:
//  var greeting;
//  var hour = 13;
//  if (hour < 18) {
//  greeting = "Good day";
//  else
//  greeting = "Good evening";
//  }

var greeting;
var hour = 20;
if (hour < 18) {
  document.write((greeting = "Good day"));
} else {
  document.write((greeting = "Good evening"));
}

// QS:10 Write a program that takes input a number from user & state
// whether the number is positive, negative or zero

var inputNumber = +prompt("Enter a Number");

if (inputNumber > 0) {
  document.write("The given number is positive");
}
if (inputNumber < 0) {
  document.write("The given number is negative");
}
if (inputNumber == 0) {
  document.write("The given number is zero");
}

//QS:11 Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal.

var inputNumber1 = +prompt("Enter a Number");
var inputNumber2 = +prompt("Enter a Number");
if (inputNumber1 > inputNumber2) {
  document.write(inputNumber1 + " " + "is greater than" + " " + inputNumber2);
}
if (inputNumber1 < inputNumber2) {
  document.write(inputNumber2 + " " + "is greater than" + " " + inputNumber1);
}
if (inputNumber1 == inputNumber2) {
  document.write(
    inputNumber1 + " " + "and" + " " + inputNumber2 + " " + "are equal"
  );
// }

//QS:12 Ask the user what the current hour is. If the hour is between
//     6 and 9 a.m., tell the user, "Breakfast is served." If the hour is
//     between 11 a.m. and 1 p.m., tell the user, "Time for lunch." If
//     the hour is between 5 and 8 p.m., tell the user, "It's dinner
//     time." For any other hours, tell the user, "Sorry, you'll have to
//     wait, or go get a snack." (Hint: Store the hour in 24 hours clock
//     format i.e. 14 for 2pm , 15 for 3pm)


var hour = +prompt("Enter the hour 24 hours clock format (i.e. 14 for 2pm , 15 for 3pm)")

if (hour>=6  && hour<=9) {
    document.write("Breakfast is served")
}
 if (hour >= 11 && hour<=13){
    document.write("Time for launch")
 }

 if (hour >= 17 && hour<=20){
    document.write("It's dinner time")
 }

 if (hour == 10 || hour == 2 || hour == 3 || hour == 4 || hour == 9 || hour == 10 || hour == 11 || hour == 12) {
document.write("Sorry, you'll have to wait, or go get a snack.")
 }



//QS:13 Write a JavaScript program that takes two inputs from the user:

// A number for which the multiplication table will be generated.
// The limit up to which the multiplication table should be printed.

let anyNum = +prompt("Enter any number you want to print as a table.");

let limitOfNum = +prompt(
  "Enter a number where till you want to print a table."
);

for (i = 1; i <= limitOfNum; i++) {
  document.write(`${anyNum} X ${i} = ${anyNum * i}, <br>`);
}




  //REVERSE COUNTING
let i;
for (i = 10; i>=1; i--){
    document.write(i,") hello world", "<br>");

}

let num = [1,2,3,4,5,6,7,8,9,10];

for(let i=1; i<=10; i++){
    document.write(i ,"<br>")
}

let tableNum = 3;

for(let i = 1; i<=10; i++){
    document.write(`${tableNum} x ${i} = ${tableNum*i} <br>`)
}       