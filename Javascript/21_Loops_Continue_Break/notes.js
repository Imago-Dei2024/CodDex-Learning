// Write code below 💖

// ==== "continue" ==== // 
// The "continue" keyword: 
// If a given condition is true, the continue keyword ends the current iteration 
// in a given for or while loop and we go to the next one. // 

for (let i = 0; i < 5; i++) { 
  if (i == 1) { 
    continue; 
  } 
  console.log(i);
} 
// this will output the numbers 0 through 4, except for 1 because the continue skips this iteration. // 
// ==== "break" ==== // 
// the "break" keyword says: 
// If a given condition in a loop is true, this keyword ends the loop altogether and the program resumes in the line immediately after the closing curly bracket of the loop // 
for (let i = 0; i < 5; i++) { 
  if (i == 3) { 
    break;
  } 
  console.log(i);
}
// If and when i is equal to 3, the break keyword ends the loop, and our output looks like this: 

for 