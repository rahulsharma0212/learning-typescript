type One = string;
type Two = string | number;
type Three = "hello";

//convert to more or less specific types
let a: One = "hi";
let b = a as Two; // less specific
let c = a as Three; // more specific
c = "hello";

let d = <One>"World";
let e = <string | number>"world";

const addOrConact = (
    a: number,
    b: number,
    c: "add" | "concat"
): number | string => {
    if (c === "add") return a + b;
    return `${a}${b}`;
};

let myVal: string = addOrConact(2, 2, "concat") as string;

// carefull: TS sees no problem - but a string is returned
let nexVal: number = addOrConact(3, 3, "concat") as number;

// 10 as string
// 10 as unknown as string;

// The DOM
const img = document.querySelector("img")!;
const myImg = document.getElementById("img") as HTMLImageElement;
const nextImg = <HTMLImageElement>document.getElementById("img");

img.src;
myImg.src;
nextImg.src;
