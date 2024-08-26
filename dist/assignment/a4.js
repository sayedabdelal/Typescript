"use strict";
function yesOrNo(val) {
    let numericValue;
    if (typeof val === "string") {
        numericValue = parseFloat(val);
    }
    else if (typeof val === "boolean") {
        numericValue = val ? 1 : 0;
    }
    else {
        numericValue = val;
    }
    return numericValue > 10 ? "Yes" : "No";
}
console.log(yesOrNo("100"));
console.log(yesOrNo(30));
console.log(yesOrNo(8));
//# sourceMappingURL=a4.js.map