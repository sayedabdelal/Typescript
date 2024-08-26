"use strict";
class Client {
    static getCount() {
        console.log(`${this.created} Objects Created`);
    }
    constructor(username) {
        this.username = username;
        Client.created++;
    }
}
Client.created = 0;
let u1 = new Client("Elzero");
let u2 = new Client("Web");
let u3 = new Client("School");
Client.getCount();
//# sourceMappingURL=statsicClass.js.map