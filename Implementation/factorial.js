function extraLongFactorials(n) {
    let result = BigInt(1);
    for(let i = n; i >= 1; i--){
        result *= BigInt(i)
    }
    return(result.toString());

}

let n = 25;
extraLongFactorials(n)