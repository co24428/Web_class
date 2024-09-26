function Meal(name, quantity, spice){
    this.name = name;
    this.quantity = quantity;
    this.spice = spice;
}

const m1 = new Meal("beef", 3, 0);
const m2 = new Meal("pork", 5, 0);
console.log(m1);
console.log(m2);

class Person{
    constructor(fname, lname, age){
        this.fname = fname;
        this.lname = lname;
        this.age = age;
    }
    sayMyName(){
        console.log(`${this.fname} ${this.lname}`);
    }
}

const p1 = new Person("Walter", "White", 45);
p1.sayMyName();
console.log(p1.age);