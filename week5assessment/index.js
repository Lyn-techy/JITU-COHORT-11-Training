// With the following code blocks, can you say what will happen in each of 
// these instances?

// what breaks below?
const c1 = 1;
console.log(c1);
//c1 = 3;
//console.log(c1);

// Or updating a string…
const c2 = "hello";
//console.log(c2);
//c2 += " world!";

// Or reassigning an object…
const c3 = {};
console.log(c3);
c3.name = "Geoff";
c3.someValue = "Sausage";
c3 = {};
console.log(c3);