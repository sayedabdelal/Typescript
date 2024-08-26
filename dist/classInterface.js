"use strict";
class UserSettings {
    constructor(userId, darkMode, typography) {
        this.userId = userId;
        this.darkMode = darkMode;
        this.typography = typography;
    }
    store() {
        console.log(`Configuration Stored`);
    }
    modify() {
        console.log(`Configuration Modified`);
    }
}
let settingsOne = new UserSettings("User123", true, "Roboto");
console.log(settingsOne.userId);
console.log(settingsOne.typography);
settingsOne.store();
settingsOne.modify();
//# sourceMappingURL=classInterface.js.map