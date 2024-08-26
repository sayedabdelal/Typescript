interface Play {
    id: number;
    title: string;
    level: number | string;
    logIn(): void;
    logOut(msg: string): void;
  }
  
  // Create Your Class Here
class Player_3 implements Play {
    constructor(public id: number, public title: string, public level: number) {
        this.id = id;
        this.title = title;
        this.level = level;
    }
    logIn(): void {
        console.log("Logged In");
    }
    logOut(msg: string): void {
        console.log(`Logged Out, ${msg}`);
    }
}
  
  let playyer = new Player_3(100, "Elzero", 95);
  
  console.log(playyer.id); // 100
  console.log(playyer.title); // "Elzero"
  console.log(playyer.level); // 95
  playyer.logIn(); // Logged In
  playyer.logOut("Good Bye"); // Logged Out, Good Bye