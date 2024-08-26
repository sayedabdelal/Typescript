class Show {
    constructor (private _title: string) {}
    get title() {
        return this._title;
    }
    set title(value: string) {
        this._title = value;
    }
}

let tst = new Show("Elzero");
  
  console.log(tst.title); // Property 'title' does not exist on type 'Show'
  tst.title = "Osama"; // Property 'title' does not exist on type 'Show'
  console.log(tst.title); // Property 'title' does not exist on type 'Show'