"use strict";
// to much repeatition
class Coder_rep {
    constructor(name, music, age, lang) {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
}
class Coder {
    constructor(name, music, age, lang = 'TypeScript') {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
    getAge() {
        return `hello, I'm ${this.age}`;
    }
}
const rahul = new Coder('Rahul', 'rock', 24);
console.log('🚀 ~ file: main.ts:35 ~ rahul.getAge():', rahul.getAge());
// console.log("🚀 ~ file: main.ts:36 ~ rahul.lang:", rahul.lang);
// console.log("🚀 ~ file: main.ts:37 ~ rahul.age:", rahul.age);
class WebDev extends Coder {
    constructor(computer, name, music, age) {
        super(name, music, age);
        this.computer = computer;
        this.computer = computer;
    }
    getLang() {
        return `I write ${this.lang}`;
    }
}
const ravi = new WebDev('Mac', 'ravi', 'jazz', 28);
console.log('🚀 ~ file: main.ts:57 ~ ravi.getLang():', ravi.getLang());
class Guitarist {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} ${action} the ${this.instrument}`;
    }
}
const page = new Guitarist('Allen', 'guitar');
console.log("🚀 ~ file: main.ts:84 ~ page.play('strums'):", page.play('strums'));
/*
 * <|---------------------------|>
 */
class Peeps {
    static getCount() {
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count;
    }
}
Peeps.count = 0;
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
    constructor() {
        this.dataState = [];
    }
    get data() {
        return this.dataState;
    }
    set data(value) {
        if (Array.isArray(value) &&
            value.every((el) => typeof el === 'string')) {
            this.dataState = value;
            return;
        }
        else
            throw new Error('Param is not an array of string');
    }
}
const MyBands = new Bands();
MyBands.data = ['one', 'two'];
console.log('🚀 ~ file: main.ts:140 ~ MyBands.data', (MyBands.data = ['one', 'two']));
MyBands.data = [...MyBands.data, 'Three'];
console.log('🚀 ~ file: main.ts:142 ~ MyBands.data', (MyBands.data = [...MyBands.data, 'Three']));
// MyBands.data = ['five', 5];
// console.log(
//     '🚀 ~ file: main.ts:144 ~ MyBands.data',
//     (MyBands.data = ['five', 5])
// );
