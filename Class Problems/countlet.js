let string = "learning"

let hashmap={}
for(let i = 0; i<string.length; i++){
    let count = 0;
    for(let j=0; j<string.length; j++){
        if(string[i] === string[j]){
            count++
        }
        // hashmap[]
    }
    console.log(`${string[i]} = ${count}`)
}