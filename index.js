let userScore = 0;
let comScore = 0;

const choices = document.querySelectorAll(".choice");
const result = document.querySelector(".result-val");

const userScoreVal = document.querySelector(".user-score");
const comScoreVal = document.querySelector(".com-score");


const genComChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const ranIndex = Math.floor(Math.random() * 3);
    return options[ranIndex];
}

const drawGame = () => {
    // console.log("Game was draw")
    result.innerText = "Draw";
    result.style.backgroundColor="gray";

}

const showWinner = (userWin) => {
    if (userWin) {
        // console.log("you win!")
        result.innerText = "You Win!";
        result.style.backgroundColor="green";
        userScore++;
        userScoreVal.innerText = userScore;
        
    } else {
        // console.log("you lose")
        result.innerText = "You Lose";
        result.style.backgroundColor="red";
        comScore++;
        comScoreVal.innerText= comScore;
    }
}

const playGame = (userChoice) => {
    // console.log("user choice = ", userChoice);
    const comChoice = genComChoice();
    // console.log("computer choice = ", comChoice);

    if (userChoice === comChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = comChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = comChoice === "scissor" ? false : true;
        } else {
            userWin = comChoice === "rock" ? false : true;
        }
        showWinner(userWin);
    }
}

choices.forEach((choice) => {
    // console.log(choice);
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});