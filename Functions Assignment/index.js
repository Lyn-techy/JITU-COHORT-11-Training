let company = {
    accounts: [{name:"John", salary:1600},
               {name:"Mary", salary:1400}],
    development: {
        rd:[{name:"Peter", salary:3000},
            {name:"Bundi", salary:2700}],
        imp:[{name:"Seline", salary:2700}]
    }           
};

//function to calculate the total salary of the employees
function calculateSalary(department){
    if (Array.isArray(department)){  //case1
        return department.reduce((prev, current)=>prev + current.salary, 0); //sum the array
    } else {
        let total_salary = 0;
        for (let subdep of Object.values(department)) {
            total_salary += calculateSalary(subdep); //recursively call for subdepartments, sum the results
        }
        return total_salary;
    }
}

console.log(calculateSalary(company));


//QUESTION 1
let testArr = ["apple", "Apple", "banana", "orange", "Banana", "Apple"];

function removeDuplicates(arr) {
    var lowerCaseArr = arr.map(function(item) {
      return item.toLowerCase();
    });
    return Array.from(new Set(lowerCaseArr));
}


console.log(removeDuplicates(testArr));

//QUESTION 2
//method 1: uses includes()
let arr = [2, 5, 9, 6];

function contains(arr, element) {
    return arr.includes(element);
}

console.log(contains(arr, 5)); // Output: true

//method2: uses index of()
//use arr defined above

function specific(arr, element) {
    return arr.indexOf(element) !== -1;
}

console.log(specific(arr, 5)); // Output: true
  

//QUESTION 3
function clearArray1(arr) {
    return arr.filter(function(item) {
      return item !== false && item !== undefined && item !== "" && item !== 0 && item !== null;
    });
}

let testArray = [3, 8, 23, "hello", " ", false, "45"];
console.log(clearArray1(testArray));

//METHOD2
function clearArray(arr) {
    return arr.reduce(function(acc, curr) {
      if(curr) acc.push(curr);
      return acc;
    }, []);
}

console.log(clearArray(testArray));

  

//QUESTION 5
function reverseWords1(str) {
    return str.split(" ").reverse().join(" ");
}

console.log(reverseWords1("Hello world"));

//MEETHOD2
let words = str.split(" ");
let reversed = "";
function reverseWords2(str) {
    for (var i = words.length - 1; i >= 0; i--) {
      reversed += words[i] + " ";
    }
    return reversed.trim();
}

console.log(reverseWords2("Hello world"));

  
  

  
 

