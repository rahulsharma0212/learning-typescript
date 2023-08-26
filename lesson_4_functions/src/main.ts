//Type Aliases
type stringOrNumber = string | number;

type stringOrNumberArray = (string | number)[];

type Guitarist = {
    name: string;
    album?: boolean;
    albums: stringOrNumberArray;
};

type UserId = stringOrNumber;

//literal types
let myName: "Rahul";

let userName: "Rahul" | "dhruv" | "deepak";

userName = "Rahul";

//functions
const add = (a: number, b: number): number => {
    return a + b;
};

const logMessage = (msg: any): void => {
    console.log(msg);
};

logMessage("hii!");
logMessage(add(1, 2));

let subtract = function (c: number, d: number): number {
    return c - d;
};

type mathFunction = (a: number, b: number) => number;
// interface mathFunction {
//     (a: number, b: number): number;
// }

let mutiply: mathFunction = function (c, d) {
    return c * d;
};
logMessage(mutiply(2, 2));

//optional parameter
const addAll = (a: number, b: number, c?: number): number => {
    if (typeof c !== "undefined") {
        return a + b + c;
    }
    return a + b;
};

const sumAll = (a: number, b: number, c: number = 0): number => {
    return a + b + c;
};

logMessage(addAll(2, 2));
logMessage(addAll(2, 3, 5));
logMessage(sumAll(1, 2));

//Rest parameter

const total = (...nums: number[]): number => {
    return nums.reduce((prev: number, curr: number): number => prev + curr);
};

logMessage(total(1, 2, 3, 4));

const createError = (errMsg: string): never => {
    throw new Error(errMsg);
};

const infinite = (): void => {
    let i: number = 1;
    while (true) {
        i++;
        if (i >= 100) break;
    }
};

//custom type guard
const isNumber = (value: any): boolean => {
    return typeof value === "number" ? true : false;
};

//use of never type
const numberOrString = (value: number | string): string => {
    if (typeof value === "string") return "string";
    if (isNumber(value)) return "number";
    return createError("THIS WILL NEVER HAPPENS");
};
