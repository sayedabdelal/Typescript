/*
  Interface
  - Interface Declaration
  --- Serve Like Types
  --- The Interface Describes The Shape Of An Object
  --- It Defines The Syntax To Follow

  --- Use With Object
  --- Use With Function
  --- Use Read Only And Optional Operator
*/
// Define the User interface
interface User {
    username: string;
    age: number | string;
    website?: string;
    skills: {
      frontEnd: string[];
      backEnd: (string | number)[];
    };
    getDouple(num: number): number;
    sayHello(): string;
  }
  
  // Function to print user details
  function printUser(user: User): void {
    console.log(user.username);
    console.log(user.age);
    console.log(user.website);
    console.log(user.skills.frontEnd);
    console.log(user.skills.backEnd);
    console.log(user.getDouple(10));
    console.log(user.sayHello());
  }
  
  // Call the function with a valid User object
  printUser({
      username: "Elzero",
      age: 40,
      website: "Elzero.org",
      skills: {
          frontEnd: ["HTML", "CSS", "JS"],
          backEnd: ["PHP", "Python"]
      },
      getDouple(n: number) {
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
  