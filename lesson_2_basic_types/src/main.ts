let myName: string = "Rahul";
let meaningOfLife: number;
let isLoading: boolean;
let album: string | number;

myName = "Rahul";
meaningOfLife = 24;
isLoading = true;
album = 1998;
album = "true";

const sum1 = (a: number, b: number) => {
    return a + b;
};
const sum2 = (a: number, b: string) => {
    return a + b;
};
/* union type */
let postId: string | number;
let isActive: number | boolean;

let re: RegExp = /\w+/g;
