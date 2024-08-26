"use strict";
var Game;
(function (Game) {
    Game[Game["Easy"] = 100] = "Easy";
    Game[Game["Medium"] = 80] = "Medium";
    Game[Game["Hard"] = 30] = "Hard";
})(Game || (Game = {}));
function calculateInsane(n) {
    return Game.Hard - n;
}
console.log(Game.Easy);
console.log(Game.Medium);
console.log(Game.Hard);
console.log(calculateInsane(10));
//# sourceMappingURL=a7.js.map