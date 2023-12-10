
function camecase(s) {

let alphabet = [];
let count = 1;
for (i = 65; i <= 90; i++) {
    alphabet.push(String.fromCharCode(i));
}

for(let letter of s){
    for(let alpha of alphabet){
    if(letter == alpha){
        count++
    }
    }
}
return count;
}


s="saveChangesInTheEditor";
// console.log(camecase(s))


let alphabet = [];
for (i = 65; i <= 90; i++) {
    alphabet.push(String.fromCharCode(i));
}
for(let alpha of alphabet){
    console.log(alpha);
}

