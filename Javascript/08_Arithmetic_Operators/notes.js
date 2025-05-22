// ==== Operators ==== // 
// Now that we know about variables, let's use them, with arithmetic operators to perform math calculations // 
/* Javascript has the following arithmetic operators: 
    a.) "+" addition
    b.) "-" subtraction 
    c.) "*" multiplication 
    d.) "/" division 
    e.) "%" modulo (returns the remainder) 
    f.) "**" Exponent */ 

// We use these operators to write expressions // 
let score = 0; 

score = 4 + 3;  // Score is now 7
score = 4 - 3;  // Score is now 1 
score = 4 * 3;  // Score is now 12   
score = 4 / 3;  // Score is now 1.3333 
score = 4 % 3;  // Score is now 1 

console.log(score); //Output = 1 

// --- Example --- // 
// The following code calculates a 20% tip by adding the total price of a pizza and coke, and then multiplying by a decimal number (also known as a float); // 

const pizza = 2.99; 
const coke = 0.99; 

let total = pizza + coke; 
let tip = total * 0.2; 

console.log(tip); //Output 0.796 

// Another way to write this in one line of code is with parentheses // 
let tip2 = (pizza + coke) * 0.2; 