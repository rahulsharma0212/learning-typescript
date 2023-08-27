//index signature

interface TransactionObj {
    readonly [index: string]: number;
    Pizza: number;
    Books: number;
    Job: number;
}

// interface TransactionObj {
//     readonly [index: string]: number;
// }

const todayTransaction: TransactionObj = {
    Pizza: -10,
    Books: 10,
    Job: 50,
};

console.log(todayTransaction.Pizza);
console.log(todayTransaction['Pizza']);

let prop: string = `Pizza`;
console.log(todayTransaction[prop]);

const todayNet = (transactions: TransactionObj): number => {
    let total = 0;
    for (const key in transactions) {
        total += transactions[key];
    }
    return total;
};

console.log(todayNet(todayTransaction));

// todayTransaction.Pizza = -25;

console.log(todayTransaction['temp']);

//<|---------------------------|>

interface Student {
    // [key: string]: string | number | number[] | undefined;
    name: string;
    GPA: number;
    classes?: number[];
}

const student: Student = {
    name: 'Rahul',
    GPA: 7.5,
    classes: [100, 200],
};

// console.log(student['test']);

// keyof
for (const key in student) {
    console.log(`${key}:${student[key as keyof Student]}`);
}

Object.keys(student).map((key) => {
    console.log(student[key as keyof typeof student]);
});

const logStudentKey = (student: Student, key: keyof Student): void => {
    console.log(`student ${key}: ${student[key]}`);
};

logStudentKey(student, 'name');
logStudentKey(student, 'GPA');

//<|---------------------------|>
// interface Incomes {
//     [key: string]: number;
// }

type streams = 'salary' | 'bonus' | 'sidehustle';

type Incomes = Record<streams, number>;

const monthlyIncomes: Incomes = {
    salary: 500,
    bonus: 100,
    sidehustle: 20,
};

for (const key in monthlyIncomes) {
    console.log(monthlyIncomes[key as keyof Incomes]);
}
