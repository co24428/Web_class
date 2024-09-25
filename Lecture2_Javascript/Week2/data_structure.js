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
const {x1,x2} = item; // destructuring x1 and x2 in item, but they don't have -> undefined
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

const firstBookCollection = ["book1", "book2", "book3"];
const secondBookCollection = ["book4", "book5", "book6"];
const allBooks = [...firstBookCollection, ...secondBookCollection];

const firstMovieCollection = [
    {name: "movie1", author: "author1"},
    {name: "movie2", author: "author2"},
    {name: "movie3", author: "author3"}
]
const secondMovieCollection = [
    {name: "movie4", author: "author4"},
    {name: "movie5", author: "author5"},
    {name: "movie6", author: "author6"}
]
const allMovies = [...firstMovieCollection, ...secondMovieCollection];
console.log(allMovies);

const cityInfo1 = {
    name: "Seoul",
    national: "Korea"
}
const cityInfo2 = {
    popularity: 10000000,
    isCapital: true
}
const cityInformation = {
    ...cityInfo1,
    ...cityInfo2
}
console.log(cityInformation);

function operationWithNumbers(operator, ...numbers){
    console.log(operator);
    console.log(numbers);
    if (operator == "+") {
        const result = numbers.reduce((a,b) => a+b);
        return result
    } else if (operator == "-") {
        const result = numbers.reduce((a,b) => a-b);
        return result
    } else if (operator == "*") {
        const result = numbers.reduce((a,b) => a*b);
        return result
    } else if (operator == "/") {
        const result = numbers.reduce((a,b) => a/b);
        return result
    }
}
console.log(operationWithNumbers("+",1,2,3,4,5,6,7,8,9));
console.log(operationWithNumbers("-",100,10,30,50));

// Optional chaining (?.)
function makeObject(){
    const obj = {
        fname: "Ian",
        lname: "Kim",
        sayHello() {
            console.log("Hello");
        }
    }
    return obj
}

const obj = makeObject();
obj.sayHello();
console.log(obj?.fullName); // undefined
console.log(obj.someNonExistentMethod?.()); // undefined

// obj.sayBye(); // error!

// The Nullish coalescing operator (??)
// only work on null and undefined
function A() { return null }
function B() { return undefined }
function C() { return false }
function D() { return "" }

function greeting(v) {
    let name = v ?? "guest"; // it do like "OR"
    console.log("greeting, " + name);
}
greeting(A()); // greeting, guest
greeting(B()); // greeting, guest
greeting(C()); // greeting, false
greeting(D()); // greeting, 
greeting("Ian"); // greeting, Ian


// array destructuring used in React?!
const restaurant = {
    name: "Hongdae Pocha",
    food: "Korean",
    year: 2012,
    isOpened: true
}

const porperties = Object.keys(restaurant);
const values = Object.values(restaurant);
console.log(porperties);
console.log(values);
for (const [key, value] of Object.entries(restaurant)){
    console.log(`${key}: ${value}`);
}

// set
const mySet1 = new Set();
mySet1.add(1);
mySet1.add(5);
mySet1.add(5);
mySet1.add("text");
console.log(mySet1);

const o = {a:1, b:2};
mySet1.add(o);
mySet1.add({a:1, b:2}); // o is referencing a different object, so this is okay
console.log(mySet1);

const meals = new Set();
meals.add("pasta");
meals.add("pasta");
meals.add("coke");
meals.add("coke");
console.log(meals);
meals.add("soup");
console.log(meals);

const capitalAndCountry = new Map();
capitalAndCountry.set('Seoul','Korea');
capitalAndCountry.set('Tokyo','Japan');
capitalAndCountry.set('Ottawa','Canada');
console.log(capitalAndCountry);

for (const [capital, country] of capitalAndCountry){
    console.log(`${capital} is capital of ${country}`);
}
