"use strict";
function goAction(bts) {
    console.log(`Action For Button Up ${bts.up}`);
    console.log(`Action For Button Down ${bts.down}`);
    console.log(`Action For Button Left ${bts.left}`);
    console.log(`Action For Button Right ${bts.right}`);
}
goAction({ up: "Move Up", down: "Move Down", left: "Move Left", right: "Move Right", x: true });
function compare(num1, num2) {
    if (num1 > num2) {
        return 1;
    }
    else if (num1 < num2) {
        return -1;
    }
    else {
        return 0;
    }
}
const article = [38, "Osama", true, "anything"];
article.push("anying");
//# sourceMappingURL=dataTye.js.map