"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//  task 1
function greet(name) {
    console.log(`wellcome ${name}`);
}
greet("jone");
//   task 2
function calculateArea(length, whith) {
    return `${length}  ${whith}`;
}
calculateArea(3, 5);
// task 3
function greet2(name, greeting = "hello") {
    return `${name}  ${greeting}`;
}
console.log(greet2("esha"));
// task 4
// rest paramiter allow us to add alot of paramiters as array in functions and it accapt more of arguments as well 
function frands(...name) {
    return `${name}`;
}
console.log(frands("esha", "ali", "ahmed", "nimra"));
// task 5
// spred oprators expande the array into each elements and make a copy of it 
function frands2(...name) {
    let orignelArray = [...name];
    let copyArray = [...name];
    copyArray.pop();
    return copyArray;
}
console.log(frands2("esha", "nimra", "ali", "faryia"));
