"use strict";
console.log(Math.round(1.1532));
let all = "Elzero Web School";
all = 1000;
let str = "Elzero Web School";
function add(num1, num2) {
    return num1 + num2;
}
add(10, 12);
let al = "Osama";
let myFriends = ["Ahmed", "Sayed", "Ali"];
let arr = ["Ahmed", "Sayed", "Ali", 1, 2, ["A", "B"], true, false];
let showMgs = true;
function showMessage(name, age, salary) {
    if (showMgs) {
        console.log(`Hello ${name}, Your Age Is ${age}, Your Salary Is ${salary}`);
    }
    return "";
}
showMessage("Osama", 38, 1000);
function showData(name, age, salary) {
    console.log(`Hello ${name}, Your Age Is ${age}, Your Salary Is ${salary}`);
}
showData("Osama", 38);
function addAll(...nums) {
    let sum = 0;
    nums.forEach(num => sum += num);
    return sum;
}
console.log(addAll(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, +true));
let addWithArrow = (num1, num2) => num1 + num2;
//# sourceMappingURL=index.js.map