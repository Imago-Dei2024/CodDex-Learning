// ==== Instructions ==== // 
// Lets practice defining functions by making a countdown timer! 
// Define a countdown() function with the function keyword. Then add the following: 
/*  a) A loop that iterates down from that 10 to 1 
    b.) Inside the loop, print the current number. 
    c.) Outside the loop, return the string "Blast Off!" 
    d.) Lastly, call the countdown() function and remember to log it in to the console */ 

function countdown() { 
    for (let i = 10; i > 0; i--) { 
        consolelog(i);
    } 
    return "Blast Off!";
} 

console.log(countdown()); 