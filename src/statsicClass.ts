/*
  Class
  - Static Members
  --- Don't Use "name, length, call"
*/

class Client {
    private static created: number = 0;
    static getCount() : void {
      console.log(`${this.created} Objects Created`);
    }
    constructor(public username: string) {
        Client.created++;
    }
  }
  
  let u1 = new Client("Elzero");
  let u2 = new Client("Web");
  let u3 = new Client("School");
  // console.log(User.created);
  Client.getCount();