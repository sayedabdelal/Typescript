"use strict";
function printUser(user) {
    console.log(user.username);
    console.log(user.age);
    console.log(user.website);
    console.log(user.skills.frontEnd);
    console.log(user.skills.backEnd);
    console.log(user.getDouple(10));
    console.log(user.sayHello());
}
printUser({
    username: "Elzero",
    age: 40,
    website: "Elzero.org",
    skills: {
        frontEnd: ["HTML", "CSS", "JS"],
        backEnd: ["PHP", "Python"]
    },
    getDouple(n) {
        return n * 2;
    },
    sayHello() {
        return `Hello ${this.username}`;
    },
    u: "",
    a: 0,
    w: "",
    skil: {
        frontEnd: [],
        backEnd: []
    }
});
//# sourceMappingURL=Interface.js.map