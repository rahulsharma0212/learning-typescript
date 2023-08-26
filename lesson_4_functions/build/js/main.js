"use strict";
//literal types
let myName;
let userName;
userName = "Rahul";
//functions
const add = (a, b) => {
    return a + b;
};
const logMessage = (msg) => {
    console.log(msg);
};
logMessage("hii!");
logMessage(add(1, 2));
let subtract = function (c, d) {
    return c - d;
};
// interface mathFunction {
//     (a: number, b: number): number;
// }
let mutiply = function (c, d) {
    return c * d;
};
logMessage(mutiply(2, 2));
//optional parameter
const addAll = (a, b, c) => {
    if (typeof c !== "undefined") {
        return a + b + c;
    }
    return a + b;
};
const sumAll = (a, b, c = 0) => {
    return a + b + c;
};
logMessage(addAll(2, 2));
logMessage(addAll(2, 3, 5));
logMessage(sumAll(1, 2));
//Rest parameter
const total = (...nums) => {
    return nums.reduce((prev, curr) => prev + curr);
};
logMessage(total(1, 2, 3, 4));
const createError = (errMsg) => {
    throw new Error(errMsg);
};
const infinite = () => {
    let i = 1;
    while (true) {
        i++;
        if (i >= 100)
            break;
    }
};
//custom type guard
const isNumber = (value) => {
    return typeof value === "number" ? true : false;
};
//use of never type
const numberOrString = (value) => {
    if (typeof value === "string")
        return "string";
    if (isNumber(value))
        return "number";
    return createError("THIS WILL NEVER HAPPENS");
};
