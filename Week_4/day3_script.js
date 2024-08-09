let names = ['James', 'Logan', 'Smith', 'Sam', 'Kim'];
console.log(names[5]) // undefined

for (let i=0; i<5; i = i+1) {
    console.log(i);
    console.log(names[i]);
}

// control HTML using Javascript
const k = names.length;
const uilist = document.getElementById("list");

for (let i=0; i<k; i++) {
    const item = document.createElement("li");
    item.innerText = names[i];
    uilist.appendChild(item);
}
console.log(uilist);

// try-catch: error control
try {
    const tmp = 1;
    tmp = 2;
    console.log(tmp);
} catch(e) {
    console.log(e);
}

// control class using Javascript
function uiFlex() {
    const div = document.getElementById("listdiv");
    item = document.createElement("div");
    item.classList.add("flexitem");
    item.classList.add("test1");
    item.classList.add("test2");
    item.classList.remove("test2");
    console.log(item);
}
uiFlex();