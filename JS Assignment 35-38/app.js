                        // | FUNCTIONS &  DATE  AND  TIME |


function sum(a,b){
    document.write(a,b);
    console.log(a,b);
    alert(a);
    //agar hum alert a,b likhen ga tw sirf a ke value ko get kare ga is ka lia humen 2 baar alert
    //karna pare ga alert(a) and alert(b) is se hamen dono value mil jayen ge 
    alert(b);
}

sum(22,"saad")

// we can find Even values by making function and using for loop 

let input = prompt("Enter a number to find a even values between a number you enter")
function even(range){
    let array= [];
    for(let i=0; i<=range; i++){
        if(i%2==0){
            array.push(i)
        }
    }
    return array
}

let evenNum = even(input)
console.log(evenNum);



// we can find odd values by making function and using for loop 

let userInput = prompt("Enter a number to find a odd values between a number you enter")
function odd(range){
    let array= [];
    for(let i=0; i<=range; i++){
        if(i%2==1){
            array.push(i)
        }
    }
    return array
}

let oddNum = odd(userInput)
console.log(oddNum);



//QS:1.Create a block of code that you can use several times. 

////function 1 block of code ha jo hum 1 bar bana ka use kahin bhe
//// call kr sakte ha kesi bhe task ko perfoam karne ka liya OR 
////kesi bhe value ko calculate krna ka liya.

function myName(){
console.log("saad");

    
} 
myName()


//We can set previous date and time by giving the values like:
 let previous = new Date(2022,5,12,4,22,10);

 // The format is : YEAR, MONTH, DAY, HOUR,MINUTE, SECOND, MILISECONDS.

 console.log(previous);


//agar ap wo ya syntax yaad karna me mushkil ho rhi ho tw is ka alternate bhe ha 
//1 variable banaya newDate ka name se or new Date ke parentheses ke andar string ka me value pass krne pare
//ge for example ap ko apni birth date tw pata lekin ap chah rhen ha us ka day bhe pata chal jaye tw ap
//simple parentheses me apni date of birth likhen wo ap ko day bhe bata de ga

 let newDate = new Date("2004 dec 10 ")
 console.log(newDate);
 
 




//QS:2 Write a function that displays current date & time in your browser.

function dateTime(){
    let getDateTime = new Date();
    let date = getDateTime.toLocaleDateString();
    let time = getDateTime.toLocaleTimeString();
    console.log(`${date} ${time}`);
    
}

dateTime()


//QS:3 Write a function that takes first & last name and then it greets the user using his full name.


function getNames(){
let userFirstName = prompt("Enter your first name");
let userLastName = prompt("Enter you last name");
let fullName = `${userFirstName} ${userLastName}`;
let greets = `wellcome to world of programming ${fullName}`;
console.log(greets);

}

getNames()


//:QS:4 Write a function that adds two numbers (input by user) and returns the sum of two numbers

function add(){
    let num1 =Number (prompt("Enter a number"));
    let num2 = Number (prompt("Enter a 2nd number"))
    let sum = num1 + num2
    console.log(sum);
    
}

add()

//QS:5 Write a function that takes three arguments num1, num2 & operator & compute the desired operation. Return and show the desired result in your browser.

function calculate(){
    let num1 = Number (prompt("Enter a number"))
    let operator = (prompt("Enter a operator eg: +,-,*,/"))
    let num2 = Number (prompt("Enter a 2nd number"))

    let result ;

    switch(operator){
    case "+":
        result = num1+num2
        break
        case "-":
            result = num1-num2
            break
            case "*":
            result = num1*num2
            break
            case "/":
                if(num2!==0){
                    result = num1/num2
                }
                else{
                    result= 'Error: Division by zero';
                }
           break

           default:
            result="invalid operator";
    
    }

    document.write(`Result: ${result}`)
    
}



calculate()



//QS:7 Write a function that take start and end number as inputs & display counting in your browser.

function displayCounting() {
    let startNum = Number (prompt("Enter a number from where you start the counting."))
    let endNum = Number (prompt("Enter a end number."))

    //pehla 2 prompt liya phir for lagaya or index ko startNum ke equal kr diya aur us ke length ko user 
    //ke endNum tak kr diya aur phir i ma increment kr diya or akhir ma function ko call lazmi karwana ha
    // warna function run nhi kre ga balke prompt tak nhi le ga so keep in mind that when you make a function 
    //then call it compulsory.

    for(let i =startNum; i<=endNum; i++){
        document.write(i);
        
    }

}
displayCounting()




//QS:8  Write a function that calculates the area of a rectangle.
// A = width * height
// Pass width and height in following manner:
// i. Arguments as value
// ii. Arguments as variables


function rectangle_area(width,height){
    document.write("The Width of rectangle is = ",width,"<br>" );
    document.write("The height of rectangle is = ",height ,"<br>")
    area = width*height
    return area
    }
    
    document.write("The area of rectangle is :", rectangle_area(10,10))