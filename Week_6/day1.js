function average(){
    const scoreElem = document.getElementsByClassName("score");
    const numOfScore = scoreElem.length;
    let totalScore = 0;
    const resultElem = document.getElementById("result");
    for(let i=0; i<numOfScore; i++){
        totalScore += parseInt(scoreElem[i].innerText);
    }
    resultElem.innerText = totalScore / numOfScore;
}

function greet() {
    console.log("greeting");
}
// Is it commonly used..?
function callAnotherFuntion(fname){
    fname();
}

function mp(i){
    return Math.pow(10,i);
}
function getEachNum(){
    let num = 456;
    for (let i=1; i<=3; i++){
        let m = num %mp(i);
        let k = parseInt(m/mp(i-1));
        console.log(k);
    }
}
getEachNum();

function findDigits(num){
    let digits = 0;
    while(num>0){
        num=parseInt(num/10);
        digits += 1;
    }
    return digits;
}
let digits = findDigits(7856);
console.log(digits);


// document.addEventListener("DOMContentLoaded", (e)=>{
// })