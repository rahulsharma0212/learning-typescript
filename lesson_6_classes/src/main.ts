// to much repeatition
class Coder_rep {
    name: string;
    music: string;
    age: number;
    lang: string;
    constructor(name: string, music: string, age: number, lang: string) {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
}

class Coder {
    thirdparty!: string;
    constructor(
        public readonly name: string,
        public music: string,
        private age: number,
        protected lang: string = 'TypeScript'
    ) {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }

    public getAge() {
        return `hello, I'm ${this.age}`;
    }
}

const rahul = new Coder('Rahul', 'rock', 24);
console.log('🚀 ~ file: main.ts:35 ~ rahul.getAge():', rahul.getAge());
// console.log("🚀 ~ file: main.ts:36 ~ rahul.lang:", rahul.lang);
// console.log("🚀 ~ file: main.ts:37 ~ rahul.age:", rahul.age);

class WebDev extends Coder {
    constructor(
        public computer: string,
        name: string,
        music: string,
        age: number
    ) {
        super(name, music, age);
        this.computer = computer;
    }

    getLang() {
        return `I write ${this.lang}`;
    }
}

const ravi = new WebDev('Mac', 'ravi', 'jazz', 28);
console.log('🚀 ~ file: main.ts:57 ~ ravi.getLang():', ravi.getLang());
// console.log("🚀 ~ file: main.ts:58 ~ ravi.age:", ravi.age);
// console.log("🚀 ~ file: main.ts:59 ~ ravi.lang:", ravi.lang);

/*
 * <|---------------------------|>
 */

interface Musician {
    name: string;
    instrument: string;
    play(action: string): string;
}

class Guitarist implements Musician {
    constructor(public name: string, public instrument: string) {
        this.name = name;
        this.instrument = instrument;
    }

    play(action: string) {
        return `${this.name} ${action} the ${this.instrument}`;
    }
}
const page = new Guitarist('Allen', 'guitar');
console.log(
    "🚀 ~ file: main.ts:84 ~ page.play('strums'):",
    page.play('strums')
);

/*
 * <|---------------------------|>
 */

class Peeps {
    static count: number = 0;

    static getCount(): number {
        return Peeps.count;
    }

    public id: number;

    constructor(public name: string) {
        this.name = name;
        this.id = ++Peeps.count;
    }
}

const john = new Peeps('john');
const steve = new Peeps('steve');
console.log('🚀 ~ file: main.ts:108 ~ Peeps.count:', {
    count: Peeps.count,
    johnId: john.id,
    steveId: steve.id,
});

/*
 * <|---------------------------|>
 */

class Bands {
    private dataState: string[];

    constructor() {
        this.dataState = [];
    }

    public get data(): string[] {
        return this.dataState;
    }

    public set data(value: string[]) {
        if (
            Array.isArray(value) &&
            value.every((el) => typeof el === 'string')
        ) {
            this.dataState = value;
            return;
        } else throw new Error('Param is not an array of string');
    }
}
const MyBands = new Bands();
MyBands.data = ['one', 'two'];
console.log(
    '🚀 ~ file: main.ts:140 ~ MyBands.data',
    (MyBands.data = ['one', 'two'])
);
MyBands.data = [...MyBands.data, 'Three'];
console.log(
    '🚀 ~ file: main.ts:142 ~ MyBands.data',
    (MyBands.data = [...MyBands.data, 'Three'])
);
// MyBands.data = ['five', 5];
// console.log(
//     '🚀 ~ file: main.ts:144 ~ MyBands.data',
//     (MyBands.data = ['five', 5])
// );
