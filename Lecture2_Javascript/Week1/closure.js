// Closure, Scope
function init(){
    let name = "abc";
    function greeting(){
        // let name = "defff";
        console.log(name);
    }
    greeting();
}
init();

function adding(x){
    return function(y){
        return x+y;
    };
}
// add10 is function!
// add10 = function(y) {10 + y};
var add10 = adding(10);
var add15 = adding(15);

console.log(add10(2));
console.log(add15(2));


// update counter, like state in a page.
// keep and update the value in counter.
// It's like class and object?
const counter = (function(){
    let privateCounter = 0;

    function changeBy(val) { privateCounter += val;}

    return {
        increment() { changeBy(1); },
        decrement() { changeBy(-1); },
        value()     { return privateCounter; }
    }
})();
// brackets at the end are for "call" the function in line 25

console.log(counter.value()); // 0
counter.increment();
counter.increment();
console.log(counter.value()); // 2
counter.decrement();
console.log(counter.value()); // 1
console.log(counter);










