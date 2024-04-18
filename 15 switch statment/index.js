"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let num = 75;
let grade;
switch (true) {
    case (num > 90):
        grade = "A";
        break;
    case (num > 80):
        grade = "B";
        break;
    case (num > 70):
        grade = "C";
        break;
    case (num > 60):
        grade = "D";
        break;
    case (num > 50):
        grade = "E";
        break;
    default:
        grade = "F";
}
console.log("Grade:", grade);
