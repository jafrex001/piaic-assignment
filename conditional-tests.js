"use strict";
let car = 'Toyota Corolla';
// Test 1
console.log("Is car equal to 'Toyota Corolla'? I predict True.");
console.log(car === 'Toyota Corolla');
// Test 2
console.log("Is car equal to 'Toyota Corolla' and has same data type? I predict True.");
console.log(car === 'Toyota Corolla');
// Test 3
console.log("Is car equal to 'toyota corolla'? I predict False.");
console.log(car === 'toyota corolla');
// Test 4
console.log("Is car equal to 'toyota corolla' and has same data type? I predict False.");
console.log(car === 'toyota corolla');
// Test 5
console.log("Is car not equal to 'Honda Civic'? I predict True.");
console.log(car !== 'Honda Civic');
// Test 6
console.log("Is car not equal to 'Honda Civic and does not have same data type'? I predict True.");
console.log(car !== 'Honda Civic');
// Test 7
console.log("Does car have a length greater than 10? I predict True.");
console.log(car.length > 10);
// Test 8
console.log("Does car have a length less than or equal to 20? I predict True.");
console.log(car.length <= 20);
// Test 9
console.log("Does car start with 'Toyota'? I predict True.");
console.log(car.indexOf('Toyota') === 0);
// Test 10
console.log("Does car have corolla in its name? I predict True.");
console.log(car.indexOf('Toyota') === 1);
