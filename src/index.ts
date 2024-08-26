console.log(Math.round(1.1532));



let all: any = "Elzero Web School";

all = 1000; // No Error becuse of any type

let str: string = "Elzero Web School";
// str = 12; // Error because of string type


function add(num1: number, num2: number) {
    return num1 + num2;
}

// console.log(add(10, "12")); // Error because of number type
add(10, 12); // No Error because of number type


// -----------------------------------------------------

// type Annotation With Array
let al: string | number = "Osama"

let myFriends: string[] = ["Ahmed", "Sayed", "Ali"];


let arr : (string | Number | string[]| boolean)[] = ["Ahmed", "Sayed", "Ali", 1, 2, ["A", "B"], true, false];


// -----------------------------------------------------

let showMgs = true;

function showMessage(name: string, age: number, salary: number) : string {
    if (showMgs) {
        console.log(`Hello ${name}, Your Age Is ${age}, Your Salary Is ${salary}`);
    }
    return ""; // Add a return statement to ensure the function returns a value
}
showMessage("Osama", 38, 1000);


// -----------------------------------------------------
// function optional and defalut parameter

function showData(name?: string, age? : number, salary?: number) {
    console.log(`Hello ${name}, Your Age Is ${age}, Your Salary Is ${salary}`);
}
showData("Osama", 38);

// -----------------------------------------------------
function addAll(...nums: number[]) : number {
    let sum = 0;
    nums.forEach(num => sum += num);
    return sum;
}

console.log(addAll(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, +true));


let addWithArrow = (num1: number, num2: number) : number =>  num1 + num2;




// tsc -w 

// "noImplicitAny": true,      false


