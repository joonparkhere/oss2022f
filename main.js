#!/usr/bin/env node

const lib = require("./lib");

if (process.argv.length <= 3) {
    console.log("Insufficient parameter!");
    process.exit(1);
}

let command = process.argv[2];

let numbers = process.argv
    .slice(3, process.argv.length)
    .map((num) => parseFloat(num));

if (numbers.some((num) => isNaN(num))) {
    console.log("Some arguments are not numbers");
    process.exit(1);
}

let ret;
switch (command) {
    case "sum":
        ret = lib.sum(numbers);
        break;
    case "avg":
        ret = lib.avg(numbers);
        break;
    case "max":
        ret = lib.max(numbers);
        break;
    default:
        console.log("Wrong command!");
        process.exit(1);
}

console.log(ret);
