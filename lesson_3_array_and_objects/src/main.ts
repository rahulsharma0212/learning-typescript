let strArr: string[] = ["one", "two", "three"];
let strNumArr: (string | number)[] = ["one", 2, 3];
let strNumBoolArr: (string | number | boolean)[] = ["one", 2, true];

strArr.push("test");
strNumArr.push("t");
strNumArr.push(2);
strNumBoolArr.push("t");
strNumBoolArr.push(1);
strNumBoolArr.push(true);

// strArr=strArr.concat(["s",1])

//TUPLE
let myTuple: [string, number, boolean] = ["rahul", 1, true];

let mixed = ["john", 1, false];

myTuple[0] = "rahul1";

mixed[0] = 2;

//object
let myObj: Object;
myObj = [];
myObj = {};

const exampleObj = {
    prop1: "Rahul",
    prop2: 24,
};

// exampleObj.prop2="string"
exampleObj.prop1 = "john";

type Guitarist = {
    name: string;
    active?: boolean;
    albums: (string | number)[];
};

let g1Exmp: Guitarist = {
    name: "Eddie",
    active: true,
    albums: [1984, 1996, 2000],
};

let g2Exmp: Guitarist = {
    name: "jimmy",
    albums: ["I", "II", "IV"],
};

const greetGuitarist = (guitarist: Guitarist): string => {
    return `Hello ${guitarist.name}`;
};

interface GuitaristTemp {
    name?: string;
    active: boolean;
    albums: (string | number)[];
}
let g3Exmp: GuitaristTemp = {
    active: true,
    albums: ["1", "2"],
};
const greetGuitaristTemp = (guitarist: GuitaristTemp): string => {
    if (guitarist.name) {
        return `Hello ${guitarist.name.toUpperCase()}`;
    }
    return "Hello!";
};

console.log(greetGuitaristTemp(g3Exmp));

//Enums

enum Grade {
    U,
    D,
    c,
    B,
    A,
}

console.log(Grade.A);
