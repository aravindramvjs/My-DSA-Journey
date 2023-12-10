// let n = 5;
// let a = '';

// for(let i=1; i<=n; i++){
//     for (let space = 1; space <= n-i; space++){
//         a += " "
//     }
//     for(let j=1; j<=i; j++){
//         a+=(n-j)+1;
//     }
//     a+="\n"
// }
// console.log(a);


// write a function to print # in reverse staircase for given n


function staircase(n) {

let symbol = "#";
let a = ''

for(let i=1; i<=n; i++){
    for (let space = 1; space <= n-i; space++){
        a += " "
    }
    for(let j=1; j<=i; j++){
        a+=symbol;
    }
    a+="\n"
}
console.log(a);
}

staircase(6);


// const n = 5;

// for(let i=1; i<=n; i++){

//     let space = " ";

//     let num = " ";

//     let output;

//     for(let j=i; j<=n; j++){

//         space = space + "  ";
//     }

//     for(j=1; j<=i; j++){

//         num = j + " " + num;

//         output = space + num;
//     }

//     console.log(output);

// }


