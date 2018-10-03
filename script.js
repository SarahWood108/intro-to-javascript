//Make a program that takes a number from 1-100
//If the number is less than 25 say less than 25
//If the number is between 25 and 50 say between 25 and 50
//If the number is between 50 and 75 say between 50 and 75
//If the number is between 75 and 100 say between 75 and 100


//let myNum = 99;
// if (myNum < 25) {
//     console.log("less than 25")
// } 

// else if (myNum >= 25 && myNum < 50) {
//     console.log("between 25 and 50")
// }

// else if (myNum >= 50 && myNum < 75){ 
// console.log("between 50 and 75") 
// }

// else if (myNum>= 75 && myNum <= 100) {
//     console.log("bewtween 75 and 100")
// } else {
//     console.log("You've gone too far")
// }

//Figure out how to generate a random number in javascript
// Let the user guess a number between 1 - 10
// Tell them if they got the right number


// let random = parseInt(Math.random() * 10);
// let userInput = parseInt(prompt("Guess a number 1 - 10"));
// if (random === userInput) {
//     document.write("Congratulations")
// } else {
//     document.write("Try again")
// }


//Loops
//WHile loop - a while loop is a loop that 
//runs as long as a condition  is true

//let skyIsBlue = true;

//while(skyIsBlue === true) {
    // exit condition: that ends the loop
   // console.log("it is true");
   // skyIsBlue = false
// }

let userName = prompt("What is your name?")
while(userName != Sarah) {
    alert("Please input the name Sarah")
    userName = prompt("What is your name?")
}

//Make the guessing game again but it runs until the user
//Guesses the right number

