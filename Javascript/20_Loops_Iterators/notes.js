// ==== Iterators in Loops ==== // 
/* By now, you may have realized that we're updating a variable within our loops. These variables 
   are also known as iterators */ 

let i = initialValue; 

while (condition) { 
    // Update the i iterator variable // 
} 

/* To "iterate" means to run the code in a loop once. 
    When the i iterator variable has reached a value that sets the loop's condition to false, we can successfully exit the loop!

Thus far, we've worked with while loops. And while they are useful, we have another to explore. */  

// ==== For loops ==== //  
// The for loop lets us determine how many times we want our loop to run // 
for (let i = initialValue; condition; updateIterator) { 
    // code goes here
} 
/* Let's break that down: 
    a.) First, we define an "i" iterator with an "initialValue". 
    b.) Before the first or next iteration, we test the "i" variable in the condition statement. If we get true, we run the code. Otherwise, we exit the loop. 
    c.) After each iteration, we updateIterator and change the value of i. 
*/ 
for (let i = 1; i <= 10; i++) { 
    console.log(i);
} 
// let i = i  initalizes an iterator variable // 
// i <= 10 the conditional statement that is tested before each iteration 
// i++ this increments the iterator variable by 1 after each iteration 

// We don't always have to print the iterator variable in the loop. For example: 
for (let i = 1; i <= 3; i++) { 
    console.log("Bettle Juice!:")
}


