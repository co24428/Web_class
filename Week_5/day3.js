const numElem = document.getElementById("numDiv");
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function checkNumber(number){
    if (number % 2 == 0){
        return "even";
    } else if (number % 2 == 1){
        return "odd";
    }
}

function showRandom(){
    const randInt = getRandomInt(100);

    const numElem = document.getElementById("numDiv");
    const resultElem = document.getElementById("numResult");

    numElem.innerText = randInt;
    resultElem.innerText = checkNumber(randInt);

}
