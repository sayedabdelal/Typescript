"use strict";
class Show {
    constructor(_title) {
        this._title = _title;
    }
    get title() {
        return this._title;
    }
    set title(value) {
        this._title = value;
    }
}
let tst = new Show("Elzero");
console.log(tst.title);
tst.title = "Osama";
console.log(tst.title);
//# sourceMappingURL=a6.js.map