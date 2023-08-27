"use strict";
// utility Types
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const updateAssignment = (assign, propsToUpdate) => {
    return Object.assign(Object.assign({}, assign), propsToUpdate);
};
const assign1 = {
    studenId: 'ab12',
    title: 'project y',
    grade: 0,
};
console.log(updateAssignment(assign1, { grade: 85 }));
const assignGraded = updateAssignment(assign1, { grade: 85 });
// Required and ReadOnly
const recordAssignment = (assign) => {
    return assign;
};
const assignVerified = Object.assign(Object.assign({}, assignGraded), { verified: true });
// assignVerified.grade=25
// recordAssignment(assignGraded);
recordAssignment(Object.assign(Object.assign({}, assignGraded), { verified: true }));
// Record
const hexColorMap = {
    red: 'FF0000',
    green: '00FF00',
    blue: '0000FF',
};
const finalGrades = {
    Rahul: 'B',
    Deepak: 'A',
};
const gradeData = {
    Rahul: { assign1: 75, assign2: 93 },
    Deepak: { assign1: 78, assign2: 82 },
};
const score = {
    studenId: '12',
    grade: 85,
};
const preview = {
    studenId: '546',
    title: 'my tiltle',
};
// return type
// type NewAssign = {
//     title: string;
//     point: number;
// };
const createNewAssign = (title, point) => {
    return { title, point };
};
const tsAssign = createNewAssign('utility', 80);
console.log('🚀 ~ file: main.ts:120 ~ tsAssign:', tsAssign);
const assignArgs = ['utility', 80];
const tsAssign1 = createNewAssign(...assignArgs);
console.log('🚀 ~ file: main.ts:130 ~ tsAssign1:', tsAssign1);
const fetchUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield fetch('https://jsonplaceholder.typicode.com/users')
        .then((res) => res.json())
        .catch((err) => {
        if (err instanceof Error)
            console.log(err.message);
    });
    return data;
});
fetchUsers().then((users) => console.log(users));
