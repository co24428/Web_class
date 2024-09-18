const imgs = ["hat.png", "pants.png", "shoes.png", "table.png", "chair.png"];
const quizImage = document.querySelector(".quizImage");
const answerTextbox = document.querySelector(".userAnswer");
const responseTextbox = document.querySelector(".response");
const scoreText = document.querySelector(".score");
const playButton = document.querySelector(".playBtn");

let score = 0;
let highScore = 0;

document.addEventListener("DOMContentLoaded", () =>{
    quizImage.src = "img/play.png";
})

const used =[];  
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
                break;
            }
        }
    }
    // while(used.length < imgs.length)

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
}

function checkMatchedCharacter(str1, str2){
    if (str1 === str2){
        return true;
    } else {
        return false;
    }
}

function updateScore(){
    scoreText.innerText = score;
}
