let string1 = 'Hello';
let string2 = 'hello';

console.log("Are strings completely equal (in same naming convention)? I predict False.");
console.log(string1 === string2);

console.log("Are strings not equal? I predict True.");
console.log(string1 !== string2);

let mixedCaseString = 'JaVaScript';

console.log("Is the mixed case of string 'JaVaScript' equal to lowercase 'javascript' after I make it small? I predict True.");
console.log(mixedCaseString.toLowerCase() === 'javascript');


let num1 = 5;
let num2 = 10;

console.log("Is num1 equal to num2? I predict False.");
console.log(num1 === num2);

console.log("Is num1 not equal to num2? I predict True.");
console.log(num1 !== num2);

console.log("Is num1 greater than num2? I predict False.");
console.log(num1 > num2);

console.log("Is num1 less than num2? I predict True.");
console.log(num1 < num2);

console.log("Is num1 greater than or equal to num2? I predict False.");
console.log(num1 >= num2);

console.log("Is num1 less than or equal to num2? I predict True.");
console.log(num1 <= num2);


let condition1 = true;
let condition2 = false;

console.log("Is condition1 true and condition2 false? I predict False.");
console.log(condition1 && condition2);

console.log("Is condition1 true or condition2 false? I predict True.");
console.log(condition1 || condition2);

let array = [1, 2, 3, 4, 5];

console.log("Is the number 3 in the array? I predict True.");
console.log(array.includes(3));

console.log("Is the number 6 not in the array? I predict True.");
console.log(!array.includes(6));
