// ==== Instructions ==== // 
/* Let's use a while loop to see what your lucky number could be!

In a lucky-number.js file, define a luckyNumber and set it to your favorite number. 
Next, create a guess variable that is between 1 and 10, using the Math.floor() and Math.random() methods:

const luckyNumber = 7
let guess = Math.floor(Math.random() * 10) + 1;

Next, create a while loop that runs as long as the guess and the luckyNumber are not equal. 
Each time, print the incorrect number and then print the luckyNumber outside the loop. */ 

const luckyNumber = 7; 
let guess = Math.floor(Math.random() * 10) + 1; 

while (guess != luckyNumber) { 
    console.log("Incorrect: " + guess)
    guess = Math.floor(Math.random() * 10) + 1;
} 
console.log("Correct: " + luckyNumber); 