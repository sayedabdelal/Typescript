// Create Enums + Function Here

 

enum Game {
    Easy = 100,
    Medium = Easy - 20,
    Hard = Medium - 50,
    
}
function calculateInsane(n: number): number { 
    return  Game.Hard - n;
}


// Output
console.log(Game.Easy); // 100
console.log(Game.Medium); // 80
console.log(Game.Hard); // 30
console.log(calculateInsane(10)); // 20