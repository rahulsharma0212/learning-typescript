"use strict";
//index signature
// interface TransactionObj {
//     readonly [index: string]: number;
// }
const todayTransaction = {
    Pizza: -10,
    Books: 10,
    Job: 50,
};
console.log(todayTransaction.Pizza);
console.log(todayTransaction['Pizza']);
let prop = `Pizza`;
console.log(todayTransaction[prop]);
const todayNet = (transactions) => {
    let total = 0;
    for (const key in transactions) {
        total += transactions[key];
    }
    return total;
};
console.log(todayNet(todayTransaction));
// todayTransaction.Pizza = -25;
console.log(todayTransaction['temp']);
const student = {
    name: 'Rahul',
    GPA: 7.5,
    classes: [100, 200],
};
// console.log(student['test']);
// keyof
for (const key in student) {
    console.log(`${key}:${student[key]}`);
}
Object.keys(student).map((key) => {
    console.log(student[key]);
});
const logStudentKey = (student, key) => {
    console.log(`student ${key}: ${student[key]}`);
};
logStudentKey(student, 'name');
logStudentKey(student, 'GPA');
const monthlyIncomes = {
    salary: 500,
    bonus: 100,
    sidehustle: 20,
};
for (const key in monthlyIncomes) {
    console.log(monthlyIncomes[key]);
}
