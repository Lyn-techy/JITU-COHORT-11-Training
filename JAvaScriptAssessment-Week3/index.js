/*
//QUESTION 1
function foo1() {

    return {bar: "hello"};
    
}

//console.log(foo1());//Output: {bar: 'hello'}

function foo2() {

    Return
    
    {bar: "hello"};
    
}
//console.log(foo2());//Output: error, no output

//QUESTION 2
let str1 = "alula";
console.log(str1);

let str2 = "race car";
console.log(str2);

function isPalindrome(str) {
    // remove spaces and convert to lowercase
    str = str.replace(/\s+/g, '').toLowerCase();
    // reverse the string
    let reversed = str.split('').reverse().join('');
    // check if the reversed string is equal to the original string
    return reversed === str;
}

console.log(isPalindrome(str1)); // Output: true
console.log(isPalindrome(str2)); // Output: true

//QUESTION3

let input = prompt("Enter numbers separated by commas:");

// Split the input string by commas
let numbers = input.split(",");

function sumNumbers() {
    // Convert the strings to numbers
    numbers = numbers.map(function (number) {
        return parseFloat(number);
    });
    // Sum the numbers
    let sum = numbers.reduce(function (a, b) {
        return a + b;
    });
    console.log("The sum of the numbers is: " + sum);
}
sumNumbers();

*/
//QUESTION4
function visit(dom, callback) {
    callback(dom);
    for (const child of dom.children) { 
      // children return all child "elements", childNodes will return all children including #text and comments
      callback(child);
      visit(child, callback);
    }
}

//Usage/implementation
const body = document.querySelector("body");
visit(body, function(dom) {
    console.log(dom);
});




