// console.log(process.argv);
// console.log(process.argv.length);
console.log(process.argv.slice(2));

function maxBetweenArray(n1,n2,n3){
    const max = Math.max(n1, n2, n3);
    return max;
}
let argvs = process.argv.slice(2);
console.log(maxBetweenArray(1,3,2));
console.log(maxBetweenArray(Number(argvs[0]), Number(argvs[1]), Number(argvs[2])));
console.log(Number.MIN_VALUE);


// // Is this used in common project..?
// (function(a,b){
//     console.log(a+b);
// })(3,5);

// const greetByName = (name) => {
//     let greeting = `greeting ${name}`;
//     console.log(greeting);
// }
// greetByName("Peter");