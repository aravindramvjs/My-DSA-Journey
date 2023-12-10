function findDigits(n) {
    let count = 0;
    let inputarr = n.toString().split("")
    for(let str of inputarr){
        let num = Number(strin)
        if(n%num == 0){
            count++
        }
    }
    // console.log(count);
    return count;
}

let n = 124;
findDigits(n)