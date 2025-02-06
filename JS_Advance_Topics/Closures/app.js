//What is closure?
// A closure is a function that remembers the variables from its outer function’s scope, even after the outer function has finished executing. Closures are commonly used in:
//  Data hiding (private variables)
//  Encapsulation
//  Callback functions
//  Event listeners
//  Memoization & Optimization

// document.write(`-------------------------QS:1--------------------------` ,"<br>","<br>")

// 1. Counter Function (Encapsulation of Data)
//Create a function createCounter that returns a function.
//The returned function should increment and return a counter
//every time it is called.

function createCounter() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}

let counter = createCounter();
console.log(counter());
console.log(counter());
console.log(counter());

// document.write(`-------------------------QS:2--------------------------` ,"<br>","<br>")

// 2. Private Data (Data Hiding)

// Question 2:Create a function userAccount that takes a username
// and returns an inner function that allows getting and changing
// the username securely.

function userAccount(username) {
  return {
    getUsername: function () {
      return username;
    },

    setUsername: function (newName) {
      username = newName;
    },
  };
}

let user = userAccount("Saad Naseem");
console.log(user.getUsername());

user.setUsername("Saad");
console.log(user.getUsername());

// document.write(`-------------------------QS:3--------------------------` ,"<br>","<br>")

// 3. Button Click Counter

// Write a function clickCounter that keeps track of how many times a button is clicked.

function clickCounter() {
  let count = 0;
  return function () {
    count++;

    document.getElementById("output").innerHTML = "clicks : " + count;
  };
}

let countClicks = clickCounter();
document.getElementById("btn").addEventListener("click", countClicks);

// When you click the button, the result will update (e.g., "Clicks: 1", "Clicks: 2").
// The button will not be removed; only the count below it will be updated.
