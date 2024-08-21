document.addEventListener("DOMContentLoaded", function(e) {
    document.getElementById("maxButton2").addEventListener("click", maxBetween3Numbers_q2);
    document.getElementById("maxButton3").addEventListener("click", (e) => {
        let n1 = prompt("q3) print n1","");
        let n2 = prompt("q3) print n2","");
        let n3 = prompt("q3) print n3","");
        const pElem = document.getElementById("max");
        pElem.innerText = `q3) max is: ${Math.max(n1,n2,n3)}`;
    });
})

// q1
function maxBetween3Numbers_q1(){
    let n1 = prompt("q1) print n1","");
    let n2 = prompt("q1) print n2","");
    let n3 = prompt("q1) print n3","");

    const pElem = document.getElementById("max");
    pElem.innerText = `q1) max is: ${Math.max(n1,n2,n3)}`;
}

// q2
const maxBetween3Numbers_q2 = function (){
    let n1 = prompt("q2) print n1","");
    let n2 = prompt("q2) print n2","");
    let n3 = prompt("q2) print n3","");
    const pElem = document.getElementById("max");
    pElem.innerText = `q2) max is: ${Math.max(n1,n2,n3)}`;
}