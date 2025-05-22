// ==== Logical Operators ==== // 
// Logical Operators, also known as boolean operators, combine and evaluate two conditions // 
/* They are: 
    a.) &&   The AND logical operator returns true if both conditions are true, and returns false otherwise  
    b.) ||   The OR logical operators returns true if at least one of the conditions is true, and returns false otherwise 
    c.) !    The NOT operator returns true true if the condition is false, and vice versa. */ 

// Examples // 
if (hunger > 4 && anger > 1) { 
    console.log("Hangry");
} 

if (coffee > 1 || bubble_tea > 0) { 
    console.log("☺️");
} 

if (!tired) { 
    console.log("Let's code!");
}