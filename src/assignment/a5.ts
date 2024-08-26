type custom = "Yes" | "No" | "Error";

function isHeOld(age: number | string) : custom | number {
    if (typeof age === "string") {
        return "Error";
    } else {
        return age > 40 ? "Yes" : "No";
    }
    
  }
  
  // Do Not Edit Here
  console.log(isHeOld("100")); // Error
  console.log(isHeOld(45)); // "Yes"
  console.log(isHeOld(30)); // "No"