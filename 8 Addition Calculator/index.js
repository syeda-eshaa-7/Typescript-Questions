"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
let answer = await inquirer_1.default.prompt([
    {
        name: "firstnumber",
        message: "enter first number",
    },
    { name: "sacondnumber",
        message: "enter second number",
    },
    {
        type: "list",
        name: "oprators",
        message: "select addition",
        choises: ["addition"]
    }
]);
if (answer.oprators == "addition") {
    console.log(answer.firstnumber + answer.sacondnumber);
}
