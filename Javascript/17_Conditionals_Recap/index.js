// ==== Instructions ==== // 
/* Rock Paper Scissors is a classic game that resonates with folks from around the world. The rules are as follows:
        Rock beats Scissors.
        Scissors beat Paper.
        Paper beats Rock.
        Let's use conditionals, the random number generator, and create a program that simulates the game between the player and the computer!

    Begin with a player variable and give it a 0 to represent "Rock", a 1 to represent "Paper", or a 2 to represent "Scissors."

    Then use Math.random() to generate a number between 0 and 2 for another computer variable.

    Then, use conditionals to compare the values of player and computer to see who wins!    

    Player picked:      Rock
    Computer picked:    Scissors

    The player won!

After you're finished, feel free to post a screenshot of your code on Twitter by clicking the icon below! */ 

const rock = 0; 
const paper = 1; 
const scissors = 2;  

let Player = Math.floor(Math.random() * 3);
let Computer = Math.floor(Math.random() * 3);  

if (Player === 0 && Computer === 1) { 
    console.log("Player Picks: rock")
    console.log("Computer Picks: paper")
    console.log("Computer Wins!")
} else if (Player === 0 && Computer === 2) {
    console.log("Player Picks: rock")  
    console.log("Computer Picks: scissors")
    console.log("Player Wins!")
} else if (Player === 0 && Computer === 0) {  
    console.log("Player Picks: rock")
    console.log("Computer Picks: rock")
    console.log("Both teams chose Rock, It's a tie!")

} else if (Player === 1 && Computer === 0) { 
    console.log("Player Picks: paper") 
    console.log("Computer Picks: rock")
    console.log("Player Wins!")
} else if (Player === 1 && Computer === 1) {  
    console.log("Player Picks: paper") 
    console.log("Computer Picks: paper")
    console.log("Both teams chose Paper, It's a tie!")
} else if (Player === 1 && Computer === 2) {  
    console.log("Player Picks: paper") 
    console.log("Computer Picks: scissors")
    console.log ("Computer Wins!") 

} else if (Player === 2 && Computer === 0) { 
    console.log("Player picks: scissors") 
    console.log("Computer picks: rock")
    console.log("Computer Wins")
} else if (Player === 2 && Computer === 1) {  
    console.log("Player picks: scissors") 
    console.log("Computer picks: paper")
    console.log("Player Wins!")
} else if (Player === 2 && Computer === 2) {  
    console.log("Player Picks: scissors") 
    console.log("Computer picks: scissors")
    console.log("Both Teams chose scissors,  it's a tie!") 

} else { 
    console.log("Thanks for Playing!")
}



