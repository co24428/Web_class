const myTable = document.getElementById("tableStudent");
// for (let i = 1; i < myTable.rows.length; i++) {     
//     item = myTable.rows[i].innerText.split("\t");
//     // console.log(item);
//     localStorage.setItem(item[0], item[1]);
// }

localStorage.clear();
let students = ["John", "Tim", "Lisa"];
let grades = ["A", "B","C"];

document.addEventListener("DOMContentLoaded", function (e) {
    initLocalStorage();
});

function initLocalStorage() {
    if (localStorage.length == 0) {
        for (let i=0; i < students.length; i++) {
            localStorage.setItem(students[i], grades[i]);
        }
    } else {
        return 0;
    }
}
// Read storage and return student
function getStudentfromStorage(name) {
    return localStorage.getItem(name);
}

function removeStudentFromStorage(name) {
    localStorage.removeItem(name);
}

function addStudentToStorage(name, grade) {
    localStorage.setItem(name, grade);
}
function refreshTable() {
    const numberOfRows = myTable.rows.length;
    for (let i=0; i< numberOfRows-1; i++) {
        myTable.deleteRow(-1);
    }
    // for (let i=0; i< myTable.rows.length-1; i++) {
    //     myTable.deleteRow(-1);
    // }
    for (let i=0; i< localStorage.length; i++) {
        const name = localStorage.key(i);
        const grade = getStudentfromStorage(name);
        addStudentToTable(name, grade);
    }
}

function addStudentToTable(name, grade){
    let newRow = myTable.insertRow(-1);
    let newName = newRow.insertCell(0);
    let newGrade = newRow.insertCell(1);
    newName.innerHTML = name;
    newGrade.innerHTML = grade;
}

document.getElementById('addStudent').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting
    
    
    const addName = document.getElementById("addName").value;
    const addGrade = document.getElementById("addGrade").value;
    addStudentToTable(addName, addGrade);

    addStudentToStorage(addName, addGrade)
    // console.log(localStorage);

    document.getElementById("addName").value ="";
    document.getElementById("addGrade").value ="";
})

document.getElementById('removeStudent').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting
    
    const removeName = document.getElementById("removeName").value;
    for (let i=1; i< myTable.rows.length; i++) {
        const currentName = myTable.rows[i].innerText.split("\t")[0];
        if(removeName === currentName) {
            myTable.deleteRow(i);
            localStorage.removeItem(currentName);
            document.getElementById("removeName").value ="";
            return 0;
        }
    }
})