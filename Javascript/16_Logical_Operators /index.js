// ==== Instructions ==== // 
/* In summer 2023, the smoke from wildfires in Canada raised concerns about the Air Quality Index (AQI) in one's area.

    Create an air-quality-index.js program.

    Google the AQI in your area and define an aqi variable with that number.

    Write an if/else if/else statement with the following logic:
        If aqi is between 0 and 50, print "Good".
        Else if aqi is between 51 and 100, print "Moderate".
        Else if aqi is between 101 and 150, print "Unhealthy (Sensitive Groups)".
        Else if aqi is between 151 and 200, print "Unhealthy".
        Else if aqi is between 201 and 300, print "Very Unhealthy".
        Else, print "Hazardous". 
*/  

let location = "Lakewood, CO"
let AQI = 66;  

if (AQI > 0 && AQI <= 50) { 
    console.log("Good");
} else if (AQI >= 51 && AQI <= 100) { 
    console.log("Moderate"); 
} else if (AQI >= 101 && AQI <= 150) { 
    console.log("Unhealthy (Sensitive Groups");
} else if (AQI >= 151 && AQI <= 200) { 
    console.log("Unhealthy");
} else if (AQI >= 201 && AQI <= 300) { 
    console.log("Very Unhealthy");
} else { 
    console.log("Hazardous");
} 
