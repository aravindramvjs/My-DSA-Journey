function angryProfessor(k, a) {
    let fastcomerscount = 0;
    
    for(let num of a){
        if(num <= 0){
            fastcomerscount++
        }
    }

    if(fastcomerscount >= k){
        console.log("class continuous");
    }
    else{
        console.log("class canceled");
    }
}

let n = 4;
let k = 3;
let a = [-1, -3, 4, 2]
angryProfessor(k,a)
