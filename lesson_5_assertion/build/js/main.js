"use strict";
//convert to more or less specific types
let a = "hi";
let b = a; // less specific
let c = a; // more specific
c = "hello";
let d = "World";
let e = "world";
const addOrConact = (a, b, c) => {
    if (c === "add")
        return a + b;
    return `${a}${b}`;
};
let myVal = addOrConact(2, 2, "concat");
// carefull: TS sees no problem - but a string is returned
let nexVal = addOrConact(3, 3, "concat");
// 10 as string
// 10 as unknown as string;
// The DOM
const img = document.querySelector("img");
const myImg = document.getElementById("img");
const nextImg = document.getElementById("img");
img.src;
myImg.src;
nextImg.src;
