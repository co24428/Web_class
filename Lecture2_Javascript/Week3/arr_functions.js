// map: pass a function to map
const numbers = [5,6,7,8,9];

const map1 =numbers.map(x => x*10);
console.log(map1);

// filter
const words = ['spray', 'elite', 'exuberant', 'destruction', 'present', 'extreme', "instruction", "truck"];

const result1 = words.filter((word) => word.startsWith('ex'));
const result2 = words.filter((word) => word.includes("ruc"));

console.log(result1);
console.log(result2);

// find
// return undefined, if call-back function cannot find a element matched with condition.
// return a value, if call-back function find a element matched with condition.
// *) even if there are more elements matched, "find" will stop after return a value matched.
const findFn = (item) => item === "elite" || item === "extreme";
const found = words.find(findFn);
console.log(found); // elite

// findIndex
// return -1, or a element's index
// same steps to find matched element with "find"
const foundIndex = words.findIndex(findFn);
console.log(foundIndex); // elite


// some & every
// some: at least one element in the array passes the test 
//        implemented by the provided function 
// every: all elements in the array pass the test 
//        implemented by the provided function

// check whether an element is less than 10
const lessThan10 = val => val <10;
// check whether an element is even
const even = val => val % 2 === 0;

console.log(numbers.some(lessThan10)); // true
console.log(numbers.some(even)); // true

console.log(numbers.every(lessThan10)); // true
console.log(numbers.every(even)); // false

// reduce
// executes a user-supplied "reducer" callback function on each element of the array,
// passing in the return value from the calculation on the preceding element.
// The final result of running the reducer across all elements of the array is a single value.
// The reducer walks through the array element-by-element,
// at each step adding the current array value to result from the previous step -
// until there are no more elements to add.
const strings = ["this", "is", "example", "of", "reduce"];

const reducer1 = (prev, curr) => prev + " " + curr;
const oneString = strings.reduce(reducer1);
console.log(oneString);

const integers = [1,2,3,4,5,6,7,8,9,10];
const reducer2 = (prev, curr) => prev + curr + 10;
const sum = integers.reduce(reducer2);
console.log(sum)

// summary
const meal1 = {
    "name": "sushi",
    "quantity": 4,
    "spice": 2
}
const meal2 = {
    "name": "curry",
    "quantity": 1,
    "spice": 4
}
const meal3 = {
    "name": "taco",
    "quantity": 3,
    "spice": 3
}
const meal4 = {
    "name": "pizza",
    "quantity": 7,
    "spice": 1
}
const meals = [meal1, meal2, meal3, meal4];
const totalItems = meals.map(meal => meal.quantity).reduce((prev,curr) => prev+curr)
console.log(`total items: ${totalItems}`);
const needsToRefill = meals.filter(meal => meal.quantity<4).map(meal => meal.name);
console.log(`needs to refill: ${needsToRefill}`);
