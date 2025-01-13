     //  //    |  SWITCH  STATEMENTS | WHILE…	DO-WHILE  LOOPS  |



// 1. Write a switch statement with the following condition:
// If the variable age is greater than 18, output "Old enough",
// otherwise output "Too young".

let userInput = Number(prompt("Enter your age"))
switch(true){
    
    case (userInput >18):
        console.log("old enough");
        break
        case (userInput<18):
            console.log("too young");
            break
            default:
                console.log("invalid number");
}


// 2. Write a program to check whether the given input number is
// divisible by 3 or not by using Switch Case statements. Show a
// message “Number is not divisible by 3” or “Number is divisible
// by 3”.

let userInput = Number(prompt("Entert the number to check that number is divisible by 3 or not"))

switch(true){
    case (userInput%3==0):
        console.log(`${userInput} is divisible by 3`);
        break
        case(userInput%3==1):
        console.log(`${userInput} is not divisible by 3`);
        break
        default:
            console.log("Invalid number");       
}


// 3. Write a program to create a calculator for +, -, *, /, % using
// switch case statements. (number1, number2 and operator will
// be input)


let userNum1 = Number (prompt("Enter a number"));
let userOperator = (prompt("Enter a operator you want"));

let userNum2 = Number (prompt("Enter a 2nd number"));



let result ; 

switch(userOperator){
    case "+":
        result = userNum1+userNum2
        break
        
        case "-":
            result = userNum1-userNum2
            break

            case "*":
                result = userNum1*userNum2
                break

                case "/":
                    if(userNum2!==0){
                         result = userNum1/userNum2
                    }
                    else{
                        result= 'Error: Division by zero';
                    }
                  
                    break

                    default:
                        result = "invalid operator "

                      
}

document.write(`Result: ${result}`)