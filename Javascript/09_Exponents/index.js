// ==== Instructions ==== // 
/* The body mass index (BMI) was created ----- 
    It is computed by taking an individuals weight (mass) in Kilograms and dividing it by the square of their height in meters. 
    a.) bmi = mass / height ** 2  */ 


const programName = "Connor's BMI"; 
let pounds = 145; 
let foot = 5.83333

const poundsToKilo = pounds / 2.205; 
const footToMeter = foot / 3.281; 

const mass = (poundsToKilo); 
const height = (footToMeter);  
const bmi = mass / height**2; 

console.log("========================"); 
console.log(        programName       ); 
console.log("------------------------"); 
console.log("  Inputs & Conversions  ");  
console.log(pounds); 
console.log(foot); 
console.log(poundsToKilo); 
console.log(footToMeter); 
console.log("------------------------"); 
console.log("BMI: ") 
console.log(mass); 
console.log(height); 
console.log(bmi); 
console.log("========================"); 

