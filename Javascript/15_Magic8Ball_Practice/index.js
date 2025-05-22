// ==== Instructions ==== // 
/* The Magic 8 Ball is a popular office toy and children's toy invented in the 1940's for fortune-telling and advice seeking. 🎱

    It's an oversized 8 ball with some of the following answers:

    1.) Yes - definitely.
    2.) It is decidedly so.
    3.) Without a doubt.
    4.) Reply hazy, try again.
    5.) Ask again later.
    6.) Better not tell you now.
    7.) My sources say no.
    8.) Outlook not so good.
    9.) Very doubtful.
    10.) Create a magic8.js program that can respond to any Yes or No questions with a different answer each time it executes.

*/ 

let num = Math.floor(Math.random() * 10) 

if (num === 1) { 
    console.log("Yes - definitely.")
} else if (num === 2) { 
    console.log("It is decidedly so.")
} else if (num === 3) { 
    console.log("Without a doubt.")
} else if (num === 4) { 
    console.log("Reply hazy, try again.")
} else if (num === 5) { 
    console.log("Ask again later.")
} else if (num === 6) { 
    console.log("Better not tell you now.")
} else if (num === 7) { 
    console.log ("My sources say no.")
} else if (num === 8) { 
    console.log("Outlook not so good.")
} else  { 
    console.log("Very Doubtful.") 
}
