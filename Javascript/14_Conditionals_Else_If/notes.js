// ==== "else if" statements can be added between the if and else in your control flow, which gives your program more conditions than just the two to evaluate // 
if (conditionA) { 
    // Do this 
} else if (conditionB) { 
    // Do this, instead 
} else { 
    // Do this if none of the above are true 
} 

// You can use as many else if statements as you want // 
// Example // 

let grade = 93; 

if (grade > 90) { 
    console.log("Grade: A");
} else if (grade > 80) { 
    console.log("Grade: B");
} else if (grade > 70) { 
    console.log("Grade: C")
} else if (grade > 60) { 
    console.log("Grade: D")
} else { 
    console.log("Grade: F")
}