// Destructuring assignment array
let a,b;
[a, b] = [1, 2];
console.log(a); // 1
console.log(b); // 2

[a,b] = [1, 2, 3, 4, 5];
console.log(a); // 1
console.log(b); // 2

({a, b} = {a:1, b:2});
console.log(a); // 1
console.log(b); // 2

const item = {n1:1, n2:2}; // object with a and b
const {n1,n2} = item;
console.log(`${n1} and ${n2}`); // 1 and 2
const {x1,x2} = item;
console.log(`${x1} and ${x2}`); // undefined and undefined


const foo = ["one", "two", "three"];
const [red, yellow, green] = foo;
console.log(red); // one
console.log(yellow); // two
console.log(green); // three

const editor = {
    name: "notepad++",
    version: 2,
    requiresUpdate: false
}
function logEditor({name, version, requiresUpdate}) {
    console.log(`editor name is ${name}, its version is ${version} 
    and its require update value is ${requiresUpdate}`);
}
logEditor(editor);