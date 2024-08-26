type Buttons = {
    up: string,
    down: string,
    left: string,
    right: string
}
type Last = Buttons & {
    x: boolean
}



function goAction(bts: Last) {
    console.log(`Action For Button Up ${bts.up}`);
    console.log(`Action For Button Down ${bts.down}`);
    console.log(`Action For Button Left ${bts.left}`);
    console.log(`Action For Button Right ${bts.right}`);
}

goAction({up: "Move Up", down: "Move Down", left: "Move Left", right: "Move Right", x: true});

type nums = 0 | 1 | -1;

function compare(num1: number, num2: nums) : nums{
    if (num1 > num2) {
        return 1;
    } else if (num1 < num2) {
        return -1;
    } else {
        return 0;
    }
}

// Tuble
const article : [number, string, boolean, string] = [ 38,"Osama", true, "anything"];

article.push("anying");