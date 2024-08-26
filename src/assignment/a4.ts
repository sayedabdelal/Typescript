

function yesOrNo(val: number | boolean |string) : "Yes" | "No" {
    let numericValue: number;

    // convert string to number
    if (typeof val === "string") {
        numericValue = parseFloat(val);
    } else if (typeof val === "boolean") {
        numericValue = val ? 1 : 0; // convert boolean to number

    } else {  
        numericValue = val;
    }
    return numericValue > 10 ? "Yes" : "No";
}


// Do Not Edit Here
console.log(yesOrNo("100")); // Error
console.log(yesOrNo(30)); // True
console.log(yesOrNo(8)); // False