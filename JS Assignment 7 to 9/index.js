                        // CONCATINATING



var num1 = 3;
var num2 = 5;
var result = num1-num2;
document.write("subtraction of" + ' ' + num1 + ' ' + "and" +' '+ num2  +' '+ "is" +' '+ "<b>", result ,"</b>" , "<br>")



var ticketPrice = 600;
var numberofTickets = 5;
var totalCost = ticketPrice*numberofTickets;
document.write('Total cost to buy' +' '+ numberofTickets +' '+ 'tickets to a movie is' +' '+ totalCost+''+'PKR' )



var name1 = prompt("Enter your name")

var subject1= +prompt('Enter your math subject number')
var subject2=+prompt('Enter your  english subject number')
var subject3=+prompt('Enter your urdu subject number')
var subject4=+prompt('Enter your islamiat subject number')
var subject5=+prompt('Enter your physics subject number')

var total = (subject1+subject2+subject3+subject4+subject5)

var percentage =  (total/500*100)
document.write(name1 +' '+ "your percentage is" +' '+ percentage) 



var input = prompt("Enter a number");

var num1= [1,2,3,4,5,6,7,8,9,10];
var result1 = input*num1[0];
document.write(input ,"x" ,num1[0] ,"=", result1 , "<br>")


var num2= [1,2,3,4,5,6,7,8,9,10];
var result2 = input*num2[1];
document.write(input ,"x" ,num2[1] ,"=", result2 , "<br>")


var num3= [1,2,3,4,5,6,7,8,9,10];
var result3 = input*num3[2];
document.write(input ,"x" ,num3[2] ,"=", result3 , "<br>")


var num4= [1,2,3,4,5,6,7,8,9,10];
var result4 = input*num4[3];
document.write(input ,"x" ,num4[3] ,"=", result4 , "<br>")


var num5= [1,2,3,4,5,6,7,8,9,10];
var result5 = input*num5[4];
document.write(input ,"x" ,num5[4] ,"=", result5 , "<br>")


var num6= [1,2,3,4,5,6,7,8,9,10];
var result6 = input*num6[5];
document.write(input ,"x" ,num6[5] ,"=", result6 , "<br>")


var num7= [1,2,3,4,5,6,7,8,9,10];
var result7 = input*num7[6];
document.write(input ,"x" ,num7[6] ,"=", result7 , "<br>")


var num8= [1,2,3,4,5,6,7,8,9,10];
var result8 = input*num8[7];
document.write(input ,"x" ,num8[7] ,"=", result8 , "<br>")


var num9= [1,2,3,4,5,6,7,8,9,10];
var result9 = input*num9[8];
document.write(input ,"x" ,num9[8] ,"=", result9 , "<br>")


var num10= [1,2,3,4,5,6,7,8,9,10];
var result10 = input*num10[9];
document.write(input ,"x" ,num10[9] ,"=", result10 , "<br>")



var cityName = prompt("Enter a city name")
var result =alert("welcome to city of lights")



var genderName = prompt("Enter your Gender")
var gender = ("male")



if (gender == "male" )
{
    document.write("Good morning sir")
} 

else (gender !== "male") 
{
    document.write("good morning Ma'am")
}