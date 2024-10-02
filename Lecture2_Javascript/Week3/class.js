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

class Book {
    constructor(name, author, publishedYear, rate, status ){
        this.name = name;
        this.author = author;
        this.publishedYear = publishedYear;
        this.rate = rate;
        this.status = status;
    }

    changeRate(newRate){
        this.rate = newRate;
    }

    checkCompleted(newStatus){
        this.status = newStatus;
    }

    breif(){
        console.log(`${this.name} by ${this.author}`)
    }
}

const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925, 3, "Completed");
const book2 = new Book("Bartleby The Scrivener", "Herman Melville", 1853, 4, "Completed");
const book3 = new Book("Stoner", "John Williams", 1965, 0, "On progress");
const book4 = new Book("I was in their american dream", "Malaka Gharib", 2019, 4, "Completed");
const book5 = new Book("Stories of Your Life and Others", "Ted Chang", 2002, 5, "Completed");

const books = [book1,book2,book3,book4,book5];
books.forEach((book) =>{
    console.log(book);
    // console.log(book.status);
})

console.log("-- map");
// books.map((book) => {
//     book.changeRate = book.rate + 1;
// })
// books.forEach((book) =>{
//     console.log(book.rate);
// })
console.log("-- find");
console.log(books.find(book => book.status ==="On progress"));

class ComicBook extends Book {
    // constructor(totalEdition){
    constructor(name, author, publishedYear, rate, status , totalEdition){
        super(name, author, publishedYear, rate, status);
        this.totalEdition = totalEdition;
    }
}
const comicBook1 = new ComicBook("Death Note", "Someone", 2001, 5, "Completed", 30);
console.log(comicBook1);
comicBook1.breif();