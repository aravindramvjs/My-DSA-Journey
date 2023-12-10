function jumpingOnClouds(c) {
    let count = 0
    for(let i = 0; i < c.length-1; i++){
        if(c[i+2] == 0){
           i++
        }
        count++;
    }
    return(count)
}

let c = [0,0,1,0,0,1,0]
console.log(jumpingOnClouds(c))