"use strict";
let user_2 = {
    id: 100,
    username: "Elzero",
    state: true,
    getName() {
        return this.username;
    }
};
user_2.id = 200;
user_2.id = "200";
user_2.state = false;
//# sourceMappingURL=a1.js.map