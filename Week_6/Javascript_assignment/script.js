document.addEventListener("DOMContentLoaded", function(e) {
    document.getElementById("maxButton2").addEventListener("click", (e) => {
        let n1 = prompt("print n1","");
        let n2 = prompt("print n2","");
        let n3 = prompt("print n3","");
        const pElem = document.getElementById("max");
        pElem.innerText = `max is: ${Math.max(n1,n2,n3)}`;
    });
})

// function maxBetween3Numbers(n1, n2, n3){
function maxBetween3Numbers(){
    let n1 = prompt("print n1","");
    let n2 = prompt("print n2","");
    let n3 = prompt("print n3","");

    const pElem = document.getElementById("max");
    pElem.innerText = `max is: ${Math.max(n1,n2,n3)}`;
}

let tmp = [1,6,2,9];
function test(arr){
    alert(Math.max(...arr));
}
test(tmp);