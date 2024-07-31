// Using in day1.html
function printName1(){
    // print name variable
    let name = "abc";
    console.log(name);
}
function printName2(){
    // print name variable
    let name = "def";
    console.log(name);
}
function greetByName(name) {
    let greeting = `greetings, ${name}`;
    console.log(greeting);
}
// onclick function on day1's 'add' button
function addNumbers() {
    const myForm = document.forms.add;
    const myNumber1 = myForm.firstAdd.value;
    const myNumber2 = myForm.secondAdd.value;
    const resultValue = parseInt(myNumber1) + parseInt(myNumber2);
    const resultId = "addResult";
    document.getElementById(resultId).innerText = resultValue;
}

// After all content loading // General Rule!!
document.addEventListener("DOMContentLoaded", function(e) {
    printName1();
    printName2();
    greetByName("VSCODE");

})