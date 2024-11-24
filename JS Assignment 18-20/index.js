//QS:1 Write a program to display the message “Hello World” 5 times 
// in your browser using for loop



for(let i = 0; i<=5; i++){
 document.write(` Hello world </br>`);
}



//QS:2 Write a program to print numeric counting from 1 to 10

for (let i = 1; i<11; i++){
   document.write([i], "</br>");
    
}


//QS:3 Write a program to print multiplication table of any number 
// using for loop. Table number & length should be taken as an 
// input from user

let userNum = parseFloat (prompt("Enter a number of your choice which you want to print as a table"))
let userNumLength = parseFloat (prompt("Enter the length up to which you want the table."))


for(let i =1; i<=userNumLength; i++){
    document.write(`${userNum} X ${i} = ${userNum*i}</br>`)
}


//QS:4 You have an array 
// A = [“Nokia”, “Samsung”, “Apple”, “Sony”, “Huawei”]
// Write each element on new line with the help of for loop.

let array =["Nokia", "Samsung","Apple","Sony","Huawei"];

for (let i = 0; i<=4; i++){
    document.write(`${array[i]} <br>` );
    
}


//QS:5 Write a program to print items of the following array using for 
// loop:
// fruits = [“apple”, “banana”, “mango”, “orange”, “strawberry”]


let fruits = ["apple", "banana", "mango", "orange", "strawberry"];

for (let i =0; i<=4; i++){
    document.write(`${fruits[i]} </br>`)
}

for(let i = 0; i<=4; i++){

  document.write(`Element at index ${[i]} is ${fruits[i]} </br>`)
}
  




//Q:7 Generate the following series in your browser. See example 
// output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19

//COUNTING 
for (let i =1; i<=15; i++){
    document.write(`${i },`)
}

//REVERSE COUNTING 
for (let i=10; i>=1; i--){
    document.write(`${i },`);
    
}

//EVEN NUMBERS 
let userInput1 = Number (prompt("Enter your number"));

for(let num=0; num<=userInput1; num++){
    if(num%2===0){
        document.write(num)
    }
    else{

    }
}

// ODD NUMBERS
let userInput2 = Number (prompt("Enter your number"));

for (let num = 0; num<userInput2; num++){
    if(num%2===1){
        document.write(num, ",")
    }

    else{

    }
}