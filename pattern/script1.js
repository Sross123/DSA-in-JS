// *****
// *****
// *****
// *****

function pattern1() {
    let n = 5;
    let string = "";

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            string += "*";
        }
        string += "\n";
    }
    console.log(string);
}

function pattern2() {
    let n = 5;
    let string = "";
    for(let row = 1; row<=n; row++){
        for(let col = row; col<=n; col++){
            string += "*";
        }
        string += "\n"
    }
    console.log(string);
}


pattern2()