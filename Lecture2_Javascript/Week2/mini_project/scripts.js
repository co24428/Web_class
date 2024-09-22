const imgs = ["hat.png", "pants.png", "shoes.png", "table.png", "chair.png"];
const quizImage = document.querySelector(".quizImage");
const answerTextbox = document.querySelector(".userAnswer");
const responseTextbox = document.querySelector(".response");
const scoreText = document.querySelector(".score");
const highScoreText = document.querySelector(".highScore");
const playButton = document.querySelector(".playBtn");


const currentQuizNumberSpan = document.getElementById("currentQuizNumber");
const totalQuizNumberSpan = document.getElementById("totalQuizNumber");

let score = 0;
let highScore = 0;

document.addEventListener("DOMContentLoaded", () =>{
    totalQuizNumberSpan.innerText = imgs.length;
    resetGame();
})

let used =[];  
function getRandomNumber(limit, used){
    const randomNumber = Math.round(Math.random() * (limit-1) );
    // randomNumber is not in used array
    if (used.indexOf(randomNumber) === -1){
        used.push(randomNumber);
        console.log(randomNumber);
        return randomNumber;
    } 
    // randomNumber is in used array
    else {
        console.log(`${randomNumber} is already used`)
        return -1;
    }
}

function swapBtn(str){
    playButton.innerText = str;
    if (str === "next"){
        playButton.removeEventListener("click", play);
        playButton.addEventListener("click", next);
    } else if (str === "play"){
        playButton.removeEventListener("click", next);
        playButton.addEventListener("click", play);
    }
}

let curruntImgIdx;
function next(){
    let imgIdx;
    
    if (used.length === imgs.length){
        alert("finish!!")
        return 0;
    } else {
        while(true){
            imgIdx = getRandomNumber(imgs.length, used);
            if (imgIdx !== -1){
                curruntImgIdx = imgIdx;
                const imagePath = "img/" + imgs[imgIdx];
                console.log(imagePath);
                console.log(used);
                quizImage.src = imagePath;
                setQuizNumber();
                answerTextbox.value = "";
                break;
            }
        }
    }
    responseTextbox.innerText = "Let's guess first letter of picture!";
    swapBtn("play");
}

function play(){
    const correctAnswer = imgs[curruntImgIdx][0];
    // console.log(correctAnswer);
    const userAnswer = answerTextbox.value;
    const result = checkMatchedCharacter(correctAnswer, userAnswer);
    if (result){
        responseTextbox.innerText = "You're right!! Get 3 Points!!";
        score += 3;
    } else {
        responseTextbox.innerText = "You're wrong.. Get -2 Points.";
        score -= 2;
    }
    updateScore()
    swapBtn("next");
    // logging High score and reset game
    // finish game if (used.length === imgs.length)
    // alert user's score with "your score is xxx, you beat the high score!"
    if (used.length === imgs.length){
        let resultmessage;
        if (score > highScore){
            updateHighScore(score);
            resultmessage = `Your score is ${score}. You beat the high score!`;
        } else {
            resultmessage = `Your score is ${score}. Try again to get high score!`;
        }
        alert(resultmessage);
        resetGame();
    }
}

// resetGame: return to first state with play.png, and 0/5 quiz numbers
// used array go to empty array
function resetGame(){
    quizImage.src = "img/play.png";
    currentQuizNumberSpan.innerText = 0;
    responseTextbox.innerText = "Let's guess first letter of picture!";
    used = [];
    playButton.addEventListener("click", next);
    score = 0;
    updateScore();
}

function checkMatchedCharacter(str1, str2){
    if (str1 === str2){
        return true;
    } else {
        return false;
    }
}

function setQuizNumber(){
    currentQuizNumberSpan.innerText = used.length;
}

function updateScore(){
    scoreText.innerText = score;
}

function updateHighScore(score){
    highScore = score;
    highScoreText.innerText = highScore;
}