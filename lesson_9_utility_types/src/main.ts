// utility Types

/**
 * Partial
 * Record
 * Readonly
 * Required
 * Pick
 * Omit
 * Exclude
 * Extract
 * NonNullable
 * ReturnType
 * Parameters
 * Awaited
 */

//partial

interface Assignment {
    studenId: string;
    title: string;
    grade: number;
    verified?: boolean;
}

const updateAssignment = (
    assign: Assignment,
    propsToUpdate: Partial<Assignment>
): Assignment => {
    return { ...assign, ...propsToUpdate };
};

const assign1: Assignment = {
    studenId: 'ab12',
    title: 'project y',
    grade: 0,
};

console.log(updateAssignment(assign1, { grade: 85 }));
const assignGraded: Assignment = updateAssignment(assign1, { grade: 85 });

// Required and ReadOnly

const recordAssignment = (assign: Required<Assignment>): Assignment => {
    return assign;
};

const assignVerified: Readonly<Assignment> = {
    ...assignGraded,
    verified: true,
};

// assignVerified.grade=25
// recordAssignment(assignGraded);
recordAssignment({ ...assignGraded, verified: true });

// Record
const hexColorMap: Record<string, string> = {
    red: 'FF0000',
    green: '00FF00',
    blue: '0000FF',
};

type students = 'Rahul' | 'Deepak';
type LetterGrades = 'A' | 'B' | 'C' | 'D' | 'U';

const finalGrades: Record<students, LetterGrades> = {
    Rahul: 'B',
    Deepak: 'A',
};

interface Grades {
    assign1: number;
    assign2: number;
}

const gradeData: Record<students, Grades> = {
    Rahul: { assign1: 75, assign2: 93 },
    Deepak: { assign1: 78, assign2: 82 },
};

// Pick and Omit
type AssignResult = Pick<Assignment, 'studenId' | 'grade'>;

const score: AssignResult = {
    studenId: '12',
    grade: 85,
};

type AssignPreview = Omit<Assignment, 'grade' | 'verified'>;

const preview: AssignPreview = {
    studenId: '546',
    title: 'my tiltle',
};

//Exlude and Extract not work with interface

type adjustedGrade = Exclude<LetterGrades, 'U'>;

type highGrades = Extract<LetterGrades, 'A' | 'B'>;

//non nullable

type AllPossibleGrades = 'A' | 'B' | null | undefined;
type onlyGrades = NonNullable<AllPossibleGrades>;

// return type

// type NewAssign = {
//     title: string;
//     point: number;
// };

const createNewAssign = (title: string, point: number) => {
    return { title, point };
};

type NewAssign = ReturnType<typeof createNewAssign>;

const tsAssign: NewAssign = createNewAssign('utility', 80);
console.log('🚀 ~ file: main.ts:120 ~ tsAssign:', tsAssign);

//parameter
type AssignParams = Parameters<typeof createNewAssign>;

const assignArgs: AssignParams = ['utility', 80];

const tsAssign1: NewAssign = createNewAssign(...assignArgs);
console.log('🚀 ~ file: main.ts:130 ~ tsAssign1:', tsAssign1);

// Awaited - help us with the ReturnType of a Promise
interface User {
    id: number;
    name: string;
    username: string;
    email: string;
}

const fetchUsers = async (): Promise<User[]> => {
    const data = await fetch('https://jsonplaceholder.typicode.com/users')
        .then((res) => res.json())
        .catch((err) => {
            if (err instanceof Error) console.log(err.message);
        });
    return data;
};

type FetchUserReturnType = Awaited<ReturnType<typeof fetchUsers>>;

fetchUsers().then((users) => console.log(users));
