"use strict";
// tack 1
Object.defineProperty(exports, "__esModule", { value: true });
let greet = (name) => {
    return `wellcome ${name}`;
};
console.log(greet("esha"));
// task 2
let calculateArea = (num1, num2) => {
    return num1 * num2;
};
console.log(calculateArea(5, 3));
// task 3
let greet2 = (name, greeting = "hello") => {
    return `${name} ${greeting}`;
};
console.log(greet2("esha"));
// task 4
// rest paramiter allow us to add alot of paramiters as array in functions and it accapt more of arguments as well 
let friends = (...name) => {
    return name;
};
console.log(friends("ali", "ahmed", "amir", "altamash"));
// task 5
// spred oprators expande the array into each elements and make a copy of it
let friends2 = (...name) => {
    let orignelArray = [...name];
    let copyArray = [...name];
    copyArray.pop();
    return copyArray;
};
console.log(friends2("amir", "hammad", "faheem"));
