"use strict";
class User {
    constructor(username, age, website, skills) {
        this.u = username;
        this.a = age;
        this.w = website;
        this.skil = skills;
    }
    getDouple(num) {
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
//# sourceMappingURL=class-type.js.map