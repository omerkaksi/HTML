//First interactive game

let playGame=confirm("Shall we play rock, paper or scissors?");
if (playGame){

    let playerChoice = prompt("pleease enter rock, paper or scissors");
    if(playerChoice){
let playerOne=playerChoice.trim().toLowerCase();
if(playerOne==="rock"|| playerOne==="paper" ||playerOne==="scissors"){
    let computerChoice = Math.floor(Math.random()*3+1);
    let computer=computerChoice===1? "rock": computerChoice===2? "paper" :"scissors";
let result= 
playerOne===computer
? "Tie game!"
: (playerOne==="rock" && computer==="paper")
? `player: ${playerOne} computer: ${computer}\n computer wins`
: (playerOne==="rock" && computer==="scissors")
? "player wins"
: (playerOne==="paper" && computer==="rock")
? "player wins"
: (playerOne==="paper" && computer==="scissors")
? `player: ${playerOne} computer: ${computer}\n computer wins`
: (playerOne==="scissors" && computer==="paper")
? "player wins"
: (playerOne==="scissors" && computer==="rock")
? `player: ${playerOne} computer: ${computer}\n computer wins`: "no option";
alert(result);
let playAgain=confirm("play again");
playAgain ? location.reload():alert("ok,thanks for playing");
}
else{
    alert("You didn't enter rock, paper or scissors.")
}
    }
    else{
        alert("I guess you changed your mind. Maybe next time")
    }

//play

} else{
    alert("ok, maybe next time.");
}