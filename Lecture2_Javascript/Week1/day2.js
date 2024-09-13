// constructor with "new" and "this"
function Editor(name, version, needsUpdate, tabs){
    this.name = name;
    this.version = version;
    this.needsUpdate = needsUpdate;
    this.tabs = tabs;
}

let editor = new Object();
editor.name = "notepad++";
console.log(editor.name);

let editor2 = new Object();
editor2["name"] = "textedit";
editor2["version"] = 2;
editor2["needsUpdate"] = false;
console.log(editor2);
console.log(editor2["name"]);

let editor3 = new Editor("Chrome", 3.11, true, ["tab1, tab2"]);
console.log(editor3);

let editor4 = new Editor("MacOS", 12, false); // tabs: undefined
console.log(editor4);

const person = {
    firstName:"John",
    lastName: "Doe",
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
}
  
const member = {
    firstName:"Hege",
    lastName: "Nilsen",
}
  
let fullName = person.fullName;
console.log(fullName())

fullName = person.fullName.bind(member);
console.log(fullName())

// Practice 1
function MealOrder(name, quantity, spiceLevel){
    this.name = name;
    this.quantity = quantity;
    this.spiceLevel = spiceLevel;
    this.summary = function(){
        // console.log(`${this.quantity} ${this.name} with ${this.spiceLevel} spicy`)
        return `${this.quantity} ${this.name} with ${this.spiceLevel} spicy`
    }
    this.update = function(q, s){
        this.quantity = q;
        this.spiceLevel = s;
    }
}

// const m1 = new MealOrder("Kebap", 3, "medium");
// console.log(m1);
// console.log(m1.quantity);
// console.log(typeof(m1));
// console.log(m1.summary());
// m1.update(5, "high");
// console.log(m1.summary());


// const m2 = new MealOrder("Kimchi", 4, "low");
// console.log(m2.summary());
// console.log(m1.summary.bind(m2));


// // Practice 2
// function Book(name, autors, version, page){
//     this.name = name;
//     this.autors = autors;
//     this.version = version;
//     this.page = page;
// }
// const book1 = new Book("Basic French", 
//                         ["Un Homme", "Une Femme", "Un char", "Un chien", "Une orange", "Une pizza"], 
//                         3, 
//                         150);
// // console.log(book1);


// const player = {
//     name:"aaa",
//     level: 4,
//     points: 10,
//     updateLevel: function() {
//         this.level++;
//         return this.level;
//     }
// }
// // console.log(player);
// // console.log(player.updateLevel());








// // class Person {
// //     constructor(name) {
// //         this.name = name;
// //     }

// //     sayHi() {
// //         console.log(`Hi, my name is ${this.name}`);
// //     }
// // }

// // const ian = new Person("Ian");
// // ian.sayHi();
// // console.log(ian.name);

