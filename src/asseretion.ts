/*
    Data Types
    - Type Assertions
    --- Sometime Compiler Doesnt Know The Information We Do
    --- TypeScript Is Not Performing Any Check To Make Sure Type Assertion Is Valid
*/

// let myImg = document.getElementById("my-img") as HTMLImageElement;
let myImg = <HTMLImageElement>document.getElementById("my-img");
console.log(myImg.src);

let data: any = 1000;
console.log((data as string).repeat(3));

type A = {
  one: string;
  two: number;
  three: boolean;
};

type B = A & {
  four: number;
};
type C = {
  five: boolean;
};
type miix = A & C;

function getActions(btns: miix) {
  console.log(`Hello ${btns.one}`);
  console.log(`Hello ${btns.two}`);
  console.log(`Hello ${btns.three}`);
  console.log(`Hello ${btns.five}`);
}

getActions({ one: "String", two: 100, three: true, five: true });


/*
  Type Annotations With Object
*/

let myObject: {
  readonly username: string,
  id: number,
  hire?: boolean,
  skills: {
    one: string,
    two: string
  }
} = {
  username: "Elzero",
  id: 100,
  hire: true,
  skills: {
    one: "HTML",
    two: "CSS"
  }
};

// myObject.username = "Osama";
myObject.id = 101;
myObject.hire = false;

console.log(myObject.username);
console.log(myObject.id);
console.log(myObject.hire);
console.log(myObject.skills.one);