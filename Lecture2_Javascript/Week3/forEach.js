const countryNames = ["Canada", "Colombia", "MExico"];

let upperCaseNames = [];
let lowerCaseNames = [];

countryNames.forEach(item => {
    // console.log(item.toLowerCase());
    lowerCaseNames.push(item.toLowerCase());
    // console.log(item.toUpperCase());
    upperCaseNames.push(item.toUpperCase());
});

console.log(lowerCaseNames);
console.log(upperCaseNames);


// item and index as parameter
// both are working, but...
lowerCaseNames.forEach(function(item,idx) {
    console.log(`lowerCaseNames[${idx}] = ${item}`);
});
// this is more common 
// since using similar syntax in Angular and React?
lowerCaseNames.forEach((item,idx) => {
    console.log(`lowerCaseNames[${idx}] = ${item}`);
});

// forEach in map structure
let m = new Map();

m.set("Korea", "Seoul");
m.set("Japan", "Tokyo");
m.set("Canada", "Ottawa");
m.set("Denmark", "-");
m.set("China", "Beijing");

m.forEach((value, key) => {
    console.log(value, key);
})

// // no filter funtion in map data structure
// m.filter((value) => value!=="-");
// console.log(m)