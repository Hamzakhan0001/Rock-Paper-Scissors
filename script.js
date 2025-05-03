let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara= document.querySelector("#comp-score");

const genComputerChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options [randIdx]
};

const drawGame = () => {
     msg.innerText = "Draw, please try again"
     msg.style.backgroundColor = "#081b31"
}

const showWinner = (userWin, userChoice, compChoice) =>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win! ${userChoice} beats ${compChoice}`
        msg.style.backgroundColor = "Green"
    }else{
         compScore ++;
         compScorePara.innerText = compScore;
         msg.innerText = `You lose! ${compChoice} beats ${userChoice}`
         msg.style.backgroundColor = "Red"
    }
}
const playgame = (userChoice) => {
      console.log("user choice = ", userChoice)

      //generate computer choice//

      const compChoice = genComputerChoice();
      console.log("comp choice = ", compChoice);

      if(userChoice === compChoice){
        drawGame();
      }else{
        let userWin = true;
        if(userChoice === "rock"){

            //computer ki choice scissors, paper ho skti//
              userWin = compChoice === "paper" ? false : true

        } else if (userChoice === "paper"){

            //computer ki choice scissors , rock ho skti//
            userWin = compChoice === "scissors" ? false: true;

        }else {
           //rock,paper//
           userWin = compChoice === "rock" ? false : true;
        }
        showWinner (userWin, userChoice, compChoice);
      }
}

choices.forEach((choice)=>{
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playgame(userChoice);
    });
})

/* agar hamen 0 se 2 ki range mein number chaye toh 3 
se devide kr dengy jese agar 0 se 9 tk number chaye toh 10 se kr dengy*/
