"use strict";
let myImg = document.getElementById("my-img");
console.log(myImg.src);
let data = 1000;
console.log(data.repeat(3));
function getActions(btns) {
    console.log(`Hello ${btns.one}`);
    console.log(`Hello ${btns.two}`);
    console.log(`Hello ${btns.three}`);
    console.log(`Hello ${btns.five}`);
}
getActions({ one: "String", two: 100, three: true, five: true });
let myObject = {
    username: "Elzero",
    id: 100,
    hire: true,
    skills: {
        one: "HTML",
        two: "CSS"
    }
};
myObject.id = 101;
myObject.hire = false;
console.log(myObject.username);
console.log(myObject.id);
console.log(myObject.hire);
console.log(myObject.skills.one);
//# sourceMappingURL=asseretion.js.map