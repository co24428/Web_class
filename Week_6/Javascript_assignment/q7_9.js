document.addEventListener("DOMContentLoaded", function(e) {
    const testArr = [1,6,2,9];
    const targetNumber = 6;
    
    const existed_q7 = existNumberInArray_q7(testArr, targetNumber);
    showAlert(existed_q7, targetNumber, "q7");

    const existed_q8 = existNumberInArray_q8(testArr, targetNumber);
    showAlert(existed_q8, targetNumber, "q8");

    const existed_q9 = existNumberInArray_q9(testArr, targetNumber);
    showAlert(existed_q9, targetNumber, "q9");
})
function showAlert(existed, target, question){
    if (existed){
        alert(`${question}) ${target} is existed(${existed})`);
    } else {
        alert(`${question}) ${target} is not existed(${existed})`);
    }
}
// q7
function existNumberInArray_q7(arr, target){
    let existed = false;
    for (let i=0; i<arr.length; i++){
        if (arr[i] === target){
            existed = true;
            break;
        }
    }
    return existed;
}
// q8
const existNumberInArray_q8 = function (arr, target){
    let existed = false;
    for (let i=0; i<arr.length; i++){
        if (arr[i] === target){
            existed = true;
            break;
        }
    }
    return existed;
}
// q9 -> TODO: use map or array functions
const existNumberInArray_q9 = (arr, target) => {
    let existed = false;
    for (let i=0; i<arr.length; i++){
        if (arr[i] === target){
            existed = true;
            break;
        }
    }
    return existed;
}