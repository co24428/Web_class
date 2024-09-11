document.addEventListener("DOMContentLoaded", function(e) {
    const n1 = 3;
    const n2 = 5;
    const n3 = 9;
    
    const minVal = minBetween3Numbers_q10(n1, n2, n3);
    alert(`q10) min number is ${minVal}`);
})

function minBetween3Numbers_q10(n1, n2, n3){
    const min = Math.min(n1, n2, n3);
    return min;
}