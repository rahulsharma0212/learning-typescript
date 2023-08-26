"use strict";
let strArr = ["one", "two", "three"];
let strNumArr = ["one", 2, 3];
let strNumBoolArr = ["one", 2, true];
strArr.push("test");
strNumArr.push("t");
strNumArr.push(2);
strNumBoolArr.push("t");
strNumBoolArr.push(1);
strNumBoolArr.push(true);
// strArr=strArr.concat(["s",1])
//TUPLE
let myTuple = ["rahul", 1, true];
let mixed = ["john", 1, false];
myTuple[0] = "rahul1";
mixed[0] = 2;
//object
let myObj;
myObj = [];
myObj = {};
const exampleObj = {
    prop1: "Rahul",
    prop2: 24,
};
// exampleObj.prop2="string"
exampleObj.prop1 = "john";
let g1Exmp = {
    name: "Eddie",
    active: true,
    albums: [1984, 1996, 2000],
};
let g2Exmp = {
    name: "jimmy",
    albums: ["I", "II", "IV"],
};
const greetGuitarist = (guitarist) => {
    return `Hello ${guitarist.name}`;
};
let g3Exmp = {
    active: true,
    albums: ["1", "2"],
};
const greetGuitaristTemp = (guitarist) => {
    if (guitarist.name) {
        return `Hello ${guitarist.name.toUpperCase()}`;
    }
    return "Hello!";
};
console.log(greetGuitaristTemp(g3Exmp));
//Enums
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 0] = "U";
    Grade[Grade["D"] = 1] = "D";
    Grade[Grade["c"] = 2] = "c";
    Grade[Grade["B"] = 3] = "B";
    Grade[Grade["A"] = 4] = "A";
})(Grade || (Grade = {}));
console.log(Grade.A);
