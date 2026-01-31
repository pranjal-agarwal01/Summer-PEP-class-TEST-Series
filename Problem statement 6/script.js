// during compilation the code will be treated like:
// var a;
// console.log(a);
// a=10;

// a exists in memory but its value is assigned after console.log therefore undefined will be printed







//let is hoisted but not initialized and accessing it before declaration is illegal



// again same var c is hoisted and value go assigned later hence undefined



//correct code
var a=10;
let b=20;

console.log(a);
console.log(b);

function test(){
    let c= 30;
    console.log (c);
}

test();