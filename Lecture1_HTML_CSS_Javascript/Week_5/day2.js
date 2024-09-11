function sum(){
    const num1 = document.getElementById("num1");
    const num2 = document.getElementById("num2");
    const resultElem = document.getElementById("sumResult");

    resultElem.innerText = parseInt(num1.value) + parseInt(num2.value);
}

// const genRanHex = size => 
// [...Array(size)].map(() => Math.floor(Math.random() * 16).toString(16)).join('');

// console.log(genRanHex(6));
// console.log(genRanHex(12));
// console.log(genRanHex(3));

function getRandomHex(){
    return Math.floor(Math.random() * 16).toString(16);
}
function changeBackgroundColor(buttonId){
    const targetElem = document.getElementById("target");
    let targetColor;
    if(buttonId === "redButton"){
        targetColor = "red";
    } else if(buttonId === "greenButton"){
        targetColor = "green";
    } else if(buttonId === "blueButton"){
        targetColor = "blue";
    } else if(buttonId === "pickerButton"){
        const pickerElem = document.getElementById("colorpicker");
        targetColor = pickerElem.value;
    } else if(buttonId === "randomColorButton"){
        const randomColorButton = document.getElementById("randomColorButton");
        let colorCode = ""
        for(let i=0; i<6; i++){
            colorCode += getRandomHex();
        }
        targetColor = `#${colorCode}`;
    }
    targetElem.style.backgroundColor = targetColor;
}

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
