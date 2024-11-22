// QS:1 Declare an empty array using JS literal notation to store 
// student names in future

var studentNames = [];


// QS:2 Declare an empty array using JS object notation to store 
// student names in future.

var studentNames = {};   



// QS:3 Declare and initialize a strings array

var array = ["saad","asad"];


// QS:4 Declare and initialize a numbers array

var array = [1,2,3,4,5,6,7,8,9,10];


// QS:5 Declare and initialize a boolean array

var array = [true,false,true,true,false,true];


// QS:6 Declare and initialize a mixed array

var array = ["saad",1,true];


// QS:7 Declare and Initialize an array and store available mobile 
// networks in Pakistan

var mobileNetworks = ["jazz","zong","Ufone","Telenor","Warid",]; 
document.write(mobileNetworks);


// QS:8 Declare and Initialize an array and store available education 
// qualifications in Pakistan (e.g. SSC, HSC, BCS, BS, BCOM, MS, 
// M. Phil., PhD). Show the listed qualifications in your browser 
// like


var educationQualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", 
    "M. Phil.", "PhD"]

    for (i = 0; i < educationQualifications.length; i++)
    document.write(i + 1 + ")" , "<b>" , educationQualifications[i] ,"</b>" + "<br>");



document.write( "<h1>" ,"Top movies of 2015" , "</h1>" + "<br>");

var movies = ["Avengers:Age of ultron","spectre","jurrasic world","inside out"];
for (i = 0; i < movies.length; i++)
document.write( i + 1 + ")" ,   movies[i] + "<br>"); 

document.write( "<b>", "Length of array" ,  ":", movies.length ,"</b>")
