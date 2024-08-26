class User {
    u: string;
    a: number;
    w: string;
    skil: {
        frontEnd: string[];
        backEnd: (string | number)[];
    };

    constructor(username: string, age: number, website: string, skills: { frontEnd: string[], backEnd: (string | number)[] }) {
        this.u = username;
        this.a = age;
        this.w = website;
        this.skil = skills;
    }
    getDouple(num: number) {
        return num * 2;
    }
    sayHello() {
        return `Hello ${this.username}`;
    }
}

let userOne = new User("Elzero", 40, "Elzero.org", { frontEnd: ["HTML", "CSS", "JS"], backEnd: ["PHP", "Python"] });

console.log(userOne.u);
console.log(userOne.a);
console.log(userOne.w);
console.log(userOne.skil.frontEnd);
console.log(userOne.skil.backEnd);