let ar = [10, 20, 20, 10, 10, 30, 50, 10, 20];

//     let noofpairs = 0
    
//     for(let num of ar){
//        const count = ar.reduce((acc, val) =>
//         val === num ? acc + 1 : acc, 0);
//     //    console.log(acc, val);
//        count >=2 ? noofpairs++ : noofpairs  
//      }
    
//    return Math.floor(noofpairs/2)


let mapm = new Map();

for(let num of ar){
    mapm.set(num, mapm.get(num) ? mapm.get(num)+1 : 1)
}

let count=0;
let pair;
for(let [value,key] of mapm){
        pair=Math.floor(key/2)
        count+=pair
}
console.log(count)