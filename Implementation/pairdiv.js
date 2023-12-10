function divisibleSumPairs(k, ar) {
    let count = 0; 
    for(let i = 0; i < ar.length; i++){
        for(let j = i+1; j < ar.length; j++){
            if((ar[i]+ar[j]) % k == 0){
                count++
            }
        }
    }
    // console.log(count);
    return count
}

let ar = [1,2,3,4,5,6];
let k = 5;
divisibleSumPairs(k, ar)