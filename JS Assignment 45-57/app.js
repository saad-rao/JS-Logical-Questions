                                // EVENTS


//QS:1 Show an alert box on click on a link.

function showAlert(event){

//preventDefault javascript ka 1 method ha jo kesi event ke default 
//behavior ko rok deta ha.
//agar kesi bhe event ka behavior ko rokna ho tw preventDefault ka use karta han.


    event.preventDefault();

    alert("you clicked the link")
}

let getLink = document.getElementById('link')

getLink.addEventListener("click",showAlert)



// QS:2 Display some Mobile images in browser. On click on an
// image Show the message in alert to user, 
//"Thanks for purchasing th phone from us"



function displayMsg(){
    let display = document.getElementById('img')

    display.innerHTML= alert("Thanks for purchasing the phone from us")
}



// QS:3 Display an image in browser. Change the picture on mouseover and set the
// first picture on mouseout.


function mouseover(){
    let mouseover = document.getElementById('image')
    mouseover.innerHTML=image.src = "./mobile-images/mob-2.jpg"

}


function mouseout(){
    let mouseout = document.getElementById('image')
    mouseout.innerHTML=image.src = "./mobile-images/mob-1.jpg"

}

//QS:4 Show a counter in browser. Counter should
    //   increase by press increase button and decrease by press on decrease
    //   button. And show updated counter value in browser.

    let sum = document.getElementById("counter")

    count= 0

    function add(){
        let incBtn = document.getElementById('inc-btn')
        count++
        sum.innerHTML=count
    }



    
    function sub(){
        let subBtn = document.getElementById('sub-btn')
        count--
        sum.innerHTML=count
    }

