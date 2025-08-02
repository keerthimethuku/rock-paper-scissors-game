let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
const uS = document.querySelector("#user-score");
const cS = document.querySelector("#comp-score");

const genCompChoice = () =>{
const options = ["rock","paper","scissors"];
const randIdx = Math.floor(Math.random()*3);
return options[randIdx];
}

const drawGame = () =>{
    msg.innerText = "It is a Draw Game.Play Again";
    msg.style.backgroundColor = "orange";
}

const showWinner = (userWin,userChoice,compChoice) =>{
    if(userWin){
        userScore++;
        uS.innerText = userScore;
        msg.innerText = `You Win your ${userChoice} beats ${compChoice} :)`;
        msg.style.backgroundColor = "Green";
    }else{
        compScore++;
        cS.innerText = compScore;
        msg.innerText = `You lose ${compChoice} beats your ${userChoice} :(`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) =>{
console.log("Your Choice is ",userChoice);
const compChoice = genCompChoice();
console.log("Comp Choice is ",compChoice);

if(compChoice === userChoice){
   drawGame();
}else{
    let userWin = true;
    if(userChoice === "rock"){
        userWin = compChoice === "paper" ? false : true ;
    }else if(userChoice === "paper"){
        userWin = compChoice === "scissors" ? false: true;
    }else{
        userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin,userChoice,compChoice);
}

}
choices.forEach((choice) =>{
    choice.addEventListener("click", () =>{
      const userChoice = choice.getAttribute("id");
      playGame(userChoice);
    })
}); 

