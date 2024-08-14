function greetByName(name, count){
    for (let i=0; i<count; i++){
        const pIndex = i+1;
        console.log(`${pIndex}. Hello, ${name}.`);
    }
}
greetByName("Greystone", 5);

const divElem = document.getElementById("testDiv");
const originalWidth = divElem.getBoundingClientRect().width;
const originalHeight = divElem.getBoundingClientRect().height;

function modify(){
    divElem.style.width = "600px";
    divElem.style.height = "100px";
}
function reset(){
    divElem.style.width = `${originalWidth}px`;
    divElem.style.height = `${originalHeight}px`;
}
function randomByPx(){
    const randomWidth = Math.floor(Math.random() * 600) + 100; // 100 to 700
    const randomHeight = Math.floor(Math.random() * 600) + 100; // 100 to 700
    divElem.style.width = `${randomWidth}px`;
    divElem.style.height = `${randomHeight}px`;
}
function randomByPercent(){
    const randomWidth = Math.floor(Math.random() * 90) + 10; // 10 to 100
    const randomHeight = Math.floor(Math.random() * 90) + 10; // 10 to 100
    divElem.style.width = `${randomWidth}%`;
    divElem.style.height = `${randomHeight}%`;
}





