document.addEventListener("DOMContentLoaded", function(e) {
    const testArr = [1,6,2,9];
    
    const maxVal_q4 = maxBetweenArray_q4(testArr);
    alert(`q4) max value is ${maxVal_q4}`);

    const maxVal_q5 = maxBetweenArray_q5(testArr);
    alert(`q5) max value is ${maxVal_q5}`);

    const maxVal_q6 = maxBetweenArray_q6(testArr);
    alert(`q6) max value is ${maxVal_q6}`);

})
// q4
function maxBetweenArray_q4(arr){
    let maxVal = 0;
    for (let i=0; i<arr.length; i++){
        if (arr[i] > maxVal){
            maxVal = arr[i];
        }
    }
    return maxVal;
}
// q5
const maxBetweenArray_q5 = function (arr){
    const maxVal = Math.max(...arr);
    return maxVal;
}
// q6
const maxBetweenArray_q6 = (arr) => {
    const maxVal = Math.max(...arr);
    return maxVal;
}